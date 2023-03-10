const frame = document.createElement('div');
frame.classList.add('frame');
document.body.appendChild(frame);

for(let i = 1; i <= 400; i++){
const trigger = document.createElement('div');
trigger.classList.add(`trigger-${i}`);
frame.appendChild(trigger);
}

for(let i = 1; i <= 20; i++){
const lines = document.createElement('div');
lines.classList.add(`lines`, `line-${i}`);
frame.appendChild(lines);

const left = document.createElement('div');
left.classList.add('left');
lines.appendChild(left);

const right = document.createElement('div');
right.classList.add('right');
lines.appendChild(right);
}

let rows = 20;
let columns = 20;
let row = 1;
let column = 1;

for (let i = 1; i <= (rows * columns); i++){
  if((row * columns) < i){
    row = row + 1;
  }
  columns = i - ((row - 1) * columns)

  trigger.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = 'black';
  });
  trigger.addEventListener('mouseout', () => {
    document.body.style.backgroundColor = '';
  });

}

// Link: https://codepen.io/rodes/pen/bGMYBLQ?editors=0100
//ex de jquery...
$("p").hover(function(){
  $(this).css("background-color", "yellow");
  }, function(){
  $(this).css("background-color", "pink");
});

//ex: js vanilla
element.addEventListener('mouseover', () => {
      document.body.style.backgroundColor = 'black';
});

const elements = document.querySelectorAll('.minha-classe');

//for each
elements.forEach((element) => {
  element.addEventListener('mouseover', () => {
    if (element.classList.contains('minha-classe:hover')) {
      // Faça algo aqui quando o elemento estiver em estado de hover
    }
  });
});
