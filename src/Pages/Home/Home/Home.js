import React from 'react';
import Services from '../Services/Services/Services';
import Banner from '../Banner/Banner';
import About from '../About/About';
import MemberShip from '../MemberShip/MemberShip';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <MemberShip></MemberShip>
            <About></About>
        </div>
    );
};

export default Home;