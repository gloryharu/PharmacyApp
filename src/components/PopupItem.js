import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {FONT_SIZE, COLOR} from '../constants';

const PopupItem = ({item}) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          marginVertical: 5,
        }}>
        <Image style={{height: 50, width: 50}} source={{uri: item?.images}} />
        <View style={{flex: 1, marginHorizontal: 10}}>
          <Text style={styles.txtStyle}>{item?.name}</Text>
          <Text style={styles.txtStyle}>SL: {item?.qty}</Text>
        </View>
      </View>
      <View style={styles.lineStyle} />
    </>
  );
};

export default PopupItem;

const styles = StyleSheet.create({
  txtStyle: {
    fontWeight: 'bold',
    fontSize: FONT_SIZE.small,
  },
  lineStyle: {
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: COLOR.gray,
    alignItems: 'center',
  },
});
