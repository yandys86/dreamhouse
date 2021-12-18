import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTags } from '../reducks/tags/selectors';
import { fetchTags } from '../reducks/tags/operations';
import { getHomes } from '../reducks/homes/selectors';
import { fetchHomes, clearHomes } from '../reducks/homes/operations';
import { useHistory } from 'react-router';
import '../assets/style.css';
import Header from '../components/Common/Header';
import MainImage from '../components/Common/MainImage';
import HomeCard from '../components/Common/HomeCard';
import Footer from '../components/Common/Footer';
import Card from '../components/Common/Card';

const Home = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const homes = getHomes(selector);
    const history = useHistory();
    const tags = getTags(selector);

    useEffect(() => {
        dispatch(clearHomes());
        dispatch(fetchHomes());
    }, []);

    useEffect(() => {
        dispatch(fetchTags());
    }, []);

    const clickHome = homeId => {
        dispatch(history.push(`/preview/${homeId}/`));
    };

    console.log('image', homes);

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
                {tags && tags.length !== 0 ? tags.results.map(tag => <HomeCard tag={tag} />) : 'LOADING...'}
            </div>

            <div className="explore-view">
                <p>Explore home on Dream house</p>
            </div>

            <div className="contenedor">
                {homes && homes.length !== 0
                    ? homes.results.map(home => (
                          <div key={home.id} className="cajas">
                              <img src={'https://res.cloudinary.com/yiyo-lmb/' + home.main_image} alt="" />
                              <div className="textos">
                                  <h3>{home.state}</h3>

                                  <button id="vh" onClick={() => clickHome(home.id)}>
                                      View Home
                                  </button>
                              </div>
                          </div>
                      ))
                    : 'Loading homes...'}
            </div>

            <div className="section-view">
                <button>View More</button>
            </div>

            <Footer />
        </>
    );
};

export default Home;
