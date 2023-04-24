import React, { useState } from 'react';
import styles from './styles/styles.module.css';
import Home from './pages/Home';
import NavLinks from './Navigation';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Footer from './pages/Footer';
import ContactForm from './Forms/ContactForm';
import About from './pages/About';



export default function CurrentPage({currentPage, setCurrentPage}) {
    
    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'Projects') {
            return <Projects />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        return <ContactForm />;
    };

    

    return(
        <div>
            <NavLinks currentPage={currentPage} setCurrentPage={setCurrentPage} />
            {renderPage()} 
        </div>
    );
}