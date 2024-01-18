import { Image, Text, View } from 'react-native';
import { styles } from './Advantages.stylesheet';
import { SvgUri } from 'react-native-svg';

export default function AdvantagesItem({ advantage }: { advantage: any }) {

  return (
    <View style={styles.item}>
      <SvgUri
      width="60"
      height="60"
      uri={advantage.iconUrl}
      />
      <View style={styles.text}>
        <Text style={styles.title}>{advantage.title}</Text>
        <Text style={styles.desc}>{advantage.desc}</Text>
      </View>
    </View>
  );
}