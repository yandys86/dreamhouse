import React from 'react';
import '../assets/style.css';
import Header from '../components/Common/Header';
import MainImage from '../components/Common/MainImage';
import HomeCard from '../components/Common/HomeCard';
import CategoryCard from '../components/Common/CategoryCard';
import Footer from '../components/Common/Footer';

const Home = () => {
    return (
        <>
            <Header />
            <MainImage />

            <div className="section-title">
                <h4>
                    Whether you’re buying, selling or renting, <br />
                    we can help you move forward.
                </h4>
            </div>

            <div className="container">
                <HomeCard />
                <HomeCard />
                <HomeCard />
            </div>

            <div className="explore-view">
                <p>Explore home on Dream house</p>
            </div>

            <div className="contenedor">
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
            </div>

            <div className="section-view">
                <button>View More</button>
            </div>

            <Footer />
        </>
    );
};

export default Home;
