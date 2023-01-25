import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold
} from '@expo-google-fonts/nunito-sans';

import { Loading } from '@components/Loading';

import { Routes } from './src/routes';

import theme from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Routes /> : <Loading />}
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
    </ThemeProvider>
  );
}