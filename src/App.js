import React from 'react';
import './App.css';
import Header from './components/header/header';
import About from './components/about/about';
import Footer from './components/footer/footer';

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <About></About>
      <Footer />
    </React.Fragment>
  );
}

export default App;
