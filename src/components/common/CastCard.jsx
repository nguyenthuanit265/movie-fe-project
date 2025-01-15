import React from 'react';
import { useNavigate } from 'react-router-dom';

const CastCard = ({ casts }) => {
    const navigate = useNavigate();

    const handleImageError = (e) => {
        e.target.src = 'https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg';
    };

    const handleCardClick = (id) => {
        navigate(`/cast/${id}`);
    };

    return (
        <div className="w-full">
            <div className="overflow-x-auto scrollbar-hide">
                <div className="flex space-x-4 pb-4">
                    {casts.map((cast) => (
                        <div
                            key={cast.id}
                            className="flex-none w-[160px] bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                            onClick={() => handleCardClick(cast.id)}
                        >
                            <div className="relative h-[240px]">
                                <img
                                    src={cast.profile_path
                                        ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                                        : '/api/placeholder/300/450'}
                                    alt={cast.name}
                                    className="w-full h-full object-cover"
                                    onError={handleImageError}
                                />
                                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/70 to-transparent" />
                            </div>
                            <div className="p-3 bg-white">
                                <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-1 line-clamp-1">
                                    {cast.name}
                                </h3>
                                <p className="text-gray-600 text-xs leading-tight line-clamp-1">
                                    {cast.character}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Custom Scrollbar Styles */}
            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .line-clamp-1 {
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
};

export default CastCard;