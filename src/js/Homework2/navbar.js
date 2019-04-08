export default function(){
    var items =['Beer','Coffee/Tea', 'Coctail', 'Cocoa', 'Milk/Float/Shake', 'Shot', 'Punch/Party Drink', 'Homemade Liqueur'];
    const cont = document.createElement('div');
    const navbar = document.createElement('div');
    cont.className = 'container';
    navbar.className = 'main-nav';
    const list = document.createElement('ul');   
    items.forEach(e => {
        var item = document.createElement('li');
        var link = document.createElement('a');
        link.innerHTML = e;
        link.href = '#' + e;
        if(list.children.length == 0)
            link.className = 'active';
        item.appendChild(link);
        list.appendChild(item);
    });
    navbar.appendChild(list);
    cont.appendChild(navbar);
    return cont;
}
