import React from 'react';

const TabButton = ({ id, label, count, activeTab, setActiveTab }) => (
    <button
        onClick={() => setActiveTab(id)}
        className={`px-6 py-3 font-medium text-sm rounded-lg transition-colors flex items-center
            ${activeTab === id
                ? 'bg-blue-500 text-white'
                : 'text-gray-500 hover:bg-gray-100'
            }`}
    >
        {label}
        <span className={`ml-2 px-2 py-0.5 rounded-full text-xs 
            ${activeTab === id
                ? 'bg-white text-blue-500'
                : 'bg-gray-200 text-gray-600'
            }`}>
            {count}
        </span>
    </button>
);

export default TabButton;
