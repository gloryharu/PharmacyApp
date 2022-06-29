import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {COLOR, FONT_SIZE} from '../constants';
import {useSelector} from 'react-redux';

const BottomTabIcon = ({
  nameIcon,
  title,
  style,
  color,
  size,
  styleTitle,
  onPress,
}) => {
  const countItem = useSelector(state => state.cart.cartItems.length);
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={{alignItems: 'center'}}>
        <View style={style}>
          <FontAwesome5 name={nameIcon} size={size} color={color} />
        </View>
        <Text style={styleTitle}>{title}</Text>

        {title === 'Giỏ hàng' && countItem > 0  && (
          <View
            style={{
              position: 'absolute',
              left: 30,
              top: -3,
              backgroundColor: 'red',
              borderRadius: 10,
              height: 18,
              width: 18,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: COLOR.white, fontSize: FONT_SIZE.small}}>
              {countItem}
            </Text>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default BottomTabIcon;

const styles = StyleSheet.create({});
