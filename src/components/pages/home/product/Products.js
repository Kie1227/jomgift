import React, { useState, useEffect } from 'react'
import '../../../Header.css'
import '../product/Products.css';
import { Row, Col } from 'antd';
import PaddingContainer from '../../../utilities/PaddingContainer';
import { Box, Text, Image } from "theme-ui";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import { Tabs } from "@feuer/react-tabs";

import ProductService from "../../../../network/services/product";

function Products() {
    const [items, setItems] = useState([])
    const init = async () => {
        try {
            const result = await ProductService.getAll()
            console.log(result.data)
            setItems(result.data.products)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        init()
    }, [])

    return (
        <>
            <PaddingContainer className="services-container">
                <Text sx={{ fontSize: [14, 32, 40], textAlign: "center", paddingBottom: ["2%", "2%", "3%"], color: "#403f3d" }}>
                    <strong>Our Products</strong>
                </Text>

                <Box sx={{ bg: "white", borderRadius: "30px", textAlign: "center", padding: ["1.5%"], color: "#403f3d", display:["none","block","block"] }}>
                    <Row>
                        <Col className='nav-products' span={3}>
                            <Text  sx={{ fontSize: [14, 16, 24] }} className='nav-item' >Bestseller</Text>
                        </Col>

                        <Col className='nav-products' span={3}>
                            <Text sx={{ fontSize: [14, 16, 24] }} className='nav-item'>Promo</Text>
                        </Col>

                        <Col className='nav-products' span={3}>
                            <Text sx={{ fontSize: [14, 16, 24] }}>Brand Deal</Text>
                        </Col>

                        <Col className='nav-products' span={3}>
                            <Text sx={{ fontSize: [14, 16, 24] }}>New Arrival</Text>
                        </Col>

                        <Col className='nav-products' span={3}>
                            <Text sx={{ fontSize: [14, 16, 24] }}>Pastries</Text>
                        </Col>

                        <Col className='nav-products' span={3}>
                            <Text sx={{ fontSize: [14, 16, 24] }}>Sesame Oil</Text>
                        </Col>

                        <Col className='nav-products' span={3}>
                            <Text sx={{ fontSize: [14, 16, 24] }}>Drinks</Text>
                        </Col>

                        <Col className='nav-products' span={3}>
                            <Text sx={{ fontSize: [14, 16, 24] }}>Nyoya</Text>
                        </Col>
                    </Row>
                </Box>

                <div className='product-padding'>
                                {
                                items?.length > 0 && items.map((item) => {
                                    return <>
                                    {/* <ProductCard product={item} />  */}
                                    <div className='item-container'>
                                        <Card style={{height:["auto"]}}>
                                            <CardImg className='item-img' src={item.image.src} alt="item-1" />
                                            <CardBody style={{padding:["4%"]}}>
                                                <CardTitle className='cardtitle'>{item.title}</CardTitle>
                                                <CardText className='cardsubtitle'>gdg huihiuhipu uibfeiueac efaec aggbf</CardText>
                                                <CardText className='price'>RM10-19.90</CardText>
                                                <Button className='add-cart'>Add to Cart</Button>
                                            </CardBody>
                                        </Card>
                                        
                                    </div></>
                                        }
                                )}
                            </div>
                

            

                

            </PaddingContainer>    
        </>
    )
}

export default Products

