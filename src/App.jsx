import React, {useState} from 'react';
import {Search, MoreHorizontal, Play, Check, X} from 'lucide-react';

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
    // eslint-disable-next-line react/prop-types
    const {title, posterPath, releaseDate, rating} = data;

    const getRatingColor = (score) => {
        if (score >= 70) return 'border-[#21d07a]';
        if (score >= 40) return 'border-[#d2d531]';
        return 'border-[#db2360]';
    };

    return (
        <div className="group relative flex-none w-[150px] transition-transform duration-200 hover:scale-[1.05]">
            {/* Progress bars on hover */}
            <div className="absolute left-0 top-0 bottom-0 w-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="h-8 w-full bg-[#1ed5a9]"/>
                ))}
            </div>

            <div className="rounded-lg overflow-hidden">
                {/* Poster */}
                <div className="relative">
                    <img
                        src={posterPath}
                        alt={title}
                        className="w-[150px] h-[225px] object-cover rounded-lg"
                    />
                    <div className="absolute top-2 right-2">
                        <button
                            className="w-8 h-8 rounded-full bg-[#032541]/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <MoreHorizontal className="text-white w-5 h-5"/>
                        </button>
                    </div>
                </div>

                {/* Rating Circle */}
                <div className="relative">
                    <div className="absolute -bottom-5 left-3">
                        <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center bg-[#081c22] border-2 ${getRatingColor(rating)}`}>
                            <div className="flex items-baseline">
                                <span className="text-white font-bold text-sm">{rating}</span>
                                <span className="text-white text-[8px] ml-[1px]">%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Info */}
                <div className="pt-8 px-2 pb-4">
                    <h2 className="font-bold text-black hover:text-[#01b4e4] cursor-pointer line-clamp-2">{title}</h2>
                    <p className="text-gray-500 text-sm mt-1">{releaseDate}</p>
                </div>
            </div>
        </div>
    );
};

