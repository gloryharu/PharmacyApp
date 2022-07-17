import {Text, View, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {COLOR} from '../constants';

const Input = ({
  icon,
  title,
  placeholder,
  value,
  onChangeText,
  keyboardType,
  secureTextEntry,
  setBackgroundStyle,
}) => {
  return (
    <>
      <Text>{title}</Text>
      <View style={styles.inputContainer}>
        <View
          style={
            setBackgroundStyle ? styles.iconContainer : styles.iconContainerNoBg
          }>
          {icon}
        </View>
        <View style={{flex: 1, marginLeft: 5}}>
          <TextInput
            secureTextEntry={secureTextEntry}
            value={value}
            onChangeText={text => onChangeText(text)}
            placeholder={placeholder}
            keyboardType={keyboardType}
          />
        </View>
      </View>
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: COLOR.white,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  iconContainer: {
    height: 30,
    width: 30,
    backgroundColor: COLOR.orange,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainerNoBg: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
