import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {COLOR, FONT_SIZE} from '../constants';

const SupportScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold', fontSize: FONT_SIZE.large}}>
        THIẾU NHÂN LỰC
      </Text>
      <Image
        style={{height: '50%', width: '100%'}}
        resizeMode="contain"
        source={{
          uri: 'https://cdn.dribbble.com/users/1286822/screenshots/4318950/media/e9d6d00b4ab155085ce7d1d4a7bd6233.png?compress=1&resize=400x300',
        }}
      />
    </View>
  );
};

export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.white,
  },
});
