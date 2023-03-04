const frame = document.createElement('div');
frame.classList.add('frame');
document.body.appendChild(frame);

const cradle = document.createElement('cradle');
cradle.classList.add('cradle');
frame.appendChild(cradle);

for(let i = 1; i <= 5; i++){
  const ball = document.createElement('div');
  ball.classList.add(`ball`, `ball-${i}`);
  cradle.appendChild(ball);
}
