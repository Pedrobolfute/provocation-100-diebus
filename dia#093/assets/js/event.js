const ring = document.querySelector('.ring');

for(let i = 1; i<=40; i++){
  let lineN = document.createElement('div');
  lineN.className = 'line line-'+i;
  lineN.style.position = 'absolute';
  lineN.style.width = '2px';
  lineN.style.height = '10px';
  lineN.style.background = '#ccc';
  lineN.style.top = '70px';
  lineN.style.left = '74px';
  const degree = 360/46*i;
  if(i%5===1){
    lineN.style.transform = 'rotate('+degree+'deg) translateY(-61px)';
    lineN.style.height = '18px';
    lineN.style.top = '66px';
    lineN.style.background = '#fff'
  } else{
    lineN.style.transform = 'rotate('+degree+'deg) translateY(-65px)';
  }
  ring.appendChild(lineN)
}

for(let i = 0; i<=7; i++){
  let numberN = document.createElement('div');
  numberN.className = 'number number-'+i;
  numberN.style.position = 'absolute';
  numberN.style.width = '20px';
  numberN.style.height = '14px';
  numberN.style.top = '68px';
  numberN.style.left = '65px';
  numberN.style.fontSize = '13px'
  numberN.style.fontWeight = '600';
  numberN.style.lineHeight = '14px';
  numberN.style.textAlign = 'center';
  numberN.style.color = 'white';
  const degree = 360/8*i;
  numberN.style.transform='rotate('+degree+'deg) translateY(-40px)';
  numberN.textContent = i*5;
  ring.appendChild(numberN);
}