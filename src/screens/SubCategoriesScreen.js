import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {COLOR, FONT_SIZE} from '../constants';
import {SubCategoriesList} from '../components/SubCategoriesList';
import PopupScreen from './PopupScreen';
import {ProductContainer} from '../components/ProductContainer';
import Modal from 'react-native-modal';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const SubCategoriesScreen = props => {
  const products = useSelector(state => state.products);
  const {route, navigation} = props;
  const {navigate} = navigation;
  const subCategories = route.params.subCategories;
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: COLOR.secondary,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}>
        <FlatList
          contentContainerStyle={{marginVertical: 10, marginHorizontal: 10}}
          data={subCategories}
          numColumns={2}
          renderItem={({item}) => {
            return <SubCategoriesList item={item} />;
          }}
        />
      </View>
      <View style={{marginVertical: 10}}>
        <Text
          style={{
            marginLeft: 10,
            fontSize: FONT_SIZE.medium,
            fontWeight: 'bold',
          }}>
          Tất cả sản phẩm
        </Text>

        <FlatList
          contentContainerStyle={{
            marginHorizontal: 5,
            marginVertical: 10,
            marginLeft: products.filterProduct.length < 3 ? 15 : null,
            alignSelf:
              products.filterProduct.length < 3 ? 'flex-start' : 'center',
          }}
          numColumns={3}
          data={products.filterProduct}
          renderItem={({item, index}) => {
            return (
              <ProductContainer
                item={item}
                onPress={() => {
                  navigate('DetailsScreen', {
                    name: item.category,
                    // productID: item.productID,
                    item : item
                  });
                }}
                onOrder={() => {
                  setIsVisible(true);
                  setSelectedProduct(item);
                }}
              />
            );
          }}
        />
      </View>

      <GestureHandlerRootView>
        <Modal
          style={{margin: 0}}
          animationIn={'fadeIn'}
          animationOut={'fadeOut'}
          isVisible={isVisible}
          coverScreen={true}
          onSwipeComplete={e => {
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

export default SubCategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
});
