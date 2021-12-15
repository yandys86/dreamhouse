import React from 'react';
import '../../assets/style.css';
import buyhomeimg from '../../assets/img/buyhouse-01.png';

function HomeCard() {
    return (
        <>
            <div className="card">
                <img src={buyhomeimg} alt="" />
                <div className="contenido">
                    <h3>Buy a Home</h3>
                    <p>
                        Find your place with an immersive photo experience and the most listings, including things you
                        won’t find anywhere else.
                    </p>
                    <a href="./Saleshouselist">Search Home</a>
                </div>
            </div>
        </>
    );
}

export default HomeCard;
