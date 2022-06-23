import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {COLOR, FONT_SIZE} from '../constants';

const PopupScreen = ({selectedProduct, onClose}) => {
  return (
    <View style={styles.container}>
      <View style={styles.childContainer}>
        <TouchableOpacity
          onPress={onClose}
          style={{position: 'absolute', top: 5, right: 10}}>
          <Text>Close</Text>
        </TouchableOpacity>
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
      </View>
    </View>
  );
};

export default PopupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.blackOpacity,
  },
  childContainer: {
    backgroundColor: COLOR.white,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '50%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
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
});
