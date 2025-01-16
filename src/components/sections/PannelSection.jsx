import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PanelSection = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchQuery.trim() === "") {
            alert("Please enter a search query!");
            return;
        }

        navigate(`/page-result/${encodeURIComponent(searchQuery)}`);
    };

    return (
        <>
            <section className="w-full min-h-[360px] mt-16 relative">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#042541] to-[#01b4e4]">
                    <div className="absolute inset-0 w-full h-full">
                        <img
                            src="/src/api/placeholder/1400/400"
                            alt="Hero Background"
                            className="w-full h-full object-cover mix-blend-overlay opacity-10"
                        />
                    </div>
                </div>
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
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button
                                onClick={handleSearch}
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

export default PanelSection;
