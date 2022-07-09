import {StyleSheet, Text, View, Image, Linking} from 'react-native';
import React from 'react';
import RowContentProfile from '../components/RowContentProfile';
import {COLOR} from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';

const ProfileScreen = props => {
  const {navigation} = props;
  const {navigate} = navigation;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Text>Avatar</Text>
      </View>
      <RowContentProfile
        icon={<Ionicons name="ios-person" size={23} color="gray" />}
        title="Thông tin cá nhân"
      />
      <RowContentProfile
        icon={<MaterialIcons name="history" size={23} color="gray" />}
        title="Lịch sử mua hàng"
        onPress={() => navigate('HistoryScreen')}
      />
      <RowContentProfile
        icon={<Ionicons name="ios-document-text" size={23} color="gray" />}
        title="Quy chế hoạt động"
        onPress={() => Linking.openURL('https://nhathuoclongchau.com/tos')}
      />
      <RowContentProfile
        icon={<Foundation name="lightbulb" size={23} color="gray" />}
        title="Giới thiệu"
        onPress={() =>
          Linking.openURL('https://nhathuoclongchau.com/gioi-thieu')
        }
      />
      <RowContentProfile
        icon={<MaterialIcons name="logout" size={23} color="gray" />}
        title="Đăng xuất"
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    height: 100,
    width: 100,
    borderRadius: 25,
    backgroundColor: COLOR.gray,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
});
