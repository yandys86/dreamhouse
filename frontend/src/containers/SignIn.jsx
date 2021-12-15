import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../reducks/users/operations';
import '../assets/style.css';
import Header from '../components/Common/Header';
import Logo from '../assets/img/logo.png';
import MainImage from '../components/Common/MainImage';
import ImgCloseIcon from '../assets/img/icon-close.svg';
import { push } from 'connected-react-router';

function SignIn() {
    const dispatch = useDispatch();

    const closeButton = () => {
        dispatch(push('/'));
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const inputEmail = event => {
        setEmail(event.target.value);
    };

    const inputPassword = event => {
        setPassword(event.target.value);
    };

    const signInButton = () => {
        dispatch(signIn(email, password));
        setEmail('');
        setPassword('');
    };

    return (
        <>
            <Header />
            <MainImage />

            <div class="login">
                <img onClick={closeButton} class="close" src={ImgCloseIcon} alt="" />
                <div class="logo">
                    <img src={Logo} alt="" />
                </div>
                <div>
                    <h3>Sign In</h3>
                </div>
                <form action="" className="form-loguin">
                    <h4>Email</h4>
                    <input type="email" placeholder="Enter email" onChange={inputEmail} value={email} id="" />
                    <h4>Password</h4>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        onChange={inputPassword}
                        value={password}
                        id=""
                    />
                    <input type="button" value="Sing In" class="button-input" onClick={signInButton} />
                    <a class="joinus" href="/signup">
                        JOIN US
                    </a>
                </form>
            </div>
        </>
    );
}

export default SignIn;
