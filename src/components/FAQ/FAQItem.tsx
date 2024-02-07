import React, { PropsWithChildren, useState, useRef } from 'react';
import { Animated, Text, TouchableOpacity, View, Easing } from 'react-native';
import { IFAQ } from '../../types/faq';
import { styles } from './FAQ.stylesheet';

type IFAQItemProps = PropsWithChildren<{
  faqItem: IFAQ
  open?: boolean
}>

export default function FAQItem({ faqItem, open = false }: IFAQItemProps) {
  const [isOpen, setIsOpen] = useState<boolean>(open)
  const height = useRef(new Animated.Value(0)).current;

  const toggleItem = () => {
    Animated.timing(height, {
      toValue: isOpen ? 0 : 1,
      duration: 100,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false
    }).start(() => {
      setIsOpen(prev => !prev);
    });
  };

  const answerHeight = height.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100]
  });

  return (
    <View style={isOpen ? styles.itemActive : styles.item}>
      <TouchableOpacity style={styles.question} onPress={toggleItem}>
        <Text style={isOpen ? styles.questionTextOpen : styles.questionTextClose}>{faqItem.title}</Text>
      </TouchableOpacity>
      <Animated.View style={[styles.answer, { height: answerHeight }]}>
        <Text style={styles.answerText}>{faqItem.text}</Text>
      </Animated.View>
    </View>
  );
}