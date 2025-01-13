import { API_CONFIG, DEFAULT_HEADERS } from '../config/config';
import { store } from '../store/store';
import { logout } from '../store/authSlice';

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
    resetPassword: async (email) => {
        try {
            const response = await fetch(API_CONFIG.BASE_URL + API_CONFIG.ENDPOINTS.RESET_PASSWORD, {
                method: 'POST',
                headers: DEFAULT_HEADERS,
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message || 'Password reset failed');
            }

            return await response.json();
        } catch (error) {
            console.error('Error during password reset:', error);
            throw error;
        }
    },

    confirmResetPassword: async (token, newPassword) => {
        try {
            const response = await fetch(
                API_CONFIG.BASE_URL + API_CONFIG.ENDPOINTS.RESET_PASSWORD_CONFIRM,
                {
                    method: 'POST',
                    headers: DEFAULT_HEADERS,
                    body: JSON.stringify({ token, newPassword }),
                }
            );

            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message || 'Password reset confirmation failed');
            }

            return await response.json();
        } catch (error) {
            console.error('Error during password reset confirmation:', error);
            throw error;
        }
    },
};

export default AuthProvider;