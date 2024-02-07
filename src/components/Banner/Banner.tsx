import React, { PropsWithChildren } from 'react';
import { Alert, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { IBanner } from '../../types/banner';
import Loading from '../Loading/BannerLoading/BannerLoading';
import { styles } from './Banner.stylesheet';
import BannerItem from './BannerItem';

type IBannerProps = PropsWithChildren<{
  banners?: IBanner[]
  error?: boolean
  loading: boolean
  navigation: any
}>


export default function Banner({ loading, error, banners, navigation }: IBannerProps) {

  if (error) {
    Alert.alert('','Ошибка при получении каталога')
  }

  const Items = () => {

    if (loading) {
      return (
        <Loading />
      );
    }

    if (banners && !loading) {
      return (<Swiper showsPagination={false} >
        {banners.map((banner: IBanner) => <BannerItem navigation={navigation} banner={banner} key={banner.MIGX_id} />)}
      </Swiper>)
    }
  }

  return (
    <View style={styles.main}>
      <Items />
    </View>
  );
}