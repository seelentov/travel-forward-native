import React from 'react';
import { View } from 'react-native';
import Swiper from 'react-native-swiper';
import { styles } from './Banner.stylesheet';
import BannerItem from './BannerItem';


export default function Banner({ banners }: { banners: any }) {
  return (
    <View style={styles.main}>
      <Swiper showsPagination={false} >
        {banners.map((banner: any) => <BannerItem banner={banner} key={banner.id} />)}
      </Swiper>
    </View>

  );
}