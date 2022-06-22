import {StyleSheet, Text, View,FlatList,Image} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const CategoriesScreen = () => {
  const products = useSelector(state => state.products);

  return (
    <View>
      <FlatList
        data={products.filterProduct}
        renderItem={({item}) => {
          return <View>
            <Text>{item.name}</Text>
            <Image/>
          </View>;
        }}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
