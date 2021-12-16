import React, { useState } from 'react';
import '../assets/style.css';
import SelectOption from '../components/Common/SelectOption';
import SearchInput from '../components/Common/SearchInput';
import Logo from '../components/Common/Logo';
import Footer from '../components/Common/Footer';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import { sellrequest } from '../reducks/request/operations';

const Sellhouse = () => {
    const dispatch = useDispatch();
    const [address, setAddress] = useState('');
    const [sqft, setSqft] = useState('');
    const [age_building, setAge_building] = useState('');

    const inputAddress = e => {
        setAddress(e.target.value);
    };

    const inputSqft = e => {
        setSqft(e.target.value);
    };

    const inputAge_Building = e => {
        setAge_building(e.target.value);
    };
    const submitButton = e => {
        let params = {
            address: address,
            sqft: sqft,
            age_building: age_building
        };
        dispatch(sellrequest(params));
        e.preventDefault();
        dispatch(push('/ThankYou'));
    };
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
                <h4>Input your home information to get counselling.</h4>

                <h6>Address</h6>

                <input type="text" name="address" placeholder="Enter your full house address" onChange={inputAddress} />

                <h6>How much Square feet is your building?</h6>

                <input type="text" name="sqft" placeholder="Enter your home size (sq. ft.)" onChange={inputSqft} />

                <h6>How old is your building?</h6>

                <input
                    type="text"
                    name="age_building"
                    placeholder="Enter the age of building(ex. 1986)"
                    onChange={inputAge_Building}
                />
                <div>
                    <input type="submit" className="btn" onClick={submitButton} id="" name="" />
                    <input type="submit" className="btn" value="Cancel" onClick={() => dispatch(push('/'))} />
                </div>
            </form>

            <Footer />
        </>
    );
};

export default Sellhouse;
