import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Senotaf_Basic from "../../../components/molecules/cards/Senotaf_Basic.js";

export default function SearchScreen() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0D0D0D",
      }}
    >
      <Text>Поиск</Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Senotaf_Basic />
        <Senotaf_Basic />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Senotaf_Basic />
        <Senotaf_Basic />
      </View>
    </View>
  );
}
