import { PropsWithChildren } from 'react';
import { Text, View } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { IAdvantage } from '../../types/advantage';
import { styles } from './Advantages.stylesheet';
import { BASE_URL } from '../../store/api/api';

type IAdvantagesItemProps = PropsWithChildren<{
  advantage: IAdvantage
}>

export default function AdvantagesItem({ advantage }: IAdvantagesItemProps) {

  return (
    <View style={styles.item}>
      <SvgUri
        width="60"
        height="60"
        uri={`${BASE_URL}content/${advantage.image}`}
      />
      <View style={styles.text}>
        <Text style={styles.title}>{advantage.title}</Text>
        <Text style={styles.desc}>{advantage.text}</Text>
      </View>
    </View>
  );
}