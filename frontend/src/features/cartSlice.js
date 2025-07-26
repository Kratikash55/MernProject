import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    CartItems : [],
    TotalPrice : 0,
    TotalQuantity : 0,
}

export const cartSlice = createSlice({
    name : "Cart",
    initialState,
    reducers:{
       addToCart:(state,actions)=>{
        const find = state.CartItems.findIndex((value)=>{
            return value._id === actions.payload._id; 
        });
        if(find != -1){
            state.CartItems[find]={
                ...state.CartItems[find],
                quantity:state.CartItems[find].quantity + 1,
            }
        }else{
            state.CartItems.push({...actions.payload,quantity : 1});
        }
       },

       deleteCartItems:(state,actions)=>{
        state.CartItems = state.CartItems.filter((value)=>{
            return value._id !== actions.payload._id;
        })
       },

        carttotalPrice: (state) => {
      const { totalPrice, totalQuantity } = state.CartItems.reduce(
        (cartTotal, cartItem) => {
          const { quantity, productPrice } = cartItem;
          const itemsTotal = parseFloat(productPrice) * parseFloat(quantity);
          cartTotal.TotalPrice += itemsTotal;
          cartTotal.TotalQuantity += quantity;
          return cartTotal;
        },
        // {
        //   TotalPrice: 0,
        //   TotalQuantity: 0,
        // }
      );
      state.TotalPrice = totalPrice.toFixed(2);
      state.TotalQuantity = totalQuantity;
    },
    },
});

export const {addToCart , deleteCartItems , carttotalPrice} = cartSlice.actions;
export default cartSlice.reducer