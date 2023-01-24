const cursor = document.querySelector('.cursor');
const area = document.querySelector('span');

area.addEventListener('mousemove', (e)=>{
  cursor.style.left=e.pageX + 'px';
  cursor.style.top=e.pageY + 'px';
})

area.addEventListener('mouseout', (e)=>{
  cursor.style.left=`50%`;
  cursor.style.top=`50%`;
})