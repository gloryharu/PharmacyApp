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
} from '../screens';
import {FONT_SIZE} from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const {goBack} = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <Ionicons onPress={() => goBack()} size={25} name="chevron-back" />
        ),
        headerTitleAlign: 'center',
        headerTitleStyle: {fontSize: FONT_SIZE.large},
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen
        options={({route}) => ({
          headerTitle: route.params.name,
        })}
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
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
