
import { MoreHorizontal, Play, X } from "lucide-react";
import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "../dialog/DialogTrailer";

const TrailerCard = ({ data }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const {
        movie_title: title,
        poster_path: posterPath,
        description,
        youtube_embed_url: youtubeUrl
    } = data;

    const baseImageUrl = "https://image.tmdb.org/t/p/w500";
    const fullImageUrl = `${baseImageUrl}${posterPath.startsWith('/') ? posterPath : `/${posterPath}`}`;

    return (
        <>
            <div className="group relative flex-none w-[300px] transition-transform duration-200 hover:scale-[1.05]">
                <div className="relative rounded-lg overflow-hidden">
                    <img
                        src={fullImageUrl}
                        alt={title}
                        className="w-[300px] h-[169px] object-cover"
                    />
                    <div
                        className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                        onClick={() => setIsModalOpen(true)}
                    >
                        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                            <Play className="w-8 h-8 text-white fill-white" />
                        </div>
                    </div>
                    <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-[#032541]/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreHorizontal className="text-white w-5 h-5" />
                    </button>
                </div>
                <div className="mt-4">
                    <h3 className="text-white font-medium text-base hover:text-[#01b4e4] cursor-pointer">
                        {title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">{description}</p>
                </div>
            </div>

            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="sm:max-w-[900px] bg-black border-gray-800 p-0 relative">
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="absolute -top-10 right-0 w-8 h-8 rounded-full bg-red-600 hover:bg-red-700 transition-colors flex items-center justify-center z-50"
                    >
                        X<X className="w-5 h-5 text-white" />
                    </button>
                    <div className="relative pt-[56.25%] w-full">
                        <iframe
                            src={youtubeUrl}
                            className="absolute top-0 left-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default TrailerCard;
