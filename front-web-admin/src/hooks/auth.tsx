import React, { createContext, useState, useContext, useEffect } from 'react';

interface IAuthContext {
    user: string;
    logged: boolean;
    login(user: string, password: string): void;
    logout(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<string>('');
    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('@dsdelivery:logged');
        return !!isLogged;
    });

    useEffect(() => {
        const storagedUser = localStorage.getItem('@dsdelivery:user');

        if (storagedUser) {
            setUser(JSON.parse(storagedUser));
        } else {
            setUser('');
        }
    }, []);

    const login = (user:string, password:string) => {
        if(user !== '' && password !== '') {
            setLogged(true);
            localStorage.setItem('@dsdelivery:user', JSON.stringify(user));
            localStorage.setItem('@dsdelivery:logged', 'true');
        } else {
            alert('Digite um usuário e uma senha!')
        }
    };

    const logout = () => {
        setLogged(false);
        localStorage.removeItem('@dsdelivery:user');
        localStorage.removeItem('@dsdelivery:logged');
    };

    return (
        <AuthContext.Provider value={{logged, user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuth(): IAuthContext {
    const context = useContext(AuthContext);
    return context;
};

export { AuthProvider, useAuth };