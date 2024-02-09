import { PropsWithChildren } from 'react';
import { Alert, Text, View } from 'react-native';
import { IAdvantage } from '../../types/advantage';
import Loading from '../Loading/BannerLoading/BannerLoading';
import { styles } from './Advantages.stylesheet';
import AdvantagesItem from './AdvantagesItem';

type IAdvantagesProps = PropsWithChildren<{
  advantages?: IAdvantage[],
  title?: string,
  loading: boolean,
  error: boolean
}>

export default function Advantages({ error, loading, advantages, title }: IAdvantagesProps) {

  if (error) {
    Alert.alert('', 'Ошибка при получении преимуществ')
  }

  const Items = () => {
    if (loading) {
      return (
        <Loading />
      );
    }

    if (advantages && !loading) {
      return (advantages.map((advantage: IAdvantage) => <AdvantagesItem advantage={advantage} key={advantage.MIGX_id} />))
    }
  }

  return (
    <View style={styles.main}>
      <Text style={styles.mainTitle}>{title || ''}</Text>
      <Items />
    </View>
  );
}