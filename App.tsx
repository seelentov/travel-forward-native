import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import AboutScreen from './src/screens/AboutScreen';
import CatalogScreen from './src/screens/CatalogScreen';
import FAQScreen from './src/screens/FAQScreen';
import MainScreen from './src/screens/MainScreen';
import NewsScreen from './src/screens/NewsScreen';
import ReviewsScreen from './src/screens/ReviewsScreen';
import ArticleScreen from './src/screens/ArticleScreen';

export type RootStackParamList = {
  Main: undefined;
  Article: {
    title: string;
    image: string;
    text: string
  };
  News: undefined,
  Reviews: undefined
  Catalog: undefined
  FAQ: undefined
  About: undefined
};

const defaultOptions = {
  headerShown: false
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{ ...defaultOptions }}
          />
          <Stack.Screen
            name="News"
            component={NewsScreen}
            options={{ ...defaultOptions }}
          />
          <Stack.Screen
            name="Reviews"
            component={ReviewsScreen}
            options={{ ...defaultOptions }}
          />
          <Stack.Screen
            name="Catalog"
            component={CatalogScreen}
            options={{ ...defaultOptions }}
          />
          <Stack.Screen
            name="FAQ"
            component={FAQScreen}
            options={{ ...defaultOptions }}
          />
          <Stack.Screen
            name="About"
            component={AboutScreen}
            options={{ ...defaultOptions }}
          />
          <Stack.Screen
            name="Article"
            component={ArticleScreen}
            options={{ ...defaultOptions }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="dark" />
    </>
  );
}