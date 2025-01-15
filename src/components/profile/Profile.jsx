import React, { useState } from 'react';
import { Star, Film, Heart, Calendar, Mail, MapPin, Link as LinkIcon } from 'lucide-react';

const ProfilePage = () => {
    const [activeTab, setActiveTab] = useState('watchlist');
    const mockUserData = {
        username: "JohnDoe",
        email: "john@example.com",
        avatar_url: "/api/placeholder/150/150",
        joinDate: "2023-01-15",
        watchlist: [
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
        ],
        favorites: [
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
            }
        ],
        ratings: [
            {
                id: 1,
                title: "Inception",
                poster_url: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
                release_date: "2010-07-16",
                vote_average: 8.8,
                rating: 4.5
            },
            {
                id: 2,
                title: "The Dark Knight",
                poster_url: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
                release_date: "2008-07-18",
                vote_average: 9.0,
                rating: 5
            },
            {
                id: 3,
                title: "Interstellar",
                poster_url: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
                release_date: "2014-11-07",
                vote_average: 8.6,
                rating: 4
            }
        ]
    };

    const { username, email, avatar_url, joinDate, watchlist, favorites, ratings } = mockUserData;

    const stats = [
        {
            icon: <Film className="w-5 h-5" />,
            label: 'Watchlist',
            value: watchlist.length
        },
        {
            icon: <Heart className="w-5 h-5" />,
            label: 'Favorites',
            value: favorites.length
        },
        {
            icon: <Star className="w-5 h-5" />,
            label: 'Rated Movies',
            value: ratings.length
        }
    ];

    const TabButton = ({ id, label, count }) => (
        <button
            onClick={() => setActiveTab(id)}
            className={`px-6 py-3 font-medium text-sm rounded-lg transition-colors flex items-center
                ${activeTab === id
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
        >
            {label}
            <span className={`ml-2 px-2 py-0.5 rounded-full text-xs 
                ${activeTab === id
                    ? 'bg-white text-blue-500'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                {count}
            </span>
        </button>
    );

    const MovieList = ({ movies, showRating = false }) => (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {movies.map(movie => (
                <div key={movie.id} className="relative group">
                    <div className="relative aspect-[2/3] rounded-lg overflow-hidden">
                        <img
                            src={movie.poster_url}
                            alt={movie.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                        {showRating && (
                            <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded-full text-sm flex items-center">
                                <Star className="w-4 h-4 mr-1" />
                                {movie.rating || movie.user_rating}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 pt-16">
            {/* Profile Header */}
            <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 py-12">
                    <div className="flex flex-col md:flex-row md:items-start gap-8">
                        {/* Left Column - Avatar */}
                        <div className="flex-shrink-0">
                            <img
                                src={avatar_url}
                                alt={username}
                                className="w-32 h-32 rounded-full object-cover border-4 border-white/20 shadow-xl"
                            />
                        </div>

                        {/* Middle Column - User Info */}
                        <div className="flex-grow">
                            <h1 className="text-3xl font-bold text-white mb-2">{username}</h1>

                            {/* Contact & Basic Info */}
                            <div className="space-y-2 text-gray-300 mb-4">
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4" />
                                    <span>{email}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    <span>New York, USA</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <LinkIcon className="w-4 h-4" />
                                    <a href="#" className="text-blue-400 hover:text-blue-300">http://example.com</a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>Joined {new Date(joinDate).toLocaleDateString()}</span>
                                </div>
                            </div>

                            {/* Bio */}
                            <p className="text-gray-300 mb-6">
                                Movie enthusiast and critic. Love watching and reviewing films of all genres.
                                Always looking for the next great story to experience.
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 max-w-2xl">
                                {stats.map((stat, index) => (
                                    <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                                        <div className="flex justify-center text-blue-400 mb-2">
                                            {stat.icon}
                                        </div>
                                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                                        <div className="text-sm text-gray-300">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 py-6">
                {/* Tabs */}
                <div className="flex flex-wrap gap-4 mb-6">
                    <TabButton id="watchlist" label="Watchlist" count={watchlist.length} />
                    <TabButton id="favorites" label="Favorites" count={favorites.length} />
                    <TabButton id="ratings" label="Your Ratings" count={ratings.length} />
                </div>

                {/* Content */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                    {activeTab === 'watchlist' && (
                        <div>
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-semibold">Your Watchlist</h2>
                                <p className="text-gray-500">Movies to watch: {watchlist.length}</p>
                            </div>
                            <MovieList movies={watchlist} />
                        </div>
                    )}
                    {activeTab === 'favorites' && (
                        <div>
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-semibold">Your Favorite Movies</h2>
                                <p className="text-gray-500">Favorite movies: {favorites.length}</p>
                            </div>
                            <MovieList movies={favorites} />
                        </div>
                    )}
                    {activeTab === 'ratings' && (
                        <div>
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-semibold">Movies You've Rated</h2>
                                <p className="text-gray-500">Rated movies: {ratings.length}</p>
                            </div>
                            <MovieList movies={ratings} showRating={true} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;