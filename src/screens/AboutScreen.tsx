import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView } from 'react-native';
import { RootStackParamList } from '../../App';
import About from '../components/About/About';
import Contacts from '../components/Contacts/Contacts';
import Header from '../components/Header/Header';
import CTA from '../components/CTA/CTA';

type IAboutScreenProps = NativeStackScreenProps<RootStackParamList, 'About'>;

export default function AboutScreen({ navigation, route }: IAboutScreenProps) {

  return (
    <>
      <Header navigation={navigation} />
      <ScrollView>
        <About />
        <CTA />
        <Contacts />
      </ScrollView>
    </>
  );
}

