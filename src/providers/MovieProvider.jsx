import { API_CONFIG, DEFAULT_HEADERS } from '../config/config';
import axios from "axios";
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

    getSearch: async (query) => {
        try {
            const response = await fetch(`${API_CONFIG.BASE_URL}/api/v1/search/multi?query=${encodeURIComponent(query)}`, {
                method: 'GET',
                headers: DEFAULT_HEADERS,
                credentials: 'include',
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message || 'Failed to fetch search results');
            }

            return await response.json();
        } catch (error) {
            console.error('Error fetching search results:', error);
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

    getDetailCast: async (id, token = null) => {
        try {
            if (!id) {
                throw new Error("Cast ID is required");
            }

            const headers = {
                ...DEFAULT_HEADERS,
                ...(token && { Authorization: `Bearer ${token}` }),
            };

            const response = await fetch(`${API_CONFIG.BASE_URL}/api/casts/${id}/detail`, {
                method: 'GET',
                headers,
                credentials: 'include',
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message || `Failed to fetch details for cast with ID: ${id}`);
            }

            return await response.json();
        } catch (error) {
            console.error(`Error fetching cast details for ID ${id}:`, error);
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

    addReview: async (reviewData, token) => {
        try {

            if (!reviewData || !reviewData.movie_id || !token) {
                throw new Error("Review data (including movie ID) and access token are required");
            }

            const headers = {
                ...DEFAULT_HEADERS,
                Authorization: `Bearer ${token}`,
            };

            const response = await fetch(`${API_CONFIG.BASE_URL}/api/v1/reviews/manage`, {
                method: 'POST',
                headers,
                credentials: 'include',
                body: JSON.stringify({
                    action: "add",
                    movie_id: reviewData.movie_id,
                    content: reviewData.content,
                    rating: reviewData.rating,
                }),
            });


            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message || `Failed to add review for movie ID ${reviewData.movie_id}`);
            }

            return await response.json();
        } catch (error) {
            console.error(`Error adding review for movie ID ${reviewData.movie_id}:`, error);
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
    getSimilarMovies: async (movieId, token = null) => {
        try {
            if (!movieId) {
                throw new Error("Movie ID is required");
            }

            const headers = {
                ...DEFAULT_HEADERS,
            };

            if (token) {
                headers.Authorization = `Bearer ${token}`;
            }

            const response = await fetch(`${API_CONFIG.BASE_URL}/api/movies/${movieId}/recommendations`, {
                method: 'GET',
                headers,
                credentials: 'include',
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message || `Failed to get recommendations for movie with ID ${movieId}`);
            }

            return await response.json();
        } catch (error) {
            console.error(`Error getting recommendations for movie ID ${movieId}:`, error);
            throw error;
        }
    },

    getUserRecommendations: async (token) => {
        try {
            if (!token) {
                throw new Error("Access token is required");
            }

            const headers = {
                ...DEFAULT_HEADERS,
                Authorization: `Bearer ${token}`,
            };

            const response = await fetch(`${API_CONFIG.BASE_URL}/api/movies/recommendations/user`, {
                method: 'GET',
                headers,
                credentials: 'include',
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message || 'Failed to get user recommendations');
            }

            return await response.json();
        } catch (error) {
            console.error('Error getting user recommendations:', error);
            throw error;
        }
    },
    updateReview: async (movieId, updatedContent, updatedRating, token) => {
        try {
            if (!movieId || !updatedContent || !updatedRating || !token) {
                throw new Error("All parameters are required for updating a review");
            }

            const response = await fetch("http://14.225.210.222:8081/api/v1/reviews/manage", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    action: "update",
                    movie_id: movieId,
                    content: updatedContent,
                    rating: updatedRating,
                }),
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message || "Failed to update review");
            }

            return await response.json();
        } catch (error) {
            console.error("Error updating review:", error);
            throw error;
        }
    },
    deleteReview: async (movieId, token) => {
        try {
            const response = await axios.post(
                "http://14.225.210.222:8081/api/v1/reviews/manage",
                {
                    action: "delete",
                    movie_id: movieId,  // Gửi movie_id để xóa tất cả đánh giá liên quan đến movie_id
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            return response.data;
        } catch (error) {
            console.error("Error deleting review:", error);
            throw error;
        }
    },

};

export default MovieProvider;