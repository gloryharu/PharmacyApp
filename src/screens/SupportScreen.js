import {StyleSheet, View, Linking} from 'react-native';
import React from 'react';
import {COLOR} from '../constants';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ButtonSupport from '../components/ButtonSupport';

const SupportScreen = props => {
  const phoneNumber = '18006928';
  const {navigation} = props;
  const {navigate} = navigation;
  return (
    <View style={styles.container}>
      <ButtonSupport
        backgroundColor={COLOR.orange}
        title="Nhắn tin"
        icon={<FontAwesome5 name="comments" color={COLOR.white} size={25} />}
        onPress={() => {
          navigate('ChatScreen');
        }}
      />
      <ButtonSupport
        backgroundColor={COLOR.blue}
        title="Gọi dược sĩ"
        icon={<FontAwesome5 name="phone" color={COLOR.white} size={25} />}
        onPress={() => {
          Linking.openURL(`tel:${phoneNumber}`);
        }}
      />
    </View>
  );
};

export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
});
