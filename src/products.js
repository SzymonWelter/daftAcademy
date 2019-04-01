export default function(){
    const cont = document.createElement('div'); 
    cont.className = 'container';
    const contwrapper = document.createElement('div'); 
    contwrapper.className = 'container';
    const scrollbox = document.createElement('div'); 
    scrollbox.className = 'scrollbox';
    const productcont = document.createElement('div'); 
    productcont.className = 'container';
    var srcimages = loadImages();
    var row = document.createElement('div');
    row.className = 'row';
    for(var key of Object.keys(srcimages)){
        const col = document.createElement('div');
        col.className = 'col-12 col-sm-6 col-md-4';
        const link = document.createElement('a');
        const img = document.createElement('img');
        const title = document.createElement('div');
        title.className = 'imgtitle'
        title.innerHTML = key;
        img.src = srcimages[key];
        link.append(title);
        link.append(img);
        col.append(link);
        row.appendChild(col);
    }
    
    productcont.append(row);
    scrollbox.appendChild(productcont);
    cont.appendChild(scrollbox);
    contwrapper.appendChild(cont);
    return contwrapper;
}
function loadImages(){
    var addprefix = (name) => "https://raw.githubusercontent.com/daftcode/daftacademy-frontend_levelup-spring2019/master/prace_domowe/lekcja_2/projekt_graficzny/assets/"+name;
    return {
        "Bijou":addprefix("bijou.jpg"),
        "Negroni":addprefix("negroni.jpg"),
        "Mojito":addprefix("mojito.jpg"),
        "Texas Rattlesnake":addprefix("rattlesnake.jpg"),
        "Egg Nogg":addprefix("eggnogg.jpg"),               
        "Zinger":addprefix("zinger.jpg")
    };
}