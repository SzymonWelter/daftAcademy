export default function(){
    var items =['Beer','Coffee/Tea', 'Coctail', 'Cocoa', 'Milk/Float/Shake', 'Shot', 'Punch/Party Drink', 'Homemade Liqueur'];
    const col = document.createElement('div');
    col.className = 'col';
    const navbar = document.createElement('div');
    navbar.className = 'nav';
    const list = document.createElement('ul');   
    items.forEach(e => {
        var item = document.createElement('li');
        var link = document.createElement('a');
        link.innerHTML = e;
        link.href = '#' + e;
        item.appendChild(link);
        list.appendChild(item);
    });
    navbar.appendChild(list);
    col.appendChild(navbar);
    return col;
}
