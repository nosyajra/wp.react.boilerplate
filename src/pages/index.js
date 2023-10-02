import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import {Helmet} from "react-helmet";
import axios from "axios";
import '../scss/pages/home.scss';

const Contact = () => {

  const [page, setPage] = useState([])

  const fetchPage = () => {
      // Using axios to fetch the page
      axios
        .get(global.config.WP_API_URI + "pages?slug=home&acf_format=standard&_embed")
        .then((res) => {
          // Saving the data to state
          setPage(res.data);
      });
  }

  // Calling the function on page load
  useEffect(() => {
      fetchPage()
  }, [])

  return (
    <>
      
      {page.map(({yoast_head_json}) => (
        <Helmet>
          <title>{yoast_head_json.title}</title>
          <meta name="description" content={yoast_head_json.description} />
        </Helmet>
      ))} 
      
      <main id="index">
        <div className="container">

              {page.map((content) => (
                <>
                  {/*<article dangerouslySetInnerHTML={{__html: content.content.rendered}}></article>*/}
                  <h1>Front Page</h1>
                  <p>Lorem ipsum dolor site amet.</p>
                </>
              ))}  

        </div>
      </main>
    </>
  );
};
  
export default Contact;