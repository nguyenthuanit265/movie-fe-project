// eslint-disable-next-line react/prop-types
import { MoreHorizontal, Play } from "lucide-react";
import React from "react";

// eslint-disable-next-line react/prop-types
const TrailerCard = ({ data }) => {
    // eslint-disable-next-line react/prop-types
    const { movie_title: title, poster_path: posterPath, description } = data;
    const baseImageUrl = "https://image.tmdb.org/t/p/w500";
    const fullImageUrl = `${baseImageUrl}${posterPath.startsWith('/') ? posterPath : `/${posterPath}`}`;

    return (
        <div className="group relative flex-none w-[300px] transition-transform duration-200 hover:scale-[1.05]">
            {/* Trailer Thumbnail */}
            <div className="relative rounded-lg overflow-hidden">
                <img
                    src={fullImageUrl}
                    alt={title}
                    className="w-[300px] h-[169px] object-cover"
                />
                {/* Play Button Overlay */}
                <div
                    className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                        <Play className="w-8 h-8 text-white fill-white" />
                    </div>
                </div>
                {/* More Options Button */}
                <button
                    className="absolute top-2 right-2 w-8 h-8 rounded-full bg-[#032541]/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreHorizontal className="text-white w-5 h-5" />
                </button>
            </div>

            {/* Title and Description */}
            <div className="mt-4">
                <h3 className="text-white font-medium text-base hover:text-[#01b4e4] cursor-pointer">{title}</h3>
                <p className="text-gray-400 text-sm mt-1">{description}</p>
            </div>
        </div>
    );
};

export default TrailerCard;