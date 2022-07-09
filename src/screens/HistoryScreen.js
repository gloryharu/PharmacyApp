import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';
import {COLOR, FONT_SIZE} from '../constants';
import {useSelector, useDispatch} from 'react-redux';

const HistoryScreen = () => {
  const cart = useSelector(state => state.cart);
  const totalPrice = cart.totalPrice;
  const history = cart.history;
  console.log(history);
  return (
    <View style={styles.container}>
      <FlatList
        data={history}
        renderItem={({item, index}) => {
          return (
            <View>
              <Text>{index}</Text>
              <Text>Người đặt hàng: {item.nameBuyer}</Text>
              <Text>Địa chỉ nhận hàng: {item.addressBuyer}</Text>
              <Text>Số điện thoại: {item.phoneBuyer}</Text>
              <Text>Các sản phẩm đã mua:</Text>
              {item.boughtItems.map((e, index) => {
                return (
                  <View key={index}>
                    <Text>
                      {e.name} - Số lượng {e.qty}
                    </Text>
                  </View>
                );
              })}
              <Text>Tổng giá: {item.totalPrice}đ</Text>
              <View style={styles.lineStyle} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.white,
  },
  lineStyle: {
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: COLOR.gray,
    alignItems: 'center',
  },
});
