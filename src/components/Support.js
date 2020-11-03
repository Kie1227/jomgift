import React from 'react';
import './Header.css';
import './Support.css';
import PaddingContainer from './utilities/PaddingContainer';
import { Box, Text, Button } from "theme-ui";

function Support() {
    return (
        <PaddingContainer className="support-container">

            <Box sx={{marginY:["2%"]}}>
            <Text sx={{ fontSize: [28, 32, 40] ,textAlign: "center", color:"#403f3d"}}>
                <strong>Need Help? Looking For Support?</strong>
            </Text>
            
                        <Box sx={{ padding: ["0 3%", "0 5%", "0 8%"], textAlign: "center" }}>
                            <Text sx={{ fontSize: [20, 24, 32], margin:["2% 0"]}}>We are always ready to help. Please fill the form below to send us a message or
                                enquiry. Your enquiry will be forwarded to the concerned department. </Text>
                            <input type='text' className='support-item' placeholder='Name'></input>
                            <input type='email' className='support-item' placeholder='Email'></input>
                            <input type='phone' className='support-item' placeholder='Phone'></input>
                            <input type='text' className='support-item' placeholder='Subject'></input>
                            <textarea className='support-textarea' placeholder='Your messages...'></textarea>

                            <Button type='submit' sx={{textAlign: "center", padding:["5px 70px", "8px 110px", "10px 160px"], 
                            bg: "#FD9F13", borderRadius: "10px", fontSize:[20, 22, 26], marginTop:["3%"], border:[0], color:"#fff"
                            , cursor:'pointer'}}>
                                Submit
                            </Button>

                        </Box>
            </Box>
        </PaddingContainer>
    )
}

export default Support
