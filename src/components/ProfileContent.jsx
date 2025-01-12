import React, { useState } from 'react';
import { Star, Heart, ListPlus, X } from 'lucide-react';

const RatingBar = () => {
    const ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div className="flex gap-0.5">
            {ratings.map(rating => (
                <div
                    key={rating}
                    className="h-6 w-8 bg-gray-200 hover:bg-gray-300 cursor-pointer text-xs text-center pt-1"
                >
                    {rating}
                </div>
            ))}
        </div>
    );
};

const WatchlistItem = ({ movie }) => {
    return (
        <div className="flex gap-4 p-4 border-b border-gray-100">
            <img
                src={movie.posterPath}
                alt={movie.title}
                className="w-16 h-24 object-cover rounded"
            />
            <div className="flex-1">
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="font-bold hover:text-[#01b4e4] cursor-pointer">
                            {movie.title}
                            <span className="text-gray-400 font-normal ml-2">({movie.originalTitle})</span>
                        </h3>
                        <p className="text-gray-500 text-sm">{movie.releaseDate}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                            <Star className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                            <Heart className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                            <ListPlus className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </div>
                <p className="text-sm mt-2">{movie.overview}</p>
            </div>
        </div>
    );
};

const ProfileContent = () => {
    const [selectedTab, setSelectedTab] = useState('overview');

    // Example watchlist data
    const watchlistMovie = {
        title: "Ad Vitam: Trọn đời",
        originalTitle: "Ad Vitam",
        releaseDate: "January 10, 2025",
        posterPath: "https://media.themoviedb.org/t/p/w440_and_h660_face/dOpSxmD3FWfl6SK8SLXw9uwcO05.jpg",
        overview: "Khi anh và người vợ đang mang thai bị tấn công tại nhà, cựu đặc vụ ưu tú nọ mắc kẹt trong cuộc săn người đầy chết chóc liên quan đến quá khứ đau thương của chính anh."
    };

    return (
        <div className="w-full max-w-[1300px] mx-auto px-10 py-8">
            {/* Navigation Tabs */}
            <div className="border-b border-gray-200 mb-8">
                <nav className="flex gap-8">
                    <button
                        className={`pb-4 relative ${
                            selectedTab === 'overview'
                                ? 'text-black font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-[#01b4e4]'
                                : 'text-gray-500 hover:text-black'
                        }`}
                        onClick={() => setSelectedTab('overview')}
                    >
                        Overview
                    </button>
                    <button
                        className={`pb-4 relative ${
                            selectedTab === 'discussions'
                                ? 'text-black font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-[#01b4e4]'
                                : 'text-gray-500 hover:text-black'
                        }`}
                        onClick={() => setSelectedTab('discussions')}
                    >
                        Thảo luận
                    </button>
                    {/* Add more tabs as needed */}
                </nav>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-8 mb-12">
                <div>
                    <h3 className="text-xl font-semibold mb-4">Stats</h3>
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-medium">Total Edits</h4>
                            <p className="text-4xl text-[#1ed5a9] font-light">0</p>
                        </div>
                        <div>
                            <h4 className="font-medium">Total Ratings</h4>
                            <p className="text-4xl text-[#1ed5a9] font-light">0</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">Đánh giá tổng quan</h3>
                    <RatingBar />
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">Thể loại được xem nhiều nhất</h3>
                    <p className="text-gray-500">Bạn chưa đánh giá bất kỳ bộ phim hoặc chương trình TV nào.</p>
                </div>
            </div>

            {/* Watchlist Section */}
            <div className="mb-12">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">Upcoming From Watchlist</h3>
                    <a href="#" className="text-[#01b4e4] hover:text-[#0099ca]">
                        Đi đến Danh sách theo dõi
                    </a>
                </div>
                <WatchlistItem movie={watchlistMovie} />
            </div>

            {/* Recent Discussions */}
            <div className="mb-12">
                <h3 className="text-xl font-semibold mb-4">Recent Discussions</h3>
                <p className="text-gray-500 p-4 bg-gray-50 rounded">
                    Bạn không xem bất kỳ cuộc thảo luận nào.
                </p>
            </div>

            {/* Recent Activity */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">Hoạt động gần đây</h3>
                    <a href="#" className="text-[#01b4e4] hover:text-[#0099ca]">
                        View More
                    </a>
                </div>
                <p className="text-gray-500">
                    Bạn chưa thực hiện bất kỳ chỉnh sửa gần đây.
                </p>
            </div>
        </div>
    );
};

export default ProfileContent;