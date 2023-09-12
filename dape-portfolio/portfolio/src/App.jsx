import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Work from "./components/work/Work";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonals/Testimonals";
import Contact from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <NavBar/>
      <About/>
      <Experience/>
      <Work/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      
    </>
  );
}

export default App;
