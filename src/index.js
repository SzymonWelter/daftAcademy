import './sass/base/_reset.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/main.scss';
import getMainView from './js/mainView';
import getFooter from './js/logo';
import getLogo from './js/footer';

const { body } = document;
const root = document.createElement('div');
const main = getMainView();
const logo = getLogo();
const footer = getFooter();
root.id = "root";
root.appendChild(footer);
root.appendChild(main);
root.appendChild(logo);
body.appendChild(root);
