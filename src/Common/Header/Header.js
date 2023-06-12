import React from 'react';

import { Link } from 'react-router-dom';
import logo from '../../images/Header/logo.png';
import './Header.css';


const header = () => {
  return (
    
    <div className='mainheader'>
 
    <header>
    <div className="container">
        <div className="header-top pt-4 position-relative">
            <div className="header-logo">
            <Link to="/"><img src={logo} alt="" title="" /></Link>
            </div>
            <div className="header-menu">
                <input type="checkbox" id="active" />
                    <label for="active" className="menu-btn"></label>
                    <label for="active" className="close"></label>
                    <span className="menu">Menu</span>
                    <div className="wrapper">
                        
                        <ul>
                            <li className="m-about">
                              <a href="/about">About</a> 
                              <div className="menu-img"></div>
                            </li>
                            <li className="m-services">
                            <a href="/services">Services</a> 
                                <div className="menu-img"></div>
                            </li>
                            <li className="m-works">
                            <a href="/works">Works</a> 
                                <div className="menu-img"></div>
                            </li>
                            <li className="m-blog">
                            <a href="/blog">Blog</a> 
                                <div className="menu-img"></div>
                            </li>
                            <li className="m-contact">
                            <a href="/contact">Contact</a> 
                                <div className="menu-img"></div>
                            </li>
                        </ul>
                        
                </div>
            </div>
        </div>
        
    </div>
    </header>
    </div>


    
  )
}

export default header