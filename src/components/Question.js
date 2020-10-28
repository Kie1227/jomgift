import React from 'react';
import './Navbar.css';
import './Question.css';
import Collapsible from 'react-collapsible';
import PaddingContainer from './utilities/PaddingContainer';
import { Box,Text } from "theme-ui";



function Question() {

    

    return (
        <PaddingContainer>
            <Text sx={{ fontSize: [24, 32, 40], textAlign: "center", paddingBottom:["2%","2%","3%"] }}>
                <strong>Frequently Asked Questions</strong>
            </Text>

            <Box sx={{padding:["0 3%","0 6%","0 8%"]}}>
                    
            <Collapsible open={true} className='openclose-container' trigger="1. What is JomGift?" ><i className="fas fa-minus" style={{float:"right"}}></i>
                        <Text sx={{fontSize:[18,24,28], color:"rgb(146,146,146)", paddingTop:["1%",null,"2%"], borderBottom:"1px solid rgb(196,196,196)", paddingBottom:["2%"]}}>
                            fef effbgv hiohiugipu gygypigyu. yftufuofuyfdfg 
                            gyufufof f67ogdawh, yugeyocgciyg gyugyuogcaig 
                            huifwehifugwp.
                        </Text>
                    </Collapsible>
                
                    <Collapsible className='openclose-container' trigger="2. What is JomGift?" ><i className="fas fa-minus" style={{float:"right"}}></i>
                        <Text sx={{fontSize:[18,24,28], color:"rgb(146,146,146)", paddingTop:["1%",null,"2%"], borderBottom:"1px solid rgb(196,196,196)", paddingBottom:["2%"]}}>
                            fef effbgv hiohiugipu gygypigyu. yftufuofuyfdfg 
                            gyufufof f67ogdawh, yugeyocgciyg gyugyuogcaig 
                            huifwehifugwp.
                        </Text>
                    </Collapsible>

                    <Collapsible className='openclose-container' trigger="3. What is JomGift?" ><i className="fas fa-minus" style={{float:"right"}}></i>
                        <Text sx={{fontSize:[18,24,28], color:"rgb(146,146,146)", paddingTop:["1%",null,"2%"], borderBottom:"1px solid rgb(196,196,196)", paddingBottom:["2%"]}}>
                            fef effbgv hiohiugipu gygypigyu. yftufuofuyfdfg 
                            gyufufof f67ogdawh, yugeyocgciyg gyugyuogcaig 
                            huifwehifugwp.
                        </Text>
                    </Collapsible>

                    <Collapsible className='openclose-container' trigger="4. What is JomGift?" ><i className="fas fa-minus" style={{float:"right"}}></i>
                        <Text sx={{fontSize:[18,24,28], color:"rgb(146,146,146)", paddingTop:["1%",null,"2%"], borderBottom:"1px solid rgb(196,196,196)", paddingBottom:["2%"]}}>
                            fef effbgv hiohiugipu gygypigyu. yftufuofuyfdfg 
                            gyufufof f67ogdawh, yugeyocgciyg gyugyuogcaig 
                            huifwehifugwp.
                        </Text>
                    </Collapsible>

                    <Collapsible className='openclose-container' trigger="5. What is JomGift?" ><i className="fas fa-minus" style={{float:"right"}}></i>
                        <Text sx={{fontSize:[18,24,28], color:"rgb(146,146,146)", paddingTop:["1%",null,"2%"], borderBottom:"1px solid rgb(196,196,196)", paddingBottom:["2%"]}}>
                            fef effbgv hiohiugipu gygypigyu. yftufuofuyfdfg 
                            gyufufof f67ogdawh, yugeyocgciyg gyugyuogcaig 
                            huifwehifugwp.
                        </Text>
                    </Collapsible>

            </Box>
            

        </PaddingContainer>

        
        
    )


}

export default Question
