import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  clear_Product_SELECTED,
  get_Product_SELECTED,
} from '../redux_toolkit/slices/productSlice';
import {addCart} from '../redux_toolkit/slices/cartSlice';
import {FONT_SIZE, COLOR} from '../constants';
import Foundation from 'react-native-vector-icons/Foundation';
import RowContent from '../components/RowContent';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {FlatList} from 'react-native-gesture-handler';
import {ScrollView} from 'react-native-virtualized-view';
import {QUESTIONS} from '../DUMMY_DATA';
import Question from '../components/Question';
import Policy from '../components/Policy';

const DetailsScreen = props => {
  const {navigation} = props;
  const {navigate} = navigation;
  // const productID = route.params?.item?.productID;
  const products = useSelector(state => state.products.data);
  const productID = useSelector(state => state.products.productID);
  // const selectedProduct = products.selectedProduct;

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(get_Product_SELECTED(productID));
  // }, []);

  const selectedProduct = products.find(e => e.productID === productID);

  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View
          style={{flex: 1, backgroundColor: COLOR.white, paddingBottom: 50}}>
          <Image
            resizeMode="contain"
            style={{height: 250, width: 250, alignSelf: 'center'}}
            source={{uri: selectedProduct?.images}}
          />
          <Text style={styles.nameStyle}>{selectedProduct?.name}</Text>
          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <Foundation
              style={{marginHorizontal: 10}}
              name="comments"
              size={20}
            />
            <Text style={{fontSize: FONT_SIZE.small}}>36 thảo luận</Text>
          </View>
          <Text
            style={{
              marginHorizontal: 10,
              color: COLOR.primary,
              fontWeight: '500',
            }}>
            Giá sản phẩm: {selectedProduct?.price}đ
          </Text>

          <View style={{marginHorizontal: 10, marginBottom: 10}}>
            {selectedProduct?.price >= 50000 && (
              <Text
                style={{
                  color: COLOR.orange,
                  fontSize: FONT_SIZE.small,
                }}>
                +{selectedProduct?.price / 1000} điểm thành viên
              </Text>
            )}
          </View>

          <View style={styles.lineStyle} />
          <View style={{marginHorizontal: 10, marginVertical: 10}}>
            <RowContent title="Danh mục" content={selectedProduct?.category} />
            <RowContent title="Xuất xứ" content={selectedProduct?.made_in} />
            <RowContent title="Mô tả" content={selectedProduct?.desc} />
          </View>
          <View style={styles.lineStyle} />

          {/* Cam kết sản phẩm */}
          <Policy />

          <View style={styles.lineStyle} />

          {/* Câu hỏi thường gặp */}
          <View style={{flex: 1}}>
            <Text
              style={{
                fontSize: FONT_SIZE.medium,
                marginTop: 10,
                marginLeft: 10,
                fontWeight: 'bold',
              }}>
              Câu hỏi thường gặp
            </Text>
            <FlatList
              contentContainerStyle={{
                marginVertical: 20,
                marginHorizontal: 10,
              }}
              data={QUESTIONS}
              renderItem={({item}) => <Question item={item} />}
            />
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={[styles.iconContainer, styles.btnPhone]}>
          <FontAwesome name="phone" size={25} color={COLOR.primary} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            dispatch(addCart(selectedProduct));
            navigate('CartScreen');
          }}
          activeOpacity={0.8}
          style={styles.btnBuy}>
          <Text style={{color: COLOR.white, fontWeight: 'bold'}}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  lineStyle: {
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: COLOR.gray,
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLOR.blue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  nameStyle: {
    fontSize: FONT_SIZE.medium,
    fontWeight: 'bold',
    marginHorizontal: 10,
    textAlign: 'justify',
    marginTop: 10,
  },
  btnBuy: {
    flex: 5,
    backgroundColor: COLOR.primary,
    borderRadius: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  btnPhone: {
    flex: 1,
    backgroundColor: COLOR.white,
    borderWidth: 1,
    borderColor: COLOR.primary,
    marginLeft: 10,
  },
  bottomContainer: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 1,
    backgroundColor: COLOR.white,
    borderColor: COLOR.gray,
    alignItems: 'center',
    elevation: 5,
  },
});
