var button = document.getElementsByClassName('button')[0];
var reset = document.getElementsByClassName('reset')[0];
var svg = document.getElementsByTagName('svg');
var center = document.getElementsByClassName('center')[0];
var one = document.getElementsByClassName('one')[0];

button.addEventListener('click', ()=>{
  center.classList.add('centereffect');
  one.classList.add("centereffect");
  svg[0].style.strokeDashoffset = '300px';
  setTimeout(()=>{
    svg[1].style.strokeDashoffset = '0';
  }, 2000)

  setTimeout(()=>{
    svg[1].style.left = '130px';
    svg[1].style.top = '120px';
  }, 3000)

  setTimeout(()=>{
    svg[1].style.left = '400px';
    svg[1].style.top = '50px';
    svg[1].classList.add('svg1effect');
  }, 4000)

  setTimeout(()=>{
    button.classList.add('buttoneffect');
  }, 5000)

  setTimeout(()=>{
    reset.style.opacity = '1';
  }, 7000)

})

reset.addEventListener('click', ()=>{
  center.classList.remove('centereffect');
  one.classList.remove('centereffect');
  button.classList.remove('buttoneffect');
  svg[1].classList.remove('svg1effect');
  svg[0].style.strokeDashoffset = '0px';
  svg[1].style.strokeDashoffset = '350px';
  reset.style.opacity = '0';
  setTimeout(()=>{
    svg[1].style.left = '140px';
    svg[1].style.top = '115px';
  }, 2000)

})