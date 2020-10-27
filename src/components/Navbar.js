import React from 'react';
import './Navbar.css';
import "antd/dist/antd.css";
import { Row, Col } from 'antd';
import PaddingContainer from './utilities/PaddingContainer';
import { Box, Grid, Image } from "theme-ui";




function Navbar(){

    return(
        <PaddingContainer className="navbar">
    
        
            <Box sx={{fontSize:[12,14,20]}}>       

                <Row>
                    <Col span={8}>
                    <Image src="jomgift logo.png" alt="jomgift-logo"
                        sx={{ width: ["60px", "80px", "110px"], height: ["60px", "80px", "110px"]}}></Image>
                    </Col>

                    <Col span={15}>
                        <Grid width={[ 128, null, 160 ]}>
                            <Box>Home</Box>
                            <Box>Products</Box>
                            <Box>About</Box>
                            <Box>Contact Us</Box>
                        </Grid>
                    </Col>
                </Row>
            </Box>  


    </PaddingContainer>
    )
}

export default Navbar