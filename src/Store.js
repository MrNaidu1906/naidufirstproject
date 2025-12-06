import { configureStore, createSlice } from "@reduxjs/toolkit";
import { cupons } from "./Coupons";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {
    addToCart: (state, action) => {
      let item = state.items.find(i => i.id === action.payload.id);

      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    incrementQuantity: (state, action) => {
      let item = state.items.find(i => i.id === action.payload.id);
      if (item) item.quantity += 1;
    },

    decrementQuantity: (state, action) => {
      let item = state.items.find(i => i.id === action.payload.id);

      if (!item) return;

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
      
        state.items = state.items.filter(i => i.id !== action.payload.id);
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload.id);
    }
  }
});

export const {addToCart,removeFromCart,incrementQuantity,decrementQuantity} = cartSlice.actions;




//crating cuponsapplying********

const applycouponSlice = createSlice({
  name: "coupon",
  initialState: {
    code:"",
    discount:0,
    applied:false,
    massage:""
  },
  reducers: {
    applyCoupon:(state,action)=>{
      const enteredcode = action.payload.toUpperCase();
      if(cupons[enteredcode])
      {
        state.code=enteredcode;
        state.discount=cupons[enteredcode];
        state.applied=true;
        state.massage=`Coupon ${enteredcode} applied successfully! You got ${cupons[enteredcode]}% off.`;
      }
      else{
        state.code="";
        state.massage="Invalid coupon code. Please try again.";
      }
    }
  }
});
export const {applyCoupon} = applycouponSlice.actions;

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    coupon: applycouponSlice.reducer,
  },
});

export default store;
