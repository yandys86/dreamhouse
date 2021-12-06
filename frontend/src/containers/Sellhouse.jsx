import React from 'react';
import "../assets/style.css"
//import "../assets/sellhouse.css"
import logo from '../assets/img/logo.png';
import usericon from '../assets/img/user-icon.png';



const Sellhouse = () => {
    return (
        <div>
            
            <header className="header-sellhouse">
            <div className="navbar-sales-rent">
            <div className="av-dream-house-sales-rent">
                 <a className="navbar-brand" href="/">
                 <img width="100" className="h-home" alt="" src={logo}/>
                </a>
            </div>

            <div className="input-header-sales-rent">
                <input type="text" placeholder="Search" />
            </div>

            <div className="user">
          <img src={usericon} alt=""/>
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

      <div class="text-content">
        <h1>
          Sell your home <br />
          with confidence
        </h1>
        <h6>
          Dream House is making it simpler to<br />
          sell your home and move forward.
        </h6>
      </div>

    </header>

<div className="text-content1">
      <h1>Sell your home directly to Dream House.</h1>
      <h6>
        Getting a competitive cash offer from Dream House is an easy path to
        sell your home, with more control and less prepwork. You sell your home
        as-is and get paid with no surprises, while we take care of the rest.
      </h6>
    </div>

    <div className="clearfix"></div>

    <form action="post" className="form">
      <label for=""
        ><h4>Input your home information to get counselling.</h4>
        <br
      /></label>
      <label for="Address"
        ><h6>Address</h6>

        <input type="text" placeholder="Enter your full house address" />
      </label>
      <label for="size">
        <h6>How much Square feet is your building?</h6>

        <input type="text" placeholder="Enter the area size of house " />
      </label>

      <label for="age">
        <h6>How old is your building?</h6>

        <input type="text" placeholder="Enter the age of building" />
      </label>

      <input type="submit" className="btn" />
    </form>

    
    <footer>
      <div className="nav-dream-house">
        <a className="navbar-brand" href="/">
          <img width="100" className="h-home" alt="" src={logo}/>
          </a>
      </div>
    </footer>

        </div>
    );
};

export default Sellhouse;