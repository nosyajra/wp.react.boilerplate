import React from "react";
import {Link } from 'react-router-dom';

import '../scss/components/_footer.scss';

const Footer = () => {
  return (
    <footer>
      <div id="info">
        <div className="container">
        
          <h2>Footer</h2>

        </div>
      </div> 

      <div className="copyright">
        <div className="container">
          <p>&copy; 2023. Site Name. All Rights Reserved | <Link to="/terms-of-service">Terms Of Service</Link> | <Link to="/privacy-policy">Privacy Policy</Link>.</p> 
        </div>   
      </div> 
    </footer>    
  );
};
  
export default Footer;