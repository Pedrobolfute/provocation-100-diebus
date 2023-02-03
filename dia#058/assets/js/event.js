function slices(){

  let radius = 200;
  let speed = 6;
  let fill = '#fff';
  let border = 'rebeccapurple';
  let slice = document.getElementsByClassName('slice');
  for (let i = 1; i<10; i++){
    let size = radius - (2 * (i * i));
    let offset = (i * 15) - ((i * i)/2);

    let style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = 
      `.slice${i}{
        width: ${size}px;
        height: ${size}px;
        left: ${(radius - size) / 2}px;
        top: ${(radius - size) / 2}px;
        transform: translateY(${offset}px) rotateX(90deg);
        animation: slice${i} ${speed}s ease-in-out infinite;
      };`;
      slice[i].appendChild(style);
    }

    for(let i = 1; i<10; i++){
      let size = radius - (2*(i*i));
      let offset = (i * 15) - ((i*i)/2);
      let id = i + 9;
      let style2 = document.createElement('style');
      style2.type = 'text/css';
      style2.innerHTML = 
        `.slice${id}{
          width: ${size}px;
          height: ${size}px;
          left: ${(radius - size)/2}px;
          top: ${(radius-size)/2}px;
          transform: translateY(-${offset}px) rotateX(90deg);
          animation: slice${id} ${speed}s ease-in-out infinite;
        }`;
        slice[id].appendChild(style2);
    }
}
slices();
