import React, { useState, useEffect } from "react";
import TrailerCard from "../common/TrailerCard.jsx";
import MovieProvider from "../../providers/MovieProvider.jsx";

const LatestTrailersSection = () => {
    const [filter, setFilter] = useState('popular');
    const [trailers, setTrailers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchTrailers = async () => {
        setIsLoading(true);
        try {
            const result = await MovieProvider.getTrailers();
            if (result.data && result.data.content) {
                setTrailers(result.data.content);
            }
        } catch (error) {
            console.error("Error fetching trailers:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchTrailers();
    }, []);

    return (
        <>
            <section className="px-10 py-8 bg-[#0d253f]">
                {/* Header */}
                <div className="max-w-[1300px] mx-auto flex items-center gap-5 mb-6">
                    <h2 className="text-xl font-semibold text-white">Latest Trailers</h2>
                </div>

                {/* Scrollable Container */}
                <div className="relative max-w-[1340px] mx-auto">
                    {isLoading ? (
                        <p className="text-white">Loading trailers...</p>
                    ) : trailers.length === 0 ? (
                        <p className="text-white">No trailers available.</p>
                    ) : (
                        <div className="overflow-x-auto no-scrollbar">
                            <div className="flex gap-[20px] pb-4">
                                {trailers.map((trailer) => (
                                    <TrailerCard key={trailer.id} data={trailer} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Right fade effect */}
                    <div className="absolute top-0 right-0 w-[60px] h-full bg-gradient-to-l from-[#0d253f] to-transparent pointer-events-none" />
                </div>
            </section>
        </>
    );
};

export default LatestTrailersSection;
