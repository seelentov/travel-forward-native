import type { Dispatch, PropsWithChildren, SetStateAction } from 'react';
import React, { useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { IReview } from '../../types/review';
import ActiveDot from '../Swiper/ActiveDot';
import Dot from '../Swiper/Dot';
import ReviewItem from './ReviewItem';
import { styles } from './Reviews.stylesheet';

type IReviewsProps = PropsWithChildren<{
  reviews: IReview[],
  display?: string
}>

export default function Reviews({ reviews, display = 'swiper' }: IReviewsProps) {

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)




  if (display === 'swiper') {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>
          Отзывы клиентов
        </Text>
        <Text style={styles.desc}>
          Хороший отзыв – как комплимент, его нельзя купить за деньги, выпросить или обменять. Но его точно можно заслужить! Именно поэтому нам так важно ваше мнение. Ваша субъективная оценка — неоценимый мотиватор движения вперед!
        </Text>
        <Swiper style={styles.list} dot={<Dot />} activeDot={<ActiveDot />}>
          {reviews.map(((review: IReview) => <ReviewItem review={review} />))}
        </Swiper>
        <TouchableOpacity style={styles.button} onPress={() => setIsModalVisible(!isModalVisible)}>
          <Text style={styles.buttonText}>Оставить отзыв</Text>
        </TouchableOpacity>
        <ReviewsModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
      </View>
    );
  }
  return (
    <View style={styles.main}>
      <Text style={styles.title}>
        Отзывы клиентов
      </Text>
      <Text style={styles.desc}>
        Хороший отзыв – как комплимент, его нельзя купить за деньги, выпросить или обменять. Но его точно можно заслужить! Именно поэтому нам так важно ваше мнение. Ваша субъективная оценка — неоценимый мотиватор движения вперед!
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => setIsModalVisible(!isModalVisible)}>
        <Text style={styles.buttonText}>Оставить отзыв</Text>
      </TouchableOpacity>
      {reviews.map(((review: IReview) => <ReviewItem review={review} />))}
      <ReviewsModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
    </View>
  );
}


const ReviewsModal = ({ isModalVisible, setIsModalVisible }: { isModalVisible: boolean, setIsModalVisible: Dispatch<SetStateAction<boolean>> }) => {

  const [text, setText] = useState<string>('')
  const [name, setName] = useState<string>('')

  const throwMessage = () => {


    setIsModalVisible(!isModalVisible)
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => {
        setIsModalVisible(!isModalVisible);
      }}>
      <View style={styles.centeredView} >
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.buttonCloseView} onPress={() => setIsModalVisible(!isModalVisible)}>
            <Text style={styles.buttonClose}>Закрыть</Text>
          </TouchableOpacity>
          <Text style={styles.modalText}>Оставьте свой отзыв о нас!</Text>
          <TextInput
            style={styles.input}
            onChangeText={setName}
            value={name}
            placeholder='Ваше Ф.И.О.'
          />
          <TextInput
            multiline={true}
            numberOfLines={5}
            style={styles.textarea}
            onChangeText={setText}
            value={text}
            placeholder='Ваш отзыв...'
          />
          <TouchableOpacity style={styles.buttonMain} onPress={throwMessage}>
            <Text style={styles.buttonText}>Оставить отзыв</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}