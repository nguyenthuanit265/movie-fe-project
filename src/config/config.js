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
        PROFILE: '/api/users/profile',
        PROFILE_FAVORITE: '/api/users/profile/favorites',
        PROFILE_WATCHLIST: '/api/users/profile/watchlist',
        PROFILE_RATING: '/api/users/profile/ratings',
    }
};

export const DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
    'Accept': '*/*',
    'ngrok-skip-browser-warning': '1'
};