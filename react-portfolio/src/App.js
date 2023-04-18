
import './App.css';
import styles from './components/styles/styles.module.css';
import Welcome from './components/Header';
import NavLinks from './components/Navigation';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';
import ContactForm from './components/Forms/ContactForm';
import { useEffect } from 'react';

// import React, { Background } from './components/Background';




function App() {
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


      <h2>

        <NavLinks />
        <Welcome />
        <Projects />
        <Resume />
        <ContactForm />
        <Footer />
      </h2>
    </div>
  );
};



export default App;
