import React from "react"; 
import {Button, Text, View, Image} from "react-native";
import { style } from "./styles";
import { fonts } from "../../global/fonts";
import jorgeBaseImage from "../../assets/Jorge-base.png"
import whatsCode from "../../assets/whatscode.png"

export default function LoginPage() {
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

            </View>

            <View style={style.footer}>
                <Text style={style.subtitle}>Não tem uma conta?</Text>
                <Text style={{fontFamily: fonts.regular, fontSize: 14, color: '#8DC63E'}}>Criar agora</Text>
            </View>
        </View>
    )
}