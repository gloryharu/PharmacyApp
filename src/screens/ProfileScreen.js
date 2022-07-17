import {StyleSheet, Text, View, Image, Linking} from 'react-native';
import React from 'react';
import RowContentProfile from '../components/RowContentProfile';
import {COLOR} from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../redux_toolkit/slices/userSlice';
import {signOut} from 'firebase/auth';
import {auth} from '../firebase';

const ProfileScreen = props => {
  const {navigation} = props;
  const {navigate, replace} = navigation;
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.user.userInfo);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log('Thoát thành công');
        // console.log(userInfo?.accessToken);
        dispatch(logout());
      })
      .catch(error => {
        console.log(error.code);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Text>Avatar</Text>
      </View>
      <Text>Email: {auth.currentUser?.email}</Text>
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
        onPress={handleLogout}
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
