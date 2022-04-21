import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className='example-square bg-info shadow-1-strong'>
      <footer className="footer text-white">
        <div className="container">
          <footer className="py-5">
            <div className="row">
              <div className="col-3">
                <h4>Supplements By Khalil </h4>
                
              </div>

              <div className="col-2">
                <h5> Service Client: </h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <NavLink to="#" className="nav-link p-0 text-white">
                    216 95 001 999
                    </NavLink>
                  </li>
                  <li className="nav-item mb-2">
                    <NavLink to="#" className="nav-link p-0 text-white">
                   216 99 943
                    </NavLink>
                  </li>
                 
            
                </ul>
              </div>

              <div className="col-2">
                <h5>Location Shop </h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <NavLink to="#" className="nav-link p-0 text-white">
                   Rue tej - Mahdia 
                    </NavLink>
                  </li>
                
                
                </ul>
              </div>

              <div className="col-4 offset-1">
                <form>
                <div className='bg-image hover-overlay' style={{ maxWidth: '10rem' }}>
      <img src="https://fitnish.com/wp-content/uploads/2014/03/laz4.jpg"className='img-fluid rounded' />
      <a href='#!'>
        <div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
      </a>
    </div>
                  

                </form>
              </div>
            </div>

            <div className="d-flex justify-content-between pt-4 mt-4 border-top">
              <p>© 2022 Khalil Baklouti , Inc. All rights reserved.</p>
              <ul className="list-unstyled d-flex">
                <li className="ms-3">
                  <NavLink className="link-light" to="#">
                    <i className="fa fa-facebook fa-2x"></i>
                  </NavLink>
                </li>
                <li className="ms-3">
                  <NavLink className="link-light" to="#">
                    <i className="fa fa-instagram fa-2x"></i>
                  </NavLink>
                </li>
                <li className="ms-3">
                  <NavLink className="link-light" to="#">
                    <i className="fa fa-twitter fa-2x"></i>
                  </NavLink>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </footer>
    </div>
  );
};

export default Footer;