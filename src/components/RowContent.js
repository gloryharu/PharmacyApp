import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const RowContent = ({title, content}) => {
  return (
    <View style={{flexDirection: 'row', marginBottom: 10}}>
      <View style={{flex: 1}}>
        <Text style={styles.title}>{title}:</Text>
      </View>
      <View style={{flex: 2}}>
        <Text>{content}</Text>
      </View>
    </View>
  );
};

export default RowContent;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  },
});
