import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useLoadFonts, fonts } from './src/global/fonts';
import { themas } from './src/global/themes';
import { globalStyles } from './src/global/globalStyles';
import routes from './src/routes/stack.routes';

import LoginPage from './src/pages/login';
import RegisterPage from './src/pages/register';

export default function App() {
  const fontsLoaded = useLoadFonts();

  if (!fontsLoaded) {
    // retornar um loading aqui em algum momento
    return null;
  }
  return (
    
  );
}
