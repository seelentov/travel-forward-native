import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView } from 'react-native';
import { RootStackParamList } from '../../App';
import Catalog from '../components/Catalog/Catalog';
import Contacts from '../components/Contacts/Contacts';
import FAQ from '../components/FAQ/FAQ';
import Header from '../components/Header/Header';
import { catalog } from '../test/data/catalog';
import { faq } from '../test/data/faq';

type IFAQScreenProps = NativeStackScreenProps<RootStackParamList, 'FAQ'>;

export default function FAQScreen({ navigation, route }: IFAQScreenProps) {

  return (
    <>
      <Header navigation={navigation} />
      <ScrollView>
        <FAQ faq={faq} />
        <Catalog catalog={catalog} navigation={navigation}/>
        <Contacts />
      </ScrollView>
    </>
  );
}
