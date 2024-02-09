import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect } from 'react';
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
import { useActions } from '../hooks/useActions';
import { useStoreBy } from '../hooks/useStoreBy';
import { useGetAdvantagesQuery } from '../store/api/advantages.api';
import { useGetBannersQuery } from '../store/api/banners.api';
import { useGetCatalogQuery } from '../store/api/catalog.api';
import { useGetFAQQuery } from '../store/api/faq.api';
import { useGetGalleryQuery } from '../store/api/gallery.api';
import { useGetNewsQuery } from '../store/api/news.api';
import { useGetReviewsQuery } from '../store/api/reviews.api';
import { useGetStagesQuery } from '../store/api/stages.api';
import { useGetTextQuery } from '../store/api/text.api';

type IMainScreenProps = NativeStackScreenProps<RootStackParamList, 'Main'>;

export default function MainScreen({ navigation }: IMainScreenProps) {

  const { data: dataCatalog, isLoading: isLoadingCatalog, error: errorCatalog } = useGetCatalogQuery()

  const { data: dataReviews, isLoading: isLoadingReviews, error: errorReviews } = useGetReviewsQuery()

  const { data: dataBanners, isLoading: isLoadingBanners, error: errorBanners } = useGetBannersQuery()

  const { data: dataAdvantages, isLoading: isLoadingAdvantages, error: errorAdvantages } = useGetAdvantagesQuery()

  const { data: dataStages, isLoading: isLoadingStages, error: errorStages } = useGetStagesQuery()

  const { data: dataFAQ, isLoading: isLoadingFAQ, error: errorFAQ } = useGetFAQQuery()

  const { data: dataNews, isLoading: isLoadingNews, error: errorNews } = useGetNewsQuery()

  const { data: dataGallery, isLoading: isLoadingGallery, error: errorGallery } = useGetGalleryQuery()

  const { data: dataText, isLoading: isLoadingText, error: errorText } = useGetTextQuery()
  const { setText } = useActions()

  useEffect(() => {
    if (dataText) {
      setText(dataText.object)
    }
  }, [dataText])

  const { data } = useStoreBy('text')


  return (
    <>
      <Header navigation={navigation} />
      <ScrollView>
        <Banner banners={dataBanners?.object} navigation={navigation} loading={isLoadingBanners} error={!!errorBanners} />
        <Advantages advantages={dataAdvantages?.object} title={data?.advantages_1_title} loading={isLoadingAdvantages} error={!!errorAdvantages} />
        <Catalog catalog={dataCatalog?.object} navigation={navigation} loading={isLoadingCatalog} error={!!errorCatalog} />
        <CTA />
        <Gallery images={dataGallery?.object} loading={isLoadingGallery} error={!!errorGallery} />
        <Advantages advantages={dataStages?.object} loading={isLoadingStages} error={!!errorStages} title={data?.stages_title} />
        <About />
        <FAQ faq={dataFAQ?.object} loading={isLoadingFAQ} error={!!errorFAQ} />
        <Reviews reviews={dataReviews?.object} loading={isLoadingReviews} error={!!errorReviews} />
        <News news={dataNews?.object} navigation={navigation} loading={isLoadingNews} error={!!errorNews} />
        <Contacts />
      </ScrollView>
    </>
  );
}