import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Senotaf_Basic() {
  return (
    <View>
      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.text}>Моигла1</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 40,
    borderRadius: 10,
    backgroundColor: "#E3E3E3",
  },
  text: {
    fontSize: 18,
    padding: 12,
    color: "#000",
  },
});
