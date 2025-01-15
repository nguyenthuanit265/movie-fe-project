import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchUserData } from './UserService';
import { Star, Film, Heart, Mail, MapPin, Link as LinkIcon, Calendar, User } from 'lucide-react';
import ProfileHeader from './ProfileHeader';
import TabButton from './TabButton';
import MovieList from './MovieList';
import RecommendationSection from './Recomendation';

const ProfilePage = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('watchlist');
    const token = useSelector((state) => state.auth.token);

    useEffect(() => {
        const loadUserData = async () => {
            try {
                const data = await fetchUserData(token);
                setUserData(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        loadUserData();
    }, [token]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!userData) {
        return <div>Failed to load user data.</div>;
    }

    const { username, email, avatar_url, average_rating, role_user, watchlist, favorites, ratings } = userData;

    const stats = [
        { icon: <Film className="w-5 h-5" />, label: 'Watchlist', value: watchlist.length },
        { icon: <Heart className="w-5 h-5" />, label: 'Favorites', value: favorites.length },
        { icon: <Star className="w-5 h-5" />, label: 'Rated Movies', value: ratings.length },
    ];
    console.log("Watchlist:", watchlist);
    console.log("Favorites:", favorites);
    console.log("Ratings:", ratings);

    return (
        <div className="min-h-screen bg-gray-50 pt-16">
            <ProfileHeader
                username={username}
                email={email}
                avatar_url={avatar_url}
                average_rating={average_rating}
                role_user={role_user}
                stats={stats}
            />
            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="flex flex-wrap gap-4 mb-6">
                    <TabButton id="watchlist" label="Watchlist" count={watchlist.length} activeTab={activeTab} setActiveTab={setActiveTab} />
                    <TabButton id="favorites" label="Favorites" count={favorites.length} activeTab={activeTab} setActiveTab={setActiveTab} />
                    <TabButton id="ratings" label="Your Ratings" count={ratings.length} activeTab={activeTab} setActiveTab={setActiveTab} />
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                    {activeTab === 'watchlist' && <MovieList movies={watchlist} />}
                    {activeTab === 'favorites' && <MovieList movies={favorites} />}
                    {activeTab === 'ratings' && <MovieList movies={ratings} showRating />}
                </div>
            </div>
            {token && <RecommendationSection token={token} />}
        </div>
    );
};

export default ProfilePage;
