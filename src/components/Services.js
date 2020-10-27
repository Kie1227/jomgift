import React from 'react';
import './Services.css';
import './Navbar.css'
import { Row, Col } from 'antd';
import PaddingContainer from './utilities/PaddingContainer';
import { Box, Text, Image } from "theme-ui";

function Services() {
    return (
        <PaddingContainer className="services-container">
            <Text sx={{ fontSize: [28, 32, 40], textAlign: "center" }}>
                <strong>Our Services</strong>
            </Text>

            <Box>
                <Row>
                    {/* image */}
                    <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
                        <img src='deliverymann.png' alt='delivery man'></img>
                    </Col>

                    {/* content */}
                    <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 16 }}>
                        <Row>
                            <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
                                <div className='outer-box'>
                                    <div className='services-item'>
                                        <img src='services logo 1.png' alt='price-tag'></img>
                                        <h1><strong>Discount System</strong></h1>
                                        <p>We have a reward system for our customers.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
                                <div className='outer-box'>
                                    <div className='services-item'>
                                        <img src='services logo 2.png' alt='truck'></img>
                                        <h1><strong>Express Delivery</strong></h1>
                                        <p>We will deliver to your doorstep  ASAP.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
                                <div className='outer-box'>
                                    <div className='services-item'>
                                        <img src='services logo 3.png' alt='waiter'></img>
                                        <h1><strong>30+ Suppliers</strong></h1>
                                        <p>We have wide variety of more than 30+ suppliers.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
                                <div className='outer-box'>
                                    <div className='services-item'>
                                        <img src='services logo 4.png' alt='thumbnail'></img>
                                        <h1><strong>Excellent Quality</strong></h1>
                                        <p>We have our system to ensure quality product.</p>
                                    </div>
                                </div>
                            </Col></Row>
                    </Col>




                </Row>
            </Box>
        </PaddingContainer>
    )
}

export default Services
