import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {get_Product_SELECTED} from '../redux_toolkit/slices/productSlice';

const DetailsScreen = props => {
  const products = useSelector(state => state.products);
  const selectedProduct = products.selectedProduct;
  const {route} = props;

  const productID = route.params.productID;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_Product_SELECTED(productID));
  }, []);

  return (
    <View>
      <Text>{selectedProduct.name}</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
