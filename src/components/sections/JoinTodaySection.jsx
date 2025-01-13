import React, {useState} from "react";
import {useNavigate} from "react-router-dom";


const JoinTodaySection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <>
            <section className="relative w-full bg-gradient-to-r from-[#4b1c78] to-[#7214ad] overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="/src/api/placeholder/2000/600"
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
                                onClick={() => navigate('/signup')}
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
        </>
    );
};


export default JoinTodaySection;