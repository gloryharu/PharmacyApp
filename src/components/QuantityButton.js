import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLOR, FONT_SIZE} from '../constants';

const QuantityButton = props => {
  const {addQty, removeQty, quantity} = props;
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
        onPress={removeQty}>
        <Text style={styles.txtStyle}>-</Text>
      </TouchableOpacity>
      <View
        style={[
          styles.btnContainer,
          {borderLeftWidth: 0, borderRightWidth: 0},
        ]}>
        <Text style={styles.txtStyle}>{quantity}</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        style={[
          styles.btnContainer,
          {borderTopRightRadius: 20, borderBottomRightRadius: 20},
        ]}
        onPress={addQty}>
        <Text style={styles.txtStyle}>+</Text>
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
  txtStyle: {
    fontSize: FONT_SIZE.small,
    fontWeight: 'bold',
  },
});
