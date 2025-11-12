import { StyleSheet } from 'react-native';
import { themas } from '../../global/themes';
import { fonts } from '../../global/fonts';

export const style = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themas.colors.primary,
  },
  title: {
    fontFamily: fonts.medium,
    fontSize: 36,
    color: '#FFFFFF',
  },
  subtitle: {
    fontFamily: fonts.bold,
    fontSize: 14,
    color: '#8DC63E',
  },
  inputTitle: {
    fontFamily: fonts.medium,
    fontSize: 15,
    color: '#8DC63E',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
});
