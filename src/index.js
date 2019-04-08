import './sass/base/_reset.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/main.scss';

import clock from './js/Homework3/clock';

const { body } = document;
const root = document.createElement('div');
root.id = "root";
body.appendChild(root);
clock(root);