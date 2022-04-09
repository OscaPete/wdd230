

// RESPONSIVE NAVIGATION
function toggleMenu() {
    document.querySelector('#mainNav').classList.toggle('open');
    document.querySelector('#menuButton').classList.toggle('open');
}

const openNav = document.querySelector('#menuButton');
openNav.onclick = toggleMenu;

