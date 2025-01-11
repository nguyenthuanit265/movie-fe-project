import React, {useState} from "react";
import {Search} from "lucide-react";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const navigate = useNavigate();
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
                                    <button
                                        onClick={() => navigate('/login')} // Navigate to the login page
                                        className="text-white hover:text-[#01b4e4] bg-[#032541]"
                                    >
                                        Đăng nhập
                                    </button>
                                    <button className="text-white hover:text-[#01b4e4] bg-[#032541]">Tham gia TMDB
                                    </button>
                                </div>
                                <Search className="text-[#01b4e4] w-6 h-6 cursor-pointer"/>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;