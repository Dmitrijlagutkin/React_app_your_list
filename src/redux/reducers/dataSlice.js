import { createSlice } from "@reduxjs/toolkit"

const dataSlice = createSlice({
    name: "data",
    initialState: {
        userEmail: null,
        userListName: null,
        userList: [],
    },
    reducers: {
        setUserListName(state, action) {
            state.userListName = action.payload
        },
        setUserListItem(state, action) {
            state.userList.push(action.payload)
        },
        deleteListItem(state, action) {
            const id = action.payload
            state.userList = state.userList.filter((userList) => {
                return userList.id !== id
            })
        },
        deleteAllList(state) {
            state.userListName = null
            state.userList = []
        },
    },
})

export default dataSlice.reducer
export const {
    setUserListName,
    setUserListItem,
    deleteListItem,
    deleteAllList,
} = dataSlice.actions

export const selectUserList = (state) => state.data.userList
export const selectUserListName = (state) => state.data.userListName
