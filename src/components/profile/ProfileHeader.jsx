import React from 'react';
import { Mail, Star, User } from 'lucide-react';

const ProfileHeader = ({ username, email, avatar_url, average_rating, role_user, stats }) => (
    <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className="flex-shrink-0">
                    <img
                        src={avatar_url}
                        alt={username}
                        className="w-32 h-32 rounded-full object-cover border-4 border-white/20 shadow-xl"
                    />
                </div>
                <div className="flex-grow">
                    <h1 className="text-3xl font-bold text-white mb-2">{username}</h1>
                    <div className="space-y-2 text-gray-300 mb-4">
                        <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            <span>{email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Star className="w-4 h-4" />
                            <span>AVGRating: {average_rating}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>Role: {role_user}</span>
                        </div>
                    </div>
                    <p className="text-gray-300 mb-6">
                        Movie enthusiast and critic. Love watching and reviewing films of all genres.
                        Always looking for the next great story to experience.
                    </p>
                    <div className="grid grid-cols-3 gap-4 max-w-2xl">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                                <div className="flex justify-center text-blue-400 mb-2">
                                    {stat.icon}
                                </div>
                                <div className="text-2xl font-bold text-white">{stat.value}</div>
                                <div className="text-sm text-gray-300">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ProfileHeader;
