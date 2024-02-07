import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView } from 'react-native';
import { RootStackParamList } from '../../App';
import Catalog from '../components/Catalog/Catalog';
import Contacts from '../components/Contacts/Contacts';
import FAQ from '../components/FAQ/FAQ';
import Header from '../components/Header/Header';
import { useGetCatalogQuery } from '../store/api/catalog.api';
import { useGetFAQQuery } from '../store/api/faq.api';

type IFAQScreenProps = NativeStackScreenProps<RootStackParamList, 'FAQ'>;

export default function FAQScreen({ navigation, route }: IFAQScreenProps) {

  const { data: dataCatalog, isLoading: isLoadingCatalog, error: errorCatalog } = useGetCatalogQuery()

  const { data: dataFAQ, isLoading: isLoadingFAQ, error: errorFAQ } = useGetFAQQuery()

  return (
    <>
      <Header navigation={navigation} />
      <ScrollView>
        <FAQ faq={dataFAQ?.object} loading={isLoadingFAQ} error={!!errorFAQ} />
        <Catalog catalog={dataCatalog?.object} navigation={navigation} loading={isLoadingCatalog} error={!!errorCatalog} />
        <Contacts />
      </ScrollView>
    </>
  );
}
