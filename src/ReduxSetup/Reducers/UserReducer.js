import { createReducer } from "@reduxjs/toolkit";
const intialstate={
    user:null
    
}
export const userReducer=createReducer(intialstate,{
    setuser:(state,action)=>{
        state.user=action.payload
    },
    deleteuser:(state)=>{
        state.user=null;
    }
})