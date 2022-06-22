import {
  StyleSheet,
  Text,
  View,

  FlatList,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {COLOR, FONT_SIZE} from '../constants';

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
            return (
              <View style={{flex: 1 / 2, justifyContent: 'space-between'}}>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: COLOR.white,
                    alignItems: 'center',
                    flexDirection: 'row',
                    borderRadius: 25,
                    padding: 5,
                    margin: 5,
                    elevation: 3,
                  }}>
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
          contentContainerStyle={{marginHorizontal: 5, marginVertical: 10}}
          numColumns={3}
          data={products.filterProduct}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => navigate('DetailsScreen', {name: item.category})}
                activeOpacity={0.8}
                style={{
                  flex: 1 / 3,
                  justifyContent: 'space-between',
                  margin: 5,
                  height: 250,
                  backgroundColor: COLOR.white,
                  borderRadius: 5,
                  elevation: 1,
                  borderWidth: 1,
                  borderColor: COLOR.gray,
                  paddingHorizontal: 10,
                }}>
                <Image
                  style={{
                    height: 80,
                    width: 80,
                    marginVertical: 10,
                    alignSelf: 'center',
                  }}
                  source={{uri: item.images}}
                />

                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: FONT_SIZE.small,
                    marginVertical: 10,
                  }}>
                  {item.name.substring(0, Math.min(item.name.length, 35))} ...
                </Text>
                <Text
                  style={{
                    color: COLOR.primary,
                    fontSize: FONT_SIZE.medium,
                    fontWeight: '500',
                  }}>
                  {item.price}đ
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setIsVisible(true);
                    setSelectedProduct(item);
                  }}
                  activeOpacity={0.5}
                  style={{
                    borderRadius: 10,
                    backgroundColor: COLOR.white,
                    borderWidth: 2,
                    borderColor: COLOR.gray,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 5,
                    marginVertical: 10,
                  }}>
                  <Text>Đặt hàng</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Modal animationType="fade" transparent visible={isVisible}>
        <View style={{flex: 1, backgroundColor: COLOR.blackOpacity}}>
          <View
            style={{
              backgroundColor: COLOR.white,
              position: 'absolute',
              bottom: 0,
              width: '100%',
              height: '50%',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              paddingHorizontal: 20,
              paddingVertical: 30,
            }}>
            <TouchableOpacity
              onPress={() => {
                setIsVisible(false);
              }}
              style={{position: 'absolute', top: 5, right: 10}}>
              <Text>Close</Text>
            </TouchableOpacity>
            <View
              style={{
                borderWidth: 1,
                borderColor: COLOR.gray,
                flexDirection: 'row',
                borderRadius: 15,
                padding: 10,
                alignItems: 'center',
              }}>
              <Image
                style={{height: 100, width: 100}}
                source={{uri: selectedProduct.images}}
              />
              <View style={{flex: 1, marginHorizontal: 10}}>
                <Text style={{fontWeight: 'bold', textAlign: 'justify'}}>
                  {selectedProduct.name}
                </Text>
                <Text
                  style={{
                    color: COLOR.primary,
                    fontWeight: 'bold',
                    marginTop: 5,
                  }}>
                  {selectedProduct.price}đ
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
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
