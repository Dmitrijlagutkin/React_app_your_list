import { useDispatch } from "react-redux"
import useStyles from "./listItemCardStyles"
import Paper from "@material-ui/core/Paper"
import EditIcon from "@material-ui/icons/Edit"
import DeleteForeverIcon from "@material-ui/icons/DeleteForever"
import { deleteListItem } from "../../../redux/reducers/dataSlice"

const ListItemCard = ({ listItem, index }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const onClickDeleteItem = () => {
        dispatch(deleteListItem(listItem.id))
    }

    return (
        <Paper elevation={1} className={classes.itemContainer}>
            <div className={classes.itemWrapper}>
                <span className={classes.itemNumber}>{index + 1}</span>
                <span className={classes.itemName}>{listItem.itemName}</span>
                <span className={classes.itemDescription}>
                    {listItem.itemDescription}
                </span>
            </div>
            <div className={classes.iconWrapper}>
                <EditIcon className={classes.icon} />
                <DeleteForeverIcon
                    className={classes.icon}
                    style={{ color: "red" }}
                    onClick={onClickDeleteItem}
                />
            </div>
        </Paper>
    )
}

export default ListItemCard
