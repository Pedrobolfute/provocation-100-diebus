const numberOfDots = 200;
const frame = document.getElementsByClassName('frame')[0];

const newDiv = document.createElement('div');
newDiv.classList.add('wave');
frame.appendChild(newDiv);

for(let i = 0; i < 200; i++){
  const dots = document.createElement('div');
  dots.classList.add(`dot`, `dot-${i}`);
  newDiv.appendChild(dots);
}

for(let i = 0; i < numberOfDots; i++){
  const dot = document.createElement('style');
  const offset = i < 100 ? 0 + (i * i/70) : 0 + ((200 - i) * (200 - i) / 70);

  dot.innerHTML = `
  .dot-${i}{
    animation: move-${i} 3s ease-in-out infinite;
  }
  @keyframes move-${i}{
    0%, 100%{
      transform: translateY(${offset * -1}px);
    }
    50%{
      transform: translateY(${offset}px);
    }
  }
  `;
  document.head.appendChild(dot);
}