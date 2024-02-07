import { Alert, Image, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { BASE_URL } from '../../store/api/api';
import Loading from '../Loading/BannerLoading/BannerLoading';
import ActiveDot from '../Swiper/ActiveDot';
import Dot from '../Swiper/Dot';
import { styles } from './Gallery.stylesheet';

type ICatalogProps = {
  images?: string[]
  error?: boolean
  loading: boolean
}


export default function Gallery({ images, error, loading }: ICatalogProps) {

  if (error) {
    Alert.alert('','Ошибка при получении галереи изображений')
  }

  const Items = () => {

    if (loading) {
      return (
        <Loading />
      );
    }

    if (images && !error) {
      return (
        <Swiper style={styles.list} dot={<Dot />} activeDot={<ActiveDot />}>
          {images.map((image: string, index: number) => <Image key={index} style={styles.image} source={{ uri: `${BASE_URL}${image}` }} />)}
        </Swiper>
      );
    }

  }

  return (
    <View style={styles.main}>
      <Text style={styles.title}>Лучшие моменты</Text>
      <Text style={styles.desc}>Мы создаём помимо хороших туров удобные условия бронирования, отличные цены и множество акций и спецпредложений.</Text>
      <Items />
    </View>
  );
}