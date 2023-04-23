// import React from "react";

// export default function NavLinks() {
//     return (
//         <div className="navigation">
//         <ul className="navLinks">
//         <li>Home</li>
//         <li>Projects</li>
//         <li>Contact</li>
//         <li>Resume</li>
//       </ul>
//       </div>
//     );
// }

import React from 'react';

export default function NavLinks({currentPage, handlePageChange}) {
  const linkStyle = { border: '1px black', padding: '5px' };

  return (
    <nav className="navigation">
      <section
        style={{
          display: 'flex',
          fontFamily: 'helvetica',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        <div style={linkStyle}>
          <a href="#home" onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >Home</a>
        </div>
        <div style={linkStyle}>
          <a href="#about" onClick={() =>handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a>
        </div>
        <div style={linkStyle}>
          <a href="#projects" onClick={() => handlePageChange('Projects')}
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>Projects</a>
        </div>
        <div style={linkStyle}>
          <a href="#contact" onClick={() =>handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
        </div>
       
        <div style={linkStyle}>
          <a href="#resume" onClick={() =>handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
        </div>

      </section>
    </nav>
  );
}