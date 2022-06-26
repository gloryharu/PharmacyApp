import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLOR,FONT_SIZE} from '../constants';

const Policy = () => {
  return (
    <View style={styles.container}>
      <View style={styles.childContainer}>
        <View style={styles.iconContainer}>
          <Feather
            style={{borderRadius: 30}}
            name="refresh-cw"
            color={COLOR.white}
            size={25}
          />
        </View>
        <Text style={styles.txtStyle}>
          Đổi trả trong 30 ngày kể từ ngày mua hàng
        </Text>
      </View>
      <View style={styles.childContainer}>
        <View style={styles.iconContainer}>
          <AntDesign
            style={{backgroundColor: COLOR.blue, borderRadius: 30}}
            name="like2"
            color={COLOR.white}
            size={25}
          />
        </View>
        <Text style={styles.txtStyle}>Miễn phí 100% đổi thuốc</Text>
      </View>
      <View style={styles.childContainer}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            style={{backgroundColor: COLOR.blue, borderRadius: 30}}
            name="truck"
            color={COLOR.white}
            size={25}
          />
        </View>
        <Text style={styles.txtStyle}>
          Miễn phí vận chuyển theo chính sách giao hàng
        </Text>
      </View>
    </View>
  );
};

export default Policy;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  childContainer: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLOR.blue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  txtStyle: {
    fontSize: FONT_SIZE.small,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 5,
    lineHeight: 18,
  },
});
