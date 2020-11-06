import React from 'react';
import '../services/Services.css';
import '../../../Header.css'
import { Row, Col } from 'antd';
import ServicesPadding from '../../../utilities/ServicesPadding';
import { Box, Text, Image } from "theme-ui";

function Services() {
    return (
        <ServicesPadding className="services-container">
            <Text sx={{ fontSize: [14, 32, 40], textAlign: "center", paddingBottom:["2%","2%","3%"], color:"#403f3d", paddingTop:["2%","2%","0%"]}}>
                <strong>Our Services</strong>
            </Text>

            <Box>
                <Row>
                    {/* image */}
                    <Col xs={{ span: 24}} md={{ span: 10 }} lg={{ span: 8 }}>
                        <picture>
                            <source media='(min-width:900px)' srcSet='deliverymann.png'></source>
                            
                                <img src='transparent_deliveryman_tabletV2.png' alt='delivery man' className='image-padding'></img>
                           
                        </picture>
                    </Col>

                    {/* content */}
                    <Col xs={{ span: 24 }} md={{ span: 14 }} lg={{ span: 16 }}>
                        <Row>
                            <Col span={12} md={{ span: 12 }} lg={{ span: 12 }}>
                                <Box sx={{backgroundColor:"white", border:"2px solid", borderRadius:"20px", borderColor:"#FADBA2",
                                        boxShadow:"3px 3px rgb(219,219,219)", marginBottom:["20px","30px","40px"],
                                        padding:["15px","20px","30px"], width:["90%","","80%"], height:["90%"]}}>
                                    
                                    <Image src="services_logo_1.png" alt="price-tag"
                                    sx={{ width: ["40px", "70px", "100px"], height: ["40px", "70px", "100px"]}}></Image>

                                    <Text sx={{fontSize:[12,20,24], padding:["8px 0px","10px 0px","15px 0px"]}}><strong>Discount System</strong></Text>
                                    <Text sx={{fontSize:[10,18,22]}}>We have a reward system for our customers.</Text>
                                
                                </Box>
                            </Col>

                            <Col span={12} md={{ span: 12 }} lg={{ span: 12 }}>
                                <Box sx={{backgroundColor:"white", border:"2px solid", borderRadius:"20px", borderColor:"#FADBA2",
                                        boxShadow:"3px 3px rgb(219,219,219)", marginBottom:["20px","30px","40px"],
                                        padding:["15px","20px","30px"], width:["90%","","80%"], height:["90%"]}}>
                                    
                                    <Image src="services_logo_2.png" alt="price-tag"
                                    sx={{ width: ["40px", "70px", "100px"], height: ["40px", "70px", "100px"]}}></Image>

                                    <Text sx={{fontSize:[12,20,24], padding:["8px 0px","10px 0px","15px 0px"]}}><strong>Express Delivery</strong></Text>
                                    <Text sx={{fontSize:[10,18,22]}}>We will deliver to your doorstep  ASAP.</Text>
                                
                                </Box>
                            </Col>

                            <Col span={12} md={{ span: 12 }} lg={{ span: 12 }}>
                                <Box sx={{backgroundColor:"white", border:"2px solid", borderRadius:"20px", borderColor:"#FADBA2",
                                        boxShadow:"3px 3px rgb(219,219,219)", marginBottom:["20px","30px","40px"],
                                        padding:["15px","20px","30px"], width:["90%","","80%"], height:["90%"]}}>
                                    
                                    <Image src="services_logo_3.png" alt="price-tag"
                                    sx={{ width: ["40px", "70px", "100px"], height: ["40px", "70px", "100px"]}}></Image>

                                    <Text sx={{fontSize:[12,20,24], padding:["8px 0px","10px 0px","15px 0px"]}}><strong>30+ Suppliers</strong></Text>
                                    <Text sx={{fontSize:[10,18,22]}}>We have wide variety of more than 30+ suppliers.</Text>
                                
                                </Box>
                            </Col>

                            <Col span={12} md={{ span: 12 }} lg={{ span: 12 }}>
                                <Box sx={{backgroundColor:"white", border:"2px solid", borderRadius:"20px", borderColor:"#FADBA2",
                                        boxShadow:"3px 3px rgb(219,219,219)", marginBottom:["20px","30px","40px"],
                                        padding:["15px","20px","30px"], width:["90%","","80%"], height:["90%"]}}>
                                    
                                    <Image src="services_logo_4.png" alt="price-tag"
                                    sx={{ width: ["40px", "70px", "100px"], height: ["40px", "70px", "100px"]}}></Image>

                                    <Text sx={{fontSize:[12,20,24], padding:["8px 0px","10px 0px","15px 0px"]}}><strong>Excellent Quality</strong></Text>
                                    <Text sx={{fontSize:[10,18,22]}}>We have our system to ensure quality product.</Text>
                                
                                </Box>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </Box>
        </ServicesPadding>
    )
}

export default Services
