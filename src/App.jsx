import React, {useState} from 'react';
import {Search, MoreHorizontal} from 'lucide-react';

const TMDBLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" className="w-[150px]">
        {/* Background shapes */}
        <rect x="10" y="20" width="280" height="60" rx="30" fill="#032541"/>

        {/* THE MOVIE DB text */}
        <g transform="translate(30, 60)">
            <text
                fontFamily="Arial"
                fontWeight="900"
                fontSize="38"
                letterSpacing="-1"
                fill="#01b4e4"
            >THE
            </text>
        </g>

        <g transform="translate(95, 60)">
            <text
                fontFamily="Arial"
                fontWeight="900"
                fontSize="38"
                letterSpacing="-1"
                fill="#90cea1"
            >MOVIE
            </text>
        </g>

        <g transform="translate(220, 60)">
            <text
                fontFamily="Arial"
                fontWeight="900"
                fontSize="38"
                letterSpacing="-1"
                fill="#01b4e4"
            >DB
            </text>
        </g>

        {/* Decorative bars */}
        <rect x="30" y="70" width="240" height="4" rx="2" fill="#90cea1" opacity="0.8"/>
        <rect x="30" y="25" width="240" height="4" rx="2" fill="#01b4e4" opacity="0.8"/>

        {/* Accent circles */}
        <circle cx="270" cy="50" r="15" fill="#01b4e4" opacity="0.2"/>
        <circle cx="270" cy="50" r="10" fill="#90cea1" opacity="0.4"/>
        <circle cx="270" cy="50" r="5" fill="#01b4e4"/>
    </svg>
);