const TrendingSection = () => {
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
        }
    ];

    return (
        <section className="px-10 py-8 bg-white">
            {/* Header */}
            <div className="max-w-[1170px] mx-auto flex items-center gap-5 mb-6">
                <h2 className="text-xl font-semibold text-black">Trending</h2>
                <div className="inline-flex rounded-full border border-[#032541] p-1">
                    <button
                        onClick={() => setTimeWindow('today')}
                        className={`px-5 py-1 rounded-full text-sm font-semibold transition-colors ${
                            timeWindow === 'today'
                                ? 'bg-[#032541] text-white'
                                : 'bg-white text-[#032541]'
                        }`}
                    >
                        Today
                    </button>
                    <button
                        onClick={() => setTimeWindow('week')}
                        className={`px-5 py-1 rounded-full text-sm font-semibold transition-colors ${
                            timeWindow === 'week'
                                ? 'bg-[#032541] text-white'
                                : 'bg-white text-[#032541]'
                        }`}
                    >
                        This Week
                    </button>
                </div>
            </div>

            {/* Scrollable Container */}
            <div className="relative max-w-[1170px] mx-auto">
                <div className="overflow-x-auto"
                     style={{msOverflowStyle: 'none', scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch'}}>
                    <div className="flex gap-[20px] pb-4" style={{WebkitScrollbar: {display: 'none'}}}>
                        {movies.map((movie, index) => (
                            <MovieCard key={index} data={movie}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
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

const Header = () => {
    return (
        <>
            {/* Navigation */}
            <header className="fixed top-0 left-0 right-0 z-50 w-full">
                <nav className="bg-[#032541]">
                    <div className="max-w-[1300px] mx-auto px-4 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            {/* Left side */}
                            <div className="flex items-center gap-8">
                                {/* Logo */}
                                <div className="flex items-center">
                                    <h1 className="text-[#01b4e4] text-2xl font-bold">TMDB</h1>
                                    <div className="ml-2 w-12 h-6 bg-[#01b4e4] rounded-lg"></div>
                                </div>

                                {/* Nav Links - Hidden on mobile */}
                                <div className="hidden md:flex items-center gap-6">
                                    <button
                                        className="text-white hover:text-[#01b4e4] transition-colors bg-[#032541]">Movies
                                    </button>
                                    <button
                                        className="text-white hover:text-[#01b4e4] transition-colors bg-[#032541]">TV
                                        Shows
                                    </button>
                                    <button
                                        className="text-white hover:text-[#01b4e4] transition-colors bg-[#032541]">People
                                    </button>
                                    <button
                                        className="text-white hover:text-[#01b4e4] transition-colors bg-[#032541]">More
                                    </button>
                                </div>
                            </div>

                            {/* Right side */}
                            <div className="flex items-center gap-6">
                                {/* Hidden on mobile */}
                                <div className="hidden md:flex items-center gap-6">
                                    <button
                                        className="text-white hover:text-[#01b4e4] text-xl font-light bg-[#032541]">+
                                    </button>
                                    <button
                                        className="text-white hover:text-[#01b4e4] px-2 py-1 border border-white rounded text-sm bg-[#032541]">VI
                                    </button>
                                    <button className="text-white hover:text-[#01b4e4] bg-[#032541]">Đăng nhập</button>
                                    <button className="text-white hover:text-[#01b4e4] bg-[#032541]">Tham gia TMDB
                                    </button>
                                </div>
                                <Search className="text-[#01b4e4] w-6 h-6 cursor-pointer"/>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="w-full min-h-[360px] mt-16 relative">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#042541] to-[#01b4e4]">
                    {/* Background Image */}
                    <div className="absolute inset-0 w-full h-full">
                        <img
                            src="/api/placeholder/1400/400"
                            alt="Hero Background"
                            className="w-full h-full object-cover mix-blend-overlay opacity-10"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="relative w-full px-10 py-20">
                    <div className="max-w-[1300px] mx-auto">
                        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                            Welcome.
                        </h1>
                        <h2 className="text-xl sm:text-2xl text-white mb-10">
                            Millions of movies, TV shows and people to discover. Explore now.
                        </h2>

                        {/* Search Bar */}
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Search for a movie, tv show, person......"
                                className="w-full h-12 px-6 rounded-full text-base outline-none"
                            />
                            <button
                                className="absolute right-0 top-0 h-full px-8 bg-gradient-to-r from-[#1ed5a9] to-[#01b4e4] text-white font-semibold rounded-full">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

// eslint-disable-next-line react/prop-types
const TrailerCard = ({data}) => {
    // eslint-disable-next-line react/prop-types
    const {title, thumbnailPath, description} = data;

    return (
        <div className="group relative flex-none w-[300px] transition-transform duration-200 hover:scale-[1.05]">
            {/* Trailer Thumbnail */}
            <div className="relative rounded-lg overflow-hidden">
                <img
                    src={thumbnailPath}
                    alt={title}
                    className="w-[300px] h-[169px] object-cover"
                />
                {/* Play Button Overlay */}
                <div
                    className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                        <Play className="w-8 h-8 text-white fill-white"/>
                    </div>
                </div>
                {/* More Options Button */}
                <button
                    className="absolute top-2 right-2 w-8 h-8 rounded-full bg-[#032541]/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreHorizontal className="text-white w-5 h-5"/>
                </button>
            </div>

            {/* Title and Description */}
            <div className="mt-4">
                <h3 className="text-white font-medium text-base hover:text-[#01b4e4] cursor-pointer">{title}</h3>
                <p className="text-gray-400 text-sm mt-1">{description}</p>
            </div>
        </div>
    );
};

const LatestTrailersSection = () => {
    const [filter, setFilter] = useState('popular');

    const trailers = [
        {
            title: "Ambyar Mak Byar",
            thumbnailPath: "https://media.themoviedb.org/t/p/w710_and_h400_multi_faces/wdMPocTOudlQwO7aN0cM6i0JUaz.jpg",
            description: "Ambyar Mak Byar - Official Trailer 2 | 9 Januari 2025 di Bioskop"
        },
        {
            title: "The Rookie",
            thumbnailPath: "https://media.themoviedb.org/t/p/w710_and_h400_multi_faces/2m1Mu0xPj4SikiqkaolTRUcNtWH.jpg",
            description: "Official Season 7 Trailer"
        },
        {
            title: "Em Yêu",
            thumbnailPath: "https://media.themoviedb.org/t/p/w710_and_h400_multi_faces/hctfNoMpQGfn3VXdBYb9p0P5bT5.jpg",
            description: "In UK and Irish cinemas January 10"
        },
        {
            title: "Game Changer",
            thumbnailPath: "https://media.themoviedb.org/t/p/w710_and_h400_multi_faces/aBw406SvghTKV6CTK9t84Bo9Xik.jpg",
            description: "Game Changer Trailer (Telugu) | Ram Charan | Kiara Advani | Shankar"
        },
        {
            title: "Ambyar Mak Byar",
            thumbnailPath: "https://media.themoviedb.org/t/p/w710_and_h400_multi_faces/wdMPocTOudlQwO7aN0cM6i0JUaz.jpg",
            description: "Ambyar Mak Byar - Official Trailer 2 | 9 Januari 2025 di Bioskop"
        },
        {
            title: "The Rookie",
            thumbnailPath: "https://media.themoviedb.org/t/p/w710_and_h400_multi_faces/2m1Mu0xPj4SikiqkaolTRUcNtWH.jpg",
            description: "Official Season 7 Trailer"
        },
        {
            title: "Em Yêu",
            thumbnailPath: "https://media.themoviedb.org/t/p/w710_and_h400_multi_faces/hctfNoMpQGfn3VXdBYb9p0P5bT5.jpg",
            description: "In UK and Irish cinemas January 10"
        },
        {
            title: "Game Changer",
            thumbnailPath: "https://media.themoviedb.org/t/p/w710_and_h400_multi_faces/aBw406SvghTKV6CTK9t84Bo9Xik.jpg",
            description: "Game Changer Trailer (Telugu) | Ram Charan | Kiara Advani | Shankar"
        },
    ];

    return (
        <>
            <section className="px-10 py-8 bg-[#0d253f]">
                {/* Header */}
                <div className="max-w-[1300px] mx-auto flex items-center gap-5 mb-6">
                    <h2 className="text-xl font-semibold text-white">Latest Trailers</h2>
                    <div className="inline-flex rounded-full bg-[#032541] p-1">
                        <button
                            onClick={() => setFilter('popular')}
                            className={`px-5 py-1 rounded-full text-sm font-semibold transition-colors ${
                                filter === 'popular'
                                    ? 'bg-[#21d07a] text-[#032541]'
                                    : 'bg-[#032541] text-white'
                            }`}
                        >
                            Popular
                        </button>
                        <button
                            onClick={() => setFilter('in_theaters')}
                            className={`px-5 py-1 rounded-full text-sm font-semibold transition-colors ${
                                filter === 'in_theaters'
                                    ? 'bg-[#21d07a] text-[#032541]'
                                    : 'bg-[#032541] text-white'
                            }`}
                        >
                            In Theaters
                        </button>
                    </div>
                </div>

                {/* Scrollable Container */}
                <div className="relative max-w-[1340px] mx-auto">
                    <div className="overflow-x-auto no-scrollbar">
                        <div className="flex gap-[20px] pb-4">
                            {trailers.map((trailer, index) => (
                                <TrailerCard key={index} data={trailer}/>
                            ))}
                        </div>
                    </div>

                    {/* Right fade effect */}
                    <div
                        className="absolute top-0 right-0 w-[60px] h-full bg-gradient-to-l from-[#0d253f] to-transparent pointer-events-none"/>
                </div>

                {/* Remove scrollbar */}
                {/*<style jsx global>{`*/}
                {/*    .no-scrollbar {*/}
                {/*        -ms-overflow-style: none;*/}
                {/*        scrollbar-width: none;*/}
                {/*    }*/}

                {/*    .no-scrollbar::-webkit-scrollbar {*/}
                {/*        display: none;*/}
                {/*    }*/}
                {/*`}</style>*/}
            </section>
        </>
    );
};

const WhatsPopularSection = () => {
    const [filter, setFilter] = useState('streaming');

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
        },
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
        <>
            <section className="w-full px-10 py-8 bg-white">
                {/* Header */}
                <div className="max-w-[1300px] mx-auto flex items-center gap-5 mb-6">
                    <h2 className="text-xl font-semibold text-black">What's Popular</h2>
                    {/* Filter Tabs */}
                    <div className="inline-flex rounded-full bg-[#032541] p-1">
                        <button
                            onClick={() => setFilter('streaming')}
                            className={`px-5 py-1 rounded-full text-sm font-semibold transition-colors ${
                                filter === 'streaming' ? 'bg-[#21d07a] text-[#032541]' : 'text-white'
                            }`}
                        >
                            Streaming
                        </button>
                        <button
                            onClick={() => setFilter('on_tv')}
                            className={`px-5 py-1 rounded-full text-sm font-semibold transition-colors ${
                                filter === 'on_tv' ? 'bg-[#21d07a] text-[#032541]' : 'text-white'
                            }`}
                        >
                            On TV
                        </button>
                        <button
                            onClick={() => setFilter('for_rent')}
                            className={`px-5 py-1 rounded-full text-sm font-semibold transition-colors ${
                                filter === 'for_rent' ? 'bg-[#21d07a] text-[#032541]' : 'text-white'
                            }`}
                        >
                            For Rent
                        </button>
                        <button
                            onClick={() => setFilter('in_theaters')}
                            className={`px-5 py-1 rounded-full text-sm font-semibold transition-colors ${
                                filter === 'in_theaters' ? 'bg-[#21d07a] text-[#032541]' : 'text-white'
                            }`}
                        >
                            In Theaters
                        </button>
                    </div>
                </div>

                {/* Scrollable Container */}
                <div className="relative max-w-[1300px] mx-auto">
                    <div className="overflow-x-auto no-scrollbar">
                        <div className="flex gap-[20px] pb-4">
                            {movies.map((movie, index) => (
                                <MovieCard key={index} data={movie}/>
                            ))}
                        </div>
                    </div>

                    {/* Right fade effect */}
                    <div
                        className="absolute top-0 right-0 w-[60px] h-full bg-gradient-to-l from-white to-transparent pointer-events-none"/>
                </div>

                {/*<style jsx global>{`*/}
                {/*    .no-scrollbar {*/}
                {/*        -ms-overflow-style: none;*/}
                {/*        scrollbar-width: none;*/}
                {/*    }*/}

                {/*    .no-scrollbar::-webkit-scrollbar {*/}
                {/*        display: none;*/}
                {/*    }*/}
                {/*`}</style>*/}
            </section>
        </>
    );
};

const JoinTodaySection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section className="relative w-full bg-gradient-to-r from-[#4b1c78] to-[#7214ad] overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="/api/placeholder/2000/600"
                        alt="Join Today Background"
                        className="w-full h-full object-cover mix-blend-overlay opacity-10"
                    />
                </div>

                {/* Content Container */}
                <div className="relative w-full max-w-[1300px] mx-auto px-10 py-12">
                    <div className="flex justify-between items-start gap-20">
                        {/* Left Side - Main Content */}
                        <div className="flex-1 max-w-2xl">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                                Join Today
                            </h2>
                            <p className="text-lg text-white/90 mb-8">
                                Get access to maintain your own{' '}
                                <span className="italic">custom personal lists</span>,{' '}
                                <span className="italic">track what you've seen</span>{' '}
                                and search and filter for{' '}
                                <span className="italic">what to watch next</span>
                                —regardless if it's in theatres or on TV.
                            </p>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-[#805be7] hover:bg-[#916ee7] transition-colors text-white px-8 py-2.5 rounded-md font-semibold text-lg"
                            >
                                Sign Up
                            </button>
                        </div>

                        {/* Right Side - Benefits List */}
                        <div className="hidden md:block">
                            <ul className="text-white space-y-4">
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full shrink-0"/>
                                    <span>Enjoy TMDB</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full shrink-0"/>
                                    <span>Maintain a personal watchlist</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full shrink-0"/>
                                    <span>Filter by your ratings</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full shrink-0"/>
                                    <span>Log the movies and TV shows you've seen</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full shrink-0"/>
                                    <span>Build custom lists</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full shrink-0"/>
                                    <span>Contribute to and improve our database</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sign Up Modal */}
            {/*<SignUpModal*/}
            {/*    isOpen={isModalOpen}*/}
            {/*    onClose={() => setIsModalOpen(false)}*/}
            {/*/>*/}

            <Link
                to="/signup"
                className="bg-[#805be7] hover:bg-[#916ee7] transition-colors text-white px-8 py-2.5 rounded-md font-semibold text-lg"
            >
                Sign Up
            </Link>

        </>
    );
};

const SignUpModal = ({isOpen, onClose}) => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        email: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
        console.log('Form submitted:', formData);
    };

    if (!isOpen) return null;

    return (
        // Modal Backdrop
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            {/* Modal Content */}
            <div className="bg-white rounded-lg w-full max-w-4xl flex overflow-hidden">
                {/* Left Column - Benefits */}
                <div className="w-1/3 bg-[#01b4e4] p-6 text-white">
                    <h3 className="text-xl font-bold mb-6">
                        Benefits of being a member
                    </h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-2">
                            <Check className="w-5 h-5 mt-0.5 shrink-0"/>
                            <span>Find something to watch on your subscribed streaming services</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Check className="w-5 h-5 mt-0.5 shrink-0"/>
                            <span>Log the movies and TV shows you have watched</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Check className="w-5 h-5 mt-0.5 shrink-0"/>
                            <span>Keep track of your favourite movies and TV shows and get recommendations from them</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Check className="w-5 h-5 mt-0.5 shrink-0"/>
                            <span>Build and maintain a personal watchlist</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Check className="w-5 h-5 mt-0.5 shrink-0"/>
                            <span>Build custom mixed lists (movies and TV)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Check className="w-5 h-5 mt-0.5 shrink-0"/>
                            <span>Take part in movie and TV discussions</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Check className="w-5 h-5 mt-0.5 shrink-0"/>
                            <span>Contribute to, and improve the information in our database</span>
                        </li>
                    </ul>
                </div>

                {/* Right Column - Form */}
                <div className="flex-1 p-8">
                    <div className="flex justify-between items-start mb-6">
                        <h2 className="text-2xl font-medium">Sign up for an account</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-600"
                        >
                            <X className="w-6 h-6"/>
                        </button>
                    </div>

                    <p className="text-gray-600 mb-8">
                        Signing up for an account is free and easy. Fill out the form below to get started.
                        JavaScript is required to to continue.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-gray-700 mb-2">Username</label>
                            <input
                                type="text"
                                value={formData.username}
                                onChange={(e) => setFormData({...formData, username: e.target.value})}
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#01b4e4]"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">
                                Password (4 characters minimum)
                            </label>
                            <input
                                type="password"
                                value={formData.password}
                                onChange={(e) => setFormData({...formData, password: e.target.value})}
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#01b4e4]"
                                minLength={4}
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">Password Confirm</label>
                            <input
                                type="password"
                                value={formData.confirmPassword}
                                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#01b4e4]"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#01b4e4]"
                            />
                        </div>

                        <p className="text-sm text-gray-600">
                            By clicking the "Sign up" button below, I certify that I have read and agree to the TMDB
                            terms of use and privacy policy.
                        </p>

                        <div className="flex gap-4">
                            <button
                                type="submit"
                                className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded font-semibold transition-colors"
                            >
                                Đăng ký
                            </button>
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-6 py-2 text-[#01b4e4] hover:text-[#0099ca]"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

const App = () => {
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
        <>
            {/* Global styles to ensure full screen */}
            <style jsx global>{`
                html, body {
                    margin: 0;
                    padding: 0;
                    min-width: 100%;
                    width: 100%;
                    min-height: 100vh;
                    overflow-x: hidden;
                }

                #root {
                    min-height: 100vh;
                    width: 100%;
                }

                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }

                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>

            <div className="min-h-screen w-full bg-white overflow-x-hidden">
                {/* Header & Hero */}
                <Header/>

                {/* Main Content */}
                <main>
                    {/* Trending Section */}
                    <section className="w-full bg-white">
                        <TrendingSection movies={movies.slice(0, 7)}/>
                    </section>

                    {/* Latest Trailers */}
                    <section className="w-full bg-[#0d253f]">
                        <LatestTrailersSection/>
                    </section>

                    {/* What's Popular */}
                    <section className="w-full bg-white">
                        <WhatsPopularSection movies={movies.slice(0, 7)}/>
                    </section>

                    {/* Join Today Section */}
                    <section>
                        <JoinTodaySection/>
                    </section>

                    {/* Leaderboard */}
                    <section className="w-full bg-white">
                        <LeaderboardSection/>
                    </section>
                </main>

                {/* Footer */}
                <Footer/>
            </div>
        </>
    );
};

export default App;