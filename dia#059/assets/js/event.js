function cssCreate(){
  let slice = document.getElementsByClassName('slice');

  for(let i = 1; i < 9; i++){
    let base = (i - 1);
    let style = document.createElement('style');
    style.type = 'text/css'

    if((i%2)===0){
      style.innerHTML= `
      .slice${i}{
        background-position: ${base * -50}px 0;
        transform: translateY(-40px);
        opacity: 0;
      };`;
    } else{
      style.innerHTML = `
      .slice${i}{
        background-position: ${base * -50}px 0;
        transform: translateY(40px);
        opacity: 0;
      };`;
    }
    slice[i-1].appendChild(style);
  }
}
cssCreate();