import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import Input from '../components/Input';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLOR, FONT_SIZE} from '../constants';
import {useNavigation} from '@react-navigation/native';
import {auth} from '../firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import {
  login,
  login_SUCCESS,
  login_FAIL,
} from '../redux_toolkit/slices/userSlice';

const LoginScreen = () => {
  const {navigate} = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const user = useSelector(state => state.user);
  const loading = user.loading;
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(user => {
  //     if (user) {
  //       // console.log(user);
  //       return user;
  //     }
  //   });
  //   return unsubscribe;
  // }, []);

  const handleSignIn = () => {
    dispatch(login());
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        // console.log(user);
        dispatch(login_SUCCESS(user));
        setEmail('');
        setPassword('');
      })
      .catch(error => {
        const errorCode = error.code;
        // console.log(errorCode);
        switch (errorCode) {
          case 'auth/invalid-email':
            alert('Email không hợp lệ');
            dispatch(login_FAIL());
            break;
          case 'auth/user-not-found':
            alert('Không tìm thấy tài khoản');
            dispatch(login_FAIL());
            break;
          case 'auth/internal-error':
            alert('Vui lòng nhập mật khẩu');
            dispatch(login_FAIL());
            break;
          case 'auth/wrong-password':
            alert('Sai mật khẩu. Vui lòng nhập lại.');
            dispatch(login_FAIL());
            break;
        }
      });
  };

  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../assets/images/background.png')}>
      <View style={styles.container}>
        {loading ? (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size={'large'} color={COLOR.white} />
          </View>
        ) : (
          <>
            <View style={styles.headerContainer}>
              <View style={styles.logoStyle}>
                <Text
                  style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: COLOR.white,
                    letterSpacing: 5,
                  }}>
                  LOGIN
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
              <View style={styles.btnContainer}>
                <Button title="Đăng nhập" onPress={handleSignIn} />
              </View>

              <Text
                onPress={() => {
                  navigate('RegisterScreen');
                }}
                style={styles.txtStyle}>
                Bạn chưa có tài khoản? Đăng ký tài khoản?
              </Text>
            </View>
          </>
        )}
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

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
