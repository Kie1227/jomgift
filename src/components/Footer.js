import React from 'react';
import './Header.css'
import './Footer.css';
import { Row, Col } from 'antd';
import { Link } from "react-router-dom";
import PaddingContainer from './utilities/PaddingContainer';
import { Box, Text, Image } from "theme-ui";

const scroll = () => {
    window.scrollTo(0,0);
}

export default function Footer() {
    return (
        <PaddingContainer className='footer-container'>
            <div className='upper-footer'>
                <Row>
                    <Col xs={{ span: 24 }} md={{ span: 8 }} lg={{ span: 8 }}>
                        <Box sx={{ marginBottom: ["10%", null, "7%"] }}>
                            <Text sx={{ fontSize: [16, 20, 26], marginBottom: ["3%", "5%", "8%"] }}>Products</Text>
                            <Text sx={{ fontSize: [12, 14, 20], lineHeight: [2] }}>
                            <Link to="Products" className='footer-hover' onClick={scroll}>Bestseller</Link>
                            <br /><Link to="Products" className='footer-hover' onClick={scroll}>Promo</Link>
                            <br /><Link to="Products" className='footer-hover' onClick={scroll}>Brand Deal</Link>
                            <br /><Link to="Products" className='footer-hover' onClick={scroll}>New Arrival</Link>
                            <br /><Link to="Products" className='footer-hover' onClick={scroll}>Pastries</Link>
                            <br /><Link to="Products" className='footer-hover' onClick={scroll}>Sesame Oil</Link>
                            <br /><Link to="Products" className='footer-hover' onClick={scroll}>Drink</Link>
                            <br /><Link to="Products" className='footer-hover' onClick={scroll}>Nyonya</Link></Text>
                        </Box>
                    </Col>

                    <Col xs={{ span: 24 }} md={{ span: 8 }} lg={{ span: 8 }}>
                        <Box sx={{ marginBottom: ["10%", null, "7%"] }}>
                            <Text sx={{ fontSize: [16, 20, 26], marginBottom: ["3%", "5%", "8%"] }}>About JomGift</Text>
                            <Text sx={{ fontSize: [12, 14, 20], lineHeight: [2] }}>
                                <Link to="Services" className='footer-hover' onClick={scroll}>Our Services</Link>
                                <br /><Link to="" className='footer-hover' onClick={scroll}>Get The App</Link>
                            <br /><Link to="About" className='footer-hover' onClick={scroll}>FAQ</Link>
                            <br /><Link to="ContactUs" className='footer-hover' onClick={scroll}>Contact Us</Link></Text>
                        </Box>
                    </Col>

                    {/* <Button variant="primaryBrand" color="black"></Button> */}

                    <Col xs={{ span: 24 }} md={{ span: 8 }} lg={{ span: 8 }}>
                        <Box sx={{ marginBottom: ["10%", null, "7%"] }}>
                            <Text sx={{ fontSize: [16, 20, 26], marginBottom: ["3%", "5%", "8%"] }}>Follow Us</Text>

                            <Text sx={{ fontSize: [12, 14, 20], lineHeight: [2] }}>

                                <Image src="facebook_icon.png" alt="facebook-icon" 
                                sx={{ width: ["20px", "25px", "31px"], height: ["20px", "25px", "31px"], marginRight: ["2%"] }}></Image>Facebook

                                <br /><Image src="instagram_icon.png" alt="instagram-icon"
                                    sx={{ width: ["20px", "25px", "31px"], height: ["20px", "25px", "31px"], marginRight: ["2%"] }}></Image>Instagram

                                <br /><Image src="twitter_icon.png" alt="twitter-icon"
                                    sx={{ width: ["20px", "25px", "31px"], height: ["20px", "25px", "31px"], marginRight: ["2%"] }}></Image>Twitter</Text>
                        </Box>
                    </Col>
                </Row>

            </div>

            <Box sx={{ paddingTop: ["7%", "5%", "2%"], paddingLeft: ["5%", "3%", "2%"], paddingBottom:["100px","0px","0px"] }}>
                <Row>
                    <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>

                        <a href="#"><Image src="jomgift_footer.png" alt="jomgift-logo"
                            sx={{ width: ["60px", "90px", "101px"], height: ["60px", "90px", "101px"] }}></Image></a>
                        <Text sx={{ fontSize: [12, 14, 20], marginTop: ["5%", null, "3%"], marginBottom: ["0%"], paddingBottom: ["3%", "4%", "5%"], color: "gray" }}>Copyright © 2020 JomGift. All Rights Reserved</Text>
                    </Col>

                    <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>

                        <Row>
                            <Col xs={{ span: 10 }} md={{ span: 12 }} lg={{ span: 12 }}>
                                <a href="#"><Image src="appstore_footer.png" alt="appstore-button"
                                    sx={{ width: ["100px", "130px", "190px"], height: ["30px", "45px", "60px"], float: ["", "right", "right"] }}></Image></a>
                            </Col>

                            <Col xs={{ span: 10 }} md={{ span: 12 }} lg={{ span: 12 }}>
                                <a href="#"><Image src="googleplay_footer.png" alt="googleplay-button"
                                    sx={{ width: ["100px", "130px", "190px"], height: ["30px", "45px", "60px"], float: ["", "right", "right"] }}></Image></a>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Box>
        </PaddingContainer>
    )
}
