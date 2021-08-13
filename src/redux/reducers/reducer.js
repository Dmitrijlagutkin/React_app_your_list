import { createAction, createReducer } from "@reduxjs/toolkit"

const initialState = {
    test: false,
    email: null,
    userList: [],
}

export const setTest = createAction("SET_TEST")

export default createReducer(initialState, {
    [setTest]: function (state, action) {
        state.test = action.payload
    },
})

console.log(setTest)
