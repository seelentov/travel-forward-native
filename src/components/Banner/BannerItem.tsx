import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { IBanner } from '../../types/banner';
import { styles } from './Banner.stylesheet';

export default function BannerItem({ banner }: { banner: IBanner }) {
  return (
    <ImageBackground source={{ uri: banner.ImageBackground }} style={styles.background}>
      <View style={styles.item}>
        <Text style={styles.title}>
          {banner.title}
        </Text>
        <Text style={styles.desc}>
          {banner.desc}
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Узнать подробнее</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}