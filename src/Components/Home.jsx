import React from 'react';
import MainBanner from './MainBanner';
import HomeDemoPartner from './HomeDemoPartner';
import HowItWorks from './HowItWorks';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <MainBanner></MainBanner>
            <HomeDemoPartner></HomeDemoPartner>
            <HowItWorks></HowItWorks>
            <Review></Review>
        </div>
    );
};

export default Home;