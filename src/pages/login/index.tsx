import React, {useState} from "react"; 
import {Button, Text, View, Image, TextInput} from "react-native";
import { style } from "./styles";
import { fonts } from "../../global/fonts";
import jorgeBaseImage from "../../assets/Jorge-base.png"
import whatsCode from "../../assets/whatscode.png"
import { themas } from "../../global/themes";
import {Fontisto} from '@expo/vector-icons';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    return (
        <View style={style.loginContainer}> 
            <View style={style.header}>
                <Image 
                    source={whatsCode} 
                    style={style.logo}
                    resizeMode="contain"
                />
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
                    <Fontisto 
                        name="email"
                        size={30}
                        color={"#666666"}
                    />
                </View>
                
            </View>

            <View style={style.footer}>
                <Text style={style.subtitle}>Não tem uma conta?</Text>
                <Text style={{fontFamily: fonts.regular, fontSize: 14, color: '#8DC63E'}}>Criar agora</Text>
            </View>
        </View>
    )
}