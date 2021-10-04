import React from 'react';
import Brand from '../Brand/Brand';
import Counter from '../Counter/Counter';
import Feature from '../Feature/Feature';
import Hero from '../Hero/Hero';
import ProvideFeature from '../ProvideFeature/ProvideFeature';
import Quote from '../Quote/Quote';
import ServicesHome from '../ServicesHome/ServicesHome';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Feature></Feature>
            <ServicesHome></ServicesHome>
            <Counter />
            <ProvideFeature />
            <Brand />
            <Quote></Quote>
        </div>
    );
};

export default Home;