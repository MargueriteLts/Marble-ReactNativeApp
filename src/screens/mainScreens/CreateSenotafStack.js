import React from 'react'
import { useContext } from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthContext } from '../../context/AuthContext';

import AuthStack from '../../navigation/AuthStack';
import CreateSenotaf_1 from '../CreateSenotaf_1';
import CreateSenotaf_2 from '../CreateSenotaf_2';

const Stack = createNativeStackNavigator();

export default function CreateSenotafStack() {
    const userToken = useContext(AuthContext);
    return (
        <Stack.Navigator initialRouteName="Создание ценотафа">
            {userToken !== null ? <Stack.Screen name="Создание ценотафа" component={CreateSenotaf_1} /> : <Stack.Screen name="Authentification" component={AuthStack} />}
            <Stack.Screen options={{headerShown: false}} name="Создание ценотафа 2" component={CreateSenotaf_2} />
        </Stack.Navigator>
    );
}