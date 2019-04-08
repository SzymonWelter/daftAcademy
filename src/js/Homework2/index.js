import getMainView from './mainView';
import getFooter from './logo';
import getLogo from './footer';

export default function(root){
    const main = getMainView();
    const logo = getLogo();
    const footer = getFooter();

    root.appendChild(footer);
    root.appendChild(main);
    root.appendChild(logo);
}