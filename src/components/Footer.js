import React from 'react';
import './Header.css'
import './Footer.css';
import { Row, Col } from 'antd';
import PaddingContainer from './utilities/PaddingContainer';
import { Box,Text, Image, Link} from "theme-ui";

export default function Footer() {
    return (
        <PaddingContainer className='footer-container'>
            <div className='upper-footer'>
                <Row>
                    <Col xs={{span:24}} md={{span:8}} lg={{span:8}}>
                        <Box sx={{marginBottom:["10%",null,"7%"]}}> 
                            <Text sx={{fontSize:[16,20,26], marginBottom:["3%","5%","8%"]}}>Products</Text>
                            <Text sx={{fontSize:[12,14,20], lineHeight:[2]}}>
                                Bestseller
                            <br/>Promo
                            <br/>Brand Deal
                            <br/>New Arrival
                            <br/>Pastries
                            <br/>Sesame Oil
                            <br/>Drink
                            <br/>Nyoya</Text>
                        </Box>   
                    </Col>

                    <Col xs={{span:24}} md={{span:8}} lg={{span:8}}>
                        <Box sx={{marginBottom:["10%",null,"7%"]}}>
                            <Text sx={{fontSize:[16,20,26], marginBottom:["3%","5%","8%"]}}>About JomGift</Text>
                            <Text sx={{fontSize:[12,14,20], lineHeight:[2]}}>
                                Our Services
                            <br/>Get The App
                            <br/>FAQ
                            <br/>Contact Us</Text>
                        </Box>
                    </Col>

                    <Col xs={{span:24}} md={{span:8}} lg={{span:8}}>
                        <Box sx={{marginBottom:["10%",null,"7%"]}}>
                            <Text sx={{fontSize:[16,20,26], marginBottom:["3%","5%","8%"]}}>Follow Us</Text>
                                
                                <Text sx={{fontSize:[12,14,20], lineHeight:[2]}}>
                                
                                <Image src="facebook icon.png" alt="facebook-icon"
                                sx={{ width: ["20px", "25px", "31px"], height: ["20px", "25px", "31px"], marginRight:["2%"]}}></Image>Facebook
                                
                                <br/><Image src="instagram icon.png" alt="instagram-icon"
                                sx={{ width: ["20px", "25px", "31px"], height: ["20px", "25px", "31px"], marginRight:["2%"]}}></Image>Instagram
                                
                                <br/><Image src="twitter icon.png" alt="twitter-icon"
                                sx={{ width: ["20px", "25px", "31px"], height: ["20px", "25px", "31px"], marginRight:["2%"]}}></Image>Twitter</Text>
                       </Box> 
                    </Col>
                </Row>

            </div>

            <Box sx={{paddingTop:["7%", "5%", "2%"], paddingLeft:["5%","3%","2%"]}}>
            <Row>
                <Col xs={{span:24}} md={{span:12}} lg={{span:12}}>
                    
                    <a href="#"><Image src="jomgift footer.png" alt="jomgift-logo"
                    sx={{ width: ["60px", "90px", "101px"], height: ["60px", "90px", "101px"]}}></Image></a>
                    <Text sx={{fontSize:[12,14,20], marginTop:["5%",null,"3%"], marginBottom:["0%"], paddingBottom:["3%","4%","5%"], color:"gray"}}>Copyright © 2020 JomGift. All Rights Reserved</Text>
                </Col>

                <Col xs={{span:24}} md={{span:12}} lg={{span:12}}>
                    
                    <Row>
                        <Col xs={{span:10}} md={{span:12}} lg={{span:12}}>
                            <a href="#"><Image src="appstore footer.png" alt="appstore-button"
                            sx={{ width: ["100px", "130px", "190px"], height: ["30px", "45px", "60px"], float:["","right","right"]}}></Image></a>
                        </Col>

                        <Col xs={{span:10}} md={{span:12}} lg={{span:12}}>
                            <a href="#"><Image src="googleplay footer.png" alt="googleplay-button"
                            sx={{ width: ["100px", "130px", "190px"], height: ["30px", "45px", "60px"], float:["","right","right"]}}></Image></a>
                        </Col>
                    </Row>
                </Col>
            </Row>
            
            </Box>
        </PaddingContainer>
    )
}
