import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
//CSS 
import './Header.css';
import '../App.css';
import './Button.css';
//Ant Design
import "antd/dist/antd.css";
import { Row, Col, Menu, Layout } from 'antd';
//Theme UI
import PaddingContainer from './utilities/PaddingContainer';
import { Box, Grid, Image } from "theme-ui";

const { SubMenu } = Menu;



const Header = () => {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
  }, []);

 

  return (
    <PaddingContainer className="navbar">


      <Row>
        {/* logo */}

        <Col className="imgBar" xs={{ span: 24 }} lg={{ span: 8 }}>

          <Link to="/"><Image src="jomgift_logo.png" alt="Jomgift-logo"
            sx={{ width: ["60px", "80px", "90px"], height: ["60px", "80px", "90px"] }}></Image></Link>

        </Col>


        {/* navbar */}
        <Col className="menuBar" span={16}>
          <div className="menuBarInner">
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>


            <ul className={click ? 'headerUl nav-menu active' : 'headerUl nav-menu'}>
              <li><Link to="/" className='nav-links' onClick={closeMobileMenu}>Home</Link></li>


              <li><Link to="Products" className='nav-links' onClick={closeMobileMenu}>Products</Link>


                <div><Link to="Products" onClick={closeMobileMenu} className='nav-links sec-nav-links'>Bestseller</Link>
                  <Link to="Products" onClick={closeMobileMenu} className='nav-links sec-nav-links'>Promo</Link>
                  <Link to="Products" onClick={closeMobileMenu} className='nav-links sec-nav-links'>Brand Deal</Link>
                  <Link to="Products" onClick={closeMobileMenu} className='nav-links sec-nav-links'>New Arrival</Link>
                  <Link to="Products" onClick={closeMobileMenu} className='nav-links sec-nav-links'>Pastries</Link>
                  <Link to="Products" onClick={closeMobileMenu} className='nav-links sec-nav-links'>Sesame Oil</Link>
                  <Link to="Products" onClick={closeMobileMenu} className='nav-links sec-nav-links'>Drink</Link>
                  <Link to="Products" onClick={closeMobileMenu} className='nav-links sec-nav-links'>Nyonya</Link></div></li>

              {/* <div className='header-sec-nav'><Link className='header-sec-nav-item'>#</Link></div> */}

              <li><Link to="About" onClick={closeMobileMenu} className='nav-links' onClick={closeMobileMenu}>About</Link>
                <div><Link to="Services" onClick={closeMobileMenu} className='nav-links sec-nav-links'>Our Services</Link>
                  <Link to="Products" onClick={closeMobileMenu} className='nav-links sec-nav-links'>Get the App</Link>
                  <Link to="About" onClick={closeMobileMenu} className='nav-links sec-nav-links'>FAQ</Link></div></li>

              <li><Link to="ContactUs" className='nav-links' onClick={closeMobileMenu}>Contact Us</Link></li>



            </ul>

          </div>
        </Col>
      </Row>



    </PaddingContainer>
  )
}

export default Header;


{/* <Col className="menuBar" span={16}>
<div className="menuBarInner">
    <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
    </div>


    <ul className={click ? 'headerUl nav-menu active' : 'headerUl nav-menu'}>
    <li><Link to="/" className='nav-links' onClick={closeMobileMenu}>Home</Link></li>
    
    <li><Link to="Products" className='nav-links' onClick={closeMobileMenu}>Products</Link>
      
      <div><Link to="Products" onClick={closeMobileMenu} className='nav-links sec-nav-links'>Bestseller</Link>
      <Link to="Products" onClick={closeMobileMenu} className='nav-links sec-nav-links'>Promo</Link>
      <Link to="Products" onClick={closeMobileMenu} className='nav-links sec-nav-links'>Brand Deal</Link>
      <Link to="Products" onClick={closeMobileMenu} className='nav-links sec-nav-links'>New Arrival</Link>
      <Link to="Products" onClick={closeMobileMenu} className='nav-links sec-nav-links'>Pastries</Link>
      <Link to="Products" onClick={closeMobileMenu} className='nav-links sec-nav-links'>Sesame Oil</Link>
      <Link to="Products" onClick={closeMobileMenu} className='nav-links sec-nav-links'>Drink</Link>
      <Link to="Products" onClick={closeMobileMenu} className='nav-links sec-nav-links'>Nyonya</Link></div></li>

    <li><Link to="About" onClick={closeMobileMenu} className='nav-links' onClick={closeMobileMenu}>About</Link>
    <div><Link to="Services" onClick={closeMobileMenu} className='nav-links sec-nav-links'>Our Services</Link>
      <Link to="Products" onClick={closeMobileMenu} className='nav-links sec-nav-links'>Get the App</Link>  
      <Link to="About" onClick={closeMobileMenu} className='nav-links sec-nav-links'>FAQ</Link></div></li>

    <li><Link to="ContactUs" className='nav-links' onClick={closeMobileMenu}>Contact Us</Link></li>    
     
    
    
</ul> 
    
</div> 
</Col> */}