import React from 'react';
import { View } from 'react-native';
import Swiper from 'react-native-swiper';
import { IBanner } from '../../types/banner';
import { styles } from './Banner.stylesheet';
import BannerItem from './BannerItem';


export default function Banner({ banners }: { banners: IBanner[] }) {
  return (
    <View style={styles.main}>
      <Swiper showsPagination={false} >
        {banners.map((banner: IBanner) => <BannerItem banner={banner} key={banner._id} />)}
      </Swiper>
    </View>

  );
}