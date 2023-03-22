import React, { Component, useContext, useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import MarblePrimaryButton from "../../components/atoms/buttons/MarblePrimaryButton.js";
import TextField from "../../components/atoms/inputs/TextField.tsx";
import { AuthContext, AuthProvider } from "../context/AuthContext.js";

  
export default function LoginScreen() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const {login} = useContext(AuthContext);
    
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0D0D0D",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 16,
      }}
    >
      <TextField label="Логин" value={email} onChangeText={text => setEmail(text)} />
      <TextField label="Пароль" value={password} onChangeText={text => setPassword(text)} />

      <MarblePrimaryButton
        title={"Войти"}
        onPress={() => login(email, password) }
      />
      
    </View>
  );
}
