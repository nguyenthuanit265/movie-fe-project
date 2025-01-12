import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; // Import React Router
// import {useNavigate} from 'react-router-dom';

import Footer from "./components/Footer.jsx";
import LeaderboardSection from "./components/LeaderboardSection.jsx";
import JoinTodaySection from "./components/JoinTodaySection.jsx";
import WhatsPopularSection from "./components/WhatsPopularSection.jsx";
import TrendingSection from "./components/TrendingSection.jsx";
import Header from "./components/Header.jsx";
import LatestTrailersSection from "./components/LatestTrailersSection.jsx";
import Login from "./components/Login.jsx";
import PanelSection from "./components/PannelSection.jsx";
import SignUp from "./components/SignUp.jsx";
import ResendActivation from "./components/ResendActivation.jsx";
import ResetPasswordScreen1 from "./components/ResetPasswordScreen1.jsx";
import ResetPassword from "./components/ResetPassword.jsx";
import ProfileHeader from "./components/ProfileHeader.jsx";
import Profile from "./components/Profile.jsx";

const App = () => {

    return (
        <>
            {/* Global styles to ensure full screen */}
            <style jsx global>{`
                html, body {
                    margin: 0;
                    padding: 0;
                    min-width: 100%;
                    width: 100%;
                    min-height: 100vh;
                    overflow-x: hidden;
                }

                #root {
                    min-height: 100vh;
                    width: 100%;
                }

                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }

                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
            <Router>
                <div className="min-h-screen w-full bg-white overflow-x-hidden">
                    {/* Header & Hero */}
                    <Header/>

                    {/* Main Content */}
                    <main>
                        {/* Define routes */}
                        <Routes>
                            {/* Home Page */}
                            <Route
                                path="/"
                                element={
                                    <>
                                        {/* Hero Section / Panel Section */}
                                        <section>
                                            <PanelSection/>
                                        </section>

                                        {/* Trending Section */}
                                        <section className="w-full bg-white">
                                            <TrendingSection/>
                                        </section>

                                        {/* Latest Trailers */}
                                        <section className="w-full bg-[#0d253f]">
                                            <LatestTrailersSection/>
                                        </section>

                                        {/* What's Popular */}
                                        <section className="w-full bg-white">
                                            <WhatsPopularSection/>
                                        </section>

                                        {/* Join Today Section */}
                                        <section>
                                            <JoinTodaySection/>
                                        </section>

                                        {/* Leaderboard */}
                                        <section className="w-full bg-white">
                                            <LeaderboardSection/>
                                        </section>
                                    </>
                                }
                            />

                            {/* Login Page */}
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/signup" element={<SignUp/>}/>
                            <Route path="/verify-email" element={<ResendActivation/>}/>
                            <Route path="/forgot-password" element={<ResetPasswordScreen1/>}/>
                            <Route path="/reset-password" element={<ResetPassword/>}/>
                            <Route path="/profile" element={<Profile/>}/>
                        </Routes>
                    </main>

                    {/* Footer */}
                    <Footer/>
                </div>
            </Router>

        </>
    );
};

export default App;