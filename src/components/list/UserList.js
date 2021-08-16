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
} from "../../redux/reducers/dataSlice"

const UserList = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const userList = useSelector(selectUserList)
    const userListName = useSelector(selectUserListName)
    const [isOpenTitleModal, setIsOpenTitlelModal] = useState(false)
    const [isOpenAddItemModal, setIsOpenAddItemModal] = useState(false)
    const [listTitle, setListTitle] = useState(userListName || "")
    const [itemName, setItemName] = useState("")
    const [itemDescription, setItemDescription] = useState("")
    const [userTitleDirty, setUserTitleDirty] = useState(false)

    const onClickIsOpenTitleModal = () =>
        setIsOpenTitlelModal(!isOpenTitleModal)

    const onClickIsOpenAddItemModal = () =>
        setIsOpenAddItemModal(!isOpenAddItemModal)

    const onChangeTitleHandler = (e) => setListTitle(e.target.value)
    const onChangeItemNameHandler = (e) => setItemName(e.target.value)
    const onChangeItemDescriptionHandler = (e) =>
        setItemDescription(e.target.value)

    console.log("itemName", itemName)
    console.log("itemDescription", itemDescription)

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
        dispatch(setUserListItem({ id: 1, itemName, itemDescription }))
        setIsOpenAddItemModal(false)
    }

    console.log(userList)
    console.log(listTitle)

    return (
        <div>
            {listTitle && (
                <div className={classes.titleWrapper}>
                    <h1>{listTitle}</h1>
                    <Button
                        onClick={onClickIsOpenAddItemModal}
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
                        onClick={onClickIsOpenTitleModal}
                        buttonText='enter the name of the list'
                    />
                </div>
            )}
            {isOpenTitleModal && (
                <Modal
                    title='Enter the name of the list'
                    onClose={onClickIsOpenTitleModal}
                    withCloseButton={true}>
                    <div className={classes.modalChildren}>
                        <MyInput
                            label='enter the name of the list'
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
        </div>
    )
}

export default UserList
