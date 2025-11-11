import React from "react"; 
import {Button, Text, View} from "react-native";

import { style } from "./styles";

export default function LoginPage() {
    return (
        <View style={style.loginContainer}> 
            <Text>Login Page</Text>
            <Button title="Login" onPress={() => {}} />
        </View>
    )
}