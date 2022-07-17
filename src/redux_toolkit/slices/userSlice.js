import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userInfo: {},
  loading: null,
  errorMsg: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: state => {
      return {...state, loading: true};
    },
    login_SUCCESS: (state, action) => {
      return {...state, loading: false, userInfo: action.payload};
    },
    login_FAIL: state => {
      return {
        ...state,
        loading: false,
        errorMsg: 'ĐĂNG NHẬP THẤT BẠI,VUI LÒNG THỬ LẠI SAU',
      };
    },
    logout: state => {
      return {...state, userInfo: {}, loading: null, errorMsg: ''};
    },
  },
});

export const {login, login_SUCCESS, login_FAIL, logout} = userSlice.actions;
export default userSlice.reducer;
