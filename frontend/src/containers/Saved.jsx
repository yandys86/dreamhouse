import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavourites } from '../reducks/favourite/selectors';
import SelectOption from '../components/Common/SelectOption';
import SearchInput from '../components/Common/SearchInput';
import Logo from '../components/Common/Logo';
import Footer from '../components/Common/Footer';

import { deleteFavourites } from '../reducks/favourite/operations';
import { fetchFavourites } from '../reducks/favourite/operations';
import ImgFavIcon from '../assets/img/iconheart.png';

const Saved = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const favourites = getFavourites(selector);

    console.log('dsdsd', favourites);

    useEffect(() => {
        dispatch(fetchFavourites());
    }, []);

    return (
        <div>
            <div className="header-small">
                <div className="navbar-sales-rent">
                    <Logo />
                    <SearchInput />
                    <SelectOption />
                </div>
            </div>

            <div class="section-title">
                <h4>Saved Houses</h4>
            </div>
            <div className="container">
                {favourites && favourites.length !== 0
                    ? favourites.results.map(favourite => {
                          return (
                              <div class="card">
                                  <img
                                      className="icon-heart"
                                      onClick={() => {
                                          dispatch(deleteFavourites(favourite.id));
                                      }}
                                      src={ImgFavIcon}
                                      alt=""
                                  />
                                  <img
                                      src={'https://res.cloudinary.com/yiyo-lmb/' + favourite.home.main_image}
                                      alt=""
                                  />
                                  {console.log(favourite.main_image)}
                                  <h3>{favourite.home.price}</h3>
                                  <p>
                                      {favourite.home.layout} 1,800 sqft <br />
                                      <br />
                                      {favourite.home.state}, {favourite.home.address}
                                  </p>
                              </div>
                          );
                      })
                    : 'nothin'}
            </div>

            <div className="section-view">
                <button>View More</button>
            </div>
            <Footer />
        </div>
    );
};

export default Saved;

/* <div>
            <section class="buy">
                <div class="head">
                    <h4>Saved Houses</h4>
                    <ul class="images">
                        {favourites && favourites.length !== 0
                            ? favourites.results.map(favourite => (
                                  <li class="box">
                                      <img
                                          class="fav"
                                          onClick={() => {
                                              dispatch(deleteFavourites(favourite.id));
                                          }}
                                          src={ImgFavIcon}
                                          alt=""
                                      />
                                      <img
                                          src={'https://res.cloudinary.com/dwzjr9dg5/' + favourite.home.main_image}
                                          alt=""
                                      />
                                      {console.log(favourite.main_image)}
                                      <h3>{favourite.home.price}</h3>
                                      <p>
                                          {favourite.home.layout} 1,800 sqft <br />
                                          <br />
                                          {favourite.home.state}, {favourite.home.address}
                                      </p>
                                  </li>
                              ))
                            : 'Not an array'}
                    </ul>
                </div>
            </section>
        </div>*/
