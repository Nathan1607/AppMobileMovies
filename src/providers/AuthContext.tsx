import React, { createContext, useState, ReactNode, useContext } from 'react';

interface AuthContextType {
    username: string;
    setUsername: (username: string) => void;    
    password: string;
    setPassword: (password: string) => void;    
    login: (username: string, password: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const login = (username: string, password: string) => {
        setUsername(username);
        setPassword(password);
    };

    const logout = () => {
        setUsername('');
        setPassword('');
    };

    return (
        <AuthContext.Provider value={{ username, setUsername, password, setPassword, login, logout }}>
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