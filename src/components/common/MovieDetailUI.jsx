import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Heart, Bookmark, Play, Star } from 'lucide-react';
import MovieProvider from '../../providers/MovieProvider';
import Rating from '@mui/material/Rating';
import { toast } from 'react-toastify';

const MovieDetailUI = ({ movie, onUpdateMovie }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const token = useSelector((state) => state.auth.token);
    const {
        is_favorite = false,
        is_in_watchlist = false,
        user_rating = 0,
    } = movie || {};

    const [isFavorite, setIsFavorite] = useState(is_favorite);
    const [isInWatchlist, setIsInWatchlist] = useState(is_in_watchlist);
    const [userRating, setUserRating] = useState(user_rating);
    const [isRatingOpen, setIsRatingOpen] = useState(false);
    const popupRef = useRef(null);

    const formatRuntime = (minutes) => {
        if (!minutes) return 'N/A';
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${hours}h ${mins}m`;
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const handleRating = async (rating) => {
        if (!isAuthenticated) {
            toast.error('You need to log in to rate this movie!');
            return;
        }
        const ratingOutOfTen = rating;
        try {
            await MovieProvider.addRating(movie.id, ratingOutOfTen, token);
            setUserRating(ratingOutOfTen);
            setIsRatingOpen(false);
            onUpdateMovie({ ...movie, user_rating: ratingOutOfTen });
            toast.success('Rating submitted successfully!');
        } catch (error) {
            toast.error(error.message || 'Failed to submit rating!');
        }
    };

    const handleAddFavorite = async () => {
        if (!isAuthenticated) {
            toast.error('You need to log in to manage your favorites!');
            return;
        }
        try {
            if (isFavorite) {
                await MovieProvider.addFavorite(movie.id, token);
                setIsFavorite(false);
                onUpdateMovie({ ...movie, is_favorite: false });
                toast.success('Movie removed from favorites!');
            } else {
                await MovieProvider.addFavorite(movie.id, token);
                setIsFavorite(true);
                onUpdateMovie({ ...movie, is_favorite: true });
                toast.success('Movie added to favorites!');
            }
        } catch (error) {
            toast.error(error.message || 'Failed to manage favorites!');
        }
    };

    const handleAddWatchList = async () => {
        if (!isAuthenticated) {
            toast.error('You need to log in to manage your watchlist!');
            return;
        }
        try {
            if (isInWatchlist) {
                await MovieProvider.addWatchList(movie.id, token);
                setIsInWatchlist(false);
                onUpdateMovie({ ...movie, is_in_watchlist: false });
                toast.success('Movie removed from watchlist!');
            } else {
                await MovieProvider.addWatchList(movie.id, token);
                setIsInWatchlist(true);
                onUpdateMovie({ ...movie, is_in_watchlist: true });
                toast.success('Movie added to watchlist!');
            }
        } catch (error) {
            toast.error(error.message || 'Failed to manage watchlist!');
        }
    };

    useEffect(() => {
        if (movie) {
            setIsFavorite(movie.is_favorite || false);
            setIsInWatchlist(movie.is_in_watchlist || false);
            setUserRating(movie.user_rating || 0);
        }
    }, [movie]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setIsRatingOpen(false);
            }
        };

        if (isRatingOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isRatingOpen]);

    return (
        <div className="w-full">
            <div className="relative min-h-screen">
                {/* Background Image - Full width */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${movie.backdrop_url})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent" />

                {/* Content with max width */}
                <div className="relative z-10 w-full px-4 pt-20">
                    <div className="flex flex-col md:flex-row gap-8 max-w-[1440px] mx-auto">
                        <div className="flex-shrink-0">
                            <img
                                src={movie.poster_url}
                                alt={movie.title}
                                className="w-64 h-96 rounded-lg shadow-xl"
                            />
                        </div>

                        <div className="flex-1 text-white">
                            <h1 className="text-4xl font-bold mb-2">
                                {movie.title}
                                <span className="text-gray-400 ml-2">
                                    ({new Date(movie.release_date).getFullYear()})
                                </span>
                            </h1>

                            <div className="flex items-center gap-2 text-gray-300 mb-6">
                                <span className="border px-1 text-sm border-gray-300">R</span>
                                <span>{formatDate(movie.release_date)}</span>
                                <span>•</span>
                                {movie.genres.map((genre, index) => (
                                    <React.Fragment key={genre.id}>
                                        <span>{genre.name}</span>
                                        {index < movie.genres.length - 1 && <span>•</span>}
                                    </React.Fragment>
                                ))}
                                {movie.runtime && (
                                    <>
                                        <span>•</span>
                                        <span>{formatRuntime(movie.runtime)}</span>
                                    </>
                                )}
                            </div>

                            <div className="flex items-center gap-4 mb-8">
                                <div
                                    className={`w-12 h-12 rounded-full bg-gray-900/60 flex items-center justify-center cursor-pointer ${isFavorite ? 'bg-red-500' : 'hover:bg-gray-800'
                                        }`}
                                    onClick={handleAddFavorite}
                                >
                                    <Heart className="w-6 h-6 text-white" />
                                </div>

                                <div
                                    className={`w-12 h-12 rounded-full bg-gray-900/60 flex items-center justify-center cursor-pointer ${isInWatchlist ? 'bg-sky-500' : 'hover:bg-gray-800'
                                        }`}
                                    onClick={handleAddWatchList}
                                >
                                    <Bookmark className="w-6 h-6 text-white" />
                                </div>

                                <div className="relative flex flex-col items-center">
                                    <div
                                        className={`w-12 h-12 rounded-full bg-gray-900/60 flex items-center justify-center cursor-pointer ${userRating > 0 ? 'bg-yellow-500' : 'hover:bg-gray-800'
                                            }`}
                                        onClick={() => setIsRatingOpen(!isRatingOpen)}
                                    >
                                        <Star className="w-6 h-6 text-white" />
                                    </div>
                                    {isRatingOpen && (
                                        <div
                                            ref={popupRef}
                                            className="absolute top-14 bg-white text-black rounded-lg shadow-lg p-4 flex flex-col items-center gap-2 z-50"
                                        >
                                            <Rating
                                                name="movie-rating"
                                                value={userRating / 2}
                                                precision={0.5}
                                                onChange={(event, newValue) => handleRating(newValue * 2)}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-2">Overview</h3>
                                <p className="text-gray-300">{movie.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetailUI;