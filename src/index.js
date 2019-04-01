import '../reset.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.scss';
import getMainView from './mainView';
import getFooter from './logo';
import getLogo from './footer';

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
