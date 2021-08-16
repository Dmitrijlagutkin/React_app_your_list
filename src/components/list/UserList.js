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
    setUserListItem,
    deleteAllList,
} from "../../redux/reducers/dataSlice"
import EditIcon from "@material-ui/icons/Edit"

const UserList = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const userList = useSelector(selectUserList)
    const userListName = useSelector(selectUserListName)
    const [isOpenTitleModal, setIsOpenTitlelModal] = useState(false)
    const [isOpenAddItemModal, setIsOpenAddItemModal] = useState(false)
    const [isOpenDeleteAllModal, setIsOpenDeleteAllModal] = useState(false)
    const [listTitle, setListTitle] = useState(userListName || "")
    const [itemName, setItemName] = useState("")
    const [itemDescription, setItemDescription] = useState("")
    const [userTitleDirty, setUserTitleDirty] = useState(false)

    const onClickIsOpenTitleModal = () =>
        setIsOpenTitlelModal(!isOpenTitleModal)

    const onClickIsOpenAddItemModal = () =>
        setIsOpenAddItemModal(!isOpenAddItemModal)

    const onClickIsOpenDeleteAllModal = () => {
        setIsOpenDeleteAllModal(!isOpenDeleteAllModal)
    }

    const onClickDeleteAll = () => {
        setIsOpenDeleteAllModal(!isOpenDeleteAllModal)
        dispatch(deleteAllList())
    }

    const onChangeTitleHandler = (e) => setListTitle(e.target.value)
    const onChangeItemNameHandler = (e) => setItemName(e.target.value)
    const onChangeItemDescriptionHandler = (e) =>
        setItemDescription(e.target.value)

    const blurHandler = (e) => {
        console.log(e.target.value)
        if (!e.target.value) {
            setUserTitleDirty(true)
        } else {
            setUserTitleDirty(false)
        }
    }

    const onClickConfirmTitle = () => {
        dispatch(setUserListName(listTitle))
        setIsOpenTitlelModal(false)
    }

    const onClickConfirmItem = () => {
        dispatch(setUserListItem({ id: Date.now(), itemName, itemDescription }))
        setIsOpenAddItemModal(false)
    }

    return (
        <div>
            {userListName && (
                <div className={classes.titleWrapper}>
                    <div className={classes.topWrapper}>
                        <h1>{userListName}</h1>
                        <EditIcon
                            className={classes.editTitleIcon}
                            onClick={onClickIsOpenTitleModal}
                        />
                    </div>

                    <div className={classes.topWrapper}>
                        <Button
                            onClick={onClickIsOpenAddItemModal}
                            buttonText='add item'
                        />
                        <Button
                            color='secondary'
                            onClick={onClickIsOpenDeleteAllModal}
                            buttonText='delete all list'
                            disabled={!userListName.length && "disabled"}
                        />
                    </div>
                </div>
            )}
            {userListName ? (
                userList.map((listItem, index) => (
                    <ListItemCard
                        key={listItem.id}
                        listItem={listItem}
                        index={index}
                    />
                ))
            ) : (
                <div className={classes.titleWrapper}>
                    <div className={classes.title}>
                        First, enter the name of the list
                    </div>
                    <Button
                        onClick={onClickIsOpenTitleModal}
                        buttonText='enter the name of the list'
                    />
                </div>
            )}
            {isOpenTitleModal && (
                <Modal
                    title={
                        userListName
                            ? "Edit the name of the list"
                            : "Enter the name of the list"
                    }
                    onClose={onClickIsOpenTitleModal}
                    withCloseButton={true}>
                    <div className={classes.modalChildren}>
                        <MyInput
                            label='enter the name of the list'
                            defaultValue={userListName}
                            inputClassName={classes.inputClassName}
                            onChange={(e) => onChangeTitleHandler(e)}
                            onBlur={blurHandler}
                        />

                        <Button
                            onClick={onClickConfirmTitle}
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
            {isOpenAddItemModal && (
                <Modal
                    title='Enter your list'
                    onClose={onClickIsOpenAddItemModal}
                    withCloseButton={true}>
                    <div className={classes.modalChildren}>
                        <MyInput
                            label='enter the name of the item'
                            inputClassName={classes.inputClassName}
                            onChange={(e) => onChangeItemNameHandler(e)}
                            onBlur={blurHandler}
                        />
                        <MyInput
                            label='enter the description'
                            inputClassName={classes.inputClassName}
                            onChange={(e) => onChangeItemDescriptionHandler(e)}
                            // onBlur={blurHandler}
                        />

                        <Button
                            onClick={onClickConfirmItem}
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
            {isOpenDeleteAllModal && (
                <Modal
                    title='Delete'
                    onClose={onClickIsOpenDeleteAllModal}
                    withCloseButton={true}>
                    <div className={classes.modalChildren}>
                        <span>
                            Do you want to delete this list:{" "}
                            <span className={classes.modalListName}>
                                {userListName}
                            </span>
                        </span>

                        <Button onClick={onClickDeleteAll} buttonText='Yes' />
                    </div>
                </Modal>
            )}
        </div>
    )
}

export default UserList
