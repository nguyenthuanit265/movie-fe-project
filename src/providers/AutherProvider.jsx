import api from '../utils/api';
import { API_CONFIG, DEFAULT_HEADERS } from '../config/config';

export const AuthProvider = {
    login: async (credentials) => {
        try {
            const response = await fetch(API_CONFIG.BASE_URL + API_CONFIG.ENDPOINTS.LOGIN, {
                method: 'POST',
                headers: DEFAULT_HEADERS,
                body: JSON.stringify(credentials),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            return await response.json();
        } catch (error) {
            console.error('Error during login:', error);
            throw error;
        }
    },

    signUp: async (userData) => {
        try {
            const response = await fetch(API_CONFIG.BASE_URL + API_CONFIG.ENDPOINTS.REGISTER, {
                method: 'POST',
                headers: DEFAULT_HEADERS,
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message || 'Sign-up failed');
            }

            return await response.json();
        } catch (error) {
            console.error('Error during sign-up:', error);
            throw error;
        }
    },

    verifyEmail: async (token) => {
        try {
            const response = await api.post(API_CONFIG.ENDPOINTS.VERIFY_EMAIL, { token });
            return response.data;
        } catch (error) {
            throw error.response?.data || error;
        }
    },

    resetPassword: async (email) => {
        try {
            const response = await api.post(API_CONFIG.ENDPOINTS.RESET_PASSWORD, { email });
            return response.data;
        } catch (error) {
            throw error.response?.data || error;
        }
    },

    confirmResetPassword: async (token, newPassword) => {
        try {
            const response = await api.post(
                API_CONFIG.ENDPOINTS.RESET_PASSWORD_CONFIRM,
                { token, newPassword }
            );
            return response.data;
        } catch (error) {
            throw error.response?.data || error;
        }
    }
};

export default AuthProvider;