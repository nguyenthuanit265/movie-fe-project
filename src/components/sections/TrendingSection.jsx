import React, { useState } from "react";
import MovieCard from "../common/MovieCard.jsx";

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
                        className={`px-5 py-1 rounded-full text-sm font-semibold transition-colors ${timeWindow === 'today'
                            ? 'bg-[#032541] text-white'
                            : 'bg-white text-[#032541]'
                            }`}
                    >
                        Today
                    </button>
                    <button
                        onClick={() => setTimeWindow('week')}
                        className={`px-5 py-1 rounded-full text-sm font-semibold transition-colors ${timeWindow === 'week'
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
                    style={{ msOverflowStyle: 'none', scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}>
                    <div className="flex gap-[20px] pb-4" style={{ WebkitScrollbar: { display: 'none' } }}>
                        {movies.map((movie, index) => (
                            <MovieCard key={index} data={movie} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrendingSection;