var dropbox = document.getElementsByClassName('dropbox')[0];
var button = document.getElementsByClassName('uploadbutton')[0];
var dropcloud = document.getElementsByTagName('img')[0];
var lineload = document.getElementsByTagName('svg')[0];
var load = document.getElementsByTagName('img')[1];
var tick = document.getElementsByTagName('img')[2];
var input = document.getElementsByTagName('input')[0];
var dropped = false;
var alldone = false;
var secon = 2000;
let file;

dropbox.addEventListener('dragover', function(){
  //voltar aqui.
  event.preventDefault();
  dropbox.classList.add("droboxdrag");
})

dropbox.addEventListener('click', function(){
  input.click();
})

button.addEventListener("click", function(){
  if(truefile() == false && alldone == false){
    dropbox.style.display = "none";
    load.style.display = "initial";
    lineload.style.display = "initial";
    button.innerHTML = "Carregando...";
    setTimeout(() => {
      load.style.display = "none";
      button.innerHTML = "Finalizado";
      tick.style.opacity = "1";
      alldone = true;
      button.title = "Pagina vai ser recarregada";
        if(button.addEventListener("click", function(){
         window.location.href = 'https://www.diarionfoot.com/';
         //windows.location.reload;
        })); 
    }, secon);
  }
});

input.addEventListener("change", function(){
  file = this.files[0];
  displayname();
})

dropbox.addEventListener("dragleave", function(){
  dropbox.classList.remove("droboxdrag");
})

dropbox.addEventListener("drop", function(){
  //voltar aqui.
  event.preventDefault();
  dropped = true;
  //aqui tbm
  file = event.dataTransfer.files[0];
  dropbox.classList.remove("droboxdrag");
  displayname();
})

function truefile(){
  if(document.getElementsByClassName('names')[0].innerHTML == ''){
    return (true);
  }
  else{
    return (false);
  }
}

function displayname(){
  dropcloud.style.display = "none";
  if(file.size/1000000 > 1 && file.size/1000000 < 10){
    lineload.style.animation = "line " + file.size/1000000 + "s linear forwards";
    secon = file.size/1000;
  }
  else if(file.size/1000000>10){
    lineload.style.animation = "line " + 15 + "s linear forwards"; secon = 15000;
  }
  document.getElementsByClassName('names')[0].innerHTML = file.name;
  dropbox.style.overflow = "auto";
}

window.onerror = function(){
  alert('Erro: envie o arquivo de novo!');
}