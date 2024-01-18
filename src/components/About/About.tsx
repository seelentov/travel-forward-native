import { Image, Text, View } from 'react-native';
import { styles } from './About.stylesheet';


export default function About() {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>
        «DISCOнт-тур» Выгодные туры по России
      </Text>
      <Image style={styles.image} source={require('../../../assets/about.jpeg')} />
      <Text style={styles.text}>
        Приветствуем вас друзья!
      </Text>
      <Text style={styles.text}>
        Спасибо что зашли прочитать подробную информацию про нас.
      </Text>
      <Text style={styles.text}>
        На данный момент туристических предложений с путешествиями по России великое множество. И это может только радовать.
      </Text>
      <Text style={styles.text}>
        Мы создаём помимо хороших туров удобные условия бронирования, отличные цены и множество акций и спецпредложений.
      </Text>
      <Text style={styles.text}>
        Мы хотим что бы туры по России были доступнее во всех планах.
      </Text>
      <Text style={styles.text}>
        Доступны в бронировании, стоимости и выборе.
      </Text>
    </View>
  );
}