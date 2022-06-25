import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CATEGORIES} from '../DUMMY_DATA';
import Category from '../components/Category';
import {COLOR, FONT_SIZE} from '../constants';
import {get_Product_FILTER} from '../redux_toolkit/slices/productSlice';
import {ProductContainer} from '../components/ProductContainer';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import PopupScreen from './PopupScreen';

const CategoriesScreen = props => {
  const {navigation} = props;
  const {navigate} = navigation;
  const products = useSelector(state => state.products);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

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

      <View style={styles.childContainer}>
        <Text style={styles.txtStyle}>Tất cả sản phẩm</Text>

        {/* List Products */}
        <FlatList
          contentContainerStyle={{
            marginLeft: -5,
            alignSelf:
              products.filterProduct.length < 3 ? 'flex-start' : 'center',
          }}
          data={products.filterProduct}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          renderItem={({item, index}) => {
            return (
              <ProductContainer
                onPress={() => {
                  navigate('DetailsScreen', {
                    name: item.category,
                    productID: item.productID,
                  });
                }}
                item={item}
                onOrder={() => {
                  setIsVisible(true);
                  setSelectedProduct(item);
                }}
              />
            );
          }}
        />
      </View>

      {/* Popup Screen */}
      <GestureHandlerRootView>
        <Modal
          style={{margin: 0}}
          animationIn={'fadeIn'}
          animationOut={'fadeOut'}
          isVisible={isVisible}
          onSwipeComplete={() => {
            setIsVisible(false);
          }}
          swipeDirection="down">
          <PopupScreen
            selectedProduct={selectedProduct}
            onClose={() => setIsVisible(false)}
          />
        </Modal>
      </GestureHandlerRootView>
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  childContainer: {
    flex: 1,
    backgroundColor: COLOR.secondary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
    paddingBottom: 0,
    elevation: 1,
    borderWidth: 1,
    borderColor: COLOR.gray,
  },
  txtStyle: {
    fontSize: FONT_SIZE.medium,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
