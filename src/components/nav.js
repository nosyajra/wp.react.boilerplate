import React from "react";
import { NavLink, Link } from 'react-router-dom';

import '../scss/components/_nav.scss';

function closeNav() {
  let nav = document.getElementById("main-nav");
  nav.classList.remove("active");
}

const Navbar = () => {
  return (
    <div id="main-nav">
      <div className="container">

        <div className="row">
          <div className="col-lg-1">
            <button className="hide-nav" onClick={closeNav}>
              <span></span>
            </button>
          </div>
        </div>
      
        <nav id="main-menu" className="row">
          <div className="col-lg-4 col-md-4 col-xs-12">

            <h4>Menu</h4>

            <ul className="page-menu">
              <li>
                <NavLink 
                  onClick={closeNav} 
                  to="/" 
                  className={({ isActive, isPending }) => 
                    isPending ? "pending" : isActive ? "active" : "" 
                  }>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink 
                  onClick={closeNav} 
                  to="/page" 
                  className={({ isActive, isPending }) => 
                    isPending ? "pending" : isActive ? "active" : "" 
                  }>
                  About
                </NavLink>
              </li>

              <li>
                <NavLink 
                  onClick={closeNav} 
                  to="/blog" 
                  className={({ isActive, isPending }) => 
                    isPending ? "pending" : isActive ? "active" : "" 
                  }>
                  Blog
                </NavLink>
              </li>

            </ul>
          </div>
        </nav>

      </div>
    </div>  
      
  );
};
  
export default Navbar;