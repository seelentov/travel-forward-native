import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView } from 'react-native';
import { RootStackParamList } from '../../App';
import Contacts from '../components/Contacts/Contacts';
import Header from '../components/Header/Header';
import Reviews from '../components/Reviews/Reviews';
import { reviews } from '../test/data/review';

type IReviewsScreenProps = NativeStackScreenProps<RootStackParamList, 'Reviews'>;

export default function ReviewsScreen({ navigation, route }: IReviewsScreenProps) {

  return (
    <>
      <Header navigation={navigation} />
      <ScrollView>
        <Reviews reviews={reviews} display='grid' />
        <Contacts />
      </ScrollView>
    </>
  );
}

