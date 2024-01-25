import { PropsWithChildren } from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { IBanner } from '../../types/banner';
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
    <ImageBackground source={{ uri: banner.ImageBackground }} style={styles.background}>
      <View style={styles.item}>
        <Text style={styles.title}>
          {banner.title}
        </Text>
        <Text style={styles.desc}>
          {banner.desc}
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => switchScreen()}>
          <Text style={styles.buttonText}>Узнать подробнее</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}