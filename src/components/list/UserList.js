import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectUserList } from "../../redux/reducers/dataSlice"
import ListItemCard from "./listItemCard/ListItemCard"
import useStyles from "./listStyles"
import Button from "../common/button/Button"
import Modal from "../common/modal/Modal"
import MyInput from "../common/input/Input"
import {
    setUserListName,
    selectUserListName,
} from "../../redux/reducers/dataSlice"

const UserList = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const userList = useSelector(selectUserList)
    const userListName = useSelector(selectUserListName)
    const [isOpenEmailModal, setIsOpenEmailModal] = useState(false)
    const [listTitle, setListTitle] = useState(userListName || "")
    const [userTitleDirty, setUserTitleDirty] = useState(false)

    const onClickIsOpenEmailModal = () => {
        setIsOpenEmailModal(!isOpenEmailModal)
    }

    const onChangeTitleHandler = (e) => setListTitle(e.target.value)

    const blurHandler = (e) => {
        console.log(e.target.value)
        if (!e.target.value) {
            setUserTitleDirty(true)
        } else {
            setUserTitleDirty(false)
        }
    }

    const onClickConfirm = () => {
        dispatch(setUserListName(listTitle))
        setIsOpenEmailModal(false)
    }

    console.log(userList)
    console.log(listTitle)

    return (
        <div>
            {listTitle && (
                <div>
                    <h1>{listTitle}</h1>
                    <Button
                        onClick={onClickIsOpenEmailModal}
                        buttonText='add item'
                    />
                </div>
            )}
            {listTitle.length ? (
                userList.map((listItem, index) => (
                    <ListItemCard
                        key={listItem.id}
                        listItem={listItem}
                        index={index}
                    />
                ))
            ) : (
                <div className={classes.titleWrapper}>
                    <div className={classes.title}>Create your list</div>
                    <Button
                        onClick={onClickIsOpenEmailModal}
                        buttonText='enter the name of the list'
                    />
                </div>
            )}
            {isOpenEmailModal && (
                <Modal
                    title='Enter the name of the list'
                    onClose={onClickIsOpenEmailModal}
                    withCloseButton={true}>
                    <div className={classes.modalChildren}>
                        <MyInput
                            label='enter the name of the list'
                            inputClassName={classes.inputClassName}
                            onChange={(e) => onChangeTitleHandler(e)}
                            onBlur={blurHandler}
                        />

                        <Button
                            onClick={onClickConfirm}
                            buttonText='confirm'
                            disabled={!listTitle && "disabled"}
                        />
                    </div>
                    {userTitleDirty && (
                        <div className={classes.error}>
                            enter the name of the list
                        </div>
                    )}
                </Modal>
            )}
        </div>
    )
}

export default UserList
