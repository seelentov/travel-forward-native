import type { PropsWithChildren } from 'react';
import { Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { INewsItem } from '../../types/news';
import ActiveDot from '../Swiper/ActiveDot';
import Dot from '../Swiper/Dot';
import { styles } from './News.stylesheet';
import NewsItem from './NewsItem';

type INewsProps = PropsWithChildren<{
  news: INewsItem[]
  display?: string
  navigation: any
}>

export default function News({ navigation, news, display = 'swiper' }: INewsProps) {

  if (display === 'swiper') {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Новости</Text>
        <Swiper style={styles.list} dot={<Dot />} activeDot={<ActiveDot />}>
          {news.map((item: INewsItem) => <NewsItem navigation={navigation} item={item} key={item._id} />)}
        </Swiper>
      </View>
    );
  }


  return (
    <View style={styles.main}>
      <Text style={styles.title}>Новости</Text>
      {news.map((item: INewsItem) => <NewsItem navigation={navigation} item={item} key={item._id} />)}
    </View>
  );

}