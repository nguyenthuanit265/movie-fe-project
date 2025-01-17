
import { MoreHorizontal } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ data }) => {
    const navigate = useNavigate();
    const { title, posterPath, releaseDate, rating, id } = data;
    const getRatingColor = (score) => {
        if (score >= 70) return 'border-[#21d07a]';
        if (score >= 40) return 'border-[#d2d531]';
        return 'border-[#db2360]';
    };

    const handleClick = () => {
        navigate(`/movie/${id}`, { state: { movieData: data } });

    };

    return (
        <div
            className="group relative flex-none w-[150px] transition-transform duration-200 hover:scale-[1.05] cursor-pointer"
            onClick={handleClick}
        >
            <div className="absolute left-0 top-0 bottom-0 w-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="h-8 w-full bg-[#1ed5a9]" />
                ))}
            </div>

            <div className="rounded-lg overflow-hidden">
                {/* Poster */}
                <div className="relative">
                    <img
                        src={posterPath}
                        alt={title}
                        className="w-[150px] h-[225px] object-cover rounded-lg"
                    />
                    <div className="absolute top-2 right-2">
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute -bottom-5 left-3">
                        <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center bg-[#081c22] border-2 ${getRatingColor(rating)}`}>
                            <div className="flex items-baseline">
                                <span className="text-white font-bold text-sm">{rating}</span>
                                <span className="text-white text-[8px] ml-[1px]">%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Info */}
                <div className="pt-8 px-2 pb-4">
                    <h2 className="font-bold text-black hover:text-[#01b4e4] line-clamp-2">{title}</h2>
                    <p className="text-gray-500 text-sm mt-1">{releaseDate}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;