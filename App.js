import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Unicons from '@iconscout/react-native-unicons';

//Main screens
import MapScreen from "./src/screens/mainScreens/MapScreen.js";
import SearchScreen from "./src/screens/mainScreens/SearchScreen.js";
import CreateSenotafStack from "./src/screens/mainScreens/CreateSenotafStack.js";
import ProfilScreen from "./src/screens/mainScreens/ProfilScreen.js";
//Other screens

import { AuthProvider } from "./src/context/AuthContext.js";

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <AuthProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="HomeMap"
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "white",
            tabBarStyle: { backgroundColor: "#0D0D0D" },
          }}
          inactiveColor="#5E5E5E"
        >
          <Tab.Screen name="HomeMap" component={MapScreen}
            options={{
              tabBarLabel: "Карта",
              tabBarIcon: ({ color }) => (
                <Unicons.UilMapMarker color={color} size={24} />
                ),
              }}
          />
          <Tab.Screen name="Поиск" component={SearchScreen}
            options={{
              headerShown: true,
              tabBarLabel: "Поиск",
              tabBarIcon: ({ color }) => (
                <Unicons.UilSearch color={color} size={24} />
              ),
            }}
          />

          <Tab.Screen
            name="Добавить ценотав"
            component={CreateSenotafStack}
            options={{
              headerShown: false,
              tabBarLabel: "Добавить ценотав",
              tabBarIcon: ({ color }) => (
                <Unicons.UilPlus color={color} size={24} />
              ),
            }}
          />
          
          <Tab.Screen name="Профиль" component={ProfilScreen}
            options={{
              tabBarLabel: "Профиль",
              tabBarIcon: ({ color }) => (
                <Unicons.UilUser color={color} size={24} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}