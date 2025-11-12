import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './src/pages/login';
import { useLoadFonts, fonts } from './src/global/fonts';
import { themas } from './src/global/themes';
import { globalStyles } from './src/global/globalStyles';

export default function App() {
  const fontsLoaded = useLoadFonts();

  if (!fontsLoaded) {
    // retornar um loading aqui em algum momento
    return null;
  }
  return (
    <View style={globalStyles.container}>
      <LoginPage />
    </View>
  );
}
