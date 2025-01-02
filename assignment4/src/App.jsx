import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Buy from "./components/Buy";
import About from "./components/About";
import Support from "./components/Services";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import './App.css';



const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
     
      <Buy />
      
      
      <Gallery />
      <Reviews />
      <Support />
      <Contact />
      <About />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
