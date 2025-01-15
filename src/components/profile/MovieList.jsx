// // import React from 'react';
// // import { Star } from 'lucide-react';

// // const MovieList = ({ movies = [], showRating = false }) => {
// //     console.log("Movies prop received:", movies);

// //     if (!movies) {
// //         return <div>No movies available</div>;
// //     }

// //     if (!Array.isArray(movies)) {
// //         console.error("Movies prop is not an array:", movies);
// //         return <div>Invalid movies data</div>;
// //     }

// //     if (movies.length === 0) {
// //         return <div>No movies in this list yet</div>;
// //     }

// //     const convertRating = (rating) => {
// //         if (!rating) return 0;
// //         return (rating / 2).toFixed(1);
// //     };

// //     return (
// //         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
// //             {movies.map((movie) => {
// //                 // Log để kiểm tra cấu trúc của từng movie object
// //                 console.log("Individual movie object:", movie);

// //                 // Lấy poster URL từ các trường có thể có
// //                 const posterUrl = movie.poster_url || movie.movie?.poster_url || movie.posterUrl || movie.poster;

// //                 return (
// //                     <div key={movie.id || movie.movie?.id} className="relative group">
// //                         <div className="relative aspect-[2/3] rounded-lg overflow-hidden">
// //                             <img
// //                                 src={posterUrl}
// //                                 alt={movie.title || movie.movie?.title}
// //                                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
// //                             />
// //                             {showRating && (
// //                                 <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded-full text-sm flex items-center">
// //                                     <Star className="w-4 h-4 mr-1" />
// //                                     {convertRating(movie.rating || movie.user_rating)}
// //                                 </div>
// //                             )}
// //                         </div>
// //                     </div>
// //                 );
// //             })}
// //         </div>
// //     );
// // };

// // export default MovieList;

// import React from 'react';
// import { Star } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const MovieList = ({ movies = [], showRating = false }) => {
//     const navigate = useNavigate();

//     if (!movies) {
//         return <div>No movies available</div>;
//     }

//     if (!Array.isArray(movies)) {
//         console.error("Movies prop is not an array:", movies);
//         return <div>Invalid movies data</div>;
//     }

//     if (movies.length === 0) {
//         return <div>No movies in this list yet</div>;
//     }

//     const convertRating = (rating) => {
//         if (!rating) return 0;
//         return (rating / 2).toFixed(1);
//     };

//     const handleMovieClick = (movieId) => {
//         navigate(`/movie/${movieId}`);
//     };

//     return (
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//             {movies.map((movie) => {
//                 const movieId = movie.id || movie.movie?.id;
//                 const posterUrl = movie.poster_url || movie.movie?.poster_url || movie.posterUrl || movie.poster;

//                 return (
//                     <div
//                         key={movieId}
//                         className="relative group cursor-pointer"
//                         onClick={() => handleMovieClick(movieId)}
//                     >
//                         <div className="relative aspect-[2/3] rounded-lg overflow-hidden">
//                             <img
//                                 src={posterUrl}
//                                 alt={movie.title || movie.movie?.title}
//                                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
//                             />
//                             {showRating && (
//                                 <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded-full text-sm flex items-center">
//                                     <Star className="w-4 h-4 mr-1" />
//                                     {convertRating(movie.rating || movie.user_rating)}
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// export default MovieList;
import React from 'react';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MovieList = ({ movies = [], showRating = false, isRecommendation = false }) => {
    const navigate = useNavigate();

    if (!movies) {
        return <div>No movies available</div>;
    }

    if (!Array.isArray(movies)) {
        console.error("Movies prop is not an array:", movies);
        return <div>Invalid movies data</div>;
    }

    if (movies.length === 0) {
        return <div>No movies in this list yet</div>;
    }

    const convertRating = (rating) => {
        if (!rating) return 0;
        return (rating / 2).toFixed(1);
    };

    const handleMovieClick = (movieId) => {
        navigate(`/movie/${movieId}`);
    };

    const gridClass = isRecommendation
        ? "flex gap-[20px] pb-4 overflow-x-auto"
        : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4";

    return (
        <div className={gridClass}>
            {movies.map((movie) => {
                const movieId = movie.id || movie.movie?.id;
                const posterUrl = movie.poster_url || movie.movie?.poster_url || movie.posterUrl || movie.poster;

                return (
                    <div
                        key={movieId}
                        className={`relative group cursor-pointer ${isRecommendation ? 'flex-shrink-0 w-[200px]' : ''}`}
                        onClick={() => handleMovieClick(movieId)}
                    >
                        <div className="relative aspect-[2/3] rounded-lg overflow-hidden">
                            <img
                                src={posterUrl}
                                alt={movie.title || movie.movie?.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                            />
                            {showRating && (
                                <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded-full text-sm flex items-center">
                                    <Star className="w-4 h-4 mr-1" />
                                    {convertRating(movie.rating || movie.user_rating)}
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default MovieList;