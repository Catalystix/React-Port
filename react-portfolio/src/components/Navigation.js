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

export default function NavLinks() {
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
          <a href="#">Home</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Projects</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Contact</a>
        </div>
        <div style={linkStyle}>
          <a href="#">About</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Resume</a>
        </div>
      
      </section>
    </nav>
  );
}