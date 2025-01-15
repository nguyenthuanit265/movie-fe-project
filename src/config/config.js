export const API_CONFIG = {
    BASE_URL: 'http://14.225.210.222:8081',
    ENDPOINTS: {
        LOGIN: '/api/v1/auth/login',
        REGISTER: '/api/v1/auth/sign-up',
        RESET_PASSWORD: '/api/v1/auth/forgot-password',
        RESET_PASSWORD_CONFIRM: '/api/v1/auth/reset-password',
        MOVIES_TRENDING: '/api/v1/movies/trending',
        RESEND_VERIFY: '/api/v1/auth/verify/resend',
        VERIFY: '/api/v1/auth/verify',
    }
};

export const DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
    'Accept': '*/*',
    'ngrok-skip-browser-warning': '1'
};