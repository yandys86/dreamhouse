import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ImgSearchIcon from '../../assets/img/search_white_48dp.png';
import { push } from 'connected-react-router';

function SearchInput() {
    const [showSearchBar, setSearchBar] = useState(true);
    const dispatch = useDispatch();
    const [search, setSearch] = useState();
    let pageURL = window.location.toString();

    const inputFind = event => {
        setSearch(event.target.value);
    };

    const submitAction = search => {
        console.log('text:', search);
        dispatch(push('/search/?search=' + search));
    };

    useEffect(() => {
        if (pageURL.includes('search') || pageURL.includes('preview') || pageURL.includes('sale')) {
            setSearchBar(true);
        }
    }, []);

    return (
        <>
            {showSearchBar && (
                <div className="search">
                    <div>
                        <input
                            type="text"
                            onChange={inputFind}
                            placeholder="Address, city or state"
                            id="search"
                            autocomplete="false"
                        />
                    </div>
                    <img className="icon-search" onClick={() => submitAction(search)} src={ImgSearchIcon} alt="" />
                </div>
            )}
        </>
    );
}

export default SearchInput;
