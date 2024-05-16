import { Image, Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { IReview } from '../../types/review';

import { Dispatch, SetStateAction, useState } from 'react';
import Star from '../Icons/Star';
import { styles } from './Reviews.stylesheet';


type IReviewItemProps = {
  review: IReview
}

export default function ReviewItem({ review }: IReviewItemProps) {

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

  return (
    <>
      <ReviewItemMore review={review} setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible} />

      <View style={styles.item}>
        <View style={styles.user}>
          <Image style={styles.userImage} source={{ uri: review.avatar }} />
          <Text style={styles.userName}>
            {review.pagetitle}
          </Text>
        </View>
        <Text numberOfLines={1}>
          {review.review_text}
        </Text>
        <TouchableOpacity style={styles.itemButton} onPress={() => setIsModalVisible(true)}>
          <Text style={styles.itemButtonText}>Весь отзыв</Text>
        </TouchableOpacity>
        <View style={styles.bottom}>
          <Text style={styles.date}>{review.publishedon}</Text>
          <ReviewItemStars rating={review.rating} />
        </View>
      </View>
    </>
  );
}


const ReviewItemStars = ({ rating }: { rating: number }) => {

  const fillStar = Array.from({ length: rating }, () => <Star />);

  return (
    <View style={styles.rating}>
      {fillStar.map((image) => image)}
    </View>
  )
}



const ReviewItemMore = ({ review, setIsModalVisible, isModalVisible }: { review: IReview, isModalVisible: boolean, setIsModalVisible: Dispatch<SetStateAction<boolean>> }) => {


  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => {
        setIsModalVisible(!isModalVisible);
      }}>
      <View style={styles.centeredView} >
        <View style={styles.modalViewReview}>
          <TouchableOpacity style={styles.buttonCloseViewReview} onPress={() => setIsModalVisible(!isModalVisible)}>
            <Text style={styles.buttonClose}>Закрыть</Text>
          </TouchableOpacity>
          <View style={styles.item}>
            <View style={styles.user}>
              <Image style={styles.userImage} source={{ uri: review.avatar }} />
              <Text style={styles.userName}>
                {review.pagetitle}
              </Text>
            </View>
            <ScrollView>
              <Text>{review.review_text}</Text>
            </ScrollView>
            <View style={styles.bottom}>
              <Text style={styles.date}>{review.publishedon}</Text>
              <ReviewItemStars rating={review.rating} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  )
}