var menuButton = document.querySelector('.toggler');
var panel = document.querySelector('.panel');
var mineWin = document.querySelector('.window');

menuButton.addEventListener('click', (e) => {
    panel.classList.toggle('panel_open');
    mineWin.classList.toggle('window_hide');
})

var searchButton = document.querySelector('.search');
var searchBar = document.querySelector('.header__searcing');

searchButton.addEventListener('click', (e) => {
    searchBar.classList.toggle('header__searcing_open');
    searchBar.value = '';
})
var menuButton = document.querySelector('.toggler');
var panel = document.querySelector('.panel');
var mineWin = document.querySelector('.window');

menuButton.addEventListener('click', (e) => {
    panel.classList.toggle('panel_open');
    mineWin.classList.toggle('window_hide');
})

var searchButton = document.querySelector('.search');
var searchBar = document.querySelector('.header__searcing');

searchButton.addEventListener('click', (e) => {
    searchBar.classList.toggle('header__searcing_open');
    searchBar.value = '';
})