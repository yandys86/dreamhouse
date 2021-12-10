import React from 'react';
import '../assets/style.css';
import logo from '../assets/img/logo.png';
import usericon from '../assets/img/user-icon.png';

import newyork from '../assets/img/newyork.png';
import goback from '../assets/img/goback.png';
import inter from '../assets/img/inter1.png';

const ViewHome = () => {
    return (
        <div>
            <header className="header-small">
                <div className="navbar-sales-rent">
                    <div className="av-dream-house-sales-rent">
                        <a className="navbar-brand" href="/">
                            <img width="100" className="h-home" alt="" src={logo} />
                        </a>
                    </div>

                    <div className="input-header-sales-rent">
                        <input type="text" placeholder="Search" />
                    </div>

                    <div className="user">
                        <img src={usericon} alt="" />
                        <select name="user" id="user">
                            <option value="User">User name</option>
                            <option value="User">Save Home</option>
                            <option value="User">Buy a Home</option>
                            <option value="User">Sell a Home</option>
                            <option value="User">Rent a Home</option>
                            <option value="User">Log Out</option>
                        </select>
                    </div>
                    <div className="user2">
                        <img src={usericon} alt="" />
                        <select name="user" id="user">
                            <option value="User"></option>
                            <option value="User">User name</option>
                            <option value="User">Save Home</option>
                            <option value="User">Buy a Home</option>
                            <option value="User">Sell a Home</option>
                            <option value="User">Rent a Home</option>
                            <option value="User">Log Out</option>
                        </select>
                    </div>
                </div>
            </header>

            <div className="section-title">
                <div className="goback-ico">
                    <a href="/">
                        <img src={goback} alt="" />
                    </a>
                </div>
            </div>

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

            <div className="datos1">
                <h1>California</h1>
                <h1>$1,195,000</h1>
            </div>
            <div className="datos2">
                <h3>San Francisco, CA99494</h3>
                <h3>Est. mortgage $4,683/mo*</h3>
            </div>
            <div className="datos3">
                <h4>4 BHK 2,231 sqft</h4>
                <a href="/">
                    <button>Get Contect</button>
                </a>
            </div>

            <div className="clearfix"></div>

            <footer>
                <div className="nav-dream-house">
                    <a className="navbar-brand" href="/">
                        <img width="100" className="h-home" alt="" src={logo} />
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default ViewHome;
