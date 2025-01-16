import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieProvider from "../../providers/MovieProvider";

const SearchResultPage = () => {
    const { query } = useParams();
    const [results, setResults] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState("all");
    const [sort, setSort] = useState("name-asc");

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const data = await MovieProvider.getSearch(query);
                setResults(data.data.content || []);
                setFilteredResults(data.data.content || []);
            } catch (error) {
                console.error("Error fetching search results:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchSearchResults();
    }, [query]);


    useEffect(() => {
        let filtered = [...results];


        if (filter !== "all") {
            filtered = filtered.filter((item) => item.media_type === filter);
        }


        switch (sort) {
            case "name-asc":
                filtered.sort((a, b) =>
                    (a.name || a.title || "").localeCompare(b.name || b.title || "")
                );
                break;
            case "name-desc":
                filtered.sort((a, b) =>
                    (b.name || b.title || "").localeCompare(a.name || a.title || "")
                );
                break;
            case "date":
                filtered.sort((a, b) =>
                    new Date(b.release_date || 0) - new Date(a.release_date || 0)
                );
                break;
            case "popularity":
                filtered.sort((a, b) => b.popularity - a.popularity);
                break;
            default:
                break;
        }

        setFilteredResults(filtered);
    }, [filter, sort, results]);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="w-full min-h-screen p-10 bg-gray-900 text-white pt-20">
            <h1 className="text-3xl font-bold mb-6">
                Search Results for "{query}"
            </h1>

            {/* Filter and Sort Options */}
            <div className="flex gap-4 mb-6">
                {/* Filter */}
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="bg-gray-800 text-white p-2 rounded"
                >
                    <option value="all">All</option>
                    <option value="movie">Movies</option>
                    <option value="person">People</option>
                </select>

                {/* Sort */}
                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="bg-gray-800 text-white p-2 rounded"
                >
                    <option value="name-asc">Name: A-Z</option>
                    <option value="name-desc">Name: Z-A</option>
                    <option value="date">Release Date</option>
                    <option value="popularity">Popularity</option>
                </select>
            </div>

            {/* Search Results */}
            <ul className="space-y-4">
                {filteredResults.map((item) => (
                    <SearchListItem key={item.id} data={item} />
                ))}
            </ul>
        </div>
    );
};

const SearchListItem = ({ data }) => {
    const {
        media_type,
        title,
        name,
        overview,
        profile_path,
        poster_path,
        release_date,
    } = data;

    const imageUrl = poster_path || profile_path
        ? `https://image.tmdb.org/t/p/w500${poster_path || profile_path}`
        : "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=";

    return (
        <li className="flex items-start bg-gray-800 rounded-lg shadow-md p-4">
            <img
                src={imageUrl}
                alt={title || name}
                className="w-24 h-36 object-cover rounded-lg mr-4"
                onError={(e) => {
                    e.target.src = "https://via.placeholder.com/100x150?text=No+Image";
                }}
            />
            <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">
                    {title || name || "Untitled"}
                </h2>
                <p className="text-sm text-gray-400 mb-2">
                    {media_type === "movie"
                        ? `Release Date: ${release_date || "N/A"}`
                        : "Person"}
                </p>
                <p className="text-sm text-gray-300">
                    {overview
                        ? `${overview.slice(0, 150)}...`
                        : "No description available."}
                </p>
            </div>
        </li>
    );
};

export default SearchResultPage;
