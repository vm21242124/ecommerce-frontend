import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./Reducers/UserReducer.js";
import { cartReducer } from "./Reducers/CartReducer.js";
import { couponReducer } from "./Reducers/CouponReducer.js";
export const store=configureStore({
    reducer:{
        user:userReducer,
        cart:cartReducer,
        coupon:couponReducer
    }
})

