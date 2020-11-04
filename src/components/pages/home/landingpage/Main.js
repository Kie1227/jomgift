import React from 'react';
import '../landingpage/Main.css';
import '../../../Header.css';
import PaddingContainer from '../../../utilities/PaddingContainer';
import { Box, Text, Button, Image } from "theme-ui";

function Main() {

    return (
            <PaddingContainer className="navbar">

                    <Box >

                    <Image src="new_delivery_man.png" alt="delivery-man"
                        sx={{ width: ["280px", "350px", "580px"], height: ["200px", "270px", "420px"], float:["","right","right"]}}></Image>
                        
                        <Box >
                            <Text sx={{ fontSize: [18, 24, 36], margin: ["4px 0", "5px 0", "8px 0"] }}>
                                <strong>Save your precious time</strong><br />
                                <strong>We deliver the package with care for you</strong>
                            </Text>

                            <Text sx={{ padding: ["15px 0", "20px 0", "25px 0px"], width: ["", "45%", "50%"], fontSize: [12, 24, 28] }}>
                                Ridiculus nibh ad mi magnis in Porta penatibus
                                vel. Dapibus ultricies pellentesque duis habitant
                                magna auctor.
                            </Text>

                            <Button sx={{
                                padding: ["8px 35px", "8px 80px", "10px 90px"], fontSize: [14, 16, 24], bg: "#FD9F13",
                                border: "0", borderRadius: "10px", color: "#fff", margin:["3% 0"]
                            }}>Discover Menu</Button>
                        </Box>

                    
                        
                    
                    </Box>
                    

                





            </PaddingContainer>
            
            
    )
}

export default Main

/**
 *  1. install
 *  2. check responsiveness
 *  3. div -> box
 *  4.
 */