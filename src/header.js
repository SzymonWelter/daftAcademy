export default function(){
    const header = document.createElement('header');
    const logo = document.createElement('a');
    header.className = 'logo-header';
    logo.className = 'logo';
    logo.innerHTML = 'd\'inks';
    header.appendChild(logo); 
    return header;
}