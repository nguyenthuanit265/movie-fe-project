import React from 'react';
import { useParams } from 'react-router-dom';
import MovieDetailUI from './MovieDetailUI';

const MovieDetail = () => {
    const { id } = useParams();

    // Mock data for testing
    const mockMovie = {
        id: id,
        title: "The Dark Knight",
        original_title: "The Dark Knight",
        overview: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
        runtime: 152,
        release_date: "2008-07-18",
        genres: [
            { id: 1, name: "Action" },
            { id: 2, name: "Crime" },
            { id: 3, name: "Drama" },
            { id: 4, name: "Thriller" }
        ],
        vote_average: 8.4,
        vote_count: 29093,
        popularity: 112.915,
        poster_url: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        backdrop_url: "https://image.tmdb.org/t/p/original/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg",
        tagline: "Why So Serious?",
        status: "Released",
        budget: 185000000,
        revenue: 1004558444,
        favorite: false,
        in_watchlist: false,
        credits: {
            cast: [
                { id: 1, name: "Christian Bale", character: "Bruce Wayne / Batman" },
                { id: 2, name: "Heath Ledger", character: "Joker" },
                { id: 3, name: "Aaron Eckhart", character: "Harvey Dent" }
            ],
            crew: [
                { id: 1, name: "Christopher Nolan", job: "Director" },
                { id: 2, name: "Jonathan Nolan", job: "Screenplay" }
            ]
        }
    };

    return <MovieDetailUI movie={mockMovie} />;
};

export default MovieDetail;