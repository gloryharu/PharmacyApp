import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {COLOR, FONT_SIZE} from '../constants';

export const ProductContainer = ({item, onPress, onOrder}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={styles.container}>
      <Image style={styles.imageStyle} source={{uri: item.images}} />
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: FONT_SIZE.small,
          marginVertical: 10,
        }}>
        {item.name.substring(0, Math.min(item.name.length, 35))} ...
      </Text>
      <Text
        style={{
          color: COLOR.primary,
          fontSize: FONT_SIZE.medium,
          fontWeight: '500',
        }}>
        {item.price}đ
      </Text>
      <TouchableOpacity
        onPress={onOrder}
        activeOpacity={0.5}
        style={styles.btnContainer}>
        <Text>Đặt hàng</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width / 3.5,
    justifyContent: 'space-between',
    margin: 5,
    backgroundColor: COLOR.white,
    borderRadius: 5,
    elevation: 1,
    borderWidth: 1,
    borderColor: COLOR.gray,
    paddingHorizontal: 10,
  },
  imageStyle: {
    height: 80,
    width: 80,
    marginVertical: 10,
    alignSelf: 'center',
  },
  btnContainer: {
    borderRadius: 10,
    backgroundColor: COLOR.white,
    borderWidth: 2,
    borderColor: COLOR.gray,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginVertical: 10,
  },
});
