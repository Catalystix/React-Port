
import './App.css';
import styles from './components/styles/styles.module.css'
import Welcome from './components/Header'
import NavLinks from './components/Navigation'
import Projects from './components/Projects'
import Footer from './components/Footer'
// import React, { Background } from './components/Background';




function App() {

  return (
    <div>
      <p className={styles.backgroundContainer}></p>
      <p className={styles.clouds}></p>
      <p className={styles.twinkling}></p>
      <p className={styles.stars}></p>

      <p className={styles.img}></p>
      <h2>
        <Welcome />
        <NavLinks />
        <Projects />
        <Footer />
      </h2>
    </div>
  );
};



export default App;
