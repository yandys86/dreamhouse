import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ImgSearchIcon from '../../assets/img/search_white_48dp.png';
import { push } from 'connected-react-router';

function SearchInput() {
    const [showSearchBar, setSearchBar] = useState(false);
    const dispatch = useDispatch();
    const [search, setSearch] = useState();
    let pageURL = window.location.toString();

    const inputFind = event => {
        setSearch(event.target.value);
    };

    const submitAction = search => {
        dispatch(push('/search/?search=' + search));
    };

    useEffect(() => {
        if (pageURL.includes('search') || pageURL.includes('preview') || pageURL.includes('sale')) {
            setSearchBar(true);
        }
    }, []);

    return (
        <div>
            <div className="navbar">
                {showSearchBar && (
                    <div className="input-header">
                        <img onClick={() => submitAction(search)} src="/" alt="" />
                        <input
                            type="text"
                            onChange={inputFind}
                            placeholder="Address, city or state"
                            id="search"
                            autocomplete="false"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchInput;
