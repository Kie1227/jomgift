import React, { useState, useEffect } from 'react'
import '../../../Header.css'
import '../product/Products.css';
import PaddingContainer from '../../../utilities/PaddingContainer';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Text } from "theme-ui";
import { StyledTab, StyledTabs} from './StyleTab.js';
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

    const [value, setValue] = useState(0)

    return (
        <>
            <PaddingContainer className="services-container">
            <Text sx={{ fontSize: [14, 32, 40], textAlign: "center", paddingBottom: ["2%", "2%", "3%"], color: "#403f3d" }}>
                    <strong>Our Products</strong>
                </Text>
            <StyledTabs className='tab-container' centered value={value} onChange={(e, newValue) => setValue(newValue)}>
                <StyledTab id="id1" label="Bestseller"/>
                <StyledTab id="id2" label="Promo" />
                <StyledTab id="id3" label="Brand Deal" />
                <StyledTab id="id4" label="New Arrival" />
                <StyledTab id="id5" label="Pastries" />
                <StyledTab id="id6" label="Sesame Oil" />
                <StyledTab id="id7" label="Drink" />
                <StyledTab id="id8" label="Nyonya" />
            </StyledTabs>

            <div className='phone-title' id="title1"><p>Bestseller</p></div>

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