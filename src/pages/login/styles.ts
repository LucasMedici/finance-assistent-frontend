import { StyleSheet } from 'react-native';
import { themas } from '../../global/themes';
import { fonts } from '../../global/fonts';

export const style = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: themas.colors.primary,
    paddingVertical: 40,
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
    paddingTop: 20,
    alignSelf: 'flex-start',
    paddingLeft: 60,
  },
  header: {
    alignItems: 'center',
    backgroundColor: 'red',
  },
  main: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'yellow',
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
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: 'blue',
  },
  logo: {
    width: 200,
    height: 200,
  },
});
