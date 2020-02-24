function brightnessOff() {
    newMain = document.getElementById('main');
    newMain.style.cssText = 'background-color: rgb(0, 0, 0, .8); transition: .5s'
}

function brightnessOn() {
    newMain = document.getElementById('main');
    newMain.style.cssText = 'background-color: rgb(0, 0, 0, .0); transition: .5s'
}

// function arrow() {
//     newburgerSubmenu = document.getElementById('burgerSubmenu');
//     newburgerSubmenu.style.cssText = 'display:block';
// }