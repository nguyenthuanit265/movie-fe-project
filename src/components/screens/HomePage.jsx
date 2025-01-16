import React from 'react';
import PanelSection from "../sections/PannelSection";
import TrendingSection from "../sections/TrendingSection";
import LatestTrailersSection from "../sections/LatestTrailersSection";
import WhatsPopularSection from "../sections/WhatsPopularSection";
import JoinTodaySection from "../sections/JoinTodaySection";
import LeaderboardSection from "../sections/LeaderboardSection";

const HomePage = () => {
    return (
        <>
            {/* Hero Section / Panel Section */}
            <section>
                <PanelSection />
            </section>

            {/* Trending Section */}
            <section className="w-full bg-white">
                <TrendingSection />
            </section>

            {/* Latest Trailers */}
            <section className="w-full bg-[#0d253f]">
                <LatestTrailersSection />
            </section>

            {/* What's Popular */}
            <section className="w-full bg-white">
                <WhatsPopularSection />
            </section>

            {/* Join Today Section */}
            <section>
                <JoinTodaySection />
            </section>
        </>
    );
};

export default HomePage;