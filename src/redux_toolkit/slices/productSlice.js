import {createSlice} from '@reduxjs/toolkit';
import {data} from '../../DUMMY_DATA';

const initialState = {
  data: data,
  isLoading: null,
  filterProduct: [],
  selectedProduct: {},
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    get_Product: state => {
      return {...state, isLoading: true};
    },
    get_Product_ALL: state => {
      return {...state, isLoading: false, filterProduct: data};
    },
    get_Product_FILTER: (state, action) => {
      return {
        ...state,
        filterProduct: [...data].filter(
          product => product.category === action.payload,
        ),
      };
    },
    // get_Product_SELECTED: (state, action) => {
    //   return {
    //     ...state,
    //     selectedProduct: [...state.filterProduct].find(
    //       product => product.productID === action.payload,
    //     ),
    //   };
    // },
  },
});

export const {
  get_Product,
  get_Product_ALL,
  get_Product_FILTER,
  // get_Product_SELECTED
} = productSlice.actions;
export default productSlice.reducer;
