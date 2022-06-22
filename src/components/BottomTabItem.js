import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const BottomTabIcon = ({nameIcon, title, style, color, size, styleTitle}) => {
  return (
    <TouchableWithoutFeedback onPress={() => console.log({title})}>
      <View>
        <View style={style}>
          <FontAwesome5 name={nameIcon} size={size} color={color} />
        </View>
        <Text style={styleTitle}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default BottomTabIcon;

const styles = StyleSheet.create({});
