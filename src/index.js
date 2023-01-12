import './style.css';
import logos from './images/logo.png';
import displayMovies from './modules/homepage.js';

const logoimg = document.querySelector('#logo');
logoimg.src = logos;

window.addEventListener('load', displayMovies);