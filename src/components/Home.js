import React from 'react';
import Header from './Header';
import Main from './pages/home/landingpage/Main';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Orange from './pages/home/orange/Orange';
import Services from './pages/home/services/Services';
import Download from './pages/home/download/Download';
import Question from './pages/home/question/Question';
import Support from './pages/home/support/Support';
import Footer from './Footer';
import Products from './pages/home/product/Products';



function Home() {

  return (
    <Router>
      
      <Main/>
      <Products/>
      <Orange/>
      <Services/>
      <Question/>
      <Download/>
      <Support/>
     
      <Switch>
        <Route path='/' exact/>
      </Switch>
    </Router>
  );
}

export default Home;