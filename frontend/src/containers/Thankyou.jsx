import React from 'react';
import '../assets/style.css';
import SelectOption from '../components/Common/SelectOption';
import SearchInput from '../components/Common/SearchInput';
import Logo from '../components/Common/Logo';
import Footer from '../components/Common/Footer';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

const Thankyou = () => {
    const dispatch = useDispatch();

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
                <h4>Thank you for the Details</h4>

                <h6>
                    {' '}
                    We have received your request. <br />
                    Our staff will contact you once we have processed your request.
                </h6>
                <button className="btn" onClick={() => dispatch(push('/'))}>
                    Back to Home
                </button>
            </form>

            <Footer />
        </>
    );
};

export default Thankyou;
