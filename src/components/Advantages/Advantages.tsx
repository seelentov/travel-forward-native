import { PropsWithChildren } from 'react';
import { Text, View } from 'react-native';
import { IAdvantage } from '../../types/advantage';
import { styles } from './Advantages.stylesheet';
import AdvantagesItem from './AdvantagesItem';

type IAdvantagesProps = PropsWithChildren<{
  advantages: IAdvantage[],
  title: string
}>

export default function Advantages({ advantages, title }: IAdvantagesProps) {
  return (
    <View style={styles.main}>
      <Text style={styles.mainTitle}>{title}</Text>
      {advantages.map((advantage: IAdvantage) => <AdvantagesItem advantage={advantage} key={advantage._id} />)}
    </View>
  );
}