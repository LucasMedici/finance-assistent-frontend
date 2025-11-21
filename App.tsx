import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLoadFonts, fonts } from './src/global/fonts';
import { themas } from './src/global/themes';
import { globalStyles } from './src/global/globalStyles';
import Routes from './src/routes/stack.routes';

import LoginPage from './src/pages/login';
import RegisterPage from './src/pages/register';

export default function App() {
  const fontsLoaded = useLoadFonts();

  if (!fontsLoaded) {
    // retornar um loading aqui em algum momento
    return null;
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: themas.colors.primary }}>
      <StatusBar barStyle="light" backgroundColor={themas.colors.primary} />
      <Routes />
    </SafeAreaView>
  );
}
