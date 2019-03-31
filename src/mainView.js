import getProducts from './products';
import getNavbar from './navbar';

export default function(){
    const main = document.createElement('div');
    main.className = 'container';
    const navrow = document.createElement('div');
    navrow.className = 'row';
    navrow.appendChild(getNavbar());  
    const contentrow = document.createElement('div');
    contentrow.className = 'row';
    const col = document.createElement('div');
    col.className = 'col';
    col.appendChild(getProducts());
    contentrow.appendChild(col);
    main.appendChild(navrow);
    main.appendChild(contentrow);
    return main;
}