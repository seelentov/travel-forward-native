import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView } from 'react-native';
import { RootStackParamList } from '../../App';
import Catalog from '../components/Catalog/Catalog';
import Contacts from '../components/Contacts/Contacts';
import Header from '../components/Header/Header';
import { catalog } from '../test/data/catalog';

type ICatalogScreenProps = NativeStackScreenProps<RootStackParamList, 'Catalog'>;

export default function CatalogScreen({ navigation, route }: ICatalogScreenProps) {

  return (
    <>
      <Header navigation={navigation} />
      <ScrollView>
        <Catalog catalog={catalog} display='grid' navigation={navigation}/>
        <Contacts />
      </ScrollView>
    </>
  );
}

