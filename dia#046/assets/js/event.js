const frame=document.querySelector('.ringwrapper');

for(let i=1; i<6; i++){
  const ringsize = 60 + (i*50);
  const ring = document.createElement('div');
  ring.classList.add('ring');
  ring.style.left = ((400 - ringsize) / 2) + 'px';
  ring.style.top = ((400 - ringsize) / 2) + 'px';
  ring.style.width = ringsize + 'px';
  ring.style.height = ringsize + 'px';
    ring.style.setProperty('--rotateby', (i*8) + 'deg');
    ring.style.setProperty('--maxscale', 1.2-(i/10));
  frame.append(ring);
  for (let i=0; i<12; i++){
    const dot = document.createElement('div');
    dot.classList.add('dot');
    const rad = (i/6) * Math.PI;
    dot.style.top = ((ringsize/2) -5 + (ringsize * 0.5 * Math.cos(rad)) ) + 'px';
    dot.style.left = ((ringsize/2) -5 + (ringsize * 0.5 * Math.sin(rad)) ) + 'px';
    ring.append(dot);
  }
}