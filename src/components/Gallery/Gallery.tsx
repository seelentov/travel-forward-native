import { Alert, Image, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { useStoreBy } from '../../hooks/useStoreBy';
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

  const { data } = useStoreBy('text')

  if (error) {
    Alert.alert('', 'Ошибка при получении галереи изображений')
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
      <Text style={styles.title}>{data?.gallery_title}</Text>
      <Text style={styles.desc}>{data?.gallery_text}</Text>
      <Items />
    </View>
  );
}