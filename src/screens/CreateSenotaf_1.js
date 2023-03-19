import * as React from "react";
import { View, Text } from "react-native";
import Button from "../../components/atoms/buttons/MarblePrimaryButton.js";
import TextField from "../../components/atoms/inputs/TextField.tsx";

export default function CreateSenotaf_1({ navigation }) {
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
      <Text style={{ color: "#fff" }}>Базовая информация</Text>
   
      <TextField label="Имя" />
      <TextField label="Фамилия" />
      <TextField label="Отчество/Матчество (необязательно)" />
      
      <Button
        title="Продолжить"
        onPress={() => navigation.navigate('Создание ценотафа 2')}
      />
    </View>
  );
}
