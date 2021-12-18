import React from 'react';
import '../assets/style.css';
import SelectOption from '../components/Common/SelectOption';
import Footer from '../components/Common/Footer';
import Logo from '../components/Common/Logo';
import SearchInput from '../components/Common/SearchInput';
const Saleshouselist = () => {
    return (
        <div>
            <div className="header-small">
                <div className="navbar-sales-rent">
                    <Logo />
                    <SearchInput />
                    <SelectOption />
                </div>
            </div>
            <div className="section-title">
                <h4>Houses for Sale Near Me</h4>
            </div>

            <div className="container"></div>

            <div className="section-view">
                <button>View More</button>
            </div>
            <Footer />
        </div>
    );
};

export default Saleshouselist;
