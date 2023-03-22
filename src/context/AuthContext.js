import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [userToken, setUserToken] = useState(null);
    console.log(userToken)

    const login = () => {
        setUserToken('example');
        // AsyncStorage.setItem('userToken', userToken);
    }

    const logout = () => {
        setUserToken(null);
        // AsyncStorage.removeItem('userToken');
    }

    // const isLoggedIn = async() => {
    //     try {
    //         let userToken = AsyncStorage.getItem('userToken');
    //         setUserToken(userToken);
    //     } catch(e) {
    //         console.log(`isLogged in error ${e}`);
    //     }
    // }

    // useEffect(() => {
    //     isLoggedIn();
    // }, []);

    return (
        <AuthContext.Provider value={{login, logout, userToken}}>
            {children}
        </AuthContext.Provider>
    );
}