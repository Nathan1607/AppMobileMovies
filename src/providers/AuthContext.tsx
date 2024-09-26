import { useNavigation, NavigationProp } from '@react-navigation/native';
import React, { createContext, useState, ReactNode, useContext } from 'react';

interface AuthContextType {
    username: string;
    setUsername: (username: string) => void;    
    password: string;
    setPassword: (password: string) => void;    
    login: (username: string, password: string) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const login = (username: string, password: string) => {
        setUsername(username);
        setPassword(password);
        setIsAuthenticated(true);
    };

    const logout = () => {
        setUsername('');
        setPassword('');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ username, setUsername, password, setPassword, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};