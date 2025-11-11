import React from "react"; 
import {Button, Text, View, Image} from "react-native";

import { style } from "./styles";
import { fonts } from "../../global/fonts";

export default function LoginPage() {
    return (
        <View style={style.loginContainer}> 
            <View style={style.header}>
                <Image source={require("../../assets/Jorge-base.png")} style={style.logo}/>
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