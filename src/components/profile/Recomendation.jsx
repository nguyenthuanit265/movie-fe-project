import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import MovieProvider from '../../providers/MovieProvider';

const RecommendationSection = ({ token }) => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchRecommendations = async () => {
            setIsLoading(true);
            try {
                const result = await MovieProvider.getUserRecommendations(token);
                if (result.data && result.data.content) {
                    setMovies(result.data.content);
                }
            } catch (error) {
                console.error("Error fetching recommendations:", error);
            } finally {
                setIsLoading(false);
            }
        };

        if (token) {
            fetchRecommendations();
        }
    }, [token]);

    if (!token) return null;

    return (
        <section className="px-10 py-8 bg-white">
            <div className="max-w-[1170px] mx-auto">
                <h2 className="text-xl font-semibold text-black mb-6">Recommended For You</h2>

                {isLoading ? (
                    <div className="flex justify-center items-center py-10">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                ) : movies.length > 0 ? (
                    <div className="overflow-x-auto" style={{
                        msOverflowStyle: "none",
                        scrollbarWidth: "none",
                        WebkitOverflowScrolling: "touch"
                    }}>
                        <MovieList
                            movies={movies}
                            showRating={false} // Đặt showRating thành false
                            isRecommendation={true}
                        />
                    </div>
                ) : (
                    <p className="text-center text-gray-500">No recommendations found</p>
                )}
            </div>
        </section>
    );
};

export default RecommendationSection;