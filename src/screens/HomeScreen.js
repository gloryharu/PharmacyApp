import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Pressable,
} from 'react-native';
import React from 'react';
import {COLOR, FONT_SIZE} from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SliderBanner from '../components/SliderBanner';
import Category from '../components/Category';
import BottomTabIcon from '../components/BottomTabItem';
import {CATEGORIES} from '../DUMMY_DATA';
import {useDispatch} from 'react-redux';
import {
  get_Product_FILTER,
} from '../redux_toolkit/slices/productSlice';
import { ScrollView } from 'react-native-virtualized-view';

const HomeScreen = props => {
  const {navigation} = props;
  const {navigate} = navigation;
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      {/* Header */}
      <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <View
          style={{
            height: 50,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 15,
            paddingTop: 10,
          }}>
          <View>
            <Text style={{color: COLOR.white, fontWeight: 'bold'}}>
              LOGO PHARMACY APP
            </Text>
          </View>
          <View>
            <Ionicons
              onPress={() => console.log('notification')}
              name="ios-notifications"
              size={23}
              color={COLOR.white}
            />
          </View>
        </View>

        {/* Search Bar View */}
        <Pressable onPress={() => navigate('SearchScreen')}>
          <View style={styles.searchView}>
            <Text style={{marginLeft: 10}}>Bạn muốn mua thuốc gì?</Text>
            <Ionicons name="ios-search" size={23} />
          </View>
        </Pressable>
        {/*Slide Banner quảng cáo*/}
        <View
          style={{
            backgroundColor: COLOR.secondary,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}>
          <SliderBanner />

          {/* Danh mục sản phẩm */}
          <View style={styles.categoriesContainer}>
            {/* Title danh mục sản phẩm */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 10,
              }}>
              <Text style={{fontWeight: 'bold', fontSize: FONT_SIZE.medium}}>
                Danh mục sản phẩm
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigate('CategoriesScreen');
                }}>
                <Text style={{fontSize: FONT_SIZE.small, fontStyle: 'italic'}}>
                  Xem thêm
                </Text>
              </TouchableOpacity>
            </View>

            {/* List Categories */}
            <FlatList
              data={CATEGORIES}
              numColumns={3}
              renderItem={({item, index}) => {
                return (
                  <View style={{flex: 1 / 3}}>
                    <Category
                      title={item.category}
                      imageCategory={item.image}
                      onPress={() => {
                        dispatch(get_Product_FILTER(item.category));
                        navigate('SubCategoriesScreen', {
                          name: item.category,
                          subCategories: item.sub_categories,
                        });
                      }}
                    />
                  </View>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>

      {/* Bottom tab */}
      <View
        style={styles.bottomTabContainer}>
        <BottomTabIcon
          style={{alignItems: 'center'}}
          nameIcon={'home'}
          title="Home"
          size={20}
          color={COLOR.primary}
        />

        {/* Nút điểm thưởng */}
        <BottomTabIcon
          onPress={() => navigate('PointScreen')}
          style={{alignItems: 'center'}}
          nameIcon={'star'}
          title="Điểm thưởng"
          size={20}
        />

        {/* Nút hỗ trợ */}
        <View style={{top: -15}}>
          <BottomTabIcon
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
            }}
            nameIcon={'comment-medical'}
            title="Hỗ trợ"
            color={COLOR.white}
            size={25}
            onPress={() => navigate('SupportScreen')}
          />
        </View>

        <BottomTabIcon
          style={{alignItems: 'center'}}
          nameIcon={'shopping-bag'}
          title="Giỏ hàng"
          size={20}
          onPress={() => navigate('CartScreen')}
        />

        <BottomTabIcon
          style={{alignItems: 'center'}}
          nameIcon={'user-circle'}
          title="Tài khoản"
          size={20}
          onPress={() => navigate('ProfileScreen')}
        />
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
  searchView: {
    flex: 9,
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
  },
  categoriesContainer: {
    backgroundColor: COLOR.white,
    height: 500,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
    padding: 10,
    paddingBottom: 30,
  },
  txtCancel: {
    flex: 1,
    fontWeight: '800',
    fontSize: FONT_SIZE.medium,
    color: COLOR.primary,
  },
  bottomTabContainer:{
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
  }
});
