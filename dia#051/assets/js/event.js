const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const restart = document.querySelector('.restart');

const sec = document.querySelector('.sec');
const min = document.querySelector('.min');
const hour1 = document.querySelector('.hour1');
const hour2 = document.querySelector('.hour2');

let x;
document.addEventListener('DOMContentLoaded', add)
x = setInterval(add, 1000);
function add(){
  let s = Number(document.querySelector('.sec').innerHTML)+1
  let m = Number(document.querySelector('.min').innerHTML)+1
  let h1 = Number(document.querySelector('.hour1').innerHTML)+1
  let h2 = Number(document.querySelector('.hour2').innerHTML)+1
  

  if(s<10){
    sec.innerHTML = s;
  }else{
    sec.innerHTML = 0
    if(m<10){
      min.innerHTML = m;
    }else{
      min.innerHTML = 0;
      if(h1<10){
        hour1.innerHTML = h1;
      }else{
        hour1.innerHTML = 0;
        if(h2<10){
          hour2.innerHTML = h2;
        }else{
          hour2.innerHTML = 0;
          clearInterval(x);
        }
      }
    }
  }
}

start.addEventListener('click', ()=>{
  start.classList.remove('show');
  stop.classList.add('show');

  x=setInterval(add,1000);
  add();
})
stop.addEventListener('click', ()=>{
  start.classList.add('show');
  stop.classList.remove('show');

  clearInterval(x);
})

restart.addEventListener('click', ()=>{
  sec.innerHTML = 0;
  min.innerHTML = 0;
  hour1.innerHTML = 0;
  hour2.innerHTML = 0;
})