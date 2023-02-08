const frame = document.querySelector('.frame');

for(let i=0; i<50; i++){
  let circle = document.createElement('div');
  circle.style.position = 'absolute';
  circle.style.width = '200px';
  circle.style.height = '200px';
  circle.style.top = '100px';
  circle.style.left = '100px';
  circle.style.borderRadius = '50%';
  circle.style.borderWidth = '2px';
  circle.style.borderStyle = 'dotted';
  circle.style.borderColor = '#999';
  circle.style.transformOrigin = '50% 50%';
  circle.style.animationName = 'circle';
  circle.style.animationDuration = '10s';
  circle.style.animationTimingFunction = 'ease-in-out';
  circle.style.animationDelay = (i/-5)+'s';
  circle.style.animationIterationCount = 'infinite';
  circle.style.animationDirection = 'both';
  circle.style.zIndex = i;
  frame.appendChild(circle)
}