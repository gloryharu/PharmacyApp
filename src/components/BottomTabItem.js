import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLOR} from '../constants';
const BottomTabItem = () => {
    
  return (
    <View style={{alignItems: 'center'}}>
      <Ionicons name="ios-home" size={20} color={COLOR.primary} />
      <Text style={{color: COLOR.primary}}>Home</Text>
    </View>
  );
};

export default BottomTabItem;

const styles = StyleSheet.create({});
