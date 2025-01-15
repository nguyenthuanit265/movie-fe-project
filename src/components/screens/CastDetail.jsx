import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MovieProvider } from '../../providers/MovieProvider';

const CastDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [cast, setCast] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCastDetail = async () => {
            try {
                const response = await MovieProvider.getDetailCast(id, null);
                setCast(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchCastDetail();
    }, [id]);
    const handleMovieClick = (movieId) => {
        navigate(`/movie/${id}`);
    };

    if (loading) return <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <p className="text-white">Loading...</p>
    </div>;

    if (error) return <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <p className="text-red-500">{error}</p>
    </div>;

    if (!cast) return null;

    return (
        <div className="bg-gray-900 text-white pt-16">
            <div className="container mx-auto px-4">
                {/* Cast Header */}
                <div className="flex flex-col md:flex-row gap-12 mb-8">
                    <img
                        src={cast.profile_path ? `https://image.tmdb.org/t/p/w500${cast.profile_path}` : '/placeholder.jpg'}
                        alt={cast.name}
                        className="w-[200px] h-[300px] object-cover rounded-lg shadow-lg"
                    />
                    <div className="flex-1">
                        <h1 className="text-4xl font-semibold mb-4">{cast.name}</h1>
                        <p className="text-gray-400 text-sm mb-2">
                            Born: {cast.birth_date} in {cast.place_of_birth}
                        </p>
                        <p className="text-lg">{cast.biography}</p>
                    </div>
                </div>

                {/* Known For Movies */}
                {cast.known_for && cast.known_for.length > 0 && (
                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold mb-4">Known For</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                            {cast.known_for.map((movie) => (
                                <div key={movie.id} className="rounded-lg overflow-hidden shadow-lg"
                                    onClick={() => handleMovieClick(movie.id)}>
                                    <img
                                        src={movie.poster_url || `https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        alt={movie.title}
                                        className="w-full h-[250px] object-cover hover:scale-105 transition-all"
                                    />
                                    <div className="p-3">
                                        <h4 className="font-semibold text-sm text-gray-200">
                                            {movie.title} ({new Date(movie.release_date).getFullYear()})
                                        </h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Social Links */}
                {cast.imdb_id && (
                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold mb-4">Social Links</h3>
                        <div className="flex gap-6">
                            <a
                                href={`https://www.imdb.com/name/${cast.imdb_id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-yellow-500 hover:underline"
                            >
                                IMDb
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CastDetail;