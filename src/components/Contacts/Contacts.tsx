import { Linking, Text, TouchableOpacity, View } from 'react-native';
import Location from '../Icons/Location';
import Phone from '../Icons/Phone';
import Telegram from '../Icons/Telegram';
import Time from '../Icons/Time';
import VKontakte from '../Icons/VKontakte';
import WhatsApp from '../Icons/WhatsApp';
import { styles } from './Contacts.stylesheet';


export default function Contacts() {

  const call = () => {
    Linking.openURL('tel:+79517822401');
  }

  const openVK = () => {
    Linking.openURL('https://vk.com/discount.tour_online');
  }

  const openTelegram = () => {
    Linking.openURL('https://t.me/Lavrov_alx');
  }

  const openWhatsApp = () => {
    Linking.openURL('https://api.whatsapp.com/send?phone=79517822401');
  }

  return (
    <View style={styles.main}>
      <Text style={styles.title}>Контактная информация</Text>
      <View style={styles.block}>
        <Location />
        <Text style={styles.blockText}>г. Москва, ул. Космонавтов, д. 6</Text>
      </View>
      <TouchableOpacity style={styles.block} onPress={call}>
        <Phone />
        <Text style={styles.blockText}>+7 (951) 782-24-01</Text>
      </TouchableOpacity>
      <View style={styles.block}>
        <Time />
        <Text style={styles.blockText}>Пн-Пт с 9:00 до 18:00</Text>
      </View>
      <View style={styles.blockSocial}>
        <View style={styles.social}>
          <TouchableOpacity onPress={openVK}><VKontakte /></TouchableOpacity>
          <TouchableOpacity onPress={openTelegram}><Telegram /></TouchableOpacity>
          <TouchableOpacity onPress={openWhatsApp}><WhatsApp /></TouchableOpacity>
        </View>
      </View>

    </View>
  );
}