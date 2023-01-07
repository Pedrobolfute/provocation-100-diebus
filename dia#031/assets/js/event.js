for(let i=1; i<21; i++){
  document.getElementById(i).style.animationDuration = (60/(60 - i))*1000 + 'ms';
}