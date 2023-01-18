const stage = document.getElementById('stage');
console.log(stage);

for (let i = 0; i < 300; i++){
  const star = document.createElement('div');
  star.classList.add('star');
  const newStyle = {
    top: `${Math.floor(Math.random() * 100)}%`,
    left: `${Math.floor(Math.random() * 100)}%`,
    animationDuration: `${Math.floor(Math.random() * 5) + 1}s`,
    animationDelay: `${Math.floor(Math.random() * 10)}s`
  };
  Object.assign(star.style, newStyle);
  stage.appendChild(star);
}

for(let i = 0; i < 10; i++){
  const shootingStar = document.createElement('div');
  shootingStar.classList.add('shooting-star');
  const newStyle = {
    top: `${Math.floor(Math.random() * 90) + -20}%`,
    animationDelay: `${Math.floor(Math.random() * 20)}s`,
    animationDuration: `${Math.floor(Math.random() * 5) + 2}s`,
    height: `${Math.floor(Math.random() * 2) + 1}px`
  }

Object.assign(shootingStar.style, newStyle);
stage.appendChild(shootingStar);
}