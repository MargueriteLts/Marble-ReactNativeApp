import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from '../screens/LoginScreen';
import SignInScreen from '../screens/SignInScreen';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator initialRouteName='SignIn'>
            <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
            <Stack.Screen options={{headerShown: false}} name="SignIn" component={SignInScreen} />
        </Stack.Navigator>
    );
}