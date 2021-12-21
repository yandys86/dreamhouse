import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'query-string';
import { fetchHomes, clearHomes } from '../reducks/homes/operations';
import { getHomes } from '../reducks/homes/selectors';
import SavesCard from '../components/Common/SavesCard';
import '../assets/style.css';
import SelectOption from '../components/Common/SelectOption';
import Footer from '../components/Common/Footer';
import Logo from '../components/Common/Logo';
import SearchInput from '../components/Common/SearchInput';
import { getFavourites } from '../reducks/favourite/selectors';
import { fetchFavourites } from '../reducks/favourite/operations';

const Search = () => {
    const parsed = queryString.parse(window.location.search);
    const [search, setSearch] = useState(null);
    const [tagId, setTagId] = useState(null);
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const homes = getHomes(selector);
    const favourite = getFavourites(selector);

    useEffect(() => {
        if (parsed.search !== undefined) {
            setSearch(parsed.search);
        }
        if (parsed.tag_id !== undefined) {
            setTagId(parsed.tag_id);
        }
    }, []);

    useEffect(() => {
        if (search != null || tagId != null) {
            dispatch(clearHomes());
            dispatch(fetchHomes(search, tagId));
            dispatch(fetchFavourites());
        }
    }, [search, tagId]);

    return (
        <div>
            <div className="header-small">
                <div className="navbar-sales-rent">
                    <Logo />
                    <SearchInput />
                    <SelectOption />
                </div>
            </div>
            <div className="section-title">{<h4>House for {parsed.tag_type ? parsed.tag_type : ''} Near me</h4>}</div>

            <div className="container">
                {homes && homes.length !== 0
                    ? homes.results.map(home => <SavesCard home={home} favourite={favourite} />)
                    : 'Not an array'}
            </div>

            <div className="section-view">
                <button>View More</button>
            </div>
            <Footer />
        </div>
    );
};

export default Search;
