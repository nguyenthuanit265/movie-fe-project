import { API_CONFIG, DEFAULT_HEADERS } from '../config/config';

export const MovieProvider = {

    getTrending: async (timeWindow) => {
        try {
            const endpoint =
                timeWindow === "today"
                    ? `${API_CONFIG.BASE_URL}/api/movies/trending/day`
                    : `${API_CONFIG.BASE_URL}/api/movies/trending/week?page=0`;

            const response = await fetch(endpoint, {
                method: 'GET',
                headers: DEFAULT_HEADERS,
                credentials: 'include', // Gửi cookie nếu cần
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message || 'Failed to fetch trending movies');
            }

            return await response.json();
        } catch (error) {
            console.error('Error fetching trending movies:', error);
            throw error;
        }
    },

    getTrailers: async (movieId = null) => {
        try {
            const endpoint = movieId
                ? `${API_CONFIG.BASE_URL}/api/movies/${movieId}/trailers`
                : `${API_CONFIG.BASE_URL}/api/movies/trailers/latest`;

            const response = await fetch(endpoint, {
                method: 'GET',
                headers: DEFAULT_HEADERS,
                credentials: 'include', // Gửi cookie nếu cần
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message || 'Failed to fetch movie trailers');
            }

            return await response.json();
        } catch (error) {
            console.error('Error fetching movie trailers:', error);
            throw error;
        }
    },

    getPopular: async () => {
        try {

            const response = await fetch(`${API_CONFIG.BASE_URL}/api/movies/popular`, {
                method: 'GET',
                headers: DEFAULT_HEADERS,
                credentials: 'include', // Gửi cookie nếu cần
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message || 'Failed to fetch trending movies');
            }

            return await response.json();
        } catch (error) {
            console.error('Error fetching trending movies:', error);
            throw error;
        }
    },

    getCast: async (movieId) => {
        try {
            const response = await fetch(`${API_CONFIG.BASE_URL}/api/movies/${movieId}/cast`, {
                method: 'GET',
                headers: DEFAULT_HEADERS,
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message || 'Failed to fetch movie cast');
            }

            return await response.json();
        } catch (error) {
            console.error('Error fetching cast:', error);
            throw error;
        }
    },
};



export default MovieProvider;