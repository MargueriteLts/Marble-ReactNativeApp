import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function ProfilScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0D0D0D",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "#fff" }}>Мой профиль</Text>
    </View>
  );
}
