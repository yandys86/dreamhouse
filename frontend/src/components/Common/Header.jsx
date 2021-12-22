import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import SelectOption from './SelectOption';
import ImgUseIcon from '../../assets/img/user-icon.png';
import SearchInput from './SearchInput';

const key = localStorage.getItem('HOME_LOGIN_USER_KEY');

export default function Header() {
    const [pathname, setPathname] = useState(null);
    const [showOption, setShowOption] = useState(false);
    const [checkUser, setCheckUser] = useState(false);

    const user = JSON.parse(localStorage.getItem('HOME_LOGIN_USER_KEY'));

    useEffect(() => {
        console.log('called useEffect');
        setPathname(window.location.pathname);
        if (key != null) {
            setCheckUser(true);
        }
    }, [key]);

    return (
        <>
            <div className="navbar-sign">
                <Logo />

                {checkUser && checkUser != true ? (
                    <div class="drop-down" onClick={() => setShowOption(true)}>
                        <img src={ImgUseIcon} alt="" />
                        <button>{user.user_name}</button>
                    </div>
                ) : (
                    <div className="navbar-sign-in-up">
                        <a href="./Signup" className="navbar-sign-up">
                            Sign up
                        </a>
                        /
                        <a href="./Signin" className="navbar-sign-in">
                            Sign in
                        </a>
                    </div>
                )}
            </div>
            {showOption && <SelectOption setShowOption={setShowOption} />}
        </>
    );
}
