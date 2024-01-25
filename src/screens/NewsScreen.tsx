import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView } from 'react-native';
import { RootStackParamList } from '../../App';
import Contacts from '../components/Contacts/Contacts';
import Header from '../components/Header/Header';
import News from '../components/News/News';
import { newsItems } from '../test/data/news';

type INewsScreenProps = NativeStackScreenProps<RootStackParamList, 'News'>;

export default function NewsScreen({ navigation, route }: INewsScreenProps) {

  return (
    <>
      <Header navigation={navigation} />
      <ScrollView>
        <News news={newsItems} navigation={navigation} display='grid' />
        <Contacts />
      </ScrollView>
    </>
  );
}

