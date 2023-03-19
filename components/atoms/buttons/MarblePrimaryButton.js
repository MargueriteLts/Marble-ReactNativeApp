import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

export default function MarblePrimaryButton(props) {
  const { onPress, title } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 22,
    elevation: 3,
    backgroundColor: "white",
    width: '100%',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "regular",
    letterSpacing: 0.25,
    color: "black",
  },
});
