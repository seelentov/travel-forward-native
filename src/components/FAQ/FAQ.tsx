import { PropsWithChildren } from 'react';
import { Text, View } from 'react-native';
import { IFAQ } from '../../types/faq';
import { styles } from './FAQ.stylesheet';
import FAQItem from './FAQItem';

type IFAQProps = PropsWithChildren<{
  faq: IFAQ[]
}>

export default function FAQ({ faq }: IFAQProps) {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Часто задаваемые вопросы</Text>
      {faq.map((faqItem: IFAQ, index: number) => <FAQItem faqItem={faqItem} key={index} />)}
    </View>
  );
}