import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView } from 'react-native';
import { RootStackParamList } from '../../App';
import Contacts from '../components/Contacts/Contacts';
import Header from '../components/Header/Header';
import News from '../components/News/News';
import { useGetNewsQuery } from '../store/api/news.api';

type INewsScreenProps = NativeStackScreenProps<RootStackParamList, 'News'>;

export default function NewsScreen({ navigation, route }: INewsScreenProps) {

  const { data: dataNews, isLoading: isLoadingNews, error: errorNews } = useGetNewsQuery()

  return (
    <>
      <Header navigation={navigation} />
      <ScrollView>
        <News news={dataNews?.object} navigation={navigation} loading={isLoadingNews} error={!!errorNews} display='grid' />
        <Contacts />
      </ScrollView>
    </>
  );
}

