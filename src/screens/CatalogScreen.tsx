import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView } from 'react-native';
import { RootStackParamList } from '../../App';
import Catalog from '../components/Catalog/Catalog';
import Contacts from '../components/Contacts/Contacts';
import Header from '../components/Header/Header';
import { useGetCatalogQuery } from '../store/api/catalog.api';


type ICatalogScreenProps = NativeStackScreenProps<RootStackParamList, 'Catalog'>;

export default function CatalogScreen({ navigation, route }: ICatalogScreenProps) {

  const { data: dataCatalog, isLoading: isLoadingCatalog, error: errorCatalog } = useGetCatalogQuery()



  return (
    <>
      <Header navigation={navigation} />
      <ScrollView>
        <Catalog catalog={dataCatalog?.object} display='grid' navigation={navigation} loading={isLoadingCatalog} error={!!errorCatalog} />
        <Contacts />
      </ScrollView>
    </>
  );
}

