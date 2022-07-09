import {createSlice} from '@reduxjs/toolkit';
import {data} from '../../DUMMY_DATA';

const initialState = {
  data: data,
  isLoading: null,
  filterProduct: [],
  // selectedProduct: {},
  productID: null,
  search_Products: [],
  searchText : ''
};

const xoa_dau = str => {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
  str = str.replace(/Đ/g, 'D');
  return str;
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // get_Product: state => {
    //   return {...state, isLoading: true};
    // },
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
    get_Product_SELECTED: (state, action) => {
      return {
        ...state,
        selectedProduct: [...state.filterProduct].find(
          product => product.productID === action.payload,
        ),
      };
    },
    clear_Product_SELECTED: state => {
      return {...state, selectedProduct: {}};
    },
    get_Product_ID: (state, action) => {
      return {...state, productID: action.payload};
    },
    // search_Product: state => {
    //   return {...state, isLoading: true};
    // },
    search_Product_SUCCESS: (state, action) => {
      return {
        ...state,
        isLoading: false,
        search_Products: data.filter(product =>
          xoa_dau(product.name)
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(
              xoa_dau(action.payload).toLowerCase().replace(/\s+/g, ''),
            ),
        ),
      };
    },
    clear_Search: state => {
      return {...state, search_Products: []};
    },
  },
});

export const {
  get_Product,
  get_Product_ALL,
  get_Product_FILTER,
  get_Product_SELECTED,
  clear_Product_SELECTED,
  get_Product_ID,
  // search_Product,
  search_Product_SUCCESS,
  clear_Search,
} = productSlice.actions;
export default productSlice.reducer;
