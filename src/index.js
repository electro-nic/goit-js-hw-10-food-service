import menuElement from './menu.json';
import menuTemplate from './templates/template.hbs';
import './theme.js';
import './styles.css';

console.log(menuTemplate(menuElement[0]));



let menu = document.querySelector('.js-menu');

function buildMenu(array) {
    const markup = array.map(post => menuTemplate(post)).join('');
    menu.insertAdjacentHTML('beforeend', markup);
}

buildMenu(menuElement);
