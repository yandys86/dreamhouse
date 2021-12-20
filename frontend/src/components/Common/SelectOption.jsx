import React, { useState, useEffect } from 'react';
import usericon from '../../assets/img/user-icon.png';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../reducks/users/operations';
import { push } from 'connected-react-router';
import { getTags } from '../../reducks/tags/selectors';

function SelectOption({ setShowOption }) {
    const dispatch = useDispatch();
    const key = localStorage.getItem('HOME_LOGIN_USER_KEY');
    const [checkUser, setCheckUser] = useState(false);
    const user = JSON.parse(localStorage.getItem('HOME_LOGIN_USER_KEY'));
    const selector = useSelector(state => state);
    const tags = getTags(selector);

    const signOutButton = () => {
        dispatch(signOut());
        setCheckUser(false);
    };

    useEffect(() => {
        if (key != null) {
            setCheckUser(true);
        }
    }, [key]);

    return (
        <>
            <div className="user" onClick={() => setShowOption(false)}>
                <div class="options">
                    <ul>
                        <li>
                            <img src={usericon} alt="" />
                            {checkUser && <p>{user.user_name}</p>}
                        </li>
                        <li onClick={() => dispatch(push('/saved'))} class="first">
                            Favorites
                        </li>
                        {tags && tags.length
                            ? tags.map(t => {
                                  if (t.type === 'Sell') {
                                      return <li onClick={() => dispatch(push('/sale'))}>Sell a house </li>;
                                  } else {
                                      return (
                                          <li
                                              onClick={() => dispatch(push(`Search?tag_id=${t.id}&tag_type=${t.type}`))}
                                          >
                                              {t.type} a house
                                          </li>
                                      );
                                  }
                              })
                            : ''}

                        <li onClick={signOutButton}>
                            {' '}
                            <a href="/">Log Out</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default SelectOption;
