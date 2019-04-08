import getProducts from './products';
import getNavbar from './navbar';

export default function(){
    const main = document.createElement('div');
    main.className = 'content';
    main.appendChild(getNavbar());  
    main.appendChild(getProducts());
    return main;
}