import React, { createContext, useState, useContext, useEffect } from 'react';

interface IAuthContext {
    user: string;
    logged: boolean;
    login(user: string, password: string): void;
    logout(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState('');
    const [logged, setLogged] = useState(false);

    useEffect(() => {
        const storagedUser = localStorage.getItem('@dsdelivery:user');

        if (storagedUser) {
            setUser(JSON.parse(storagedUser));
            setLogged(true);
        }
    }, []);

    const login = (user:string, password:string) => {
        if(user !== '' && password !== '') {
            setLogged(true);
            setUser(user);
            localStorage.setItem('@dsdelivery:user', JSON.stringify(user));
        } else {
            alert('Digite um usuário e uma senha!')
        }
    };

    const logout = () => {
        setUser('');
        setLogged(false);
        localStorage.removeItem('@dsdelivery:user');
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