// Footer Component
const Footer = () => (
    <footer className="bg-[#04223b] px-10 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-5 gap-8">
            {/* Logo Column */}
            <div className="col-span-1">
                <div className="mb-4">
                    <TMDBLogo/>
                </div>
                <button className="bg-white text-[#01b4e4] px-4 py-2 rounded-md font-bold">
                    JOIN THE COMMUNITY
                </button>
            </div>

            {/* THE BASICS */}
            <div className="text-white">
                <h3 className="font-bold text-lg mb-4">THE BASICS</h3>
                <ul className="space-y-1">
                    <li><a href="#" className="hover:text-[#01b4e4]">Giới thiệu về TMDB</a></li>
                    <li><a href="#" className="hover:text-[#01b4e4]">Contact Us</a></li>
                    <li><a href="#" className="hover:text-[#01b4e4]">Support Forums</a></li>
                    <li><a href="#" className="hover:text-[#01b4e4]">API</a></li>
                    <li><a href="#" className="hover:text-[#01b4e4]">System Status</a></li>
                </ul>
            </div>

            {/* GET INVOLVED */}
            <div className="text-white">
                <h3 className="font-bold text-lg mb-4">GET INVOLVED</h3>
                <ul className="space-y-1">
                    <li><a href="#" className="hover:text-[#01b4e4]">Contribution Bible</a></li>
                    <li><a href="#" className="hover:text-[#01b4e4]">Thêm phim mới</a></li>
                    <li><a href="#" className="hover:text-[#01b4e4]">Thêm chương trình TV mới</a></li>
                </ul>
            </div>

            {/* COMMUNITY */}
            <div className="text-white">
                <h3 className="font-bold text-lg mb-4">COMMUNITY</h3>
                <ul className="space-y-1">
                    <li><a href="#" className="hover:text-[#01b4e4]">Guidelines</a></li>
                    <li><a href="#" className="hover:text-[#01b4e4]">Discussions</a></li>
                    <li><a href="#" className="hover:text-[#01b4e4]">Leaderboard</a></li>
                </ul>
            </div>

            {/* LEGAL */}
            <div className="text-white">
                <h3 className="font-bold text-lg mb-4">LEGAL</h3>
                <ul className="space-y-1">
                    <li><a href="#" className="hover:text-[#01b4e4]">Terms of Use</a></li>
                    <li><a href="#" className="hover:text-[#01b4e4]">API Terms of Use</a></li>
                    <li><a href="#" className="hover:text-[#01b4e4]">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-[#01b4e4]">DMCA Policy</a></li>
                </ul>
            </div>
        </div>
    </footer>
);

// eslint-disable-next-line react/prop-types
const MovieCard = ({data}) => {
    // Add hover state for the progress indicator
    const [isHovered, setIsHovered] = useState(false);
    // eslint-disable-next-line react/prop-types
    const {title, posterPath, releaseDate, rating} = data;

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
                <div
                    className="h-full w-full bg-[#1ed5a9] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-top"/>
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
                        <button
                            className="w-8 h-8 rounded-full bg-[#032541]/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <MoreHorizontal className="text-white w-5 h-5"/>
                        </button>
                    </div>
                </div>

                {/* Score Circle */}
                <div className="relative">
                    <div className="absolute -top-5 left-3">
                        <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center bg-[#081c22] border-2 ${getRatingColor(rating)}`}>
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

const LeaderboardSection = () => {
    const [activeTab, setActiveTab] = useState('allTime');

    const users = [
        {
            name: 'DJonesT',
            avatar: 'D',
            bgColor: 'bg-[#CC9831]',
            allTimeEdits: 40017,
            weeklyEdits: 16889
        },
        {
            name: '风暴1033',
            avatar: '风',
            bgColor: 'bg-[#CC9831]',
            allTimeEdits: 11779,
            weeklyEdits: 9281
        },
        {
            name: 'SassyMender',
            avatar: 'S',
            bgColor: 'bg-[#805AD5]',
            allTimeEdits: 20357,
            weeklyEdits: 5775
        },
        {
            name: 'beepol4',
            avatar: 'B',
            bgColor: 'bg-[#4299E1]',
            allTimeEdits: 74840,
            weeklyEdits: 4568
        },
        {
            name: 'Shei',
            avatar: 'S',
            bgColor: '',
            allTimeEdits: 1485071,
            weeklyEdits: 14658,
            hasImage: true
        },
        {
            name: 't0by',
            avatar: 'T',
            bgColor: 'bg-[#4299E1]',
            allTimeEdits: 278763,
            weeklyEdits: 6631
        },
        {
            name: 'chkchkboom',
            avatar: 'C',
            bgColor: '',
            allTimeEdits: 112904,
            weeklyEdits: 4936,
            hasImage: true
        },
        {
            name: 'Ys_',
            avatar: '/api/placeholder/40/40',
            bgColor: '',
            allTimeEdits: 36585,
            weeklyEdits: 4180,
            hasImage: true,
            isIcon: true
        }
    ];

    const maxEdits = Math.max(...users.map(user => user.allTimeEdits));

    return (
        <section className="w-full px-10 py-8 bg-white">
            {/* Header */}
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-black mb-4">Leaderboard</h2>
                <div className="flex gap-6 border-b border-gray-200">
                    <button
                        className={`pb-3 text-sm font-semibold ${
                            activeTab === 'allTime'
                                ? 'text-[#01b4e4] border-b-2 border-[#01b4e4]'
                                : 'text-gray-600 hover:text-[#01b4e4]'
                        }`}
                        onClick={() => setActiveTab('allTime')}
                    >
                        All Time Edits
                    </button>
                    <button
                        className={`pb-3 text-sm font-semibold ${
                            activeTab === 'weekly'
                                ? 'text-[#01b4e4] border-b-2 border-[#01b4e4]'
                                : 'text-gray-600 hover:text-[#01b4e4]'
                        }`}
                        onClick={() => setActiveTab('weekly')}
                    >
                        Edits This Week
                    </button>
                </div>
            </div>

            {/* Leaderboard List */}
            <div className="space-y-4">
                {users.map((user, index) => (
                    <div key={index} className="flex items-center gap-4">
                        {/* Avatar */}
                        {user.hasImage ? (
                            <img
                                src={user.avatar}
                                alt={user.name}
                                className="w-10 h-10 rounded-full object-cover"
                            />
                        ) : (
                            <div
                                className={`w-10 h-10 rounded-full ${user.bgColor} flex items-center justify-center text-white font-bold`}>
                                {user.avatar}
                            </div>
                        )}

                        {/* Content */}
                        <div className="flex-1">
                            <div className="flex justify-between text-gray-800 mb-1">
                                <span className="font-medium">{user.name}</span>
                                <div className="flex gap-4">
                                    <span>{user.allTimeEdits.toLocaleString()}</span>
                                    <span>{user.weeklyEdits.toLocaleString()}</span>
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full rounded-full bg-gradient-to-r from-[#1ed5a9] to-[#c932a9]"
                                     style={{
                                         width: `${(user.allTimeEdits / maxEdits) * 100}%`,
                                         transition: 'width 0.3s ease'
                                     }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
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
                            <div className="ml-2 w-12 h-6 rounded-lg bg-[#01b4e4]"/>
                        </div>
                        <div className="flex gap-6">
                            <button className="text-white hover:text-[#01b4e4] transition-colors bg-[#032541]">Movies
                            </button>
                            <button className="text-white hover:text-[#01b4e4] transition-colors bg-[#032541]">TV
                                Shows
                            </button>
                            <button className="text-white hover:text-[#01b4e4] transition-colors bg-[#032541]">People
                            </button>
                            <button className="text-white hover:text-[#01b4e4] transition-colors bg-[#032541]">More
                            </button>
                        </div>
                    </div>

                    {/* Right Nav */}
                    <div className="flex items-center gap-6">
                        <button className="text-white hover:text-[#01b4e4] text-xl bg-[#032541]">+</button>
                        <button
                            className="text-white hover:text-[#01b4e4] px-2 py-1 border border-white rounded bg-[#032541]">VI
                        </button>
                        <button className="text-white hover:text-[#01b4e4] bg-[#032541]">Đăng nhập</button>
                        <button className="text-white hover:text-[#01b4e4] bg-[#032541]">Tham gia TMDB</button>
                        <Search className="text-[#01b4e4] w-5 h-5 cursor-pointer"/>
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
                        <button
                            className="absolute right-0 top-0 h-full px-8 bg-gradient-to-r from-[#1ed5a9] to-[#01b4e4] text-white font-semibold rounded-full">
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

            {/* Join Today Section */}
            <section
                className="w-full px-10 py-8 bg-gradient-to-r from-purple-900 to-purple-700 relative overflow-hidden">
                <div className="flex justify-between items-start">
                    <div className="max-w-2xl">
                        <h3 className="text-3xl font-bold text-white mb-4">Join Today</h3>
                        <p className="text-lg text-white opacity-80 mb-6">
                            Get access to maintain your own <span className="italic">custom personal lists</span>, <span
                            className="italic">track what you've seen</span> and search and filter for <span
                            className="italic">what to watch next</span>—regardless if it's in theatres or on TV.
                        </p>
                        <button className="bg-[#805be7] text-white px-6 py-2 rounded-md font-semibold">
                            Sign Up
                        </button>
                    </div>

                    <ul className="text-white space-y-2">
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            Enjoy TMDB
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            Maintain a personal watchlist
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            Filter by your ratings
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            Contribute to and improve our database
                        </li>
                    </ul>
                </div>
            </section>

            {/* Leaderboard Section */}
            <LeaderboardSection/>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default App;