import './style.css';
import logos from './images/logo.png';
import showPopups from './modules/homepage.js';

const logoimg = document.querySelector('#logo');
logoimg.src = logos;

showPopups();