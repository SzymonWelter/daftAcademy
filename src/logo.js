export default function(){
    const header = document.createElement('header');
    const logo = document.createElement('a');
    header.className = 'main-header';
    logo.className = 'logo-header';
    logo.innerHTML = 'd\'inks';
    header.appendChild(logo);
    return header;
}