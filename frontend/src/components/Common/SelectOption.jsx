import React from 'react';
import usericon from '../../assets/img/user-icon.png';

function SelectOption() {
    return (
        <div>
            <div className="user">
                <img src={usericon} alt="" />
                <select name="user" id="user">
                    <option value="User">User name</option>
                    <option value="User">Save Home</option>
                    <option value="User">Buy a Home</option>
                    <option value="User">Sell a Home</option>
                    <option value="User">Rent a Home</option>
                    <option value="User">Log Out</option>
                </select>
            </div>
            <div className="user2">
                <img src={usericon} alt="" />
                <select name="user" id="user">
                    <option value="User"></option>
                    <option value="User">User name</option>
                    <option value="User">Save Home</option>
                    <option value="User">Buy a Home</option>
                    <option value="User">Sell a Home</option>
                    <option value="User">Rent a Home</option>
                    <option value="User">Log Out</option>
                </select>
            </div>
        </div>
    );
}

export default SelectOption;
