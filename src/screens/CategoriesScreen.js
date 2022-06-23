import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CATEGORIES} from '../DUMMY_DATA';
import Category from '../components/Category';
import {COLOR, FONT_SIZE} from '../constants';
import {get_Product_FILTER} from '../redux_toolkit/slices/productSlice';
import {ProductContainer} from '../components/ProductContainer';

const CategoriesScreen = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          contentContainerStyle={{
            marginVertical: 15,
            justifyContent: 'space-between',
          }}
          data={CATEGORIES}
          numColumns={3}
          renderItem={({item, index}) => {
            return (
              <View style={{flex: 1 / 3}}>
                <Category
                  title={item.category}
                  imageCategory={item.image}
                  onPress={() => {
                    dispatch(get_Product_FILTER(item.category));
                  }}
                />
              </View>
            );
          }}
        />
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: COLOR.secondary,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          padding: 15,
          paddingBottom: 0,
          elevation: 1,
          borderWidth: 1,
          borderColor: COLOR.gray,
        }}>
        <Text
          style={{
            fontSize: FONT_SIZE.medium,
            fontWeight: 'bold',
            marginBottom: 10,
          }}>
          Tất cả sản phẩm
        </Text>
        <FlatList
          contentContainerStyle={{
            marginLeft: -5,
            alignSelf:
              products.filterProduct.length < 3 ? 'flex-start' : 'center',
          }}
          data={products.filterProduct}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          renderItem={({item}) => {
            return <ProductContainer item={item} />;
          }}
        />
      </View>
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
});
