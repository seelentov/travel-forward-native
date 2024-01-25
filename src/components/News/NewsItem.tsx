import type { PropsWithChildren } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { INewsItem } from '../../types/news';
import { getDDMMYYYYFromDate } from '../../utils/date/getDDMMYYYYFromDate';
import Calendar from '../Icons/Calendar';
import Eye from '../Icons/Eye';
import { styles } from './News.stylesheet';

type INewsItemProps = PropsWithChildren<{
  item: INewsItem
  navigation: any
}>

export default function NewsItem({ navigation, item }: INewsItemProps) {

  const switchScreen = () => {
    navigation.navigate('Article', {
      title: item.title,
      image: item.imageUrl,
      text: item.text
    })
  }

  return (
    <View style={styles.item}>
      <Image style={styles.itemImage} source={{ uri: item.imageUrl }} />
      <TouchableOpacity onPress={() => switchScreen()}>
        <Text style={styles.itemTitle}>{item.title}</Text>
      </TouchableOpacity>
      <Text numberOfLines={3}>{item.desc}</Text>
      <View style={styles.itemBottom}>
        <View style={styles.itemBottomBlock}>
          <Calendar />
          <Text style={styles.itemBottomText}>{getDDMMYYYYFromDate(item.createdAt)}</Text>
        </View>
        <View style={styles.itemBottomBlock}>
          <Eye />
          <Text style={styles.itemBottomText}>{item.views}</Text>
        </View>
      </View>
    </View>
  );
}