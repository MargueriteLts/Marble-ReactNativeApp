import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const AuthContext = createContext()


export const AuthProvider = ({children}) => {
    const [userToken, setUserToken] = useState(null);
    console.log(userToken)
    
    const login = (username, password) => {
        axios.post(`http://localhost:3000/api/v1/login`, {
            username,
            password
        })
        .then(res => {
            console.log(res.data);
        })
        .catch(e => {
            console.log(`Login error ${e}`);
        });

        // setUserToken('example');
        // AsyncStorage.setItem('userToken', 'example');
    }

    const logout = () => {
        setUserToken(null);
        AsyncStorage.removeItem('userToken');
    }

    const isLoggedIn = async() => {
        try {
            let userToken = await AsyncStorage.getItem('userToken');
            setUserToken(userToken);
        } catch(e) {
            console.log(`isLogged in error ${e}`);
        }
    }

    useEffect(() => {
        isLoggedIn();
    }, []);

    return (
        <AuthContext.Provider value={{login, logout, userToken}}>
            {children}
        </AuthContext.Provider>
    );
}