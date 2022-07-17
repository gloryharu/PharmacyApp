import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen, RegisterScreen} from '../screens';
import {COLOR, FONT_SIZE} from '../constants';

const Stack = createNativeStackNavigator();

const UserNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {fontSize: FONT_SIZE.large},
      }}>
      {/* ================= Main ================================================= */}
      <Stack.Screen
        options={{headerShown: false, headerTransparent: true}}
        name="LoginScreen"
        component={LoginScreen}
      />

      <Stack.Screen
        options={{
          headerTintColor: COLOR.white,
          headerShown: true,
          headerTransparent: true,
          headerTitle: '',
        }}
        name="RegisterScreen"
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
};

export default UserNavigator;

const styles = StyleSheet.create({});
