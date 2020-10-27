import React from 'react';
import './Navbar.css';
import './Question.css';
import Collapsible from 'react-collapsible';



function Question() {

    

    return (
        <div className='padding-container font-family'>
            <div className='question-header'>
                <p><strong>Frequently Asked Questions</strong></p>
            </div>

            <div className='question-container'>
                    
            <Collapsible open={true} className='openclose-container' trigger="1. What is JomGift?" ><i className="fas fa-minus" style={{float:"right"}}></i>
                        <div className='content-display'>
                            <p>fef effbgv hiohiugipu gygypigyu. yftufuofuyfdfg 
                            gyufufof f67ogdawh, yugeyocgciyg gyugyuogcaig 
                            huifwehifugwp.</p>
                        </div>
                    </Collapsible>
                
                    <Collapsible className='openclose-container' trigger="2. What is JomGift?" ><i className="fas fa-minus" style={{float:"right"}}></i>
                        <div className='content'>
                            <p>fef effbgv hiohiugipu gygypigyu. yftufuofuyfdfg 
                            gyufufof f67ogdawh, yugeyocgciyg gyugyuogcaig 
                            huifwehifugwp.</p>
                        </div>
                    </Collapsible>

                    <Collapsible className='openclose-container' trigger="3. What is JomGift?" ><i className="fas fa-minus" style={{float:"right"}}></i>
                        <div className='content'>
                            <p>fef effbgv hiohiugipu gygypigyu. yftufuofuyfdfg 
                            gyufufof f67ogdawh, yugeyocgciyg gyugyuogcaig 
                            huifwehifugwp.</p>
                        </div>
                    </Collapsible>

                    <Collapsible className='openclose-container' trigger="4. What is JomGift?" ><i className="fas fa-minus" style={{float:"right"}}></i>
                        <div className='content'>
                            <p>fef effbgv hiohiugipu gygypigyu. yftufuofuyfdfg 
                            gyufufof f67ogdawh, yugeyocgciyg gyugyuogcaig 
                            huifwehifugwp.</p>
                        </div>
                    </Collapsible>

                    <Collapsible className='openclose-container' trigger="5. What is JomGift?" ><i className="fas fa-minus" style={{float:"right"}}></i>
                        <div className='content'>
                            <p>fef effbgv hiohiugipu gygypigyu. yftufuofuyfdfg 
                            gyufufof f67ogdawh, yugeyocgciyg gyugyuogcaig 
                            huifwehifugwp.</p>
                        </div>
                    </Collapsible>

            </div>
            

        </div>

        
        
    )


}

export default Question
