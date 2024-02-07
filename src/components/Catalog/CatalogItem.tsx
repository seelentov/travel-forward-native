import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { ICatalogItem } from '../../types/catalog';
import { styles } from './Catalog.stylesheet';
import { PropsWithChildren } from 'react';

type ICatalogItemProps = PropsWithChildren<{
  item: ICatalogItem
  navigation: any
}>

export default function CatalogItem({ item, navigation }: ICatalogItemProps) {

  const switchScreen = () => {
    navigation.navigate('Article', {
      title:item.longtitle,
      image:item.image,
      text:item.text
    })
  }

  return (
    <View style={styles.item}>
      <ImageBackground style={styles.itemBackground} source={{ uri: item.image }}>
        <View style={styles.content}>
          <Text style={styles.itemTitle}>
            {item.pagetitle}
          </Text>
          <TouchableOpacity style={styles.itemButton} onPress={()=>switchScreen()}>
            <Text style={styles.buttonText}>Забронировать</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}