import React from 'react';
import { ThemeProvider } from 'theme-ui';
import './App.css';
import Home from './components/Home.js';
import { theme } from "./theme"
function App() {

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;