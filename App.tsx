import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet } from 'react-native';
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
import About from './src/components/About/About';

export default function App() {
  return (
    <ScrollView>
      <Banner banners={banners} />
      <Advantages advantages={advantages} title={'Почему мы?'} />
      <Catalog catalog={catalog} />
      <StatusBar style="auto" />
      <CTA />
      <Gallery images={images} />
      <Advantages advantages={stages} title={'Как забронировать автобусный экскурсионный тур'} />
      <About />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
});
