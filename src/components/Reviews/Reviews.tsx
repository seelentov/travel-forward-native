import type { Dispatch, PropsWithChildren, SetStateAction } from 'react';
import React, { useState } from 'react';
import { Alert, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { useStoreBy } from '../../hooks/useStoreBy';
import { IReview } from '../../types/review';
import { sendMail } from '../../utils/form/sendMail';
import Loading from '../Loading/BannerLoading/BannerLoading';
import ActiveDot from '../Swiper/ActiveDot';
import Dot from '../Swiper/Dot';
import ReviewItem from './ReviewItem';
import { styles } from './Reviews.stylesheet';

type IReviewsProps = PropsWithChildren<{
  reviews?: IReview[],
  display?: string,
  error?: boolean
  loading: boolean
}>

export default function Reviews({ error, loading, reviews, display = 'swiper' }: IReviewsProps) {

  const { data } = useStoreBy('text')

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

  if (error) {
    Alert.alert('', 'Ошибка при получении отзывов')
  }

  const Items = () => {

    if (loading) {
      return (
        <Loading />
      );
    }

    if (display === 'swiper' && reviews) {
      return (
        <Swiper style={styles.list} dot={<Dot />} activeDot={<ActiveDot />}>
          {reviews.map(((review: IReview) => <ReviewItem review={review} />))}
        </Swiper>
      );
    }
    if (reviews) {
      return (
        reviews.map(((review: IReview) => <ReviewItem key={review.id} review={review} />))
      );
    }
  }

  return (
    <><ReviewsModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
      <View style={styles.main}>
        <Text style={styles.title}>
          {data?.reviews_title}
        </Text>
        <Text style={styles.desc}>
          {data?.reviews_text}
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => setIsModalVisible(!isModalVisible)}>
          <Text style={styles.buttonText}>Оставить отзыв</Text>
        </TouchableOpacity>
        <Items />
      </View>
    </>
  );


}


const ReviewsModal = ({ isModalVisible, setIsModalVisible }: { isModalVisible: boolean, setIsModalVisible: Dispatch<SetStateAction<boolean>> }) => {

  const [text, setText] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [stars, setStars] = useState<string>('')

  const throwMessage = () => {
    if (!name || !text || !stars) {
      return Alert.alert('', 'Введите имя, текст и оценку для отзыва')
    }

    const body = /*html*/`
      <h3>Отзыв из мобильного приложения</h3>
      <span><strong>Имя:</strong> ${name}</span><br />
      <span><strong>Текст отзыва:</strong> ${text}</span><br />
      <span><strong>Оценка:</strong> ${stars}</span><br />
    `

    sendMail('Отзыв из мобильного приложения', body)
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
          <TextInput
            style={styles.input}
            onChangeText={setStars}
            value={stars}
            placeholder='Оценка: 1-5'
            keyboardType="numeric"
            maxLength={1}
          />
          <TouchableOpacity style={styles.buttonMain} onPress={throwMessage}>
            <Text style={styles.buttonText}>Оставить отзыв</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}