import React, {useState} from "react";

const LeaderboardSection = () => {
    const [activeTab, setActiveTab] = useState('allTime');

    const users = [
        {
            name: 'DJonesT',
            avatar: 'D',
            bgColor: 'bg-[#CC9831]',
            allTimeEdits: 40017,
            weeklyEdits: 16889
        },
        {
            name: '风暴1033',
            avatar: '风',
            bgColor: 'bg-[#CC9831]',
            allTimeEdits: 11779,
            weeklyEdits: 9281
        },
        {
            name: 'SassyMender',
            avatar: 'S',
            bgColor: 'bg-[#805AD5]',
            allTimeEdits: 20357,
            weeklyEdits: 5775
        },
        {
            name: 'beepol4',
            avatar: 'B',
            bgColor: 'bg-[#4299E1]',
            allTimeEdits: 74840,
            weeklyEdits: 4568
        },
        {
            name: 'Shei',
            avatar: 'S',
            bgColor: '',
            allTimeEdits: 1485071,
            weeklyEdits: 14658,
            hasImage: true
        },
        {
            name: 't0by',
            avatar: 'T',
            bgColor: 'bg-[#4299E1]',
            allTimeEdits: 278763,
            weeklyEdits: 6631
        },
        {
            name: 'chkchkboom',
            avatar: 'C',
            bgColor: '',
            allTimeEdits: 112904,
            weeklyEdits: 4936,
            hasImage: true
        },
        {
            name: 'Ys_',
            avatar: '/api/placeholder/40/40',
            bgColor: '',
            allTimeEdits: 36585,
            weeklyEdits: 4180,
            hasImage: true,
            isIcon: true
        }
    ];

    const maxEdits = Math.max(...users.map(user => user.allTimeEdits));

    return (
        <section className="w-full px-10 py-8 bg-white">
            {/* Header */}
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-black mb-4">Leaderboard</h2>
                <div className="flex gap-6 border-b border-gray-200">
                    <button
                        className={`pb-3 text-sm font-semibold ${
                            activeTab === 'allTime'
                                ? 'text-[#01b4e4] border-b-2 border-[#01b4e4]'
                                : 'text-gray-600 hover:text-[#01b4e4]'
                        }`}
                        onClick={() => setActiveTab('allTime')}
                    >
                        All Time Edits
                    </button>
                    <button
                        className={`pb-3 text-sm font-semibold ${
                            activeTab === 'weekly'
                                ? 'text-[#01b4e4] border-b-2 border-[#01b4e4]'
                                : 'text-gray-600 hover:text-[#01b4e4]'
                        }`}
                        onClick={() => setActiveTab('weekly')}
                    >
                        Edits This Week
                    </button>
                </div>
            </div>

            {/* Leaderboard List */}
            <div className="space-y-4">
                {users.map((user, index) => (
                    <div key={index} className="flex items-center gap-4">
                        {/* Avatar */}
                        {user.hasImage ? (
                            <img
                                src={user.avatar}
                                alt={user.name}
                                className="w-10 h-10 rounded-full object-cover"
                            />
                        ) : (
                            <div
                                className={`w-10 h-10 rounded-full ${user.bgColor} flex items-center justify-center text-white font-bold`}>
                                {user.avatar}
                            </div>
                        )}

                        {/* Content */}
                        <div className="flex-1">
                            <div className="flex justify-between text-gray-800 mb-1">
                                <span className="font-medium">{user.name}</span>
                                <div className="flex gap-4">
                                    <span>{user.allTimeEdits.toLocaleString()}</span>
                                    <span>{user.weeklyEdits.toLocaleString()}</span>
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full rounded-full bg-gradient-to-r from-[#1ed5a9] to-[#c932a9]"
                                     style={{
                                         width: `${(user.allTimeEdits / maxEdits) * 100}%`,
                                         transition: 'width 0.3s ease'
                                     }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LeaderboardSection;