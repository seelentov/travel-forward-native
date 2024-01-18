import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './CTA.stylesheet';


export default function CTA() {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>
        Хотите узнать о туре подробнее?
      </Text>
      <Text style={styles.desc}>
        Заполните форму и мы подберем полходящий Вам тур
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Заказать звонок</Text>
      </TouchableOpacity>
    </View>
  );
}