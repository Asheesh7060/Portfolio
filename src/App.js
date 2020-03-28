import React from 'react';
import './App.css';

import Header from './components/header/header';
import About from './components/about/about';

function App() {
  return (
    <React.Fragment>
      <Header />
      <About />
    </React.Fragment>
  );
}

export default App;
