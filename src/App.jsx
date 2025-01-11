import React, { useState } from 'react';
import { Search, MoreHorizontal } from 'lucide-react';

const MovieCard = ({ data }) => {
    // Add hover state for the progress indicator
    const [isHovered, setIsHovered] = useState(false);
    const { title, posterPath, releaseDate, rating } = data;

    const getRatingColor = (score) => {
        if (score >= 70) return 'border-[#21d07a]';
        if (score >= 40) return 'border-[#d2d531]';
        return 'border-[#db2360]';
    };

    return (
        <div
            className="group relative transition-transform duration-200 hover:scale-105"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
        <div className="absolute left-0 top-0 h-full w-1">
            <div className="h-full w-full bg-[#1ed5a9] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-top"/>
        </div>

    {/* Card Content */}
    <div className="rounded overflow-hidden">
        {/* Poster Image */}
        <div className="relative">
            <img
                src={posterPath}
                alt={title}
                className="w-full aspect-[2/3] object-cover rounded-lg"
            />
            <div className="absolute top-2 right-2">
                <button className="w-8 h-8 rounded-full bg-[#032541]/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreHorizontal className="text-white w-5 h-5" />
                </button>
            </div>
        </div>

        {/* Score Circle */}
        <div className="relative">
            <div className="absolute -top-5 left-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-[#081c22] border-2 ${getRatingColor(rating)}`}>
                    <div className="flex items-baseline">
                        <span className="text-white font-bold text-sm">{rating}</span>
                        <span className="text-white text-[8px] ml-[1px]">%</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Movie Info */}
        <div className="pt-6 px-3 pb-4">
            <h2 className="font-bold text-black hover:text-[#01b4e4] cursor-pointer line-clamp-2">{title}</h2>
            <p className="text-gray-600 text-sm mt-1">{releaseDate}</p>
        </div>
    </div>
</div>
);
};

