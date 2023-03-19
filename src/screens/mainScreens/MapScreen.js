import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Button from "../../../components/atoms/buttons/MarblePrimaryButton.js";

export default function MapScreen({ navigation, route }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0D0D0D",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "#fff" }}>Map screen</Text>
    </View>
  );
}
