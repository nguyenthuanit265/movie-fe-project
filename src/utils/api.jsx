import axios from 'axios';
import { store } from '../store/store';
import { logout } from '../store/authSlice';

import { API_CONFIG, DEFAULT_HEADERS } from '../config/config';

const api = axios.create({
    baseURL: API_CONFIG.BASE_URL,
    headers: DEFAULT_HEADERS,
    withCredentials: false
});

api.interceptors.request.use(
    (config) => {
        const token = store.getState().auth.token || localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401 && !error.config._retry) {
            error.config._retry = true;
            store.dispatch(logout());
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            localStorage.removeItem('userEmail');
            window.location.href = '/';
        }
        return Promise.reject(error);
    }
);

export default api;