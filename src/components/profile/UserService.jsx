import { AuthProvider } from '../../providers/AuthProvider';

export const fetchUserData = async (token) => {
    try {
        const profileResponse = await AuthProvider.getUserProfile(token);
        const favoriteResponse = await AuthProvider.getUserFavorite(token);
        const watchlistResponse = await AuthProvider.getUserWatchList(token);
        const ratingsResponse = await AuthProvider.getUserRating(token);

        console.log("Favorites Response:", favoriteResponse);
        console.log("Watchlist Response:", watchlistResponse);
        console.log("Ratings Response:", ratingsResponse);
        if (!profileResponse || !profileResponse.data) {
            console.error("No data found for user profile.");
            return {
                username: "Unknown User",
                email: "No email provided",
                average_rating: "Rating not yet done",
                role_user: "Unknown",
                watchlist: [],
                favorites: [],
                ratings: [],
            };
        }

        return {
            username: profileResponse.data.full_name || "Unknown User",
            email: profileResponse.data.email || "No email provided",
            avatar_url: profileResponse.data.image_url || "https://cdn.vectorstock.com/i/1000v/51/87/student-avatar-user-profile-icon-vector-47025187.jpg",
            average_rating: profileResponse.data.average_rating || "Rating not yet done",
            role_user: profileResponse.data.role || "Unknown",
            watchlist: watchlistResponse?.data?.content || [],
            favorites: favoriteResponse?.data?.content || [],
            ratings: ratingsResponse?.data?.content || [],
        };
    } catch (error) {
        console.error("Error fetching user data:", error);
        return {
            username: "Unknown User",
            email: "No email provided",
            avatar_url: "https://cdn.vectorstock.com/i/1000v/51/87/student-avatar-user-profile-icon-vector-47025187.jpg",
            average_rating: "Rating not yet done",
            role_user: "Unknown",
            watchlist: [],
            favorites: [],
            ratings: [],
        };
    }
};
