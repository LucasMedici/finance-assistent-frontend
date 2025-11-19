import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  BackHandler,
} from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { style } from "./styles";
import { fonts } from "../../global/fonts";
import { themas } from "../../global/themes";
import jorgePensando2 from "../../assets/jorge_pensando2.png";
import jorgePensando from "../../assets/jorge_pensando.png";
import jorgeContando from "../../assets/jorge_contando.png";
import jorgeContando2 from "../../assets/jorge_contando2.png";
import jorgeDescansando from "../../assets/jorge_descansando.png";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export default function HomePage({ navigation }: any) {
  // Função para obter mensagem de saudação baseada na hora
  const getGreeting = () => {
    const hour = new Date().getHours();
    
    if (hour >= 5 && hour < 12) {
      return "Bom dia!";
    } else if (hour >= 12 && hour < 18) {
      return "Boa tarde!";
    } else {
      return "Boa noite!";
    }
  };

  // Função para pegar uma imagem aleatória entre duas opções
  const getRandomThinkingImage = () => {
    return Math.random() > 0.5 ? jorgePensando : jorgePensando2;
  };

  const getRandomCountingImage = () => {
    return Math.random() > 0.5 ? jorgeContando : jorgeContando2;
  };

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: `Olá, sou o Jorge, seu assistente financeiro. Como posso ajudá-lo hoje?`,
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [jorgeImage, setJorgeImage] = useState(getRandomThinkingImage());
  const flatListRef = useRef<FlatList>(null);

  // Handler para o botão de voltar do celular - fecha o app (ignora Login e Register no histórico)
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        // Obtém o histórico de navegação
        const state = navigation.getState();
        const routes = state?.routes || [];
        
        // Filtra rotas que não são Login ou Register
        const validRoutes = routes.filter(
          (route: any) => route.name !== 'Login' && route.name !== 'Register'
        );
        
        // Se houver apenas Home (ou nenhuma rota válida além de Home), fecha o app
        if (validRoutes.length <= 1) {
          BackHandler.exitApp();
          return true;
        } else {
          // Se houver outras rotas além de Home, volta normalmente
          return false;
        }
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      return () => subscription.remove();
    }, [navigation])
  );

  // Função para enviar mensagem
  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    // Muda para uma das imagens de pensando aleatoriamente
    setJorgeImage(getRandomThinkingImage());

    // Adiciona mensagem do usuário
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Timeline das mudanças de imagem
    const timer1 = setTimeout(() => {
      // Muda para uma das imagens de contando aleatoriamente
      setJorgeImage(getRandomCountingImage());
    }, 1000);

    // Muda para descansando e mantém por mais tempo
    const timer2 = setTimeout(() => {
      setJorgeImage(jorgeDescansando);
    }, 2500);

    // Simula resposta do bot e volta para pensando após descansando
    const timer3 = setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Entendi sua mensagem. Estou processando sua solicitação financeira.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);

      // Volta para uma das imagens de pensando aleatoriamente
      setJorgeImage(getRandomThinkingImage());
    }, 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  };

  // Scroll automático para a última mensagem
  useEffect(() => {
    if (messages.length > 0) {
      flatListRef.current?.scrollToEnd({ animated: true });
    }
  }, [messages]);

  const handleProfilePress = () => {
    navigation.navigate('Profile');
  };

  const renderMessage = ({ item }: { item: Message }) => {
    const isUser = item.sender === "user";

    // mensagens do chat
    return (
      <View
        style={[
          style.messageContainer,
          isUser ? style.userMessageContainer : style.botMessageContainer,
        ]}
      >
        <View
          style={[
            style.messageBubble,
            isUser ? style.userBubble : style.botBubble,
          ]}
        >
          <Text
            style={[
              style.messageText,
              isUser ? style.userMessageText : style.botMessageText,
            ]}
          >
            {item.text}
          </Text>
        </View>
      </View>
    )
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: themas.colors.primary }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      {/* Header com ícone de perfil */}
      <View style={style.topHeader}>
        <Pressable
          style={style.profileIconButton}
          onPress={handleProfilePress}
        >
          <MaterialIcons name="person" size={35} color="#FFFFFF" />
        </Pressable>
      </View>

      {/* Bot Info Section */}
      <View style={style.botInfoSection}>
        <Image
          source={jorgeImage}
          resizeMode="contain"
          style={style.botImage}
        />
        <Text style={style.botTitle}>{getGreeting()}</Text>
      </View>

      {/* Chat Messages */}
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={style.chatContainer}
        scrollEnabled={true}
        onEndReachedThreshold={0.1}
      />

      {/* Input Footer */}
      <View style={style.inputFooter}>
        <View style={style.inputBox}>
          <TextInput
            style={style.textInput}
            placeholder="Digite sua mensagem..."
            placeholderTextColor="#999"
            value={inputValue}
            onChangeText={setInputValue}
            multiline
            maxLength={500}
          />
          <TouchableOpacity
            style={style.sendButton}
            onPress={handleSendMessage}
          >
            <MaterialIcons name="send" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Espaço reservado para Tab Bar */}
      <View style={style.tabBarSpace} />
    </KeyboardAvoidingView>
  );
}
