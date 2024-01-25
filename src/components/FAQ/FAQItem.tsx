import { PropsWithChildren, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { IFAQ } from '../../types/faq';
import { styles } from './FAQ.stylesheet';

type IFAQItemProps = PropsWithChildren<{
  faqItem: IFAQ
}>

export default function FAQItem({ faqItem }: IFAQItemProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const onPress = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <View style={isOpen ? styles.itemActive : styles.item}>
      <TouchableOpacity style={styles.question} onPress={onPress}>
        <Text style={isOpen ? styles.questionTextOpen : styles.questionTextClose}>{faqItem.question}</Text>
      </TouchableOpacity>
      <View style={styles.answer}>
        <Text style={styles.answerText}>{faqItem.answer}</Text>
      </View>
    </View>
  );
}