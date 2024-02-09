import { PropsWithChildren } from 'react';
import { Alert, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { ICatalogItem } from '../../types/catalog';
import Loading from '../Loading/BannerLoading/BannerLoading';
import ActiveDot from '../Swiper/ActiveDot';
import Dot from '../Swiper/Dot';
import { styles } from './Catalog.stylesheet';
import CatalogItem from './CatalogItem';
import { useStoreBy } from '../../hooks/useStoreBy';

type ICatalogProps = PropsWithChildren<{
  catalog?: ICatalogItem[]
  display?: string
  error?: boolean
  loading: boolean
  navigation: any
}>


export default function Catalog({ error, catalog, loading, navigation, display = 'swiper' }: ICatalogProps) {

  const { data } = useStoreBy('text')

  if (error) {
    Alert.alert('', 'Ошибка при получении списка туров')
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
      <Text style={styles.title}>{data?.catalog_title}</Text>
      <Text style={styles.desc}>{data?.catalog_text}</Text>
      <Items />
    </View>
  )




}