import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet } from 'react-native';
import About from './src/components/About/About';
import Advantages from './src/components/Advantages/Advantages';
import Banner from './src/components/Banner/Banner';
import CTA from './src/components/CTA/CTA';
import Catalog from './src/components/Catalog/Catalog';
import Gallery from './src/components/Gallery/Gallery';
import { advantages } from './src/test/data/advantages';
import { banners } from './src/test/data/banner';
import { catalog } from './src/test/data/catalog';
import { images } from './src/test/data/images';
import { stages } from './src/test/data/stages';

export default function App() {
  return (
    <ScrollView>
      <Banner banners={banners} />
      <Advantages advantages={advantages} title={'Почему мы?'} />
      <Catalog catalog={catalog} />
      
      <CTA />
      <Gallery images={images} />
      <Advantages advantages={stages} title={'Как забронировать автобусный экскурсионный тур'} />
      <About />

      <CTA />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
});
