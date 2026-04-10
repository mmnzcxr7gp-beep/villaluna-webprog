import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Oopsie Daisy — Sam Irian Villaluna. All rights reserved.</p>
        <p className="footer-tagline">Building accessible web experiences.</p>
      </div>
    </footer>
  );
}

export default Footer;
