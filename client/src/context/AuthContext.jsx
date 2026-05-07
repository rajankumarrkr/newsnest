import {
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';

import api from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('user')) ||
        null
    );

    const [loading, setLoading] =
        useState(false);

    const register = async (formData) => {
        try {
            setLoading(true);

            const response = await api.post(
                '/auth/register',
                formData
            );

            localStorage.setItem(
                'user',
                JSON.stringify(response.data)
            );

            setUser(response.data);

            return {
                success: true,
            };
        } catch (error) {
            return {
                success: false,
                message:
                    error.response?.data?.message,
            };
        } finally {
            setLoading(false);
        }
    };

    const login = async (formData) => {
        try {
            setLoading(true);

            const response = await api.post(
                '/auth/login',
                formData
            );

            localStorage.setItem(
                'user',
                JSON.stringify(response.data)
            );

            setUser(response.data);

            return {
                success: true,
            };
        } catch (error) {
            return {
                success: false,
                message:
                    error.response?.data?.message,
            };
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        localStorage.removeItem('user');

        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                register,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () =>
    useContext(AuthContext);