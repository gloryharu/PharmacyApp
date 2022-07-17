import {StyleSheet, Text, View, Button, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import Input from '../components/Input';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {FONT_SIZE, COLOR} from '../constants';
import {useNavigation} from '@react-navigation/native';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../firebase';

const RegisterScreen = () => {
  const {navigate} = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const handleSignUp = () => {
    if (password !== rePassword) {
      alert('Mật khẩu xác nhận không trùng khớp.\nVui lòng nhập lại.');
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          // Signed up
          const user = userCredential.user;
          // console.log(user)
          alert('Đăng ký thành công');
          setEmail('');
          setPassword('');
          setRePassword('');
        })
        .catch(error => {
          const errorCode = error.code;
          switch (errorCode) {
            case 'auth/invalid-email':
              alert('Email không hợp lệ');
              break;
            case 'auth/internal-error':
              alert('Vui lòng nhập mật khẩu');
              break;
            case 'auth/weak-password':
              alert('Mật khẩu ít nhất 6 ký tự');
              break;
            case 'auth/email-already-in-use':
              alert('Email đã dùng. Vui lòng nhập email khác');
              break;
          }
        });
    }
  };

  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../assets/images/background.png')}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.logoStyle}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: COLOR.white,
                letterSpacing: 5,
              }}>
              REGISTER
            </Text>
          </View>
        </View>
        <View style={styles.bodyContainer}>
          <Input
            icon={<Ionicons name="person" size={20} />}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <Input
            icon={<Ionicons name="ios-lock-closed" size={20} />}
            placeholder="Mật khẩu"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <Input
            icon={<MaterialCommunityIcons name="lock-open-check" size={23} />}
            placeholder="Xác nhận lại mật khẩu"
            secureTextEntry={true}
            value={rePassword}
            onChangeText={setRePassword}
          />
          <View style={styles.btnContainer}>
            <Button title="Đăng ký" onPress={handleSignUp} />
          </View>
          <Text onPress={() => navigate('LoginScreen')} style={styles.txtStyle}>
            Bạn đã có tài khoản? Đăng nhập?
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyContainer: {
    flex: 2,
    marginHorizontal: 10,
  },
  btnContainer: {
    marginVertical: 30,
  },
  logoStyle: {
    position: 'absolute',
    top: 25,
    right: 10,
  },
  txtStyle: {
    textAlign: 'center',
    fontStyle: 'italic',
    color: COLOR.white,
    fontWeight: 'bold',
    fontSize: FONT_SIZE.medium,
  },
});
