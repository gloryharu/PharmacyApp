import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { JumpingTransition } from 'react-native-reanimated';

const RowContent = ({title, content,stylesProp}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={styles.title}>{title}:</Text>
      </View>
      <View style={{flex: 2}}>
        <Text style={stylesProp}>{content}</Text>
      </View>
    </View>
  );
};

export default RowContent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
  },
});
