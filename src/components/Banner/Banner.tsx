import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';
import Swiper from 'react-native-swiper';
import { IBanner } from '../../types/banner';
import { styles } from './Banner.stylesheet';
import BannerItem from './BannerItem';

type IBannerProps = PropsWithChildren<{
  banners: IBanner[]
  navigation: any
}>


export default function Banner({ banners, navigation }: IBannerProps) {
  return (
    <View style={styles.main}>
      <Swiper showsPagination={false} >
        {banners.map((banner: IBanner) => <BannerItem navigation={navigation}banner={banner} key={banner._id} />)}
      </Swiper>
    </View>

  );
}