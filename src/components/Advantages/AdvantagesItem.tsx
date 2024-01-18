import { Text, View } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { styles } from './Advantages.stylesheet';
import { IAdvantage } from '../../types/advantage';

export default function AdvantagesItem({ advantage }: { advantage: IAdvantage }) {

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