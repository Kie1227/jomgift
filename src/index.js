import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Products from './components/Products';
import Question from './components/Question';
import Support from './components/Support';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Services from './components/Services';


const header = (
    <Header/>
)

const main = (
    <main>
        <div>
            <Route exact path="/" component={() => <Home/>} />
            <Route exact path="/Products" component={() => <Products/>} />
            <Route exact path="/Services" component={() => <Services/>} />
            <Route exact path="/About" component={() => <Question/>} />
            <Route exact path="/ContactUs" component={() => <Support/>} />
        </div>
    </main>
)

const footer = (
    <Footer/>
)

const web = (
    <div>
        <Router>
            {header}
            {main}
            {footer}
        </Router>
    </div>
)

const rootElement = document.getElementById('root')

ReactDOM.render(web, rootElement)
