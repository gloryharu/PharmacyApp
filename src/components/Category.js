import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLOR, FONT_SIZE} from '../constants';

const Category = ({title, imageCategory}) => {
  return (
    <TouchableOpacity
      style={{
        flex:1,
        alignItems: 'center',
        borderRadius: 50,
        marginHorizontal: 5,
      }}>
      <Image style={{height: 50, width: 50}} source={imageCategory} />
      <View style={{width: 80}}>
        <Text
          style={{
            fontSize: FONT_SIZE.small,
            textAlign: 'center',
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({});
