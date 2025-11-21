import { StyleSheet } from 'react-native';
import { themas } from '../../global/themes';
import { fonts } from '../../global/fonts';

export const style = StyleSheet.create({
  topHeader: {
    height: 100,
    backgroundColor: themas.colors.primary,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 25,
    paddingTop: 50,
    flexDirection: 'row',
    gap: 12,
  },
  profileIconButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.14)',
  },
  botInfoSection: {
    alignItems: 'center',
    backgroundColor: themas.colors.primary,
    borderBottomWidth: 3,
    borderBottomColor: '#8DC63E',
  },
  botImage: {
    width: 150,
    height: 150,
  },
  botTitle: {
    fontFamily: fonts.medium,
    fontSize: 20,
    color: '#FFFFFF',
  },
  header: {
    backgroundColor: themas.colors.primary,
    borderBottomWidth: 3,
    borderBottomColor: '#8DC63E',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  headerImage: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  headerTitle: {
    fontFamily: fonts.medium,
    fontSize: 16,
    color: '#FFFFFF',
  },
  chatContainer: {
    flexGrow: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  messageContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  userMessageContainer: {
    justifyContent: 'flex-end',
  },
  botMessageContainer: {
    justifyContent: 'flex-start',
  },
  messageBubble: {
    maxWidth: '80%',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 15,
  },
  userBubble: {
    backgroundColor: '#8DC63E',
  },
  botBubble: {
    backgroundColor: '#e5e5e5',
  },
  messageText: {
    fontSize: 14,
    lineHeight: 20,
  },
  userMessageText: {
    color: '#FFFFFF',
    fontFamily: fonts.regular,
  },
  botMessageText: {
    color: '#000000',
    fontFamily: fonts.regular,
  },
  inputFooter: {
    backgroundColor: themas.colors.primary,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderTopWidth: 3,
    borderTopColor: '#8DC63E',
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 10,
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    maxHeight: 100,
    fontFamily: fonts.regular,
    fontSize: 14,
    color: '#000000',
  },
  sendButton: {
    backgroundColor: '#8DC63E',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontFamily: fonts.medium,
    fontSize: 12,
    fontWeight: 'bold',
  },
  tabBarSpace: {
    height: 80,
    backgroundColor: themas.colors.primary,
  },
});
