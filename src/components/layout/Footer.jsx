import React from "react";

const TMDBLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" className="w-[150px]">
        {/* Background shapes */}
        <rect x="10" y="20" width="280" height="60" rx="30" fill="#032541" />

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
        <rect x="30" y="70" width="240" height="4" rx="2" fill="#90cea1" opacity="0.8" />
        <rect x="30" y="25" width="240" height="4" rx="2" fill="#01b4e4" opacity="0.8" />

        {/* Accent circles */}
        <circle cx="270" cy="50" r="15" fill="#01b4e4" opacity="0.2" />
        <circle cx="270" cy="50" r="10" fill="#90cea1" opacity="0.4" />
        <circle cx="270" cy="50" r="5" fill="#01b4e4" />
    </svg>
);

// Footer Component
const Footer = () => (
    <footer className="bg-[#04223b] px-10 pt-12 pb-20 mt-0">
        <div className="max-w-6xl mx-auto grid grid-cols-5 gap-8">
            {/* Logo Column */}
            <div className="col-span-1">
                <div className="mb-4">
                    <TMDBLogo />
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


export default Footer;