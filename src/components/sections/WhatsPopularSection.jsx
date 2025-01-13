import React, { useState } from "react";
import MovieCard from "../common/MovieCard.jsx";

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
                            className={`px-5 py-1 rounded-full text-sm font-semibold transition-colors ${filter === 'streaming' ? 'bg-[#21d07a] text-[#032541]' : 'text-white'
                                }`}
                        >
                            Streaming
                        </button>
                        <button
                            onClick={() => setFilter('on_tv')}
                            className={`px-5 py-1 rounded-full text-sm font-semibold transition-colors ${filter === 'on_tv' ? 'bg-[#21d07a] text-[#032541]' : 'text-white'
                                }`}
                        >
                            On TV
                        </button>
                        <button
                            onClick={() => setFilter('for_rent')}
                            className={`px-5 py-1 rounded-full text-sm font-semibold transition-colors ${filter === 'for_rent' ? 'bg-[#21d07a] text-[#032541]' : 'text-white'
                                }`}
                        >
                            For Rent
                        </button>
                        <button
                            onClick={() => setFilter('in_theaters')}
                            className={`px-5 py-1 rounded-full text-sm font-semibold transition-colors ${filter === 'in_theaters' ? 'bg-[#21d07a] text-[#032541]' : 'text-white'
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
                                <MovieCard key={index} data={movie} />
                            ))}
                        </div>
                    </div>

                    {/* Right fade effect */}
                    <div
                        className="absolute top-0 right-0 w-[60px] h-full bg-gradient-to-l from-white to-transparent pointer-events-none" />
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

export default WhatsPopularSection;