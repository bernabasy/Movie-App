import './style.css';
import logos from './images/logo.png';
import showPopups from './modules/popups.js';

const logoimg = document.querySelector('#logo');
logoimg.src = logos;

showPopups();

const about = document.querySelector('#about');
const home = document.querySelector('#homes');

home.addEventListener('click', () => {
  const main = document.querySelector('#main');
  const contact = document.querySelector('#contacts');
  contact.style.display = 'none';
  main.style.display = 'grid';
});

about.addEventListener('click', () => {
  const main = document.querySelector('#main');
  const contact = document.querySelector('#contacts');
  main.style.display = 'none';
  contact.style.display = 'block';
});

window.addEventListener('load', home);