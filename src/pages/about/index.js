// Boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
// Types
import Typed from 'typed.js';
// Shared
import '../../shared/css/font.css';
import topnav from "../../shared/html/topnav.html";
import footer from "../../shared/html/footer.html";

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
      strings: ['This is my about page boiler plate.', 'It uses Webpack, AWS Amplify, AOS, Typed.js and more.'],
      typeSpeed: 100,
      loop: true,
      loopCount: Infinity,
    });
  }
  // Copyright
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
