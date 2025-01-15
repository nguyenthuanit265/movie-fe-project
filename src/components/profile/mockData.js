
export const mockMovies = [
    {
        id: 1,
        title: "Inception",
        poster_url: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        release_date: "2010-07-16",
        vote_average: 8.8,
        user_rating: 4.5
    },
    {
        id: 2,
        title: "The Dark Knight",
        poster_url: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        release_date: "2008-07-18",
        vote_average: 9.0,
        user_rating: 5
    },
    {
        id: 3,
        title: "Interstellar",
        poster_url: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        release_date: "2014-11-07",
        vote_average: 8.6,
        user_rating: 4
    }
];

export const mockUserData = {
    username: "JohnDoe",
    email: "john@example.com",
    avatar_url: "/api/placeholder/150/150",
    joinDate: "2023-01-15",
    watchlist: mockMovies,
    favorites: mockMovies.slice(0, 2),
    ratings: mockMovies.map(movie => ({
        ...movie,
        rating: movie.user_rating
    }))
};