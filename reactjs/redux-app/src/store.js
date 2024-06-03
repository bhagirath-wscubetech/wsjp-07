import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counter";


const store = configureStore({
    reducer: {
        couter: counterReducer
    }
})

export default store;