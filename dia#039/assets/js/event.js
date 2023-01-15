let nav = document.querySelector('nav');
nav.addEventListener('click', () =>{
  if(nav.classList.contains('hide')){
    nav.classList.remove('hide');
    nav.classList.add('show');
  } else{
    nav.classList.remove('show');
    nav.classList.add('hide');
  }
})