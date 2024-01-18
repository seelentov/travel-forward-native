import { Text, View } from 'react-native';
import { styles } from './Advantages.stylesheet';
import AdvantagesItem from './AdvantagesItem';


export default function Advantages({ advantages, title }: { advantages: any, title: string }) {
  return (
    <View style={styles.main}>
      <Text style={styles.mainTitle}>{title}</Text>
      {advantages.map((advantage: any) => <AdvantagesItem advantage={advantage} key={advantage.id} />)}
    </View>
  );
}