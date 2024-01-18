import { Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import Dot from '../Swiper/Dot';
import { styles } from './Catalog.stylesheet';
import CatalogItem from './CatalogItem';
import ActiveDot from '../Swiper/ActiveDot';


export default function Catalog({ catalog }: { catalog: any }) {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Наши туры</Text>
      <Text style={styles.desc}>На данный момент туристических предложений с путешествиями по России великое множество. И это может только радовать.</Text>
      <Swiper style={styles.list} dot={<Dot />} activeDot={<ActiveDot />}>
        {catalog.map((item: any) => <CatalogItem item={item} key={item.id} />)}
      </Swiper>
    </View>

  );
}