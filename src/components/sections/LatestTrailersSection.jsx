import React, { useState } from "react";
import TrailerCard from "../common/TrailerCard.jsx";

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
                            className={`px-5 py-1 rounded-full text-sm font-semibold transition-colors ${filter === 'popular'
                                    ? 'bg-[#21d07a] text-[#032541]'
                                    : 'bg-[#032541] text-white'
                                }`}
                        >
                            Popular
                        </button>
                        <button
                            onClick={() => setFilter('in_theaters')}
                            className={`px-5 py-1 rounded-full text-sm font-semibold transition-colors ${filter === 'in_theaters'
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
                                <TrailerCard key={index} data={trailer} />
                            ))}
                        </div>
                    </div>

                    {/* Right fade effect */}
                    <div
                        className="absolute top-0 right-0 w-[60px] h-full bg-gradient-to-l from-[#0d253f] to-transparent pointer-events-none" />
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

export default LatestTrailersSection;