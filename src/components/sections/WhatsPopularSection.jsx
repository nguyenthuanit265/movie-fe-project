import React, { useState, useEffect } from "react";
import MovieCard from "../common/MovieCard.jsx";
import MovieProvider from "../../providers/MovieProvider.jsx";

const WhatsPopularSection = () => {
    const [filter, setFilter] = useState("all"); // Bổ sung filter mặc định
    const [allMovies, setAllMovies] = useState([]); // Lưu toàn bộ dữ liệu từ API
    const [movies, setMovies] = useState([]); // Dữ liệu hiển thị sau khi lọc
    const [isLoading, setIsLoading] = useState(true);
    const [isFading, setIsFading] = useState(false);

    // Hàm fetch dữ liệu từ API
    const fetchMovies = async () => {
        setIsLoading(true);
        try {
            const result = await MovieProvider.getPopular();
            if (result.data && result.data.content) {
                setAllMovies(result.data.content); // Lưu toàn bộ dữ liệu gốc
                setMovies(result.data.content); // Hiển thị mặc định
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    // Hàm xử lý lọc và sắp xếp dựa trên filter
    const applyFilter = (newFilter) => {
        let filteredMovies = [...allMovies]; // Tạo bản sao dữ liệu gốc
        switch (newFilter) {
            case "on_tv":
                // Sắp xếp theo tên (A-Z)
                filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case "for_rent":
                // Sắp xếp theo điểm đánh giá (từ cao đến thấp)
                filteredMovies.sort((a, b) => b.vote_average - a.vote_average);
                break;
            case "in_theaters":
                // Hiển thị ngẫu nhiên một số phim
                filteredMovies = filteredMovies.sort(() => 0.5 - Math.random()).slice(0, 5);
                break;
            default:
                break;
        }
        setMovies(filteredMovies); // Cập nhật dữ liệu hiển thị
    };

    const handleFilterChange = (newFilter) => {
        setIsFading(true); // Kích hoạt fade-out
        setTimeout(() => {
            setFilter(newFilter); // Cập nhật trạng thái filter
            applyFilter(newFilter); // Áp dụng lọc
            setIsFading(false); // Kích hoạt fade-in
        }, 300); // Thời gian hiệu ứng fade-out
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <section className="px-10 py-8 bg-white">
            {/* Header */}
            <div className="max-w-[1300px] mx-auto flex items-center gap-5 mb-6">
                <h2 className="text-xl font-semibold text-black">What's Popular</h2>
                {/* Filter Tabs */}
                <div className="inline-flex rounded-full border border-[#032541] p-1">
                    {["all", "on_tv", "for_rent", "in_theaters"].map((option) => (
                        <button
                            key={option}
                            onClick={() => handleFilterChange(option)}
                            className={`px-5 py-1 rounded-full text-sm font-semibold transition-colors ${filter === option
                                ? "bg-[#032541] text-white"
                                : "bg-white text-[#032541]"
                                }`}
                        >
                            {option.replace("_", " ").toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>

            {/* Movie Content */}
            <div className="relative max-w-[1300px] mx-auto">
                {isLoading ? (
                    <div className="flex justify-center items-center py-10">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                ) : movies.length > 0 ? (
                    <div
                        className={`overflow-x-auto transition-opacity duration-300 ${isFading ? "opacity-0 hidden-opacity" : "opacity-100 visible-opacity"
                            }`}
                        style={{
                            minHeight: "300px",
                            msOverflowStyle: "none",
                            scrollbarWidth: "none",
                            WebkitOverflowScrolling: "touch",
                        }}
                    >
                        <div className="flex gap-[20px] pb-4">
                            {movies.map((movie) => (
                                <MovieCard
                                    key={movie.id}
                                    data={{
                                        id: movie.id,
                                        title: movie.title,
                                        posterPath: movie.poster_url,
                                        releaseDate: movie.release_date,
                                        rating: movie.vote_average,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <p className="text-center text-gray-500">No movies found</p>
                )}
            </div>
        </section>
    );
};

export default WhatsPopularSection;
