import React from 'react';
import '../assets/style.css';
import logo from '../assets/img/logo.png';
import SelectOption from '../components/Common/SelectOption';
import SearchInput from '../components/Common/SearchInput';
import Logo from '../components/Common/Logo';
import Footer from '../components/Common/Footer';

const Sellhouse = () => {
    return (
        <>
            <header className="header-sellhouse">
                <div className="navbar-sales-rent">
                    <Logo />
                    <SearchInput />
                    <SelectOption />
                </div>

                <div class="text-content">
                    <h1>
                        Sell your home <br />
                        with confidence
                    </h1>
                    <h6>
                        Dream House is making it simpler to
                        <br />
                        sell your home and move forward.
                    </h6>
                </div>
            </header>

            <div className="text-content1">
                <h1>Sell your home directly to Dream House.</h1>
                <h6>
                    Getting a competitive cash offer from Dream House is an easy path to sell your home, with more
                    control and less prepwork. You sell your home as-is and get paid with no surprises, while we take
                    care of the rest.
                </h6>
            </div>

            <div className="clearfix"></div>

            <form className="form">
                <label for="">
                    <h4>Input your home information to get counselling.</h4>
                    <br />
                </label>
                <label for="Address">
                    <h6>Address</h6>

                    <input type="text" placeholder="Enter your full house address" />
                </label>
                <label for="size">
                    <h6>How much Square feet is your building?</h6>

                    <input type="text" placeholder="Enter your home size (sq. ft.)" />
                </label>

                <label for="age">
                    <h6>How old is your building?</h6>

                    <input type="text" placeholder="Enter the age of building(ex. 1986)" />
                </label>

                <input type="submit" className="btn" />
            </form>

            <Footer />
        </>
    );
};

export default Sellhouse;
