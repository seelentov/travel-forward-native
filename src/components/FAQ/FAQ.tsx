import { PropsWithChildren } from 'react';
import { Alert, Text, View } from 'react-native';
import { IFAQ } from '../../types/faq';
import Loading from '../Loading/BannerLoading/BannerLoading';
import { styles } from './FAQ.stylesheet';
import FAQItem from './FAQItem';
import { useStoreBy } from '../../hooks/useStoreBy';

type IFAQProps = PropsWithChildren<{
  faq?: IFAQ[]
  error: boolean
  loading: boolean
}>

export default function FAQ({ faq, error, loading }: IFAQProps) {
  const { data } = useStoreBy('text')

  if (error) {
    Alert.alert('', 'Ошибка при получении списка частых вопросов')
  }

  const Items = () => {

    if (loading) {
      return (
        <Loading />
      );
    }

    if (!loading && faq) {
      return (
        faq.map((faqItem: IFAQ) => <FAQItem faqItem={faqItem} key={faqItem.id} />)
      );
    }
  }
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Часто задаваемые вопросы</Text>
      <Items />
    </View>
  );
}