import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {COLOR, FONT_SIZE} from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {IMAGES} from '../assets/images';
import SliderBanner from '../components/SliderBanner';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View
        style={{
          height: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <View>
          <Text style={{color: COLOR.white, fontWeight: 'bold'}}>
            LOGO PHARMACY APP
          </Text>
        </View>
        <View>
          <Ionicons name="ios-cart" size={23} color={COLOR.white} />
        </View>
      </View>

      {/* Search Bar */}
      <View
        style={{
          height: 40,
          backgroundColor: COLOR.white,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 10,
          borderRadius: 20,
          paddingHorizontal: 10,
          position: 'relative',
          marginVertical: 20,
        }}>
        <TextInput style={{flex: 1}} placeholder="Bạn muốn mua thuốc gì?" />
        <Ionicons name="ios-search" size={23} />
      </View>
      {/*Slide Banner quảng cáo*/}
      <View
        style={{
          backgroundColor: COLOR.secondary,
          flex: 1,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <SliderBanner />

        {/* Danh mục sản phẩm */}
        <View
          style={{
            backgroundColor: COLOR.white,
            flex: 1,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            elevation:5
          }}></View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.primary,
  },
});
