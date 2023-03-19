import * as React from "react";
import { StyleSheet } from "react-native";

import { AuthState } from "./src/context/AuthState.js";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Unicons from '@iconscout/react-native-unicons';

import MapScreen from "./src/screens/mainScreens/MapScreen.js";
import SearchScreen from "./src/screens/mainScreens/SearchScreen.js";
import CreateSenotaf from "./src/screens/mainScreens/CreateSenotafStack.js";
import ProfilScreen from "./src/screens/mainScreens/ProfilScreen.js";


const Tab = createBottomTabNavigator();


export default function App() {

  const [token, setToken] = useState("")

  useEffect(() => {
    saveTokenForTest("123sdfbsmndfbsdmn321")
    retrieveData()
    if (token.length > 0) { // Let's check out this token
      console.log(token)
      checkOutToken()
    } else { 
      saveTokenForTest("123sdfbsmndfbsdmn321")
      console.log("No token yet")
    }
  }, [])


  const retrieveData = async () => { // Try to get token from local storage 
    try {
      const value = await AsyncStorage.getItem('token')
      if (value !== null) { // We have token and need to check it out!
        setToken(value)
        console.log(value)
      }
    } catch (error) {
      console.log('Error retrieving data')
    }
  }
  

  const saveTokenForTest = async (t) => { // Try to get token from local storage 
    try {
      const value = await AsyncStorage.setItem('token', t)
      if (value !== null) { // We have token and need to check it out!
        console.log(value)
      } else {
        console.log("null-null")
      }
    } catch (error) {
      console.log('Error saving data')
    }
  }


  const checkOutToken = async () => {
    try {
      const response = await fetch( 
          // apiUrl + "/auth/checkout",
          "http://127.0.0.1:3000/api/auth/checkout",
          {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            }
          }
        )
  
      const json = await response.json()
      console.log(json)
      console.log(json.message)
      console.log(json.id)
      console.log(json.token)
      setToken(json.token)
      // console.log(json.login)
      // setUser(json)
    } catch (error) {
      console.error(error)
    } finally {
      // setLoading(false)
    }
  }

  return (
    <AuthState>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="HomeMap"
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "white",
            tabBarStyle: { backgroundColor: "#0D0D0D" },
          }}
          inactiveColor="#5E5E5E"
        >
          <Tab.Screen
            name="HomeMap"
            component={MapScreen}
            options={{
              tabBarLabel: "Карта",
              tabBarIcon: ({ color }) => (
                <Unicons.UilMapMarker color={color} size={24} />
                ),
              }}
          />
          <Tab.Screen
            name="Поиск"
            component={SearchScreen}
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
            component={CreateSenotaf}
            options={{
              headerShown: false,
              tabBarLabel: "Добавить ценотав",
              tabBarIcon: ({ color }) => (
                <Unicons.UilPlus color={color} size={24} />
              ),
            }}
          />

          <Tab.Screen
            name="Профиль"
            component={ProfilScreen}
            options={{
              tabBarLabel: "Профиль",
              tabBarIcon: ({ color }) => (
                <Unicons.UilUser color={color} size={24} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </AuthState>
  );
}
