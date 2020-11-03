import React from 'react';
import './Header.css';
import './Orange.css';
import './Download.css';
import { Box,Text, Image } from "theme-ui";


function Download() {
    return (
    <Box className="orange-container font-family" sx={{position:["fixed","static","static"], bottom:["0","",""], zIndex:["99","",""], padding: ["3% 4%", "3% 6%", "3% 8%"] }}>
        
            
                <Text sx={{fontSize:[20,28,36], textAlign:"center", color:"white"}}><strong>Getting started takes less than 5 minutes</strong></Text>

                
                    <Box sx={{textAlign:"center", marginTop:"2%"}}>
                        
                            
                                <a href="#"><Image src="appstore.png" alt="appstore-button"
                                sx={{ width: ["120px", "180px", "240px"], height: ["40px", "60px", "75px"], marginRight:"3%"}}></Image></a>
                            
                                <a href="#"><Image src="googleplay.png" alt="googleplay-button"
                                sx={{ width: ["120px", "180px", "240px"], height: ["40px", "60px", "75px"]}}></Image></a>
                            
                    </Box>
           
        
    </Box>
    )
}

export default Download

/*function Illustration() {
    return (
        <img src="" />
    )
}

// 1, 2, 3
<Grid columns={["1fr", "1fr 2fr", null]}>
    <Illustration />
    <Description />
</Grid>
*/
