const frameDiv = document.createElement('div');
frameDiv.classList.add('frame');
document.body.appendChild(frameDiv);

const horizontalDiv = document.createElement('div');
horizontalDiv.classList.add('horizontal');
frameDiv.appendChild(horizontalDiv);

for(let i = 1; i <= 100; i++){
  const stripeDiv = document.createElement('div');
  stripeDiv.classList.add(`stripe`, `stripe-${i}`);
  horizontalDiv.appendChild(stripeDiv);
}

const verticalDiv = document.createElement('div');
verticalDiv.classList.add('vertical');
frameDiv.appendChild(verticalDiv);

for(let i = 1; i <= 100; i++){
  const stripeDiv = document.createElement('div');
  stripeDiv.classList.add(`stripe`, `stripe-${i}`);
  verticalDiv.appendChild(stripeDiv);
}