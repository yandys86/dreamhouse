import React from 'react';
import Logo from './Logo';

function Header() {
    return (
        <>
            <div className="navbar-sign">
                <Logo />
                <div className="navbar-sign-in-up">
                    <a href="./SignUp.jsx" className="navbar-sign-up">
                        Sign up
                    </a>
                    /
                    <a href="./SignIn.jsx" className="navbar-sign-in">
                        Sign in
                    </a>
                </div>
            </div>
        </>
    );
}

export default Header;
