import React, {useState} from "react"; 
import {Text, View, Image, TextInput, KeyboardAvoidingView, Platform, ScrollView} from "react-native";
import { style } from "./styles";
import { fonts } from "../../global/fonts";
import { themas } from "../../global/themes";

import whatsCode from "../../assets/whatscode.png";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        </View>

        <View style={style.footer}>
          <Text style={style.subtitle}>Não tem uma conta?</Text>
          <Text style={{fontFamily: fonts.regular, fontSize: 14, color: '#8DC63E'}}>Criar agora</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
