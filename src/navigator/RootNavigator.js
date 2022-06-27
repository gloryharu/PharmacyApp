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
} from '../screens';
import {FONT_SIZE} from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const {goBack} = useNavigation();
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
        })}
        name="DetailsScreen"
        component={DetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
