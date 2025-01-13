import React, { useState } from 'react';
import { Heart, Bookmark, Play } from 'lucide-react';

const MovieDetailUI = ({ movie }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const formatRuntime = (minutes) => {
        if (!minutes) return '';
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${hours}h ${mins}m`;
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const getScoreColor = (score) => {
        const percentage = score * 10;
        if (percentage >= 70) return 'border-green-500';
        if (percentage >= 40) return 'border-yellow-500';
        return 'border-red-500';
    };

    return (
        <div className="relative w-full">
            {/* Backdrop Image with Overlay */}
            <div className="relative w-full h-[calc(100vh-64px)] min-h-[600px]">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${movie.backdrop_url})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent" />

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 pt-20">
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Poster */}
                        <div className="flex-shrink-0">
                            <img
                                src={movie.poster_url}
                                alt={movie.title}
                                className="w-64 h-96 rounded-lg shadow-xl"
                            />
                        </div>

                        {/* Movie Info */}
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

                            {/* Actions Row */}
                            <div className="flex items-center gap-4 mb-8">
                                {/* Score Circle */}
                                <div className={`w-16 h-16 rounded-full border-4 ${getScoreColor(movie.vote_average)} 
                                    bg-gray-900 flex items-center justify-center`}>
                                    <div className="text-center">
                                        <span className="text-xl font-bold">
                                            {Math.round(movie.vote_average * 10)}
                                        </span>
                                        <span className="text-sm">%</span>
                                    </div>
                                </div>

                                {/* Your Rating */}
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-gray-900/60 
                                        flex items-center justify-center cursor-pointer
                                        hover:bg-gray-800 transition-colors">
                                        <Heart className="w-6 h-6" />
                                    </div>
                                    <span className="text-sm mt-1">Rate</span>
                                </div>

                                {/* Watchlist */}
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-gray-900/60 
                                        flex items-center justify-center cursor-pointer
                                        hover:bg-gray-800 transition-colors">
                                        <Bookmark className="w-6 h-6" />
                                    </div>
                                    <span className="text-sm mt-1">Watchlist</span>
                                </div>

                                {/* Play Trailer */}
                                <button className="flex items-center gap-2 bg-gray-900/60 
                                    rounded-full px-6 py-3 hover:bg-gray-800 transition-colors">
                                    <Play className="w-5 h-5" />
                                    Play Trailer
                                </button>
                            </div>

                            {/* Overview */}
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Overview</h3>
                                <p className={`text-gray-300 ${!isExpanded ? 'line-clamp-3' : ''}`}>
                                    {movie.overview}
                                </p>
                                {movie.overview?.length > 200 && (
                                    <button
                                        onClick={() => setIsExpanded(!isExpanded)}
                                        className="text-blue-400 hover:text-blue-300 mt-2"
                                    >
                                        {isExpanded ? 'Show less' : 'Read more'}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetailUI;