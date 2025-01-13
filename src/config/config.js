export const API_CONFIG = {
    BASE_URL: 'https://354f-2001-ee0-543c-18c0-14e9-b1e3-18cd-b3d1.ngrok-free.app',
    ENDPOINTS: {
        LOGIN: '/api/v1/auth/login',
        REGISTER: '/api/v1/auth/sign-up',
        VERIFY_EMAIL: '/api/v1/auth/verify-email',
        RESET_PASSWORD: '/api/v1/auth/reset-password',
        RESET_PASSWORD_CONFIRM: '/api/v1/auth/reset-password/confirm'
    }
};

export const DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
    'Accept': '*/*',
    'ngrok-skip-browser-warning': '1'
};