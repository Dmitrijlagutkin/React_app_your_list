import { useState } from "react"
import { useDispatch } from "react-redux"
import useStyles from "./listItemCardStyles"
import Paper from "@material-ui/core/Paper"
import EditIcon from "@material-ui/icons/Edit"
import DeleteForeverIcon from "@material-ui/icons/DeleteForever"
import { deleteListItem } from "../../../redux/reducers/dataSlice"
import Modal from "../../common/modal/Modal"
import Button from "../../common/button/Button"

const ListItemCard = ({ listItem, index }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [isOpenDeleteItemModal, setIsOpenDeleteItemModal] = useState(false)

    const onClickOpenDeleteItemModal = () =>
        setIsOpenDeleteItemModal(!isOpenDeleteItemModal)

    const onClickDeleteItem = () => {
        dispatch(deleteListItem(listItem.id))
        setIsOpenDeleteItemModal(!isOpenDeleteItemModal)
    }

    return (
        <>
            <Paper elevation={1} className={classes.itemContainer}>
                <div className={classes.itemWrapper}>
                    <span className={classes.itemNumber}>{index + 1}</span>
                    <span className={classes.itemName}>
                        {listItem.itemName}
                    </span>
                    <span className={classes.itemDescription}>
                        {listItem.itemDescription}
                    </span>
                </div>
                <div className={classes.iconWrapper}>
                    <EditIcon className={classes.icon} />
                    <DeleteForeverIcon
                        className={classes.icon}
                        style={{ color: "red" }}
                        onClick={onClickOpenDeleteItemModal}
                    />
                </div>
            </Paper>
            {isOpenDeleteItemModal && (
                <Modal
                    title='Delete'
                    onClose={onClickOpenDeleteItemModal}
                    withCloseButton={true}>
                    <div className={classes.modalChildren}>
                        <span>
                            Do you want to delete this:{" "}
                            <span className={classes.modalItemName}>
                                {listItem.itemName}
                            </span>
                        </span>

                        <Button onClick={onClickDeleteItem} buttonText='Yes' />
                    </div>
                </Modal>
            )}
        </>
    )
}

export default ListItemCard
