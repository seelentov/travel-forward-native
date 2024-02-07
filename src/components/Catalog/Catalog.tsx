import { PropsWithChildren } from 'react';
import { Alert, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { ICatalogItem } from '../../types/catalog';
import ActiveDot from '../Swiper/ActiveDot';
import Dot from '../Swiper/Dot';
import { styles } from './Catalog.stylesheet';
import CatalogItem from './CatalogItem';
import Loading from '../Loading/BannerLoading/BannerLoading';

type ICatalogProps = PropsWithChildren<{
  catalog?: ICatalogItem[]
  display?: string
  error?: boolean
  loading: boolean
  navigation: any
}>


export default function Catalog({ error, catalog, loading, navigation, display = 'swiper' }: ICatalogProps) {

  if (error) {
    Alert.alert('','Ошибка при получении списка туров')
  }

  const Items = () => {

    if (loading) {
      return (
        <Loading />
      );
    }

    if (display === 'swiper' && catalog) {
      return (
        <Swiper style={styles.list} dot={<Dot />} activeDot={<ActiveDot />}>
          {catalog.map((item: ICatalogItem) => <CatalogItem item={item} key={item.id} navigation={navigation} />)}
        </Swiper>
      );
    }

    if (catalog) {
      return <View>
        {catalog.map((item: ICatalogItem) => <CatalogItem item={item} key={item.id} navigation={navigation} />)}
      </View>
    }

  }


  return (
    <View style={styles.main}>
      <Text style={styles.title}>Наши туры</Text>
      <Text style={styles.desc}>На данный момент туристических предложений с путешествиями по России великое множество. И это может только радовать.</Text>
      <Items />
    </View>
  )




}