import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native-virtualized-view';
import {COLOR, FONT_SIZE} from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import QuantityButton from '../components/QuantityButton';
import {
  addQuantity,
  removeQuantity,
  addCart,
} from '../redux_toolkit/slices/cartSlice';
import {useDispatch, useSelector} from 'react-redux';
import PopupItem from '../components/PopupItem';
import {useNavigation} from '@react-navigation/native';

const PopupScreen = ({selectedProduct, onClose}) => {
  const {navigate} = useNavigation();
  const cart = useSelector(state => state.cart);
  const cartItems = cart.cartItems;
  const quantity = cart.quantity;
  const dispatch = useDispatch();

  const [isAdded, setIsAdded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleFakeTimeout = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  return (
    <View style={styles.container}>
      <View style={styles.childContainer}>
        {/* Close button */}
        <TouchableOpacity
          onPress={onClose}
          style={{position: 'absolute', top: 5, right: 10}}>
          <Text>Close</Text>
        </TouchableOpacity>

        {/* Content product*/}
        {isAdded ? (
          isLoading ? (
            <View
              style={{
                height: 300,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {handleFakeTimeout()}
              <ActivityIndicator size={'large'} />
            </View>
          ) : (
            <View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons name="ios-checkmark-circle" size={15} color="green" />
                <Text style={{color: 'green', marginLeft: 5, marginBottom: 10}}>
                  Sản phẩm đã được thêm vào giỏ hàng
                </Text>
              </View>
              <ScrollView nestedScrollEnabled style={{maxHeight: 400}}>
                <View>
                  <FlatList
                    data={cartItems}
                    renderItem={({item}) => {
                      return <PopupItem item={item} />;
                    }}
                  />
                </View>
              </ScrollView>
              <TouchableOpacity
                onPress={() => {
                  navigate('CartScreen');
                }}
                activeOpacity={0.8}
                style={styles.btnContainer}>
                <Text style={styles.btnText}>XEM GIỎ HÀNG</Text>
              </TouchableOpacity>
            </View>
          )
        ) : (
          <View>
            <View style={styles.contentContainer}>
              <Image
                style={{height: 100, width: 100}}
                source={{uri: selectedProduct.images}}
              />
              <View style={{flex: 1, marginHorizontal: 10}}>
                <Text style={{fontWeight: 'bold', textAlign: 'justify'}}>
                  {selectedProduct.name}
                </Text>
                <Text style={styles.priceText}>{selectedProduct.price}đ</Text>
              </View>
            </View>

            {/* Quantity */}
            <View style={styles.quantityContainer}>
              <Text>Chọn số lượng</Text>
              {/* Button custom */}
              <View style={{width: 100, height: 30}}>
                <QuantityButton
                  quantity={quantity}
                  removeQty={() => dispatch(removeQuantity())}
                  addQty={() => dispatch(addQuantity())}
                />
              </View>
            </View>
            <View style={styles.lineStyle} />
            <TouchableOpacity
              onPress={() => {
                dispatch(addCart(selectedProduct));
                setIsAdded(true);
              }}
              activeOpacity={0.8}
              style={styles.btnContainer}>
              <Text style={styles.btnText}>
                THÊM GIỎ HÀNG - {selectedProduct.price * quantity}đ
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default PopupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  childContainer: {
    backgroundColor: COLOR.white,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 15,
  },
  contentContainer: {
    borderWidth: 1,
    borderColor: COLOR.gray,
    flexDirection: 'row',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
  },
  priceText: {
    color: COLOR.primary,
    fontWeight: 'bold',
    marginTop: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  btnContainer: {
    width: '100%',
    bottom: 0,
    backgroundColor: COLOR.primary,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
  },
  btnText: {
    color: COLOR.white,
    fontSize: FONT_SIZE.medium,
    fontWeight: 'bold',
  },
  lineStyle: {
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: COLOR.gray,
    alignItems: 'center',
  },
});
