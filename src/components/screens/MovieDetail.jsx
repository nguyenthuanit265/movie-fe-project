import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MovieDetailUI from "../common/MovieDetailUI.jsx";
import CastCard from "../common/CastCard.jsx";
import RecommendationsSection from "../sections/Recomend.jsx";
import MovieProvider from "../../providers/MovieProvider.jsx";
import AuthProvider from "../../providers/AuthProvider";

const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState("");
    const [currentUser, setCurrentUser] = useState(null);
    const [editingReview, setEditingReview] = useState(null);
    const token = useSelector((state) => state.auth.token);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const profile = await AuthProvider.getUserProfile(token);
                setCurrentUser(profile.data);
            } catch (error) {
                console.error("Failed to fetch user profile:", error);
                setError("Unable to fetch user profile.");
            }
        };

        if (token) {
            fetchUserProfile();
        }
    }, [token]);

    // useEffect(() => {
    //     const fetchMovieDetails = async (movieId) => {
    //         try {
    //             const movieDetails = await MovieProvider.getDetailMovie(movieId, token);
    //             setMovie(movieDetails.data);
    //             setReviews(movieDetails.data.reviews.content);
    //         } catch (error) {
    //             console.error("Failed to fetch movie details:", error);
    //             setError(error.message);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     if (id) {
    //         fetchMovieDetails(id);
    //     } else {
    //         setError("Movie ID is required");
    //         setLoading(false);
    //     }
    // }, [id, token]);
    useEffect(() => {
        const fetchMovieDetails = async (movieId) => {
            try {
                const movieDetails = await MovieProvider.getDetailMovie(movieId, token);
                setMovie(movieDetails.data);
                setReviews(movieDetails.data.reviews.content.reverse()); // Đảo ngược thứ tự
            } catch (error) {
                console.error("Failed to fetch movie details:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchMovieDetails(id);
        } else {
            setError("Movie ID is required");
            setLoading(false);
        }
    }, [id, token]);


    const handleAddReview = async () => {
        if (newReview.trim()) {
            try {
                const reviewData = {
                    movie_id: id,
                    content: newReview,
                    rating: 8.5,
                };

                const addedReview = await MovieProvider.addReview(reviewData, token);

                const reviewWithUserInfo = {
                    ...addedReview.data,
                    user_name: currentUser?.full_name || "Anonymous",
                    user_id: currentUser?.id,
                };
                console.log('prin curent', currentUser)

                setReviews((prevReviews) => [...prevReviews, reviewWithUserInfo]);
                setNewReview("");
                toast.success("Review added successfully!");
            } catch (error) {
                console.error("Failed to add review:", error);
                toast.error("Failed to add review. Please try again.");
            }
        } else {
            toast.warn("Review content cannot be empty.");
        }
    };

    const handleDeleteReview = async (reviewId, movieId) => {
        try {
            const reviewToDelete = reviews.find((review) => review.id === reviewId);
            if (reviewToDelete && reviewToDelete.user_id === currentUser.id) {
                await MovieProvider.deleteReview(movieId, token);
                setReviews((prevReviews) =>
                    prevReviews.filter((review) => review.id !== reviewId)
                );
                toast.success("Review deleted successfully!");
            } else {
                toast.warn("You can only delete your own reviews.");
            }
        } catch (error) {
            console.error("Failed to delete review:", error);
            toast.error("Failed to delete review. Please try again.");
        }
    };

    const openEditDialog = (review) => {
        setEditingReview(review);
    };

    const handleSaveEdit = async (updatedContent, updatedRating) => {
        try {
            const updatedReview = await MovieProvider.updateReview(
                editingReview.movie_id,
                updatedContent,
                updatedRating,
                token
            );

            setReviews((prevReviews) =>
                prevReviews.map((review) =>
                    review.id === editingReview.id
                        ? { ...review, content: updatedContent, rating: updatedRating }
                        : review
                )
            );
            setEditingReview(null);
            toast.success("Review updated successfully!");
        } catch (error) {
            console.error("Failed to update review:", error);
            toast.error("Failed to update review. Please try again.");
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
            <ToastContainer />
            <style jsx="true" global="true">
                {`
                    /* CSS nội dung */
                `}
            </style>
            <div className="w-full">
                <MovieDetailUI
                    movie={movie}
                    onUpdateMovie={(updatedFields) =>
                        setMovie((prev) => ({
                            ...prev,
                            ...updatedFields,
                        }))
                    }
                />
            </div>
            <div className="max-w-[1440px] mx-auto px-4">
                {movie.casts && movie.casts.length > 0 && (
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold mb-2">Actors in the Movie</h2>
                        <CastCard casts={movie.casts} />
                    </div>
                )}
                <div className="mt-6 p-4 rounded-lg bg-slate-50">
                    <h2 className="text-xl font-semibold mb-4">Reviews</h2>
                    <div>
                        {reviews.length > 0 ? (
                            <ul className="space-y-4">
                                {reviews.map((review) => (
                                    <li key={review.id} className="p-4 bg-white rounded-lg shadow-sm">
                                        <p className="font-semibold">{review.user_name}</p>
                                        <p>{review.content}</p>
                                        <p className="text-sm text-gray-500">Rating: {review.rating}</p>
                                        <p className="text-sm text-gray-400">
                                            Reviewed on: {new Date(review.created_at).toLocaleDateString()}
                                        </p>
                                        {currentUser && currentUser.id === review.user_id && (
                                            <div className="flex space-x-4 mt-2">
                                                <button
                                                    className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                                                    onClick={() => openEditDialog(review)}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                                    onClick={() => handleDeleteReview(review.id, movie.id)}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-600">No reviews yet. Be the first to review!</p>
                        )}
                        {!reviews.some((review) => review.user_id === currentUser?.id) && (
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
                        )}
                    </div>
                </div>
                <div className="mt-6 mb-8">
                    <RecommendationsSection movieId={id} token={token} />
                </div>
            </div>
            {editingReview && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h3 className="text-lg font-bold mb-4">Edit Review</h3>
                        <textarea
                            className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                            rows="3"
                            defaultValue={editingReview.content}
                            onChange={(e) => setEditingReview({ ...editingReview, content: e.target.value })}
                        ></textarea>
                        <input
                            type="number"
                            className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                            defaultValue={editingReview.rating}
                            onChange={(e) =>
                                setEditingReview({ ...editingReview, rating: parseFloat(e.target.value) })
                            }
                            min={1}
                            max={10}
                        />
                        <div className="flex justify-end space-x-4">
                            <button
                                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                                onClick={() => setEditingReview(null)}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                onClick={() =>
                                    handleSaveEdit(editingReview.content, editingReview.rating)
                                }
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    ) : (
        <div>Movie not found.</div>
    );
};

export default MovieDetail;
