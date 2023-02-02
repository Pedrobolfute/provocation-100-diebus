const dot = document.querySelector('.dot');
const center = document.querySelector('.center');
const leaf = document.querySelectorAll('.leaf');

dot.addEventListener('click', ()=>{
  center.style.background = 'red';
  for(let i=0; i<leaf.length; i++){
    leaf[i].style.background = '#ee4545c8';
  }
})