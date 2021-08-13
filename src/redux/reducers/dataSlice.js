import { createSlice } from "@reduxjs/toolkit"

const dataSlice = createSlice({
    name: "data",
    initialState: {
        test: false,
        userEmail: null,
        userListName: null,
        userList: [
            // { id: 1, text: "test text", description: "10" },
            // { id: 1, text: "test text", description: "10" },
        ],
    },
    reducers: {
        setTest(state, action) {
            state.test = action.payload
        },
        setUserListName(state, action) {
            state.userListName = action.payload
        },
    },
})

export default dataSlice.reducer
export const { setTest, setUserListName } = dataSlice.actions

export const selectUserList = (state) => state.data.userList
export const selectUserListName = (state) => state.data.userListName
