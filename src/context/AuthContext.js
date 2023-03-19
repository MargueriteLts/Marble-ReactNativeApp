import React from "react";
import { createContext, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [userToken, setUserToken] = useState(null);

    const login = (token) => {
        setUserToken(token);
    }

    const logout = () => {
        setUserToken('null');
    }

    return (
        <AuthContext.Provider value={{login, logout, userToken}}>
            {children}
        </AuthContext.Provider>
    );
}