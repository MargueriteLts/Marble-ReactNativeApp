import React, { Component, useContext } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

import MarblePrimaryButton from "../../../components/atoms/buttons/MarblePrimaryButton";
import { AuthContext } from "../../context/AuthContext";

  
export default function ProfilScreen() {
  const {logout} = useContext(AuthContext);
  const {userToken} = useContext(AuthContext);
  console.log(userToken)
    
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

      <MarblePrimaryButton
        title={"Выйти"}
        onPress={() => logout() }
      />
      
    </View>
  );
}
