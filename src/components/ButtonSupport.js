import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLOR, FONT_SIZE} from '../constants';

const ButtonSupport = props => {
  const {backgroundColor, icon, title, onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        backgroundColor: COLOR.white,
        borderRadius: 10,
        elevation: 3,
        padding: 10,
        margin: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: backgroundColor,
            padding: 10,
            borderRadius: 10,
          }}>
          {icon}
        </View>
        <Text
          style={{
            marginLeft: 10,
            fontSize: FONT_SIZE.medium,
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonSupport;

const styles = StyleSheet.create({});
