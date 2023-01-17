const images = document.querySelectorAll('.img');
const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', () => {
  images.forEach((img) => {
    img.firstElementChild.classList.toggle('away');
  });
}, true );

images.forEach((img)=>{
  img.addEventListener('click', () => {
    img.firstElementChild.classList.remove('away');
    img.classList.toggle('active');
  });
});