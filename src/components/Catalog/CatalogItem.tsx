import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './Catalog.stylesheet';


export default function CatalogItem({ item }: { item: any }) {
  return (
    <View style={styles.item}>
      <ImageBackground style={styles.itemBackground} source={{ uri: item.imageUrl }}>
        <View style={styles.content}>
          <Text style={styles.itemTitle}>
            {item.name}
          </Text>
          <TouchableOpacity style={styles.itemButton}>
            <Text style={styles.buttonText}>Забронировать</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}