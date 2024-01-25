import { PropsWithChildren } from 'react';
import { Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { ICatalogItem } from '../../types/catalog';
import ActiveDot from '../Swiper/ActiveDot';
import Dot from '../Swiper/Dot';
import { styles } from './Catalog.stylesheet';
import CatalogItem from './CatalogItem';

type ICatalogProps = PropsWithChildren<{
  catalog: ICatalogItem[]
  display?: string
  navigation: any
}>


export default function Catalog({ catalog, navigation, display = 'swiper'}: ICatalogProps) {

  if (display === 'swiper') {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Наши туры</Text>
        <Text style={styles.desc}>На данный момент туристических предложений с путешествиями по России великое множество. И это может только радовать.</Text>
        <Swiper style={styles.list} dot={<Dot />} activeDot={<ActiveDot />}>
          {catalog.map((item: ICatalogItem) => <CatalogItem item={item} key={item._id} navigation={navigation}/>)}
        </Swiper>
      </View>
    );
  }

  return (
    <View style={styles.main}>
      <Text style={styles.title}>Наши туры</Text>
      <Text style={styles.desc}>На данный момент туристических предложений с путешествиями по России великое множество. И это может только радовать.</Text>
      {catalog.map((item: ICatalogItem) => <CatalogItem item={item} key={item._id} navigation={navigation}/>)}
    </View>
  );

}