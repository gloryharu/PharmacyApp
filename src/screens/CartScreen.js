import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {COLOR} from '../constants';
import {get_Product_ALL} from '../redux_toolkit/slices/productSlice';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Input from '../components/Input';
import RowContent from '../components/RowContent';

const CartScreen = props => {
  const {navigation} = props;
  const {navigate, replace} = navigation;
  const cart = useSelector(state => state.cart);
  const cartItems = cart.cartItems;
  const dispatch = useDispatch();

console.log(cart)

  return (
    <View style={{flex: 1}}>
      {cartItems.length === 0 ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Không có sản phẩm nào.</Text>
          <Text
            onPress={() => {
              dispatch(get_Product_ALL());
              replace('CategoriesScreen');
            }}
            style={{color: COLOR.primary, marginTop: 10, fontWeight: '600'}}>
            Mua sắm ngay
          </Text>
        </View>
      ) : (
        <View style={{flex: 1}}>
          <View style={{marginHorizontal: 10, marginVertical: 10}}>
            <Input
              title="Người đặt"
              placeholder="Vui lòng nhập họ tên người đặt"
              icon={<FontAwesome5 name="user" color={COLOR.white} size={20} />}
            />

            <Input
              title="Địa chỉ nhận hàng"
              placeholder="Vui lòng nhập địa chỉ nhận hàng"
              icon={<Ionicons name="location" color={COLOR.white} size={20} />}
            />
          </View>

          {/* List item trong giỏ hàng */}




          {/* Thanh toán đơn hàng */}
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              backgroundColor: COLOR.white,
              height: 150,
              width: '100%',
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <RowContent
              stylesProp={{textAlign: 'right'}}
              title="Tổng tiền"
              content="49000đ"
            />
            <RowContent
              stylesProp={{textAlign: 'right'}}
              title="Phí vận chuyển"
              content="Miễn phí"
            />
            <RowContent
              stylesProp={{textAlign: 'right', fontWeight: 'bold'}}
              title="Tổng thanh toán"
              content="49000đ"
            />

            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                backgroundColor: 'gray',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                borderRadius: 20,
                marginVertical: 5,
              }}>
              <Text style={{color: COLOR.white, fontWeight: 'bold'}}>
                THANH TOÁN ĐƠN HÀNG
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
