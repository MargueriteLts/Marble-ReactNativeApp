import React, { useState } from 'react'

export const AuthContext = React.createContext()

export const AuthState = ({ children }) => {
    const [token, setToken] = useState('')

    return (
        <AuthContext.Provider
            value={{
                token: token,
                setToken
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
