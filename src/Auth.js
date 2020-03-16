import React, { useState, useEffect } from 'react';
import { auth } from './services/firebase';

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    let [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        auth.onAuthStateChanged(setCurrentUser);
    }, []);
    console.log(currentUser);

    return (
        <AuthContext.Provider value={currentUser}>
            {children}
        </AuthContext.Provider>
    );
}