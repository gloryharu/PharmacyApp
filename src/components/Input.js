import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {COLOR} from '../constants';

const Input = ({icon, title, placeholder}) => {
  return (
    <View>
      <Text>{title}</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
          backgroundColor: COLOR.white,
          paddingHorizontal: 10,
          borderRadius: 10,
        }}>
        <View
          style={{
            height: 30,
            width: 30,
            backgroundColor: COLOR.orange,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {icon}
        </View>
        <TextInput style={{flex: 1, marginLeft: 5}} placeholder={placeholder} />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
