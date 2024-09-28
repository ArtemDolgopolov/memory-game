import React from 'react';
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className='footer-content'>
        <p>&copy; {currentYear}</p>
        <p>
          <a href="https://github.com/artemdolgopolov">Artem Dolgopolov</a>
        </p>
      </div>
    </footer>
  );
}