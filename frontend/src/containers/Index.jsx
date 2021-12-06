import React from 'react';
import "../assets/style.css"
//import "../assets/stylehome.css"
//import "../assets/salehouse.css"
import logo from '../assets/img/logo.png';
import buyhomeimg from '../assets/img/buyhouse-01.png';



const Index = () => {
    return (
        <div>

        <header>
      <div className="navbar">
        <div className="navbar-sign">
          <div className="nav-dream-house">
            <a className="navbar-brand" href="/">
               <img width="100" className="h-home" alt="" src={logo}/>
            </a>
          </div>

          <div className="navbar-sign-in-up">
            <a href="./signup.html" className="navbar-sign-up">Sign up</a>
            /
            <a href="./signup.html" className="navbar-sign-in">Sign in</a>
          </div>
        </div>

        <div className="input-header">
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="text-content">
        <h1>
          Discover a place <br />
          you'll love to live.
        </h1>
        <h6>
          Check out the latest homes <br />
          base on your personal preferences.
        </h6>
      </div>
        </header>

        <div className="section-title">
      <h4>
        Whether you’re buying, selling or renting, <br />
        we can help you move forward.
      </h4>
    </div>

    <div className="clearfix"></div>



    <div className="container">
      <div className="card">
        <img src={buyhomeimg} alt=""/>
        <div className="contenido">
          <h3>Buy a Home</h3>
          <p>
            Find your place with an immersive photo experience and the most
            listings, including things you won’t find anywhere else.
          </p>
          <a href="./Saleshouselist.jsx">Search Home</a>
        </div>
      </div>

      <div className="card">
        <img src={buyhomeimg} alt=""/>
        <div className="contenido">
          <h3>Sell a Home</h3>
          <p>
            Whether you get a cash offer through Dream House Offers or choose to
            sell Traditionally, we can help you navigate a successful sale.
          </p>
          <a href="./Sellhouse.jsx">See your options</a>
        </div>
      </div>

      <div className="card">
        <img src={buyhomeimg} alt=""/>
        <div className="contenido">
          <h3>Rent a Home</h3>
          <p>
            We’re creating a seamless online experience - from shopping on the
            largest rental Network, to applying, to paying rent.
          </p>
          <a href="./Renthouselist.jsx">Find rentals</a>
        </div>
      </div>
    </div>

    <div className="clearfix"></div>



    <div className="explore-view">
      <p>Explore home on Dream house</p>
    </div>


    <div className="contenedor">
      <div className="cajas">
      
        <div className="textos">
          <h3>Florida, US</h3>
          <a href="./ViewHome.jsx"> <button>View Home </button> </a>
        </div>
      </div>
      <div className="cajas">
        <div className="textos">
          <h3>Texas, US</h3>
          <a href="./ViewHome.jsx"> <button>View Home </button> </a>
        </div>
      </div>
      <div className="cajas">
        <div className="textos">
          <h3>Colorado, US</h3>
          <a href="./ViewHome.jsx"> <button>View Home </button> </a>
        </div>
      </div>
      <div className="cajas">
        <div className="textos">
          <h3>California, US</h3>
          <a href="./ViewHome.jsx"> <button>View Home </button> </a>
        </div>
      </div>
      <div className="cajas">
        <div className="textos">
          <h3>New York, US</h3>
          <a href="./ViewHome.jsx"> <button>View Home </button> </a>
        </div>
      </div>
      <div className="cajas">
        <div className="textos">
          <h3>Whashington, US</h3>
          <a href="./ViewHome.jsx"> <button>View Home </button> </a>
        </div>
      </div>
      <div className="cajas">
        <div className="textos">
          <h3>Miami, US</h3>
          <a href="./ViewHome.jsx"> <button>View Home </button> </a>
        </div>
      </div>
      <div className="cajas">
        <div className="textos">
          <h3>Georgia, US</h3>
          <a href="./ViewHome.jsx"> <button>View Home </button> </a>
        </div>
      </div>
      <div className="cajas">
        <div className="textos">
          <h3>Chicago, US</h3>
          <a href="./ViewHome.jsx"> <button>View Home </button> </a>
        </div>
      </div>
      <div className="cajas">
        <div className="textos">
          <h3>Toronton, US</h3>
          <a href="./ViewHome.jsx"> <button>View Home </button> </a>
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

    </div>);
};

export default Index;