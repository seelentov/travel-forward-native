import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView } from 'react-native';
import { RootStackParamList } from '../../App';
import Contacts from '../components/Contacts/Contacts';
import Header from '../components/Header/Header';
import Reviews from '../components/Reviews/Reviews';
import { useGetReviewsQuery } from '../store/api/reviews.api';

type IReviewsScreenProps = NativeStackScreenProps<RootStackParamList, 'Reviews'>;

export default function ReviewsScreen({ navigation, route }: IReviewsScreenProps) {

  const { data: dataReviews, isLoading: isLoadingReviews, error: errorReviews } = useGetReviewsQuery()

  return (
    <>
      <Header navigation={navigation} />
      <ScrollView>
        <Reviews reviews={dataReviews?.object} loading={isLoadingReviews} error={!!errorReviews} display='grid'/>
        <Contacts />
      </ScrollView>
    </>
  );
}

