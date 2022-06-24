import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLOR, FONT_SIZE} from '../constants';

const QuantityButton = () => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.btnContainer,
          {
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
          },
        ]}>
        <Text style={{fontSize: FONT_SIZE.large}}>-</Text>
      </View>
      <View
        style={[
          styles.btnContainer,
          {borderLeftWidth: 0, borderRightWidth: 0},
        ]}>
        <Text style={{fontSize: FONT_SIZE.medium}}>1</Text>
      </View>
      <View
        style={[
          styles.btnContainer,
          {borderTopRightRadius: 20, borderBottomRightRadius: 20},
        ]}>
        <Text style={{fontSize: FONT_SIZE.medium}}>+</Text>
      </View>
    </View>
  );
};

export default QuantityButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  btnContainer: {
    flex: 1,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLOR.gray,
  },
});
