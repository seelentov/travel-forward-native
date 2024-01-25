import { PropsWithChildren, useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './CTA.stylesheet';

type ICTAProps = PropsWithChildren<{
  formTitle?: string
}>

export default function CTA({ formTitle = 'Основная форма' }: ICTAProps) {
  const [number, setNumber] = useState<string>('')
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

  const throwMessage = () => {
    
    setIsModalVisible(!isModalVisible)
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
        Хотите узнать подробнее?
      </Text>
      <TouchableOpacity style={styles.buttonMain} onPress={() => setIsModalVisible(!isModalVisible)}>
        <Text style={styles.buttonText}>Заказать звонок</Text>
      </TouchableOpacity>
    </View>
  );
}