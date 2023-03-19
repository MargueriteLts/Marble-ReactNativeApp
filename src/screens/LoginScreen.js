import React, { Component, useContext } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import MarblePrimaryButton from "../../components/atoms/buttons/MarblePrimaryButton.js";
import TextField from "../../components/atoms/inputs/TextField.tsx";
import { AuthContext, AuthProvider } from "../context/AuthContext.js";

  
export default function LoginScreen() {
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
      <TextField label="Логин" />
      <TextField label="Пароль" />

      <MarblePrimaryButton
        title={"Войти"}
        onPress={() => login('mytoken') }
      />
      
    </View>
  );
}
