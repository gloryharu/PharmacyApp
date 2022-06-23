import React from 'react';
import {View, StyleSheet, Image,Text} from 'react-native';
import {COLOR, FONT_SIZE} from '../constants';

export const SubCategoriesList = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.childContainer}>
        <Image
          style={{height: 35, width: 35, marginHorizontal: 5}}
          source={{
            uri: item.image,
          }}
        />
        <View style={{flex: 1}}>
          <Text style={{fontSize: FONT_SIZE.small}}>{item.name}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1 / 2,
    justifyContent: 'space-between',
  },
  childContainer: {
    flex: 1,
    backgroundColor: COLOR.white,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 25,
    padding: 5,
    margin: 5,
    elevation: 3,
  },
});
