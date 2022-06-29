import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  price: 0,
  totalPrice: 0,
  quantity: 1,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // số lượng sản phẩm
    addQuantity: state => {
      state.quantity += 1;
    },
    removeQuantity: state => {
      if (state.quantity === 1) {
        return;
      } else {
        state.quantity -= 1;
      }
    },

    //thêm xóa sản phẩm trong giỏ hàng
    addCart: (state, action) => {
      const exist = state.cartItems.find(
        product => product?.productID === action.payload.productID,
      );
      if (exist) {
        state.cartItems = state.cartItems.map(e =>
          e.productID === action.payload.productID
            ? {...action.payload, qty: e.qty + state.quantity}
            : e,
        );
      } else {
        state.cartItems = [
          ...state.cartItems,
          {...action.payload, qty: state.quantity},
        ];
      }
      state.price = action.payload.price * state.quantity;
      state.totalPrice += state.price;
      state.quantity = 1;
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
          return e.productID === action.payload.productID
            ? {...e, qty: e.qty - 1}
            : e;
        });
      }
      state.totalPrice -= action.payload.price;
    },
    delete_all_Cart: state => {
      return {...state, cartItems: [], totalPrice: 0, price: 0, quantity: 1};
    },
  },
});

export const {
  addQuantity,
  removeQuantity,
  addCart,
  removeCart,
  delete_all_Cart,
} = cartSlice.actions;
export default cartSlice.reducer;
