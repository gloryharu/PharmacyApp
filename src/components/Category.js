import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {FONT_SIZE} from '../constants';

const Category = ({title, imageCategory, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnContainer}>
      <Image style={styles.imageStyle} source={imageCategory} />
      <View style={styles.txtContainer}>
        <Text style={styles.txtStyle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  imageStyle: {
    height: 50,
    width: 50,
  },
  txtContainer: {
    width: 80,
  },
  txtStyle: {
    fontSize: FONT_SIZE.small,
    textAlign: 'center',
  },
  btnContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
});
