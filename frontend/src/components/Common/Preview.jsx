import React, { useState, useEffect } from 'react';
import API from '../../API';
import ImgIconBack from '../../assets/img/goback.png';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { push } from 'connected-react-router';
import SelectOption from '../Common/SelectOption';
import Footer from '../Common/Footer';
import Logo from '../Common/Logo';
import SearchInput from '../Common/SearchInput';

const api = new API();

function Preview() {
    const { id } = useParams();
    const [home, setHome] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        api.getHome(id)
            .then(home => {
                setHome(home);
            })
            .catch(error => {
                alert('Faild to connect API: /house/:id/');
            });
    }, []);

    const clickback = () => {
        dispatch(push('/'));
    };

    return (
        <>
            <div>
                <div className="header-small">
                    <div className="navbar-sales-rent">
                        <Logo />
                        <SearchInput />
                        <SelectOption />
                    </div>
                </div>

                <div className="goback-ico" onClick={clickback}>
                    <img src={ImgIconBack} alt="" />
                </div>
                <div className="preview">
                    {home && (
                        <img class="main_image" src={'https://res.cloudinary.com/yiyo-lmb/' + home.main_image} alt="" />
                    )}
                    {home && (
                        <div class="multi-images">
                            <img
                                class="sub_image"
                                src={'https://res.cloudinary.com/yiyo-lmb/' + home.sub_image1}
                                alt=""
                            />
                            <img
                                class="sub_image"
                                src={'https://res.cloudinary.com/yiyo-lmb/' + home.sub_image2}
                                alt=""
                            />
                            <img
                                class="sub_image"
                                src={'https://res.cloudinary.com/yiyo-lmb/' + home.sub_image3}
                                alt=""
                            />
                            <img
                                class="sub_image"
                                src={'https://res.cloudinary.com/yiyo-lmb/' + home.sub_image4}
                                alt=""
                            />
                        </div>
                    )}
                </div>

                {home && (
                    <div className="datos">
                        <div className="datos1">
                            <h1>{home.state}</h1>
                            <h3>${home.price}</h3>
                        </div>
                        <div className="datos2">
                            <h1>{home.address}</h1>

                            <h1>Est. mortgage ${home.rent_price}/mo*</h1>
                        </div>
                        <div className="datos3">
                            <h1>{home.layout} 1,800 sqft</h1>

                            <button>
                                {' '}
                                <a href="/">Get Contact</a>
                            </button>
                        </div>
                    </div>
                )}
                <div className="section-view">
                    <button>View More</button>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Preview;
