import React from 'react';
import { Alert, Linking, Text, TouchableOpacity, View } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { useStoreBy } from '../../hooks/useStoreBy';
import { BASE_URL } from '../../store/api/api';
import { useGetContactsQuery } from '../../store/api/contacts.api';
import { ContactsSocial } from '../../types/contacts';
import Location from '../Icons/Location';
import Phone from '../Icons/Phone';
import Time from '../Icons/Time';
import Loading from '../Loading/BannerLoading/BannerLoading';
import { styles } from './Contacts.stylesheet';


export default function Contacts() {

  const { data, isLoading, error } = useGetContactsQuery()

  const { data: dataText } = useStoreBy('text')

  const Social = ({ socialItems }: { socialItems: ContactsSocial[] }) => {
    return (<View style={styles.social}>
      {socialItems.map((social, index) => <TouchableOpacity key={index} onPress={() => Linking.openURL(social.link)}><SvgUri
        width="40"
        height="40"
        uri={`${BASE_URL}content/${social.icon}`}
      /></TouchableOpacity>
      )}
    </View>)
  }

  if (error) {
    Alert.alert('', 'Ошибка при получении контактной информации')
  }

  if (isLoading) {
    return <Loading />
  }

  if (!isLoading && data) {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>{dataText?.contacts_title}</Text>
        <View style={styles.block}>
          <Location />
          <Text style={styles.blockText}>{data?.object?.address}</Text>
        </View>
        <TouchableOpacity style={styles.block} onPress={() => Linking.openURL(`tel:${data?.object?.number}`)}>
          <Phone />
          <Text style={styles.blockText}>{data?.object?.number}</Text>
        </TouchableOpacity>
        <View style={styles.block}>
          <Time />
          <Text style={styles.blockText}>{data?.object?.worktime}</Text>
        </View>
        <View style={styles.blockSocial}>
          <Social socialItems={data?.object?.social} />
        </View>
      </View>
    );
  }

}