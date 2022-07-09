import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import QuantityButton from './QuantityButton';
import {FONT_SIZE} from '../constants';

const CartItem = ({item, addQty, removeQty}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{uri: item?.images}} />
      <View style={styles.txtContainer}>
        <Text style={styles.txtStyle}>{item?.name}</Text>
        <Text>{item?.price}đ</Text>
      </View>
      <View style={styles.btnContainer}>
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
  },
  imageStyle: {
    height: 50,
    width: 50,
  },
  txtContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  txtStyle: {
    fontWeight: 'bold',
    fontSize: FONT_SIZE.small,
  },
  btnContainer: {
    width: 80,
    height: 25,
    alignSelf: 'center',
  },
});
