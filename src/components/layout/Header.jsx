import React, { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';

const NavDropdown = ({ items }) => {
    return (
        <div className="absolute top-full left-0 mt-3 w-40 bg-white rounded-sm shadow-lg overflow-hidden z-50">
            <ul className="py-2">
                {items.map((item, index) => (
                    <li key={index}>
                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-[#032541] hover:text-white whitespace-nowrap">
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const NavItem = ({ label, items }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <button className="text-white hover:text-[#01b4e4] transition-colors bg-[#032541]">
                {label}
            </button>
            {isHovered && items && <NavDropdown items={items} />}
        </div>
    );
};

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const user = useSelector(state => state.auth.user);
    console.log('Auth State:', { isAuthenticated, user });
    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('userEmail');
        navigate('/');
    };

    const navItems = {
        Movies: ['Popular', 'Now Playing', 'Upcoming', 'Top Rated'],
        People: ['Popular People'],
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full">
            <nav className="bg-[#032541]">
                <div className="max-w-[1300px] mx-auto px-4 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Left side */}
                        <div className="flex items-center gap-8">
                            <div onClick={() => navigate('/')} className="flex items-center cursor-pointer">
                                <h1 className="text-[#01b4e4] text-2xl font-bold">TMDB</h1>
                                <div className="ml-2 w-12 h-6 bg-[#01b4e4] rounded-lg"></div>
                            </div>
                            <nav className="flex items-center gap-6">
                                {Object.entries(navItems).map(([label, items]) => (
                                    <NavItem key={label} label={label} items={items} />
                                ))}
                            </nav>
                        </div>


                        <div className="flex items-center gap-6">
                            <div className="hidden md:flex items-center gap-6">
                                {isAuthenticated ? (
                                    <>
                                        <button className="text-white hover:text-[#01b4e4] text-xl font-light bg-[#032541]">
                                            +
                                        </button>
                                        <button className="text-white hover:text-[#01b4e4] px-2 py-1 border border-white rounded text-sm bg-[#032541]">
                                            VI
                                        </button>
                                        <div className="relative group">
                                            <button
                                                onClick={() => navigate('/profile')}
                                                className="text-white hover:text-[#01b4e4] bg-[#032541] flex items-center gap-2"
                                            >
                                                {user?.email}
                                            </button>
                                            <div className="absolute hidden group-hover:block right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
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
                                        <button className="text-white hover:text-[#01b4e4] text-xl font-light bg-[#032541]">
                                            +
                                        </button>
                                        <button className="text-white hover:text-[#01b4e4] px-2 py-1 border border-white rounded text-sm bg-[#032541]">
                                            VI
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