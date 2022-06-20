import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React from 'react';
import {COLOR, FONT_SIZE} from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {IMAGES} from '../assets/images';
import SliderBanner from '../components/SliderBanner';
import Category from '../components/Category';

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
            elevation: 5,
            padding: 10,
          }}>
          {/* Title danh mục sản phẩm */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: FONT_SIZE.medium}}>
              Danh mục sản phẩm
            </Text>
            <Text style={{fontSize: FONT_SIZE.small, fontStyle: 'italic'}}>
              Xem thêm
            </Text>
          </View>

          {/* Category hàng 1  */}
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 20,
              justifyContent: 'space-between',
            }}>
            <Category
              imageCategory={IMAGES.categories.thuc_pham_chuc_nang}
              title="Thực phẩm chức năng"
            />
            <View style={{flex: 1}} />
            <Category
              imageCategory={IMAGES.categories.cham_soc_ca_nhan}
              title="Chăm sóc cá nhân"
            />
            <View style={{flex: 1}} />
            <Category
              imageCategory={IMAGES.categories.dung_cu_y_te}
              title="Dụng cụ y tế"
            />
          </View>

          {/* Category hàng 2  */}
          <View style={{flexDirection: 'row'}}>
            <Category
              imageCategory={IMAGES.categories.duoc_my_pham}
              title="Dược mỹ phẩm"
            />
            <View style={{flex: 1}} />
            <Category imageCategory={IMAGES.categories.thuoc} title="Thuốc" />
            <View style={{flex: 1}} />
            <View style={{flex: 1}} />
          </View>
        </View>
      </View>

      {/* Bottom tab */}
      <View
        style={{
          height: 50,
          width: '100%',
          backgroundColor: COLOR.white,
          borderTopWidth: StyleSheet.hairlineWidth,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 15,
          position: 'absolute',
          bottom: 0,
        }}>
        <View style={{alignItems: 'center'}}>
          <FontAwesome5 name="home" size={20} color={COLOR.primary} />
          <Text style={{color: COLOR.primary}}>Home</Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <FontAwesome5 name="star" size={20} />
          <Text>Điểm thưởng</Text>
        </View>

        <View style={{top: -15, alignItems: 'center'}}>
          <View
            style={{
              height: 50,
              width: 50,
              borderRadius: 25,
              backgroundColor: COLOR.primary,
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 3,
              position: 'relative',
              bottom: 5,
            }}>
            <FontAwesome5
              name="comment-medical"
              size={25}
              color={COLOR.white}
            />
          </View>
          <Text>Hỗ trợ</Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <FontAwesome5 name="shopping-bag" size={20} />
          <Text>Giỏ hàng</Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <FontAwesome5 name="user-circle" size={20} />
          <Text>Tài khoản</Text>
        </View>
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
