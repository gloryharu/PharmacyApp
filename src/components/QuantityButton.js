import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLOR, FONT_SIZE} from '../constants';

const QuantityButton = props => {
  const {onDecrease, onIncrease, quantity} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={[
          styles.btnContainer,
          {
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
          },
        ]}
        onPress={onDecrease}>
        <Text style={{fontSize: FONT_SIZE.large}}>-</Text>
      </TouchableOpacity>
      <View
        style={[
          styles.btnContainer,
          {borderLeftWidth: 0, borderRightWidth: 0},
        ]}>
        <Text style={{fontSize: FONT_SIZE.medium}}>{quantity}</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        style={[
          styles.btnContainer,
          {borderTopRightRadius: 20, borderBottomRightRadius: 20},
        ]}
        onPress={onIncrease}>
        <Text style={{fontSize: FONT_SIZE.medium}}>+</Text>
      </TouchableOpacity>
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
