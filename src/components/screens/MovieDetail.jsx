import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetailUI from "../common/MovieDetailUI.jsx";
import CastCard from "../common/CastCard.jsx";
import RecommendationsSection from "../sections/Recomend.jsx";
import MovieProvider from "../../providers/MovieProvider.jsx";
import { useSelector } from 'react-redux';

const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState("");
    const token = useSelector((state) => state.auth.token);

    useEffect(() => {
        const fetchMovieDetails = async (movieId) => {
            try {
                const movieDetails = await MovieProvider.getDetailMovie(movieId, token);
                setMovie(movieDetails.data);
            } catch (error) {
                console.error('Failed to fetch movie details:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchMovieDetails(id);
        } else {
            setError('Movie ID is required');
            setLoading(false);
        }
    }, [id, token]);

    const handleAddReview = () => {
        if (newReview.trim()) {
            setReviews([...reviews, newReview]);
            setNewReview("");
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return movie ? (
        <div className="w-full bg-white">
            {/* Hero Section - Full width */}
            <div className="w-full">
                {movie && (
                    <MovieDetailUI
                        movie={movie}
                        onUpdateMovie={(updatedFields) =>
                            setMovie((prev) => ({
                                ...prev,
                                ...updatedFields,
                            }))
                        }
                    />
                )}
            </div>

            {/* Content Section - Max width container */}
            <div className="max-w-[1440px] mx-auto px-4">
                {/* Cast Section */}
                {movie.casts && movie.casts.length > 0 && (
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold mb-2">Actors in the Movie</h2>
                        <CastCard casts={movie.casts} />
                    </div>
                )}

                {/* Reviews Section */}
                <div className="mt-6 p-4 rounded-lg bg-slate-50">
                    <h2 className="text-xl font-semibold mb-4">Reviews</h2>
                    <div>
                        {reviews.length > 0 ? (
                            <ul className="space-y-4">
                                {reviews.map((review, index) => (
                                    <li key={index} className="p-4 bg-white rounded-lg shadow-sm">
                                        {review}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-600">No reviews yet. Be the first to review!</p>
                        )}

                        <div className="mt-4">
                            <textarea
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                rows="3"
                                value={newReview}
                                onChange={(e) => setNewReview(e.target.value)}
                                placeholder="Write your review here..."
                            ></textarea>
                            <button
                                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                onClick={handleAddReview}
                            >
                                Add Review
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-6 mb-8">
                    <RecommendationsSection
                        movieId={id}
                        token={token}
                    />
                </div>
            </div>
        </div>
    ) : (
        <div>Movie not found.</div>
    );
};

export default MovieDetail;