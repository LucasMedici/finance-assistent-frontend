import React, {useState} from "react"; 
import {Text, View, Image, TextInput, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity, Alert} from "react-native";
import { style } from "./styles";
import { fonts } from "../../global/fonts";
import { themas } from "../../global/themes";

import whatsCode from "../../assets/whatscode.png";

export default function LoginPage({navigation}: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin =  () => {

    if(!email || !password) {
      Alert.alert(
        "Campos obrigatórios", 
        "Por favor, preencha todos os campos.",
        [
          { text: "OK" },
        ]
      )
    }

    //Autenticar aqui...
  }

  return (
    <KeyboardAvoidingView 
      style={{flex: 1, backgroundColor: themas.colors.primary}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
    >
      <ScrollView 
        contentContainerStyle={style.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={style.header}>
          <Image source={whatsCode} style={style.logo} resizeMode="contain" />
          <Text style={style.title}>Bem-Vindo!</Text>
          <Text style={style.subtitle}>Efetue seu Login</Text>
        </View>

        <View style={style.main}>
          <Text style={style.inputTitle}>Digite seu email:</Text>
          <View style={style.inputBox}>
            <TextInput
              style={style.textInput}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none" 
              selectionColor={themas.colors.primary}
            />
          </View>

          <Text style={style.inputTitle}>Digite sua Senha:</Text>
          <View style={style.inputBox}>
            <TextInput
              style={style.textInput}
              value={password}
              onChangeText={setPassword}
              keyboardType="default"
              secureTextEntry
              autoCapitalize="none" 
              selectionColor={themas.colors.primary}
            />
          </View>

          <TouchableOpacity style={style.button} onPress={handleLogin}>
            <Text style={style.textButton}>Entrar</Text>
          </TouchableOpacity>
        </View>

        <View style={style.footer}>
          <Text style={style.subtitle}>Não tem uma conta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{fontFamily: fonts.regular, fontSize: 14, color: '#8DC63E'}}>Criar agora</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
