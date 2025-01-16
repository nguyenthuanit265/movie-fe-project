import React, { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const user = useSelector(state => state.auth.user);

    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('userEmail');
        navigate('/login');
    };
    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full">
            <nav className="bg-[#032541]">
                <div className="max-w-[1300px] mx-auto px-4 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-8">
                            <div onClick={() => navigate('/')} className="flex items-center cursor-pointer">
                                <h1 className="text-[#01b4e4] text-2xl font-bold">TMDB</h1>
                                <div className="ml-2 w-12 h-6 bg-[#01b4e4] rounded-lg"></div>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="hidden md:flex items-center gap-6">
                                {isAuthenticated ? (
                                    <>
                                        <button className="text-white hover:text-[#01b4e4] px-2 py-1 border border-white rounded text-sm bg-[#032541]">
                                            ENG
                                        </button>
                                        <div className="relative group">
                                            <div className="absolute inset-0 -inset-x-4 h-[200%] bg-transparent" />
                                            <button
                                                onClick={() => navigate('/profile')}
                                                className="relative text-white hover:text-[#01b4e4] bg-[#032541] flex items-center gap-2 z-10"
                                            >
                                                {user?.email}
                                            </button>
                                            <div
                                                className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 transition-all duration-150"
                                            >
                                                <button
                                                    onClick={() => navigate('/profile')}
                                                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                >
                                                    View Profile
                                                </button>
                                                <button
                                                    onClick={handleLogout}
                                                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                >
                                                    Logout
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <button className="text-white hover:text-[#01b4e4] px-2 py-1 border border-white rounded text-sm bg-[#032541]">
                                            ENG
                                        </button>
                                        <button
                                            onClick={() => navigate('/login')}
                                            className="text-white hover:text-[#01b4e4] bg-[#032541]"
                                        >
                                            Login
                                        </button>
                                        <button
                                            onClick={() => navigate('/signup')}
                                            className="text-white hover:text-[#01b4e4] bg-[#032541]"
                                        >
                                            Join TMDB
                                        </button>
                                    </>
                                )}
                            </div>
                            <Search className="text-[#01b4e4] w-6 h-6 cursor-pointer" />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;