import type { PropsWithChildren } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { INewsItem } from '../../types/news';
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
      title: item.pagetitle,
      image: item.image,
      text: item.text
    })
  }

  return (
    <View style={styles.item}>
      <Image style={styles.itemImage} source={{ uri: item.image }} />
      <TouchableOpacity onPress={() => switchScreen()}>
        <Text style={styles.itemTitle}>{item.pagetitle}</Text>
      </TouchableOpacity>
      <Text numberOfLines={3}>{item.description}</Text>
      <View style={styles.itemBottom}>
        <View style={styles.itemBottomBlock}>
          <Calendar />
          <Text style={styles.itemBottomText}>{item.createdon}</Text>
        </View>
        <View style={styles.itemBottomBlock}>
          <Eye />
          <Text style={styles.itemBottomText}>{item.views}</Text>
        </View>
      </View>
    </View>
  );
}