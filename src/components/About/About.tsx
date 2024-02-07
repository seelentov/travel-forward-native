import { Alert, Image, Text, View } from 'react-native';
import { useGetAboutQuery } from '../../store/api/about.api';
import { styles } from './About.stylesheet';
import Loading from '../Loading/BannerLoading/BannerLoading';


export default function About() {

  const { data, isLoading, error } = useGetAboutQuery()

  if (error) {
    Alert.alert('','Ошибка при получении информации о компании')
  }


  if (isLoading) {
    return (
      <Loading />
    )
  }

  if (!isLoading && data) {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>
          {data.object.title}
        </Text>
        <Image style={styles.image} source={{ uri: data.object.image }} />
        <Text style={styles.text}>
          {data.object.text}
        </Text>
      </View>
    )
  };
}