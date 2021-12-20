import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavourites } from '../reducks/favourite/selectors';

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
            <section class="buy">
                <div class="head">
                    <h4>Saved Houses</h4>
                    <ul class="images">
                        {favourites &&
                            favourites.map(favourite => (
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
                                    <h3>{favourite.price}</h3>
                                    <p>
                                        {favourite.layout} 1,800 sqft <br />
                                        <br />
                                        {favourite.state}, {favourite.address}
                                    </p>
                                </li>
                            ))}
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Saved;
