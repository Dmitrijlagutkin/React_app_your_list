import { createSlice } from "@reduxjs/toolkit"

const dataSlice = createSlice({
    name: "data",
    initialState: {
        userEmail: null,
        userListName: null,
        userList: [],
    },
    reducers: {
        setTest(state, action) {
            state.test = action.payload
        },
        setUserListName(state, action) {
            state.userListName = action.payload
        },
        setUserListItem(state, action) {
            state.userList.push(action.payload)
        },
    },
})

export default dataSlice.reducer
export const { setTest, setUserListName, setUserListItem } = dataSlice.actions

export const selectUserList = (state) => state.data.userList
export const selectUserListName = (state) => state.data.userListName
