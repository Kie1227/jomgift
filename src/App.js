import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Orange from './components/Orange';
import Services from './components/Services';
import Download from './components/Download';
import Question from './components/Question';
import Support from './components/Support';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
      <Navbar/>
      <Main/>
      <Orange/>
      <Services/>
      <Question/>
      <Download/>
      <Support/>
      <Footer/>
      <Switch>
        <Route path='/' exact/>
      </Switch>
    </Router>
  );
}

export default App;