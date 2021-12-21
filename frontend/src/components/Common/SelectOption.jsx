import React, { useState, useEffect } from 'react';
import usericon from '../../assets/img/user-icon.png';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../reducks/users/operations';
import { push } from 'connected-react-router';
import { getTags } from '../../reducks/tags/selectors';
import { fetchTags } from '../../reducks/tags/operations';

function SelectOption({ setShowOption }) {
    const dispatch = useDispatch();
    const key = localStorage.getItem('HOME_LOGIN_USER_KEY');
    const [checkUser, setCheckUser] = useState(false);
    const user = JSON.parse(localStorage.getItem('HOME_LOGIN_USER_KEY'));
    const selector = useSelector(state => state);
    const tags = getTags(selector);

    useEffect(() => {
        if (key != null) {
            setCheckUser(true);
        }
    }, [key]);

    useEffect(() => {
        dispatch(fetchTags());
    }, []);

    const handleChange = event => {
        if (event.target.value === 'favourite') {
            dispatch(push('/saved'));
        }
        if (event.target.value === 'Sell') {
            dispatch(push('/Sellhouse'));
        }
        if (event.target.value === 'LogOut') {
            dispatch(signOut());
            setCheckUser(false);
        } else if (event.target.value === 'Rent' || event.target.value === 'Buy') {
            dispatch(push(`Search?tag_id=${event.target.id}&tag_type=${event.target.value}`));
        }
    };

    return (
        <>
            <div class="user">
                <img src={usericon} alt="" />
                <select name="user" onChange={handleChange}>
                    <option key={user.id} value={user.user_name}>
                        {checkUser && user.user_name}
                    </option>

                    <option value="favourite">Favourite</option>

                    {tags && tags.length !== 0
                        ? tags.results.map(t => {
                              return (
                                  <option key={t.id} value={t.type} id={t.id}>
                                      {t.type} a house
                                  </option>
                              );
                          })
                        : 'notthin'}

                    <option value="LogOut">Log Out</option>
                </select>
            </div>
        </>
    );
}

export default SelectOption;
