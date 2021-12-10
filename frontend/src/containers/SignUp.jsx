import React from 'react';
import '../assets/style.css';
import Header from '../components/Common/Header';
import Logo from '../assets/img/logo.png';
import MainImage from '../components/Common/MainImage';

function SignUp() {
    return (
        <>
            <Header />
            <MainImage />

            <div class="login">
                <div class="logo">
                    <img src={Logo} alt="" />
                </div>
                <div>
                    <h3>Sign Up</h3>
                </div>
                <form action="" className="form-loguin">
                    <h4>Username</h4>
                    <input type="texte" placeholder="Enter User Name" />
                    <h4>Email</h4>
                    <input type="email" placeholder="Enter email" />
                    <h4>Password</h4>
                    <input type="password" placeholder="Enter Password" />
                    <input type="button" value="Sing Up" class="button-input" />
                </form>
            </div>
        </>
    );
}

export default SignUp;
