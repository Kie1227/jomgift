import React from 'react';
import './Navbar.css'
import './Footer.css';
import { Row, Col } from 'antd';

export default function Footer() {
    return (
        <div className='padding-container font-family footer-container'>
            <div className='upper-footer'>
                <Row className='first-selection'>
                    <Col span={6}>
                    <p>Products</p>
                    </Col>

                    <Col span={6}>
                    <p>AboutJomGift</p>
                    </Col>

                    <Col span={6}>
                    FollowUs
                    </Col>
                </Row>

                <Row className='second-selection'>
                    <Col span={6}>
                    <p>Bestseller</p>
                    <p>Promo</p>
                    <p>Brand Deal</p>
                    <p>New Arrival</p>
                    <p>Pastries</p>
                    <p>Sesame Oil</p>
                    <p>Drink</p>
                    <p>Nyoya</p>
                    </Col>

                    <Col span={6}>
                    <p>Our Services</p>
                    <p>Get The App</p>
                    <p>FAQ</p>
                    <p>Contact Us</p>
                    </Col>

                    <Col span={6}>
                    <div className='footer-icon'>
                        <p><img src='facebook icon.png' alt='facebook-icon'></img>Facebook</p>
                        <p><img src='instagram icon.png' alt='instagram-icon'></img>Instagram</p>
                        <p><img src='twitter icon.png' alt='twitter-icon'></img>Twitter</p>
                    </div>
                    </Col>
                    
                </Row>


            </div>

            <div className='lower-footer'>
            <Row>
                <Col span={12}>
                    <img src='jomgift footer.png' alt='jomgift-logo'></img>
                </Col>

                <Col span={12}>
                    <div className='right-footer-icon'>
                    <img src='googleplay footer.png' alt='googleplay-button'></img>
                    <img src='appstore footer.png' alt='appstore-button'></img>
                    
                    </div>
                </Col>
            </Row>
            <p>Copyright © 2020 JomGift. All Rights Reserved</p>
            </div>
        </div>
    )
}
