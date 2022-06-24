import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {COLOR, FONT_SIZE} from '../constants';
import QuantityButton from '../components/QuantityButton';

const PopupScreen = ({selectedProduct, onClose}) => {
  return (
    <View style={styles.container}>
      <View style={styles.childContainer}>
        {/* Close button */}
        <TouchableOpacity
          onPress={onClose}
          style={{position: 'absolute', top: 5, right: 10}}>
          <Text>Close</Text>
        </TouchableOpacity>

        {/* Content product*/}
        <View style={styles.contentContainer}>
          <Image
            style={{height: 100, width: 100}}
            source={{uri: selectedProduct.images}}
          />
          <View style={{flex: 1, marginHorizontal: 10}}>
            <Text style={{fontWeight: 'bold', textAlign: 'justify'}}>
              {selectedProduct.name}
            </Text>
            <Text style={styles.priceText}>{selectedProduct.price}đ</Text>
          </View>
        </View>

        {/* Quantity */}
        <View style={styles.quantityContainer}>
          <Text>Chọn số lượng</Text>
          {/* Button custom */}
          <View style={{width: 100, height: 30}}>
            <QuantityButton />
          </View>
        </View>

        <View style={styles.lineStyle} />

        <TouchableOpacity activeOpacity={0.8} style={styles.btnContainer}>
          <Text style={styles.btnText}>
            THÊM GIỎ HÀNG - {selectedProduct.price}đ
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PopupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  childContainer: {
    backgroundColor: COLOR.white,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 15,
  },
  contentContainer: {
    borderWidth: 1,
    borderColor: COLOR.gray,
    flexDirection: 'row',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
  },
  priceText: {
    color: COLOR.primary,
    fontWeight: 'bold',
    marginTop: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  btnContainer: {
    width: '100%',
    backgroundColor: COLOR.primary,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
  },
  btnText: {
    color: COLOR.white,
    fontSize: FONT_SIZE.medium,
    fontWeight: 'bold',
  },
  lineStyle: {
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: COLOR.gray,
    alignItems: 'center',
  },
});
