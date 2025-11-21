import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  BackHandler,
} from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import { MaterialIcons } from "@expo/vector-icons";
import { style } from "./styles";
import { themas } from "../../global/themes";

export default function ProfilePage({ navigation }: any) {
  const [userName, setUserName] = useState("Usuário");
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(userName);

  // Handler para o botão de voltar do celular - volta para a tela anterior
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        // Volta para a tela anterior quando aperta voltar
        navigation.goBack();
        return true;
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      return () => subscription.remove();
    }, [navigation])
  );

  const handleSave = () => {
    if (tempName.trim() === "") {
      Alert.alert("Erro", "O nome não pode estar vazio");
      return;
    }

    setUserName(tempName);
    setIsEditing(false);
    Alert.alert("Sucesso", "Nome atualizado com sucesso!");
  };

  const handleCancel = () => {
    setTempName(userName);
    setIsEditing(false);
  };

  return (
    <ScrollView style={style.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={style.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={28} color="#FFFFFF" />
        </TouchableOpacity>
        <View style={{ flex: 1, marginLeft: 15 }}>
          <Text style={style.headerTitle}>Perfil</Text>
          <Text style={style.headerSubtitle}>Gerencie suas informações</Text>
        </View>
      </View>

      {/* Conteúdo do Perfil */}
      <View style={style.profileContent}>
        {/* Avatar */}
        <View style={style.avatarContainer}>
          <View style={style.avatar}>
            <MaterialIcons name="person" size={50} color="#FFFFFF" />
          </View>
        </View>

        {/* Card de Nome */}
        <View style={style.card}>
          <Text style={style.cardLabel}>Nome</Text>

          {isEditing ? (
            <>
              <TextInput
                style={style.textInput}
                value={tempName}
                onChangeText={setTempName}
                placeholder="Digite seu nome"
                placeholderTextColor="rgba(255, 255, 255, 0.5)"
              />

              <View style={style.buttonGroup}>
                <TouchableOpacity
                  style={[style.button, style.buttonSave]}
                  onPress={handleSave}
                >
                  <MaterialIcons name="check" size={20} color="#FFFFFF" />
                  <Text style={style.buttonText}>Salvar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[style.button, style.buttonCancel]}
                  onPress={handleCancel}
                >
                  <MaterialIcons name="close" size={20} color="#FFFFFF" />
                  <Text style={style.buttonText}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <>
              <Text style={style.userName}>{userName}</Text>

              <TouchableOpacity
                style={style.editButton}
                onPress={() => {
                  setTempName(userName);
                  setIsEditing(true);
                }}
              >
                <MaterialIcons
                  name="edit"
                  size={18}
                  color={themas.colors.secondary}
                />
                <Text style={style.editButtonText}>Editar Nome</Text>
              </TouchableOpacity>
            </>
          )}
        </View>

        {/* Card de Email */}
        <View style={style.card}>
          <Text style={style.cardLabel}>Email</Text>
          <Text style={style.cardValue}>usuario@example.com</Text>
        </View>

        {/* Card de Versão */}
        <View style={style.card}>
          <Text style={style.cardLabel}>Versão do App</Text>
          <Text style={style.cardValue}>1.0.0</Text>
        </View>
      </View>

      <View style={{ height: 80 }} />
    </ScrollView>
  );
}
