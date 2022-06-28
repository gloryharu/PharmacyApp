import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalPrice : 0,
  totalItem : 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      const exist = state.cartItems.find(
        product => product?.productID === action.payload.productID,
      );
      if (exist) {
        state.cartItems = state.cartItems.map(e =>
          e.productID === action.payload.productID ? {...e, qty: e.qty + 1} : e,
        );
      } else {
        state.cartItems = [...state.cartItems, {...action.payload, qty: 1}];
      }
    },
    removeCart: (state, action) => {
      const exist = state.cartItems.find(
        product => product.productID === action.payload.productID,
      );
      if (exist.qty === 1) {
        state.cartItems = state.cartItems.filter(
          e => e.productID !== action.payload.productID,
        );
      } else {
        state.cartItems = state.cartItems.map(e => {
          if (e.productID === action.payload.productID) {
            return {...action.payload, qty: action.payload.qty - 1};
          } else {
            return e;
          }
        });
      }
    },

    delete_all_Cart: state => {
      return {...state, cartItems: []};
    },
  },
});

export const {addCart, removeCart, delete_all_Cart} = cartSlice.actions;
export default cartSlice.reducer;
