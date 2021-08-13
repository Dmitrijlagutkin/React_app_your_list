import { combineReducers, configureStore } from "@reduxjs/toolkit"
import dataSlice from "./dataSlice"

const rootReducer = combineReducers({
    data: dataSlice,
})

export const store = configureStore({
    reducer: rootReducer,
})
