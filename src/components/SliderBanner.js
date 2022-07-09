import React from 'react';
import {View, Dimensions, Image} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Carousel from 'react-native-reanimated-carousel';
import {IMAGES} from '../assets/images';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const bannerArray = [
  IMAGES.banners.banner1,
  IMAGES.banners.banner2,
  IMAGES.banners.banner3,
  IMAGES.banners.banner4,
  IMAGES.banners.banner5,
  IMAGES.banners.banner6,
  IMAGES.banners.banner7,
  IMAGES.banners.banner8,
];

function SliderBanner() {
  return (
    <GestureHandlerRootView>
      <View style={{marginVertical: 15}}>
        <Carousel
          data={bannerArray}
          height={SCREEN_WIDTH / 2}
          width={SCREEN_WIDTH}
          autoPlay={true}
          autoPlayInterval={2000}
          renderItem={({item}) => (
            <View style={{flex: 1, alignItems: 'center'}}>
              <Image
                resizeMode="stretch"
                style={{
                  height: SCREEN_WIDTH / 2,
                  width: SCREEN_WIDTH * 0.93,
                  borderRadius: 20,
                }}
                source={item}
              />
            </View>
          )}
        />
      </View>
    </GestureHandlerRootView>
  );
}

export default SliderBanner;
