export default function(){
    const row = document.createElement('div');
    row.className = 'row';
    var srcimages = loadImages();
    for(var i = 0; i < srcimages.length; i++){
        const col = document.createElement('div');
        col.className = 'col-12 col-sm-6 col-md-4';
        const link = document.createElement('a');
        const img = document.createElement('img');
        img.src = srcimages[i];
        link.appendChild(img);
        col.appendChild(link);
        row.appendChild(col);
    }

    return row;
}
function loadImages(){
    var addprefix = (name) => "https://raw.githubusercontent.com/daftcode/daftacademy-frontend_levelup-spring2019/master/prace_domowe/lekcja_2/projekt_graficzny/assets/"+name;
    return [
        addprefix("bijou.jpg"),
        addprefix("eggnogg.jpg"),
        addprefix("mojito.jpg"),
        addprefix("negroni.jpg"),
        addprefix("rattlesnake.jpg"),
        addprefix("zinger.jpg")
    ]
}