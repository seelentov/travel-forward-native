import type { PropsWithChildren } from 'react';
import { Alert, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { useStoreBy } from '../../hooks/useStoreBy';
import { INewsItem } from '../../types/news';
import Loading from '../Loading/BannerLoading/BannerLoading';
import ActiveDot from '../Swiper/ActiveDot';
import Dot from '../Swiper/Dot';
import { styles } from './News.stylesheet';
import NewsItem from './NewsItem';

type INewsProps = PropsWithChildren<{
  news?: INewsItem[]
  display?: string
  navigation: any
  loading: boolean
  error: boolean
}>

export default function News({ error, loading, navigation, news, display = 'swiper' }: INewsProps) {

  const { data } = useStoreBy('text')

  if (error) {
    Alert.alert('', 'Ошибка при получении новостей')
  }

  const Items = () => {
    if (loading) {
      return (
        <Loading />
      );
    }

    if (display === 'swiper' && news) {
      return (
        <Swiper style={styles.list} dot={<Dot />} activeDot={<ActiveDot />}>
          {news.map((item: INewsItem) => <NewsItem navigation={navigation} item={item} key={item.id} />)}
        </Swiper>
      );
    }

    if (news) {
      return news.map((item: INewsItem) => <NewsItem navigation={navigation} item={item} key={item.id} />)

    }
  }

  return (
    <View style={styles.main}>
      <Text style={styles.title}>{data?.news_title}</Text>
      <Items />
    </View>
  );

}