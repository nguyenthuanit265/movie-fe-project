// import React from 'react';

// const CastCard = ({ casts }) => {
//     const handleImageError = (e) => {
//         e.target.src = 'https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg';
//     };

//     return (
//         <div className="bg-white py-8">
//             <div className="container mx-auto px-4">
//                 <h2 className="text-2xl font-semibold text-white mb-6">Top Billed Cast</h2>

//                 <div className="overflow-x-auto pb-4">
//                     <div className="flex gap-4 min-w-full">
//                         {casts.map((cast) => (
//                             <div
//                                 key={cast.id}
//                                 className="flex-none w-[180px] bg-white rounded-lg overflow-hidden shadow-lg 
//                 hover:opacity-80 transition-opacity cursor-pointer"
//                             >
//                                 <div className="aspect-[2/3] relative">
//                                     <img
//                                         src={cast.profile_path
//                                             ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
//                                             : '/api/placeholder/300/450'}
//                                         alt={cast.name}
//                                         className="w-full h-full object-cover"
//                                         onError={handleImageError}
//                                     />
//                                 </div>
//                                 <div className="p-3">
//                                     <h3 className="font-bold text-gray-900 text-sm leading-tight mb-1">
//                                         {cast.name}
//                                     </h3>
//                                     <p className="text-gray-600 text-sm leading-tight">
//                                         {cast.character}
//                                     </p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CastCard;

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
        <div className="bg-white py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-semibold text-white mb-6">Top Billed Cast</h2>

                <div className="overflow-x-auto pb-4">
                    <div className="flex gap-4 min-w-full">
                        {casts.map((cast) => (
                            <div
                                key={cast.id}
                                className="flex-none w-[180px] bg-white rounded-lg overflow-hidden shadow-lg 
                  hover:opacity-80 transition-opacity cursor-pointer"
                                onClick={() => handleCardClick(cast.id)} // Trigger the onClick event here
                            >
                                <div className="aspect-[2/3] relative">
                                    <img
                                        src={cast.profile_path
                                            ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                                            : '/api/placeholder/300/450'}
                                        alt={cast.name}
                                        className="w-full h-full object-cover"
                                        onError={handleImageError}
                                    />
                                </div>
                                <div className="p-3">
                                    <h3 className="font-bold text-gray-900 text-sm leading-tight mb-1">
                                        {cast.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-tight">
                                        {cast.character}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CastCard;
