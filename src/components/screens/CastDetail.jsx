import React from 'react';
import { useParams } from 'react-router-dom';

const mockCastDetail = {
    id: '1',
    name: 'Tom Hanks',
    profile_path: 'https://image.tmdb.org/t/p/w500/2yVu7TmCGg5Os2VJeBnkc6dQ74F.jpg',
    biography: `Tom Hanks is an American actor and filmmaker. He is known for his roles in blockbuster films such as Forrest Gump, Cast Away, and Saving Private Ryan. He has won several Academy Awards and Golden Globe Awards, cementing his place as one of Hollywood's most respected actors.`,
    birthday: 'July 9, 1956',
    place_of_birth: 'Concord, California, USA',
    movies: [
        { title: 'Forrest Gump', year: 1994, poster: 'https://image.tmdb.org/t/p/w500/1bFyhyxxgXY5Epp8us9xkscD8U9.jpg' },
        { title: 'Cast Away', year: 2000, poster: 'https://image.tmdb.org/t/p/w500/qgJK5d7hhK2t3btDvgGbNzSMh9T.jpg' },
        { title: 'Saving Private Ryan', year: 1998, poster: 'https://image.tmdb.org/t/p/w500/n93FjoDkHESo7N4vSiw6hS3bhD6.jpg' },
        { title: 'Big', year: 1988, poster: 'https://image.tmdb.org/t/p/w500/qHxoTgyfso7IHh6BXP9HYfITC3F.jpg' },
        { title: 'The Green Mile', year: 1999, poster: 'https://image.tmdb.org/t/p/w500/eTg5lmrDyzvdfYYEKmMslAzz7yg.jpg' },
    ],
    relatedMovies: [
        { title: 'A Beautiful Day in the Neighborhood', year: 2019, poster: 'https://image.tmdb.org/t/p/w500/5hbf3ZnXj9xhXgKfb5TYH5fqNzC.jpg' },
        { title: 'Bridge of Spies', year: 2015, poster: 'https://image.tmdb.org/t/p/w500/yDxEZJdQJ3C2ZP2bKOy9gqj0T6V.jpg' },
        { title: 'The Terminal', year: 2004, poster: 'https://image.tmdb.org/t/p/w500/4g5q1RQCEhU6tvjBLWEX3Dk8cG8.jpg' },
    ],
};

const CastDetail = () => {
    const { id } = useParams();

    const cast = mockCastDetail;

    return (
        <div className="bg-gray-900 text-white pt-16"> {/* Added pt-16 to ensure padding for the header */}
            <div className="container mx-auto px-4">
                {/* Cast Header */}
                <div className="flex gap-12 mb-8">
                    <img
                        src={cast.profile_path}
                        alt={cast.name}
                        className="w-[200px] h-[300px] object-cover rounded-lg shadow-lg"
                    />
                    <div className="flex-1">
                        <h1 className="text-4xl font-semibold mb-4">{cast.name}</h1>
                        <p className="text-gray-400 text-sm mb-2">Born: {cast.birthday} in {cast.place_of_birth}</p>
                        <p className="text-lg">{cast.biography}</p>
                    </div>
                </div>

                {/* Movies */}
                <div className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">Known For</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {cast.movies.map((movie, index) => (
                            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                                <img
                                    src={movie.poster}
                                    alt={movie.title}
                                    className="w-full h-[250px] object-cover hover:scale-105 transition-all"
                                />
                                <div className="p-3">
                                    <h4 className="font-semibold text-sm text-gray-200">{movie.title} ({movie.year})</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Related Movies */}
                <div className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">Related Movies</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {cast.relatedMovies.map((movie, index) => (
                            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                                <img
                                    src={movie.poster}
                                    alt={movie.title}
                                    className="w-full h-[250px] object-cover hover:scale-105 transition-all"
                                />
                                <div className="p-3">
                                    <h4 className="font-semibold text-sm text-gray-200">{movie.title} ({movie.year})</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Social Links */}
                <div className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4">Social Links</h3>
                    <div className="flex gap-6">
                        <a href="https://twitter.com/TomHanks" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Twitter</a>
                        <a href="https://www.instagram.com/tomhanks/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">Instagram</a>
                        <a href="https://www.imdb.com/name/nm0000158/" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">IMDb</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CastDetail;
