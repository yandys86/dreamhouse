import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Card(home) {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    return (
        <>
            <div className="cajas" key={home.id}>
                <img src={'https://res.cloudinary.com/yiyo-lmb/' + home.main_image} alt="" />
                <div className="textos">
                    <h3>{home.price}</h3>
                    <p>
                        {home.layout} 1,800 sqft <br />
                        <br />
                        {home.state}, {home.address}
                    </p>
                </div>
            </div>
        </>
    );
}

export default Card;
