import React from 'react';
import Header from './Header';
import Main from './Main';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Orange from './Orange';
import Services from './Services';
import Download from './Download';
import Question from './Question';
import Support from './Support';
import Footer from './Footer';
import Products from './Products';



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