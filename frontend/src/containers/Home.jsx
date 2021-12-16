import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTags } from '../reducks/tags/selectors';
import { fetchTags } from '../reducks/tags/operations';
import '../assets/style.css';
import Header from '../components/Common/Header';
import MainImage from '../components/Common/MainImage';
import HomeCard from '../components/Common/HomeCard';
import CategoryCard from '../components/Common/CategoryCard';
import Footer from '../components/Common/Footer';

const Home = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const tags = getTags(selector);

    useEffect(() => {
        dispatch(fetchTags());
    }, []);

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

            <div className="container">{tags && tags.length !== 0 && tags.map(tag => <HomeCard tag={tag} />)}</div>

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
