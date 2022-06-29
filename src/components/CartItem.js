import {StyleSheet, Text, View,Image} from 'react-native';
import React from 'react';
import QuantityButton from './QuantityButton';
import { FONT_SIZE} from '../constants';

const CartItem = ({item,addQty,removeQty}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 10,
        marginVertical: 5,
      }}>
      <Image style={{height: 50, width: 50}} source={{uri: item?.images}} />
      <View style={{flex: 1, marginHorizontal: 10}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: FONT_SIZE.small,
          }}>
          {item?.name}
        </Text>
        <Text>{item?.price}đ</Text>
      </View>
      <View style={{width: 80, height: 25, alignSelf: 'center'}}>
        <QuantityButton
          quantity={item?.qty}
          removeQty={removeQty}
          addQty={addQty}
        />
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({});
