import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {COLOR} from '../constants';

const ChatScreen = () => {
  return <View style={styles.container}></View>;
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.gray,
  },
});
