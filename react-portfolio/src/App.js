
import './App.css';
import styles from './components/styles/styles.module.css';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NavLinks from './components/Navigation';
import Projects from './components/pages/Projects';
import Resume from './components/pages/Resume';
import Footer from './components/pages/Footer';
import ContactForm from './components/Forms/ContactForm';
import { useEffect, useState } from 'react';
import Page from './components/CurrentPage';
import SocialMediaSidebar from './components/pages/Socials';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import React, { Background } from './components/Background';




function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  useEffect(() => {
    if (document) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

      document.head.appendChild(stylesheet);
    }
  }, []);

  return (
    <div className={styles.backgroundContainer}>
      {/* <p className={styles.backgroundContainer}></p> */}
      <p className={styles.clouds}></p>
      <p className={styles.twinkling}></p>
      <p className={styles.stars}></p>
      <p className={styles.img}></p>

      <div className=''>
        <SocialMediaSidebar />

        <Page currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <BrowserRouter>
          <Routes>
            
          </Routes>
        </BrowserRouter>
      </div>

    </div>
  );
};



export default App;
