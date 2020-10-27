import React from 'react';
import './Orange.css';
import './Navbar.css';
import PaddingContainer from './utilities/PaddingContainer';
import { Box,Text } from "theme-ui";



function Orange() {

    return (
        <PaddingContainer className="orange-container">
            <Box sx={{textAlign:"center", marginTop:["2%","",""], color:"white"}}>
                <Text sx={{fontSize:[20,28,36]}}><strong>Purchase Malaysia’s Local Product Online</strong></Text>
                    
                <Text  sx={{fontSize:[14,18,24],marginTop:"1%"}}>Be part of the JomGift community, and share this app with your friends and family</Text>
            </Box>
        </PaddingContainer>
    )
}

export default Orange
