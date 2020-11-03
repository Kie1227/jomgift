import React from 'react'
import './Header.css'
import './Products.css';
import { Row, Col } from 'antd';
import PaddingContainer from './utilities/PaddingContainer';
import { Box,Text, Image } from "theme-ui";

function Products() {
    return (
        <PaddingContainer className="services-container">
            <Text sx={{ fontSize: [24, 32, 40], textAlign: "center", paddingBottom:["2%","2%","3%"], color:"#403f3d"}}>
                    <strong>Our Products</strong>
                </Text>

            <Box sx={{bg:"white", borderRadius:"30px", textAlign:"center", padding:["1.5%"], color:"#403f3d"}}>
                <Row>
                    <Col span={3}>
                        <Text sx={{fontSize:[14,16,24]}}>Bestseller</Text>
                    </Col>

                    <Col span={3}>
                        <Text sx={{fontSize:[14,16,24]}}>Promo</Text>
                    </Col>

                    <Col span={3}>
                        <Text sx={{fontSize:[14,16,24]}}>Brand Deal</Text>
                    </Col>

                    <Col span={3}>
                        <Text sx={{fontSize:[14,16,24]}}>New Arrival</Text>
                    </Col>

                    <Col span={3}>
                        <Text sx={{fontSize:[14,16,24]}}>Pastries</Text>
                    </Col>

                    <Col span={3}>
                        <Text sx={{fontSize:[14,16,24]}}>Sesame Oil</Text>
                    </Col>

                    <Col span={3}>
                        <Text sx={{fontSize:[14,16,24]}}>Drinks</Text>
                    </Col>

                    <Col span={3}>
                        <Text sx={{fontSize:[14,16,24]}}>Nyoya</Text>  
                    </Col>
                </Row>
            </Box>


        </PaddingContainer>
    )
}

export default Products
