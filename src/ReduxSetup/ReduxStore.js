import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./Reducers/UserReducer.js";

export const store=configureStore({
    reducer:{
        user:userReducer
    }
})

