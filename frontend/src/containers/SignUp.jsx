import React, { useState } from 'react';
import '../assets/style.css';
import { useDispatch } from 'react-redux';
import { signUp } from '../reducks/users/operations';
import { push } from 'connected-react-router';
import Header from '../components/Common/Header';
import Logo from '../assets/img/logo.png';
import MainImage from '../components/Common/MainImage';
import ImgCloseIcon from '../assets/img/icon-close.svg';

function SignUp() {
    const dispatch = useDispatch();

    const closeButton = () => {
        dispatch(push('/'));
    };

    const [user_name, setUserName] = useState(''),
        [email, setEmail] = useState(''),
        [password, setPassword] = useState('');

    const inputUserName = event => {
        setUserName(event.target.value);
    };

    const inputEmail = event => {
        setEmail(event.target.value);
    };

    const inputPassword = event => {
        setPassword(event.target.value);
    };

    const signUpButton = () => {
        dispatch(signUp(user_name, email, password));
        setUserName('');
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
                    <h3>Sign Up</h3>
                </div>
                <form action="" className="form-loguin">
                    <h4>Username</h4>
                    <input type="text" onChange={inputUserName} placeholder="Enter User Name" />
                    <h4>Email</h4>
                    <input type="email" onChange={inputEmail} placeholder="Enter email" />
                    <h4>Password</h4>
                    <input type="password" onChange={inputPassword} placeholder="Enter Password" />

                    <button onClick={signUpButton} class="button-input">
                        Sign up
                    </button>
                    <div class="foot"></div>
                    <button class="text" onClick={() => dispatch(push('/signin'))}>
                        Already an Customer SignIn
                    </button>
                </form>
            </div>
        </>
    );
}

export default SignUp;
