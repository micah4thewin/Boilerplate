import AOS from 'aos';
import 'aos/dist/aos.css';
import Typed from 'typed.js';
import '../shared/font.css';
import topnav from '../shared/topnav.html';
import footer from '../shared/footer.html';

document.addEventListener('DOMContentLoaded', () => {
  // Insert topnav HTML as the first child of the body
  const topnavElement = document.createElement('div');
  topnavElement.innerHTML = topnav;
  document.body.insertBefore(topnavElement, document.body.firstChild);

  // Initialize AOS
  AOS.init();

  // Initialize Typed.js
  const typedElement = document.querySelector('#typed-text');
  if (typedElement) {
    const typed = new Typed('#typed-text', {
      strings: ['This is my boiler plate.', 'It uses Webpack, AWS Amplify, AOS, Typed.js and more.'],
      typeSpeed: 100,
      loop: true,
      loopCount: Infinity,
    });
  }

  const setCopyrightYear = () => {
    const currentYear = new Date().getFullYear();
    document.querySelector('#copyright-year').textContent = currentYear;
  };

  // Insert footer HTML as the last child of the body
  const footerElement = document.createElement('div');
  footerElement.innerHTML = footer;
  document.body.appendChild(footerElement);

  // Set copyright year
  setCopyrightYear();
});
