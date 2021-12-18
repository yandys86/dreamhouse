import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { addFavourites, fetchFavourites } from '../../reducks/favourite/operations';
import { getFavourites } from '../../reducks/favourite/selectors';
import iconheart from '../../assets/img/iconheart.png';

function SavesCard({ home, favourite }) {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);

    const clickSaved = home => {
        dispatch(addFavourites({ home: home.id }));
        dispatch(fetchFavourites());
    };

    const saved = getFavourites(selector);

    const clickHome = homeId => {
        dispatch(push('/preview/' + homeId + '/'));
    };

    return (
        <>
            <div className="card" key={home.id}>
                {home && Object.values(saved).filter(savedHomes => home.id === savedHomes.id).length === 0 && (
                    <img
                        class="icon-heart"
                        onClick={() => {
                            clickSaved(home);
                        }}
                        src={iconheart}
                        alt=""
                    />
                )}

                <img
                    onClick={() => clickHome(home.id)}
                    src={'https://res.cloudinary.com/yiyo-lmb/' + home.main_image}
                    alt=""
                />

                <div className="contenido-sales-rent">
                    <h2>${home.price}</h2>
                    <div className="dimensions">
                        <h3>3bhk</h3>
                        <h3>{home.layout} 1,800 sqft</h3>
                    </div>
                    <h3>
                        {home.state}, {home.address}
                    </h3>
                </div>
            </div>
        </>
    );
}

export default SavesCard;
