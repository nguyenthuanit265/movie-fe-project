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
                credentials: 'include',
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
                credentials: 'include',
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
                credentials: 'include',
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

    getDetailMovie: async (id, token = null) => {
        try {
            if (!id) {
                throw new Error("Movie ID is required");
            }

            const headers = {
                ...DEFAULT_HEADERS,
                ...(token && { Authorization: `Bearer ${token}` }),
            };

            const response = await fetch(`${API_CONFIG.BASE_URL}/api/movies/${id}/detail`, {
                method: 'GET',
                headers,
                credentials: 'include',
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message || `Failed to fetch details for movie with ID: ${id}`);
            }

            return await response.json();
        } catch (error) {
            console.error(`Error fetching movie details for ID ${id}:`, error);
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
    addWatchList: async (movieId, token) => {
        try {
            if (!movieId || !token) {
                throw new Error("Movie ID and access token are required");
            }

            const headers = {
                ...DEFAULT_HEADERS,
                Authorization: `Bearer ${token}`,
            };

            const response = await fetch(`${API_CONFIG.BASE_URL}/api/movies/${movieId}/watchlist`, {
                method: 'POST',
                headers,
                credentials: 'include',
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message || `Failed to add movie with ID ${movieId} to watchlist`);
            }

            return await response.json();
        } catch (error) {
            console.error(`Error adding movie to watchlist for ID ${movieId}:`, error);
            throw error;
        }
    },

    addFavorite: async (movieId, token) => {
        try {
            if (!movieId || !token) {
                throw new Error("Movie ID and access token are required");
            }

            const headers = {
                ...DEFAULT_HEADERS,
                Authorization: `Bearer ${token}`, // Token bắt buộc
            };

            const response = await fetch(`${API_CONFIG.BASE_URL}/api/movies/${movieId}/favorite`, {
                method: 'POST',
                headers,
                credentials: 'include',
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message || `Failed to add movie with ID ${movieId} to favorites`);
            }

            return await response.json();
        } catch (error) {
            console.error(`Error adding movie to favorites for ID ${movieId}:`, error);
            throw error;
        }
    },

    addRating: async (movieId, rating, token) => {
        try {
            if (!movieId || !token || rating == null) {
                throw new Error("Movie ID, rating, and access token are required");
            }

            const headers = {
                ...DEFAULT_HEADERS,
                Authorization: `Bearer ${token}`,
            };

            const body = JSON.stringify({ rating });

            const response = await fetch(`${API_CONFIG.BASE_URL}/api/movies/${movieId}/rating`, {
                method: 'POST',
                headers,
                body,
                credentials: 'include',
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message || `Failed to add rating for movie with ID ${movieId}`);
            }

            return await response.json();
        } catch (error) {
            console.error(`Error adding rating for movie ID ${movieId}:`, error);
            throw error;
        }
    },
};



export default MovieProvider;