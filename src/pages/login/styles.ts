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
    paddingLeft: 10,
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
    alignItems: 'flex-start',
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: themas.colors.inputBackgroud,
    width: '75%',
    height: 50,
    borderRadius: 15,
    paddingHorizontal: 12,
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 6 },
    shadowOpacity: 10,
    shadowRadius: 8,
    elevation: 6,
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
