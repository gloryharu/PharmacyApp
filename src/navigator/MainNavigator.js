import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import RootNavigator from './RootNavigator';
import UserNavigator from './UserNavigator';
import {NavigationContainer} from '@react-navigation/native';

const MainNavigator = () => {
  const user = useSelector(state => state.user);
//   console.log(user.userInfo.accessToken);
  return (
    <NavigationContainer>
      {user.userInfo?.accessToken ? <RootNavigator /> : <UserNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
