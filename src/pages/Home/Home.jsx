import Hero from './sections/Hero/Hero';
import Services from './sections/Services';
import Reviews from './sections/Reviews/Reviews';
import Promotions from './sections/Promotions/Promotions';
import ContactUs from './sections/Contact/Contact';
import Banner from './sections/Banner';
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Banner />
            <Hero />
            <Services />
            <Reviews />
            <Promotions />
            <ContactUs />
        </>
    );
};

export default Home;