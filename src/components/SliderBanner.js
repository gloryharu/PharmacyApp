import * as React from 'react';
import {View, Dimensions, Text, Image} from 'react-native';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';
import {IMAGES} from '../assets/images';
const SCREEN_WIDTH = Dimensions.get('screen').width;

const bannerArray = [
  IMAGES.banner1,
  IMAGES.banner2,
  IMAGES.banner3,
  IMAGES.banner4,
  IMAGES.banner5,
  IMAGES.banner6,
  IMAGES.banner7,
  IMAGES.banner8,
];

function SliderBanner() {
  return (
    <View style={{marginVertical: 15}}>
      <Carousel
        height="160"
        width={SCREEN_WIDTH}
        autoPlay={true}
        data={bannerArray}
        autoPlayInterval={2000}
        renderItem={({index}) => (
          <View style={{alignItems: 'center'}}>
            <Image
              resizeMode="stretch"
              style={{
                height: '100%',
                width: SCREEN_WIDTH * 0.93,
                borderRadius: 20,
              }}
              source={bannerArray[index]}
            />
          </View>
        )}
      />
    </View>
  );
}

export default SliderBanner;
