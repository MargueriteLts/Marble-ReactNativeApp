import React, { Component, useContext } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Button from "../../components/atoms/buttons/MarblePrimaryButton.js";
import TextField from "../../components/atoms/inputs/TextField.tsx";
import { AuthContext } from "../context/AuthContext.js";

export default function SigninScreen({ navigation }) {
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
      <Text>{test}</Text>
      <TextField label="Логин" />
      <TextField label="Пароль" />
      
      <Button
        title={"Зарег"}
        onPress={() => {Signin()}}
      />
    </View>
  );
}
