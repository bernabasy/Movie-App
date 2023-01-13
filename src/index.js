import './style.css';
import logos from './images/logo.png';
import showPopups from './modules/popups.js';

const logoimg = document.querySelector('#logo');
logoimg.src = logos;

showPopups();