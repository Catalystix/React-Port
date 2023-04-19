
import styles from './components/styles/styles.module.css';
import Home from './components/pages/Header';
import NavLinks from './components/Navigation';
import Projects from './components/pages/Projects';
import Resume from './components/pages/Resume';
import Footer from './components/pages/Footer';
import ContactForm from './components/Forms/ContactForm';
import About from './components/pages/About';
import { useEffect, useState } from 'react';


export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'About') {
            return <Projects />;
        }
        if (currentPage === 'Blog') {
            return <Resume />;
        }
        if (currentPage === 'Blog') {
            return <About />;
        }
        return <ContactForm />;
    };
};
    const handlePageChange = (page) => setCurrentPage(page);