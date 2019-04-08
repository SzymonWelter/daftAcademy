export default function(){
    const header = document.createElement('header');
    const logo = document.createElement('a');
    logo.innerHTML = 'd\'inks';
    header.appendChild(logo);
    return header;
}