import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Button,
  Alert,
  ScrollView,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {COLOR} from '../constants';
import {
  get_Product_ALL,
  clear_Product_SELECTED,
} from '../redux_toolkit/slices/productSlice';
import {
  removeCart,
  addCart,
  delete_all_Cart,
  add_infoBuyer,
  add_History,
} from '../redux_toolkit/slices/cartSlice';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Input from '../components/Input';
import RowContent from '../components/RowContent';
import CartItem from '../components/CartItem';

const CartScreen = props => {
  const {navigation} = props;
  const {replace} = navigation;
  const cart = useSelector(state => state.cart);
  const totalPrice = cart.totalPrice;
  const cartItems = cart.cartItems;
  const dispatch = useDispatch();

  const [nameBuyer, setNameBuyer] = useState('');
  const [addressBuyer, setAddressBuyer] = useState('');
  const [phoneBuyer, setPhoneBuyer] = useState('');

  const handleThanhToan = () => {
    if (nameBuyer === '' || addressBuyer === '' || phoneBuyer === '') {
      return Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ thông tin');
    } else {
      dispatch(
        add_infoBuyer({
          nameBuyer: nameBuyer,
          addressBuyer: addressBuyer,
          phoneBuyer: phoneBuyer,
        }),
      );
      dispatch(
        add_History({
          nameBuyer: nameBuyer,
          addressBuyer: addressBuyer,
          phoneBuyer: phoneBuyer,
          boughtItems: cartItems,
          totalPrice : totalPrice,
        }),
      );
      Keyboard.dismiss();
      Alert.alert(
        'Thông báo',
        `Đã thanh toán thành công, hàng sẽ sớm được vận chuyển đến địa chỉ: \n${addressBuyer}. \nCảm ơn, anh/chị ${nameBuyer} đã ủng hộ.`,
      );
      dispatch(delete_all_Cart())
    }
  };

  return (
    <View style={{flex: 1}}>
      {cartItems.length === 0 ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Không có sản phẩm nào.</Text>
          <Text
            onPress={() => {
              dispatch(get_Product_ALL());
              dispatch(clear_Product_SELECTED());
              replace('CategoriesScreen');
            }}
            style={{color: COLOR.primary, marginTop: 10, fontWeight: '600'}}>
            Mua sắm ngay
          </Text>
        </View>
      ) : (
        <View style={{flex: 1, backgroundColor: COLOR.secondary}}>
          <ScrollView style={{flex: 1, marginBottom: 150}}>
            <View
              style={{
                flex: 1,
              }}>
              <View style={{marginHorizontal: 10, marginVertical: 10}}>
                <Input
                  value={nameBuyer}
                  onChangeText={setNameBuyer}
                  title="Người đặt"
                  placeholder="Vui lòng nhập họ tên người đặt"
                  icon={
                    <FontAwesome5 name="user" color={COLOR.white} size={20} />
                  }
                />

                <Input
                  value={addressBuyer}
                  onChangeText={setAddressBuyer}
                  title="Địa chỉ nhận hàng"
                  placeholder="Vui lòng nhập địa chỉ nhận hàng"
                  icon={
                    <Ionicons name="location" color={COLOR.white} size={20} />
                  }
                />

                <Input
                  keyboardType="number-pad"
                  value={phoneBuyer}
                  onChangeText={setPhoneBuyer}
                  title="Số điện thoại"
                  placeholder="Vui lòng nhập số điện thoại"
                  icon={
                    <FontAwesome5 name="phone" color={COLOR.white} size={20} />
                  }
                />
              </View>
            </View>

            {/* List item trong giỏ hàng */}
            <View
              style={{
                borderTopWidth: 1,
                borderColor: COLOR.gray,
              }}>
              <Button
                title="Xóa giỏ hàng"
                onPress={() => {
                  dispatch(delete_all_Cart());
                }}
              />
              {/* <FlatList
                data={cartItems}
                renderItem={({item}) => {
                  return (
                    <CartItem
                      item={item}
                      addQty={() => dispatch(addCart(item))}
                      removeQty={() => dispatch(removeCart(item))}
                    />
                  );
                }}
              /> */}
              <View style={{backgroundColor: COLOR.white}}>
                {cartItems.map(item => {
                  return (
                    <CartItem
                      key={item.productID}
                      item={item}
                      addQty={() => dispatch(addCart(item))}
                      removeQty={() => dispatch(removeCart(item))}
                    />
                  );
                })}
              </View>
            </View>
          </ScrollView>
          {/* Thanh toán đơn hàng */}
          <View style={styles.paymentContainer}>
            <RowContent
              stylesProp={{textAlign: 'right'}}
              title="Tổng tiền"
              content={`${totalPrice}đ`}
            />
            <RowContent
              stylesProp={{textAlign: 'right'}}
              title="Phí vận chuyển"
              content={'Miễn phí'}
            />
            <RowContent
              stylesProp={{textAlign: 'right', fontWeight: 'bold'}}
              title="Tổng thanh toán"
              content={`${totalPrice}đ`}
            />

            <TouchableOpacity
              onPress={() => {
                handleThanhToan();
              }}
              activeOpacity={0.8}
              style={styles.btnPayment}>
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

const styles = StyleSheet.create({
  lineStyle: {
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: COLOR.gray,
    alignItems: 'center',
  },
  paymentContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: COLOR.white,
    height: 150,
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: COLOR.gray,
  },
  btnPayment: {
    backgroundColor: COLOR.primary,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    marginVertical: 5,
  },
});
