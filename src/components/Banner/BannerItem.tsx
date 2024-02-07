import { PropsWithChildren } from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { BASE_URL } from '../../store/api/api';
import { IBanner } from '../../types/banner';
import { removeHTMLTags } from '../../utils/string/removeHTMLTags';
import { styles } from './Banner.stylesheet';

type IBannerItemProps = PropsWithChildren<{
  banner: IBanner
  navigation: any
}>

export default function BannerItem({ banner, navigation }: IBannerItemProps) {

  const switchScreen = () => {
    navigation.navigate('Catalog')
  }

  return (
    <ImageBackground source={{ uri: `${BASE_URL}content/${banner.background}` }} style={styles.background}>
      <View style={styles.item}>
        <Text style={styles.title}>
          {removeHTMLTags(banner.title)}
        </Text>
        <Text style={styles.desc}>
          {banner.subtitle}
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => switchScreen()}>
          <Text style={styles.buttonText}>Узнать подробнее</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}