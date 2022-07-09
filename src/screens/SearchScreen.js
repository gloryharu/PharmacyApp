import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLOR} from '../constants';
import {useDispatch, useSelector} from 'react-redux';
import {
  search_Product_SUCCESS,
  get_Product_ID,
} from '../redux_toolkit/slices/productSlice';

const SearchScreen = ({navigation}) => {
  const {navigate} = navigation;
  const products = useSelector(state => state.products);
  const search_Products = products.search_Products;
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    searchText ? dispatch(search_Product_SUCCESS(searchText)) : null;
  }, [searchText]);

  return (
    <View style={{flex: 1}}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={23} />
        <TextInput
          autoFocus={true}
          value={searchText}
          onChangeText={text => setSearchText(text)}
          style={{flex: 1}}
          placeholder="Bạn muốn mua thuốc gì?"
        />
        <Ionicons
          onPress={() => setSearchText('')}
          name="ios-close-circle"
          size={23}
          color={'gray'}
        />
      </View>

      {/* <Button
      title="Search"
      onPress={() => {
        if (!searchText) {
          return alert('Not Found');
        } else {
          dispatch(search_Product_SUCCESS(searchText));
        }
      }}
    /> */}

      {searchText.length >= 1 && (
        <FlatList
          data={search_Products}
          contentContainerStyle={{marginHorizontal: 10}}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigate('DetailsScreen', {name: item.category});
                  dispatch(get_Product_ID(item.productID));
                }}
                activeOpacity={0.8}
                style={styles.itemContainer}>
                <Image
                  style={{height: 50, width: 50}}
                  source={{uri: item.images}}
                />
                <View style={{flex: 1, marginHorizontal: 10}}>
                  <Text>{item.name}</Text>
                  <Text>{item.price}đ</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: COLOR.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  itemContainer: {
    // height:80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: COLOR.white,
    borderRadius: 10,
    padding: 10,
    elevation: 3,
  },
});
