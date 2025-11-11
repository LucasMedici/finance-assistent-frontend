import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './src/pages/login';
import { useLoadFonts, fonts } from './src/global/fonts';

export default function App() {
  const fontsLoaded = useLoadFonts();

  if (!fontsLoaded) {
    // retornar um loading aqui em algum momento
    return null;
  }
  return (
      <LoginPage />
  );
}
