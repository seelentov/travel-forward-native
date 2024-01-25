import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView } from 'react-native';
import { RootStackParamList } from '../../App';
import About from '../components/About/About';
import Advantages from '../components/Advantages/Advantages';
import Banner from '../components/Banner/Banner';
import CTA from '../components/CTA/CTA';
import Catalog from '../components/Catalog/Catalog';
import Contacts from '../components/Contacts/Contacts';
import FAQ from '../components/FAQ/FAQ';
import Gallery from '../components/Gallery/Gallery';
import Header from '../components/Header/Header';
import News from '../components/News/News';
import Reviews from '../components/Reviews/Reviews';
import { advantages } from '../test/data/advantages';
import { banners } from '../test/data/banner';
import { catalog } from '../test/data/catalog';
import { faq } from '../test/data/faq';
import { images } from '../test/data/images';
import { newsItems } from '../test/data/news';
import { reviews } from '../test/data/review';
import { stages } from '../test/data/stages';

type IMainScreenProps = NativeStackScreenProps<RootStackParamList, 'Main'>;

export default function MainScreen({ navigation }: IMainScreenProps) {

  return (
    <>
      <Header navigation={navigation} />
      <ScrollView>
        <Banner banners={banners} navigation={navigation} />
        <Advantages advantages={advantages} title={'Почему мы?'} />
        <Catalog catalog={catalog} navigation={navigation} />

        <CTA />
        <Gallery images={images} />
        <Advantages advantages={stages} title={'Как забронировать автобусный экскурсионный тур'} />
        <About />
        <FAQ faq={faq} />
        <Reviews reviews={reviews} />
        <News news={newsItems} navigation={navigation} />
        <Contacts />
      </ScrollView>
    </>
  );
}