$('.frame').mousemove((e)=>{
  $('.orange').css('height', `${e.offsetY/4}%`)
  console.log(e.offsetY)
})

$('.frame').mouseleave((e)=>{
  $('.orange').css('height', '50%')
  console.log('yay');
})