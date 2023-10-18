const content = document.getElementById('content');

export const menuLoad = () => {
    const menuInfo = document.createElement('div');
    content.appendChild(menuInfo);

    const heading = document.createElement('h1');
    heading.textContent = 'Menu';
    menuInfo.appendChild(heading);

    const menuList = document.createElement('ul');
    menuInfo.appendChild(menuList);
    
    const menuItem1 = document.createElement('li');
    menuItem1.textContent = "Soup Dumplings - $7.99";
    const menuItem2 = document.createElement('li');
    menuItem2.textContent = "Fried Dumplings - $5.50";
    const menuItem3 = document.createElement('li');
    menuItem3.textContent = "Chow Mein - $9.99";
    const menuItem4 = document.createElement('li');
    menuItem4.textContent = "House Fried Rice - $9.50";

    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);
    menuList.appendChild(menuItem4);

}