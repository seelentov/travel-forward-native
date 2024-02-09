import { PropsWithChildren, useState } from 'react';
import { Alert, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { sendMail } from '../../utils/form/sendMail';
import { styles } from './CTA.stylesheet';
import { useStoreBy } from '../../hooks/useStoreBy';

type ICTAProps = PropsWithChildren<{
  formTitle?: string
}>

export default function CTA({ formTitle = 'Основная форма' }: ICTAProps) {
  const [number, setNumber] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

  const { data } = useStoreBy('text')

  const throwMessage = () => {

    if (!number) {
      return Alert.alert('', 'Введите телефон для отправки заявки')
    }

    const body = /*html*/`
      <h3>Заявка из мобильного приложения</h3>
      <span><strong>Страница заявки:</strong> ${formTitle}</span><br />
      <span><strong>Имя:</strong> ${name}</span><br />
      <span><strong>Номер телефона:</strong> ${number}</span><br />
    `

    sendMail(formTitle, body)
    setIsModalVisible(false)
  }



  return (
    <View style={styles.main}>
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
            <Text style={styles.modalText}>Введите номер телефона, нажмите на кнопку ниже и мы свяжемся с Вами в ближайшее время!</Text>
            <TextInput
              style={styles.input}
              onChangeText={setName}
              value={name}
              placeholder='Владимир'
            />
            <TextInput
              style={styles.input}
              onChangeText={setNumber}
              value={number}
              placeholder='+7 999-999-99-99'
              keyboardType="numeric"
            />
            <TouchableOpacity style={styles.buttonMain} onPress={throwMessage}>
              <Text style={styles.buttonText}>Заказать звонок</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Text style={styles.title}>
        {data?.cta}
      </Text>
      <TouchableOpacity style={styles.buttonMain} onPress={() => setIsModalVisible(!isModalVisible)}>
        <Text style={styles.buttonText}>Заказать звонок</Text>
      </TouchableOpacity>
    </View>
  );
}