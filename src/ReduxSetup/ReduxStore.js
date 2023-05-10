import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./Reducers/UserReducer.js";
import { cartReducer } from "./Reducers/CartReducer.js";
export const store=configureStore({
    reducer:{
        user:userReducer,
        cart:cartReducer
    }
})

