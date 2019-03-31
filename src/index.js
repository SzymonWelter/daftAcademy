import '../reset.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.scss';
import getMainView from './mainView';
import getFooter from './header';
import getHeader from './footer';

const { body } = document;
const root = document.createElement('div');
const main = getMainView();
const header = getHeader();
const footer = getFooter();
root.id = "root";
root.appendChild(footer);
root.appendChild(main);
root.appendChild(header);
body.appendChild(root);