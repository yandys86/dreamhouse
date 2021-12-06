import React from 'react';
import "../assets/style.css"
import logo from '../assets/img/logo.png';
import usericon from '../assets/img/user-icon.png';
import iconheart from '../assets/img/iconheart.png';
import newyork from '../assets/img/newyork.png';


const Renthouselist = () => {
    return (
        <div>
     <header className="header-small" >
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
          <img src={usericon} alt=""/>
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
    </header>





<div className="section-title">
      <h4>Houses for Rent Near Me</h4>
</div>


<div className="container">
      <div className="card">
        <a href="./Savehouse.jsx"><img className="icon-heart" src={iconheart} alt=""/></a>
        
        <img src={newyork} alt=""/>
        <div className="contenido-sales-rent">
          <h2>$1,195,000</h2>
          <div className="dimensions">
            <h3>3bhk</h3>
            <h3>1,800 sqft</h3>
          </div>
          <h3>San Francisco, CA99494</h3>
        </div>
      </div>
      <div className="card">
        <a href="./Savehouse.jsx"><img className="icon-heart" src={iconheart} alt=""/></a>
        <img src={newyork} alt=""/>
        <div className="contenido-sales-rent">
          <h2>$1,195,000</h2>
          <div className="dimensions">
            <h3>3bhk</h3>
            <h3>1,800 sqft</h3>
          </div>
          <h3>San Francisco, CA99494</h3>
        </div>
      </div>

      <div className="card">
        <a href="./Savehouse.jsx"><img className="icon-heart" src={iconheart} alt=""/></a>
        <img src={newyork} alt=""/>
        <div className="contenido-sales-rent">
          <h2>$1,195,000</h2>
          <div className="dimensions">
            <h3>3bhk</h3>
            <h3>1,800 sqft</h3>
          </div>
          <h3>San Francisco, CA99494</h3>
        </div>
      </div>

      <div className="card">
        <a href="./Savehouse.jsx"><img className="icon-heart" src={iconheart} alt=""/></a>
        <img src={newyork} alt=""/>
        <div className="contenido-sales-rent">
          <h2>$1,195,000</h2>
          <div className="dimensions">
            <h3>3bhk</h3>
            <h3>1,800 sqft</h3>
          </div>
          <h3>San Francisco, CA99494</h3>
        </div>
      </div>

      <div className="card">
        <a href="./Savehouse.jsx"><img className="icon-heart" src={iconheart} alt=""/></a>
        <img src={newyork} alt=""/>
        <div className="contenido-sales-rent">
          <h2>$1,195,000</h2>
          <div className="dimensions">
            <h3>3bhk</h3>
            <h3>1,800 sqft</h3>
          </div>
          <h3>San Francisco, CA99494</h3>
        </div>
      </div>

      <div className="card">
        <a href="./Savehouse.jsx"><img className="icon-heart" src={iconheart} alt=""/></a>
        <img src={newyork} alt=""/>
        <div className="contenido-sales-rent">
          <h2>$1,195,000</h2>
          <div className="dimensions">
            <h3>3bhk</h3>
            <h3>1,800 sqft</h3>
          </div>
          <h3>San Francisco, CA99494</h3>
        </div>
      </div>

      <div className="card">
        <a href="./Savehouse.jsx"><img className="icon-heart" src={iconheart} alt=""/></a>
        <img src={newyork} alt=""/>
        <div className="contenido-sales-rent">
          <h2>$1,195,000</h2>
          <div className="dimensions">
            <h3>3bhk</h3>
            <h3>1,800 sqft</h3>
          </div>
          <h3>San Francisco, CA99494</h3>
        </div>
      </div>

      <div className="card">
        <a href="./Savehouse.jsx"><img className="icon-heart" src={iconheart} alt=""/></a>
        <img src={newyork} alt=""/>
        <div className="contenido-sales-rent">
          <h2>$1,195,000</h2>
          <div className="dimensions">
            <h3>3bhk</h3>
            <h3>1,800 sqft</h3>
          </div>
          <h3>San Francisco, CA99494</h3>
        </div>
      </div>

      <div className="card">
        <a href="./Savehouse.jsx"><img className="icon-heart" src={iconheart} alt=""/></a>
        <img src={newyork} alt=""/>
        <div className="contenido-sales-rent">
          <h2>$1,195,000</h2>
          <div className="dimensions">
            <h3>3bhk</h3>
            <h3>1,800 sqft</h3>
          </div>
          <h3>San Francisco, CA99494</h3>
        </div>
      </div>
    </div>

    
    <div className="clearfix"></div>

    <div className="section-view">
      <button>View More</button>
    </div>

    
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

export default Renthouselist;