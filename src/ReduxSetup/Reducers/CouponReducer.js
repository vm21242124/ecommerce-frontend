import { createReducer } from "@reduxjs/toolkit";
const appliedCopon={}
export const couponReducer=createReducer(appliedCopon,{
    setcoupon:(state,action)=>{
        state.appliedCopon=action.payload
    },
    removeappliedcoupon:(state)=>{
        state.appliedCopon=""
    }
})