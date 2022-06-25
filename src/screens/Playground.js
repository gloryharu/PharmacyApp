import React, {useEffect, useRef} from 'react';
import {Animated, View, StyleSheet, Button} from 'react-native';
import {Easing} from 'react-native-reanimated';

const Playground = () => {
  const ball = useRef(new Animated.Value(0)).current;

  //   const dropBall = () => {
  //     Animated.timing(ball, {
  //       toValue: 1,
  //       duration: 2000,
  //       useNativeDriver: false,
  //       easing: Easing.bounce,
  //     }).start();
  //   };

  const resetBall = () => {
    Animated.timing(ball, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
      easing: Easing.bounce,
    }).start();
  };

  const yValue = ball.interpolate({
    inputRange: [0, 1, 2, 3],
    outputRange: [0, 300, 200, 500],
  });



  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          backgroundColor: 'green',
          top: 0,
          height: 50,
          width: 50,
          borderRadius: 25,
          position: 'absolute',
          top: 0,
          transform: [
            {
              translateY: yValue,
            },
          ],
        }}></Animated.View>
      <Button
        title="Drop"
        onPress={() => {
          resetBall();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Playground;
