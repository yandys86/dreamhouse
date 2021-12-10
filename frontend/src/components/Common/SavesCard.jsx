import React from 'react';
import iconheart from '../../assets/img/iconheart.png';
import newyork from '../../assets/img/newyork.png';
function SavesCard() {
    return (
        <>
            <div className="card">
                <a href="/Savehouse.jsx">
                    <img className="icon-heart" src={iconheart} alt="" />
                </a>

                <img src={newyork} alt="" />
                <div className="contenido-sales-rent">
                    <h2>$1,195,000</h2>
                    <div className="dimensions">
                        <h3>3bhk</h3>
                        <h3>1,800 sqft</h3>
                    </div>
                    <h3>San Francisco, CA99494</h3>
                </div>
            </div>
        </>
    );
}

export default SavesCard;
