import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  HomeScreen,
  CartScreen,
  CategoriesScreen,
  DetailsScreen,
  ProfileScreen,
  SubCategoriesScreen,
  PointScreen,
  SupportScreen,
  HistoryScreen,
} from '../screens';
import {COLOR, FONT_SIZE} from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import SearchScreen from '../screens/SearchScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const {goBack, navigate} = useNavigation();
  const countItem = useSelector(state => state.cart.cartItems.length);
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerLeft: () => (
          <Ionicons onPress={() => goBack()} size={25} name="chevron-back" />
        ),
        headerTitleAlign: 'center',
        headerTitleStyle: {fontSize: FONT_SIZE.large},
      }}>
      {/* ================= Main ================================================= */}

      <Stack.Screen
        options={{headerShown: false}}
        name="HomeScreen"
        component={HomeScreen}
      />

      <Stack.Screen
        options={{headerTitle: 'Ưu đãi điểm thưởng'}}
        name="PointScreen"
        component={PointScreen}
      />

      <Stack.Screen
        options={{
          headerTitle: 'Hỗ trợ',
          headerLeft: () => (
            <Ionicons
              onPress={() => goBack()}
              name="ios-close-sharp"
              size={25}
            />
          ),
        }}
        name="SupportScreen"
        component={SupportScreen}
      />

      <Stack.Screen
        options={{
          headerTitle: 'Giỏ hàng của bạn',
          headerLeft: () => (
            <Ionicons
              onPress={() => goBack()}
              name="ios-close-sharp"
              size={25}
            />
          ),
        }}
        name="CartScreen"
        component={CartScreen}
      />

      <Stack.Screen
        options={{headerTitle: 'Tài khoản'}}
        name="ProfileScreen"
        component={ProfileScreen}
      />

      {/* ================= Sub ================================================= */}

      <Stack.Screen
        options={{headerTitle: 'Danh mục sản phẩm'}}
        name="CategoriesScreen"
        component={CategoriesScreen}
      />

      <Stack.Screen
        options={({route}) => ({
          headerTitle: route.params.name,
        })}
        name="SubCategoriesScreen"
        component={SubCategoriesScreen}
      />

      <Stack.Screen
        options={({route}) => ({
          headerTitle: route.params.name,
          headerRight: () => (
            <View>
              <Ionicons
                onPress={() => {
                  navigate('CartScreen');
                }}
                name="ios-cart"
                size={25}
              />

              {/* Hiển thị số lượng (Badget icon) */}
              {countItem > 0 && (
                <View
                  style={{
                    position: 'absolute',
                    left: 15,
                    top: -10,
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
          ),
        })}
        name="DetailsScreen"
        component={DetailsScreen}
      />

      <Stack.Screen
        options={() => ({
          headerTitle: 'Tìm kiếm',
        })}
        name="SearchScreen"
        component={SearchScreen}
      />

      <Stack.Screen
        options={() => ({
          headerTitle: 'Lịch sử mua hàng',
        })}
        name="HistoryScreen"
        component={HistoryScreen}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
