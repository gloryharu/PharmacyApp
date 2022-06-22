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

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen
        options={({route}) => ({
          headerTitle: route.params.name,
          headerShown: true,
        })}
        name="CategoriesScreen"
        component={CategoriesScreen}
      />
      <Stack.Screen
        options={({route}) => ({
          headerTitle: route.params.name,
          headerShown: true,
        })}
        name="SubCategoriesScreen"
        component={SubCategoriesScreen}
      />
      <Stack.Screen
        options={({route}) => ({
          headerTitle: route.params.name,
          headerShown: true,
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
