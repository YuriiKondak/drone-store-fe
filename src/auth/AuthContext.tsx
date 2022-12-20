import { useEffect, useState } from 'react';
import { createContext } from "react";
import AuthService from '../api-service/auth-service/AuthService';
import User from '../models/user/LoginModel';
import StorageManager from '../storage/StorageManager';
import AsyncStorage from "../api-service/AsyncStorage";

const returnType: any = {};

export const AuthContext = createContext({
    user: null as User | undefined,
    isLoading: false,
    login: (email: string, password: string) => returnType,
    logout: () => returnType,
});

export const AuthProvider = ({children}: any) => {
    const [user, setUser] = useState<User>(null);
    const [isLoading, setLoading] = useState<boolean>(false);

    const login = (email: string, password: string) => {
        setLoading(true);
        AuthService.Login({user: { email: email, password: password }})
        .then((res) => {
            StorageManager.setAuthData(res.data);
            setUser(res.data.user);
        }).catch(err =>{
            console.warn(err)
        });
        setLoading(false);
    };
    const isLoggedIn = async () => {
        try{
            setLoading(true);
            const storedUser = await AsyncStorage.getItem("user");

            setUser(storedUser as User);
        }
        catch(e){
            console.warn("no user")
        }
        finally{
            setLoading(false);
        }
    }

    const logout = async () => {
        setLoading(true);

        AuthService.SignOut().then((res) => {
            StorageManager.deleteAuthData();
            setUser(null);
        }).catch(err =>{
            console.warn(err)
        });
        setLoading(false);
    }

    useEffect(() => {
        isLoggedIn();
    }, [])

    return (
        <AuthContext.Provider
            value={{
                user: user,
                isLoading: isLoading,
                login: login,
                logout: logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
};
