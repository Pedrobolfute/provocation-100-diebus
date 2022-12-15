let menuButton = document.querySelector('.toggler');
let panel = document.querySelector('.panel');
let mineWin= document.querySelector('.window');

menuButton.addEventListener('click', (e) => {
  panel.classList.toggle('panel_open');
  mineWin.classList.toggle('window_hide');
})

let searchButton = document.querySelector('.search');
let searchBar = document.querySelector('.header__searcing');

searchButton.addEventListener('click',  (e) => {
  searchBar.classList.toggle('header__searcing_open');
  searchBar.value = '';
})