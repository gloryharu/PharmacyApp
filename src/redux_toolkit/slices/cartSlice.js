import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      const exist = state.cartItems.find(
        product => product.id === action.payload.id,
      );
    },
  },
});

export const {addCart} = cartSlice.actions;
export default cartSlice.reducer;