const App = () => {
    const [timeWindow, setTimeWindow] = useState('today');

    const movies = [
        {
            title: "Ad Vitam: Trọn đời",
            posterPath: "https://media.themoviedb.org/t/p/w440_and_h660_face/dOpSxmD3FWfl6SK8SLXw9uwcO05.jpg",
            releaseDate: "Jan 10, 2025",
            rating: 59
        },
        {
            title: "Hổng hoang nước Mỹ",
            posterPath: "https://media.themoviedb.org/t/p/w440_and_h660_face/ff0s9OHGNSZL6cVteIb7LNvTnJD.jpg",
            releaseDate: "Jan 09, 2025",
            rating: 69
        },
        {
            title: "Câu Chuyện Lúc Nửa Đêm",
            posterPath: "https://media.themoviedb.org/t/p/w440_and_h660_face/bOEoyOtsnoWbx4sq1VuDkKfFkYa.jpg",
            releaseDate: "Oct 13, 2023",
            rating: 72
        },
        {
            title: "Hổng hoang nước Mỹ",
            posterPath: "https://media.themoviedb.org/t/p/w440_and_h660_face/ff0s9OHGNSZL6cVteIb7LNvTnJD.jpg",
            releaseDate: "Jan 09, 2025",
            rating: 69
        },
        {
            title: "Câu Chuyện Lúc Nửa Đêm",
            posterPath: "https://media.themoviedb.org/t/p/w440_and_h660_face/bOEoyOtsnoWbx4sq1VuDkKfFkYa.jpg",
            releaseDate: "Oct 13, 2023",
            rating: 72
        },
        {
            title: "Hổng hoang nước Mỹ",
            posterPath: "https://media.themoviedb.org/t/p/w440_and_h660_face/ff0s9OHGNSZL6cVteIb7LNvTnJD.jpg",
            releaseDate: "Jan 09, 2025",
            rating: 69
        },
        {
            title: "Câu Chuyện Lúc Nửa Đêm",
            posterPath: "https://media.themoviedb.org/t/p/w440_and_h660_face/bOEoyOtsnoWbx4sq1VuDkKfFkYa.jpg",
            releaseDate: "Oct 13, 2023",
            rating: 72
        },
        {
            title: "Hổng hoang nước Mỹ",
            posterPath: "https://media.themoviedb.org/t/p/w440_and_h660_face/ff0s9OHGNSZL6cVteIb7LNvTnJD.jpg",
            releaseDate: "Jan 09, 2025",
            rating: 69
        },
        {
            title: "Câu Chuyện Lúc Nửa Đêm",
            posterPath: "https://media.themoviedb.org/t/p/w440_and_h660_face/bOEoyOtsnoWbx4sq1VuDkKfFkYa.jpg",
            releaseDate: "Oct 13, 2023",
            rating: 72
        }
    ];

    return (
        <div className="min-h-screen bg-[#0d253f]">
            {/* Navigation */}
            <nav className="bg-[#032541]">
                <div className="w-full px-10 py-3 flex items-center justify-between">
                    {/* Left Nav */}
                    <div className="flex items-center gap-8">
                        <div className="flex items-center">
                            <span className="text-[#01b4e4] text-2xl font-bold">TMDB</span>
                            <div className="ml-2 w-12 h-6 rounded-lg bg-[#01b4e4]" />
                        </div>
                        <div className="flex gap-6">
                            <button className="text-white hover:text-[#01b4e4] transition-colors bg-[#032541]">Movies</button>
                            <button className="text-white hover:text-[#01b4e4] transition-colors bg-[#032541]">TV Shows</button>
                            <button className="text-white hover:text-[#01b4e4] transition-colors bg-[#032541]">People</button>
                            <button className="text-white hover:text-[#01b4e4] transition-colors bg-[#032541]">More</button>
                        </div>
                    </div>

                    {/* Right Nav */}
                    <div className="flex items-center gap-6">
                        <button className="text-white hover:text-[#01b4e4] text-xl bg-[#032541]">+</button>
                        <button className="text-white hover:text-[#01b4e4] px-2 py-1 border border-white rounded bg-[#032541]">VI</button>
                        <button className="text-white hover:text-[#01b4e4] bg-[#032541]">Đăng nhập</button>
                        <button className="text-white hover:text-[#01b4e4] bg-[#032541]">Tham gia TMDB</button>
                        <Search className="text-[#01b4e4] w-5 h-5 cursor-pointer" />
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative h-[300px] bg-gradient-to-br from-[#042541] to-[#01b4e4]">
                <div className="absolute inset-0">
                    <img
                        src="/api/placeholder/1300/300"
                        alt="Background"
                        className="w-full h-full object-cover mix-blend-overlay opacity-10"
                    />
                </div>
                <div className="relative h-full w-full px-10 flex flex-col justify-center">
                    <h1 className="text-5xl font-bold text-white mb-4">Welcome.</h1>
                    <h2 className="text-2xl text-white mb-8">
                        Millions of movies, TV shows and people to discover. Explore now.
                    </h2>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search for a movie, tv show, person......"
                            className="w-full h-12 px-5 rounded-full text-base"
                        />
                        <button className="absolute right-0 top-0 h-full px-8 bg-gradient-to-r from-[#1ed5a9] to-[#01b4e4] text-white font-semibold rounded-full">
                            Search
                        </button>
                    </div>
                </div>
            </section>

            {/* Trending Section */}
            <section className="w-full px-10 py-8 bg-white">
                <div className="flex items-center gap-5 mb-6">
                    <h3 className="text-xl font-semibold">Trending</h3>
                    <div className="inline-flex rounded-full border border-[#032541] p-1">
                        <button
                            onClick={() => setTimeWindow('today')}
                            className={`px-5 py-1 rounded-full text-sm font-semibold transition-colors ${
                                timeWindow === 'today'
                                    ? 'bg-[#032541] text-white'
                                    : 'text-[#032541]'
                            }`}
                        >
                            Today
                        </button>
                        <button
                            onClick={() => setTimeWindow('week')}
                            className={`px-5 py-1 rounded-full text-sm font-semibold transition-colors ${
                                timeWindow === 'week'
                                    ? 'bg-[#032541] text-white'
                                    : 'text-[#032541]'
                            }`}
                        >
                            This Week
                        </button>
                    </div>
                </div>

                {/*<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">*/}
                {/*    {movies.map((movie, index) => (*/}
                {/*        <MovieCard key={index} data={movie} />*/}
                {/*    ))}*/}
                {/*</div>*/}

                <div className="relative">
                    <div className="w-full overflow-hidden">
                        <div className="flex overflow-x-auto gap-[20px] pb-4">
                            {movies.map((movie, index) => (
                                <MovieCard key={index} data={movie}/>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest Trailers Section */}
            <section className="px-10 py-8 bg-[#0d253f]">
                <div className="flex items-center gap-5 mb-6">
                    <h3 className="text-xl font-semibold text-white">Latest Trailers</h3>
                    <div className="inline-flex rounded-full bg-[#032541] p-1">
                        <button
                            onClick={() => setTimeWindow('popular')}
                            className={`px-5 py-1 rounded-full text-sm font-semibold transition-colors ${
                                timeWindow === 'popular'
                                    ? 'bg-[#21d07a] text-black'
                                    : 'bg-[#0d253f] text-white'
                            }`}
                        >
                            Popular
                        </button>
                        <button
                            onClick={() => setTimeWindow('inTheaters')}
                            className={`px-5 py-1 rounded-full text-sm font-semibold transition-colors ${
                                timeWindow === 'inTheaters'
                                    ? 'bg-[#21d07a] text-black'
                                    : 'bg-[#0d253f] text-white'
                            }`}
                        >
                            In Theaters
                        </button>
                    </div>
                </div>

                {/* Placeholder for trailer content */}
                <div className="bg-[#1F3B53] rounded-lg p-8 text-white text-center">
                    This panel didn't return any results. Try refreshing it.
                </div>
            </section>

            {/* What's Popular Section */}
            <section className="px-10 py-8 bg-white">
                <div className="flex items-center gap-5 mb-6">
                    <h3 className="text-xl font-semibold text-black">What's Popular</h3>
                    <div className="inline-flex rounded-full bg-[#032541] p-1">
                        <button
                            onClick={() => setTimeWindow('inTheaters')}
                            className={`px-5 py-1 rounded-full text-sm font-semibold transition-colors ${
                                timeWindow === 'inTheaters'
                                    ? 'bg-[#21d07a] text-black'
                                    : 'bg-[#0d253f] text-white'
                            }`}
                        >
                            In Theaters
                        </button>
                    </div>
                </div>

                {/* Scroll Container */}
                <div className="relative">
                    <div className="w-full overflow-hidden">
                        <div className="flex overflow-x-auto gap-[20px] pb-4">
                            {movies.map((movie, index) => (
                                <MovieCard key={index} data={movie}/>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default App;