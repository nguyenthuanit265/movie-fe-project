import React from 'react';

const AverageRatingCircle = ({score, label}) => {
    return (
        <div className="flex flex-col items-center">
            <div className="relative w-12 h-12">
                {/* Outer circle */}
                <div
                    className="absolute inset-0 rounded-full bg-[#032541] border-2 border-[#204529] flex items-center justify-center">
                    <span className="text-white text-lg font-bold">{score}</span>
                    <span className="text-white text-xs align-top">*</span>
                </div>
            </div>
            <span className="text-white text-sm mt-1 text-center whitespace-nowrap">{label}</span>
        </div>
    );
};

const ProfileHeader = ({user}) => {
    // Get user data from localStorage
    const userEmail = localStorage.getItem('userEmail') || '';
    const joinDate = 'May 2022'; // You might want to store this in localStorage too from your API

    // Format the data
    const userData = {
        email: userEmail,
        joinDate: joinDate,
        movieRating: 0, // These could come from an API call or localStorage
        tvRating: 0
    };

    return (
        <div className="min-h-[360px] mt-16 relative w-full bg-[#0d253f]">
            {/* Background gradient lines */}
            <div className="absolute top-0 left-0 right-0 h-64 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute h-full w-4 bg-[#1ed5a9]/20 -skew-x-[45deg] transform"
                        style={{
                            left: `${i * 8}%`,
                            opacity: 0.1 + (i * 0.02)
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative w-full max-w-[1300px] mx-auto px-10 py-8 flex items-center gap-8">
                {/* Avatar */}
                <div
                    className="w-24 h-24 rounded-full bg-[#91debb] flex items-center justify-center text-4xl font-bold">
                    {userData.email.charAt(0).toUpperCase()}
                </div>

                {/* User Info */}
                <div className="flex flex-1">
                    <div>
                        <h2 className="text-2xl text-white font-bold mb-1">
                            {userData.email}
                        </h2>
                        <p className="text-gray-300">
                            Thành viên kể từ {userData.joinDate}
                        </p>
                    </div>
                </div>

                {/* Stats */}
                <div className="flex gap-6">
                    <AverageRatingCircle
                        score={userData.movieRating}
                        label="Trung bình Điểm phim"
                    />
                    <AverageRatingCircle
                        score={userData.tvRating}
                        label="Trung bình Điểm TV"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;