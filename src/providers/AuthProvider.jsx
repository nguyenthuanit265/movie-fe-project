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

    sendVerifyEmail: async (email) => {
        try {
            const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.RESEND_VERIFY}?email=${email}`, {
                method: 'POST',
                headers: DEFAULT_HEADERS
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message || 'Failed to send verification email');
            }

            return await response.json();
        } catch (error) {
            console.error('Error during resend email verification:', error);
            throw error;
        }
    },

    verifyEmail: async (token) => {
        try {
            const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.VERIFY}?token=${token}`, {
                method: 'GET',
                headers: DEFAULT_HEADERS
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message || 'Email verification failed');
            }

            return await response.json();
        } catch (error) {
            console.error('Error during email verification:', error);
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

    confirmResetPassword: async (token, newPassword, confirmPassword) => {
        try {
            const response = await fetch(`${API_CONFIG.BASE_URL + API_CONFIG.ENDPOINTS.RESET_PASSWORD_CONFIRM}?token=${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    new_password: newPassword,
                    confirm_password: confirmPassword,
                }),
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

    getUserFavorite: async (token) => {
        try {
            if (!token) {
                throw new Error("Access token is required");
            }

            const headers = {
                ...DEFAULT_HEADERS,
                Authorization: `Bearer ${token}`,
            };

            const response = await fetch(`${API_CONFIG.BASE_URL + API_CONFIG.ENDPOINTS.PROFILE_FAVORITE}`, {
                method: 'GET',
                headers,
                credentials: 'include',
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message || 'Failed to fetch user profile');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching user profile:', error);
            throw error;
        }
    },
    getUserRating: async (token) => {
        try {
            if (!token) {
                throw new Error("Access token is required");
            }

            const headers = {
                ...DEFAULT_HEADERS,
                Authorization: `Bearer ${token}`,
            };

            const response = await fetch(`${API_CONFIG.BASE_URL + API_CONFIG.ENDPOINTS.PROFILE_RATING}`, {
                method: 'GET',
                headers,
                credentials: 'include',
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message || 'Failed to fetch user profile');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching user profile:', error);
            throw error;
        }
    },
    getUserWatchList: async (token) => {
        try {
            if (!token) {
                throw new Error("Access token is required");
            }

            const headers = {
                ...DEFAULT_HEADERS,
                Authorization: `Bearer ${token}`,
            };

            const response = await fetch(`${API_CONFIG.BASE_URL + API_CONFIG.ENDPOINTS.PROFILE_WATCHLIST}`, {
                method: 'GET',
                headers,
                credentials: 'include',
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message || 'Failed to fetch user profile');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching user profile:', error);
            throw error;
        }
    },
    getUserProfile: async (token) => {
        try {
            if (!token) {
                throw new Error("Access token is required");
            }

            const headers = {
                ...DEFAULT_HEADERS,
                Authorization: `Bearer ${token}`,
            };

            const response = await fetch(`${API_CONFIG.BASE_URL + API_CONFIG.ENDPOINTS.PROFILE}`, {
                method: 'GET',
                headers,
                credentials: 'include',
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message || 'Failed to fetch user profile');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching user profile:', error);
            throw error;
        }
    },
};
export default AuthProvider;