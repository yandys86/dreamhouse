import React from 'react';
import logo from '../../assets/img/logo.png';
function Logo() {
    return (
        <div>
            <div className="nav-dream-house">
                <a className="navbar-brand" href="/">
                    <img width="100" className="h-home" alt="" src={logo} />
                </a>
            </div>
        </div>
    );
}

export default Logo;
