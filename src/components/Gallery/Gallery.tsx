import { Image, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import ActiveDot from '../Swiper/ActiveDot';
import Dot from '../Swiper/Dot';
import { styles } from './Gallery.stylesheet';


export default function Gallery({ images }: { images: string[] }) {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Лучшие моменты</Text>
      <Text style={styles.desc}>Мы создаём помимо хороших туров удобные условия бронирования, отличные цены и множество акций и спецпредложений.</Text>
      <Swiper style={styles.list} dot={<Dot />} activeDot={<ActiveDot />}>
        {images.map((image: string, index: number) => <Image key={index} style={styles.image} source={{ uri: image }} />)}
      </Swiper>
    </View>
  );
}