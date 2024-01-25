import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { RootStackParamList } from '../../App';
import Contacts from '../components/Contacts/Contacts';
import Header from '../components/Header/Header';
import { styles } from './ArticleScreen.stylesheet';
import CTA from '../components/CTA/CTA';

type IArticleScreenProps = NativeStackScreenProps<RootStackParamList, 'Article'>;

export default function ArticleScreen({ navigation, route }: IArticleScreenProps) {

  return (
    <>
      <Header navigation={navigation} />
      <ScrollView>
        <View style={styles.main}>
          <Text style={styles.header}>{route.params.title}</Text>
          <Image style={styles.image} source={{ uri: route.params.image }} />
          <Text style={styles.text}>{route.params.text}</Text>
        </View>
        <CTA formTitle={route.params.title}/>
        <Contacts />
      </ScrollView>
    </>
  );
}

