import React, { Component } from 'react';
import './App.scss';
import { Header } from './Header/Header';
import { Nav } from './Nav/Nav';
import { AboutMe } from './AboutMe/AboutMe';
import { Skills } from './Skills/Skills';
import { Portfolio } from './Portfolio/Portfolio';
import { Contact } from './Contact/Contact';
import { Footer } from './Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <AboutMe />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
