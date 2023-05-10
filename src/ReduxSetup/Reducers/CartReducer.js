import {createReducer} from '@reduxjs/toolkit'
const intialstate={
    cart:[]
    
}
export const cartReducer=createReducer(intialstate,{
    
        addToCart:(state,action)=>{
            const {id,name,price,img}=action.payload;
            const itemIndex=state.cart.findIndex(item=>item.id===id);
            if(itemIndex>=0){
                state.cart[itemIndex].quantity+=1
            }else{
                state.cart.push({id,name,price,img,quantity:1})
            }

        },
        removeFromCart:(state,action)=>{
            const itemIndex=state.cart.findIndex(item=>item.id===action.payload);

            if(itemIndex>=0){
                state.cart.splice(itemIndex,1)
            }
        },
        clearCart: () => [],
    
})
