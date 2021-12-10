import React from 'react';

function ViewCard() {
    return (
        <div>
            <div className="big-img">
                <img src={newyork} alt="" />
            </div>
            <div className="container-view">
                <div className="card-view">
                    <img src={inter} alt="" />
                </div>
                <div className="card-view">
                    <img src={inter} alt="" />
                </div>

                <div className="card-view">
                    <img src={inter} alt="" />
                </div>

                <div className="card-view">
                    <img src={inter} alt="" />
                </div>
            </div>
        </div>
    );
}

export default ViewCard;
