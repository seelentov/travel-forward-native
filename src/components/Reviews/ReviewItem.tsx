import type { PropsWithChildren } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { IReview } from '../../types/review';
import { getDDMMYYYYFromDate } from '../../utils/date/getDDMMYYYYFromDate';
import Star from '../Icons/Star';
import { styles } from './Reviews.stylesheet';


type IReviewItemProps = PropsWithChildren<{
  review: IReview
}>

export default function ReviewItem({ review }: IReviewItemProps) {
  return (
    <View style={styles.item}>
      <View style={styles.user}>
        <Image style={styles.userImage} source={{ uri: review.person.imageUrl }} />
        <Text style={styles.userName}>
          {review.person.name}
        </Text>
      </View>
      <Text numberOfLines={3}>
        {review.text}
      </Text>
      <TouchableOpacity style={styles.itemButton}>
        <Text style={styles.itemButtonText}>Весь отзыв</Text>
      </TouchableOpacity>
      <View style={styles.bottom}>
        <Text style={styles.date}>{getDDMMYYYYFromDate(review.createdAt)}</Text>
        <ReviewItemStars rating={review.rating} />
      </View>
    </View>
  );
}


const ReviewItemStars = ({ rating }: PropsWithChildren<{ rating: number }>) => {

  const fillStar = Array.from({ length: rating }, () => <Star />);

  return (
    <View style={styles.rating}>
      {fillStar.map((image) => image)}
    </View>
  )
}