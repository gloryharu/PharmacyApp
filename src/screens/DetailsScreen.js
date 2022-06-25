import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {get_Product_SELECTED} from '../redux_toolkit/slices/productSlice';
import {FONT_SIZE, COLOR} from '../constants';
import Foundation from 'react-native-vector-icons/Foundation';
import RowContent from '../components/RowContent';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ScrollView} from 'react-native-gesture-handler';

const DetailsScreen = props => {
  const products = useSelector(state => state.products);
  const selectedProduct = products.selectedProduct;
  const {route} = props;
  const productID = route.params.productID;
  const dispatch = useDispatch();
  // console.log(selectedProduct);
  useEffect(() => {
    dispatch(get_Product_SELECTED(productID));
  }, []);

  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View
          style={{flex: 1, backgroundColor: COLOR.white, paddingBottom: 100}}>
          <Image
            resizeMode="contain"
            style={{height: 250, width: 250, alignSelf: 'center'}}
            source={{uri: selectedProduct.images}}
          />
          <Text
            style={{
              fontSize: FONT_SIZE.medium,
              fontWeight: 'bold',
              marginHorizontal: 10,
              textAlign: 'justify',
              marginTop: 10,
            }}>
            {selectedProduct.name}
          </Text>
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
            Giá sản phẩm: {selectedProduct.price}đ
          </Text>

          <Text
            style={{
              color: COLOR.orange,
              marginHorizontal: 10,
              marginBottom: 10,
              fontSize: FONT_SIZE.small,
            }}>
            +200 điểm thành viên
          </Text>
          <View style={styles.lineStyle} />
          <View style={{marginHorizontal: 10, marginVertical: 10}}>
            <RowContent title="Danh mục" content={selectedProduct.category} />
            <RowContent title="Xuất xứ" content={selectedProduct.made_in} />
            <RowContent title="Mô tả" content={selectedProduct.desc} />
          </View>
          <View style={styles.lineStyle} />

          {/* Cam kết sản phẩm */}
          <View style={styles.bottomContainer}>
            <View style={styles.iconView}>
              <View style={styles.iconContainer}>
                <Feather
                  style={{borderRadius: 30}}
                  name="refresh-cw"
                  color={COLOR.white}
                  size={25}
                />
              </View>
              <Text style={styles.txtStyle}>
                Đổi trả trong 30 ngày kể từ ngày mua hàng
              </Text>
            </View>

            <View style={styles.iconView}>
              <View style={styles.iconContainer}>
                <AntDesign
                  style={{backgroundColor: COLOR.blue, borderRadius: 30}}
                  name="like2"
                  color={COLOR.white}
                  size={25}
                />
              </View>
              <Text style={styles.txtStyle}>Miễn phí 100% đổi thuốc</Text>
            </View>

            <View style={styles.iconView}>
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                  style={{backgroundColor: COLOR.blue, borderRadius: 30}}
                  name="truck"
                  color={COLOR.white}
                  size={25}
                />
              </View>
              <Text style={styles.txtStyle}>
                Miễn phí vận chuyển theo chính sách giao hàng
              </Text>
            </View>
          </View>

          <View style={styles.lineStyle} />

          {/* Câu hỏi thường gặp */}
          <View>
            <Text>Câu hỏi thường gặp</Text>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
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
        }}>
        <View
          style={[
            styles.iconContainer,
            {
              flex: 1,
              backgroundColor: COLOR.white,
              borderWidth: 1,
              borderColor: COLOR.primary,
              marginLeft: 10,
            },
          ]}>
          <FontAwesome name="phone" size={25} color={COLOR.primary} />
        </View>
        <TouchableOpacity
          style={{
            flex: 5,
            backgroundColor: COLOR.primary,
            borderRadius: 20,
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 10,
          }}>
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
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  iconView: {
    width: 100,
    justifyContent: 'center',
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
  txtStyle: {
    fontSize: FONT_SIZE.small,
    fontWeight: '500',
    textAlign: 'center',
  },
});
