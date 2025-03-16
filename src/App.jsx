import React from 'react';
//import { BrowserRouter,Routes,Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Cards from './components/Cards';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Certificates from './components/Certificates';
import Resume from './components/Resume'

const App = () => {
  return (
    <div className="App">

      
     
       
      {/* Navbar is always visible */}
      <Header />

      {/* Sections with IDs for smooth scrolling */}
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Cards />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="resume">
        <Resume />
      </section>

      <section id="certificate">
       <Certificates/>
      </section>



      <section id="blog">
       <Blog/>
      </section>

      <section id="contact">
        <Contact />
      </section>

     
        <Footer />
     
    </div>
  );
};

export default App;
