// import React, { useState } from 'react';
// import { Search, Bell, User } from 'lucide-react';
//
// const MovieApp = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//
//     return (
//         <div className="min-h-screen bg-[#1a1d29] text-white w-full overflow-x-hidden">
//             {/* Header */}
//             <header className="bg-[#032541] fixed w-full z-50">
//                 <nav className="max-w-[1300px] w-full mx-auto px-4 py-4 flex items-center">
//                     {/* Logo and Navigation */}
//                     <div className="flex items-center space-x-8">
//                         <h1 className="text-2xl font-normal text-[#4dd4ff]">MovieDB</h1>
//
//                         {/* Desktop Navigation */}
//                         <div className="hidden md:flex space-x-6">
//                             <a href="#" className="text-white font-light">Movies</a>
//                             <a href="#" className="text-white font-light">TV Shows</a>
//                             <a href="#" className="text-white font-light">People</a>
//                             <a href="#" className="text-white font-light">More</a>
//                         </div>
//                     </div>
//
//                     {/* Right Side Navigation */}
//                     <div className="flex items-center space-x-6 ml-auto">
//                         <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center cursor-pointer">
//                             <Search className="w-5 h-5 text-[#032541]" />
//                         </div>
//                         <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center cursor-pointer">
//                             <Bell className="w-5 h-5 text-[#032541]" />
//                         </div>
//                         <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center cursor-pointer">
//                             <User className="w-5 h-5 text-[#032541]" />
//                         </div>
//                     </div>
//                 </nav>
//             </header>
//
//             {/* Hero Section */}
//             <section className="w-full pt-32 pb-20 bg-gradient-to-r from-[#3e37a1] to-[#9747ff]">
//                 <div className="max-w-[1300px] w-full mx-auto px-4">
//                     <h2 className="text-[3rem] font-semibold mb-4">Welcome.</h2>
//                     <p className="text-[2rem] font-light mb-10">
//                         Millions of movies, TV shows and people to discover. Explore now.
//                     </p>
//
//                     {/* Search Bar */}
//                     <div className="relative">
//                         <input
//                             type="text"
//                             placeholder="Search for a movie, tv show, person....."
//                             className="w-full px-6 py-4 rounded-[30px] text-gray-700 text-lg focus:outline-none"
//                         />
//                         <button className="absolute right-[2px] top-1/2 transform -translate-y-1/2 bg-[#5a44ff] text-white px-8 py-3.5 rounded-[30px] font-semibold hover:bg-[#4a37d4] transition-colors">
//                             Search
//                         </button>
//                     </div>
//                 </div>
//             </section>
//
//             {/* Trending Section */}
//             <section className="w-full py-16">
//                 <div className="max-w-[1300px] w-full mx-auto px-4">
//                     <h3 className="text-[1.5rem] font-semibold mb-6">Trending</h3>
//                     <div className="flex space-x-5 overflow-x-auto pb-4">
//                         {[1, 2, 3, 4, 5].map((item) => (
//                             <div key={item} className="flex-none w-[150px] bg-[#1c212e] rounded-lg shadow-lg">
//                                 <div className="aspect-[2/3] bg-[#2a3243] rounded-t-lg"/>
//                                 <div className="p-4">
//                                     <h4 className="font-medium text-base text-white mb-1">Movie Title</h4>
//                                     <p className="text-[#778] text-sm">Jan 10, 2025</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//
//             {/* What's Popular Section */}
//             <section className="w-full py-16">
//                 <div className="max-w-[1300px] w-full mx-auto px-4">
//                     <h3 className="text-[1.5rem] font-semibold mb-6">What's Popular</h3>
//                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
//                         {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
//                             <div key={item} className="bg-[#1c212e] rounded-lg shadow-lg">
//                                 <div className="aspect-[2/3] bg-[#2a3243] rounded-t-lg"/>
//                                 <div className="p-4">
//                                     <h4 className="font-medium text-base text-white mb-1">Movie Title</h4>
//                                     <p className="text-[#778] text-sm">Jan 10, 2025</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };
//
// export default MovieApp;