import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLOR, FONT_SIZE} from '../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const RowContentProfile = ({icon, title, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={styles.container}>
      <View
        style={{
          backgroundColor: COLOR.gray,
          height: 40,
          width: 40,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {icon}
      </View>
      <View style={{flex: 1, marginHorizontal: 10}}>
        <Text style={styles.txtStyle}>{title}</Text>
      </View>
      <MaterialIcons name="navigate-next" size={25} />
    </TouchableOpacity>
  );
};

export default RowContentProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 20,
    alignItems: 'center',
  },
  txtStyle: {
    fontWeight: 'bold',
    fontSize: FONT_SIZE.medium,
  },
});
