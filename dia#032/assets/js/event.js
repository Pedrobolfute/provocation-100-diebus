var number = 0;
var $number = $('.number');

$('.minus').bind('click', function(){
  updateNumber(-1);
});

$('.plus').bind('click', function(){
  updateNumber(1);
})

function updateNumber(value){
  number += value;
  $number.find('fadeOutDown').remove();
  $number.find('.fadeOutUp').remove();
  $number.find('span').removeClass();
  if(value > 0){
    $number.find('span').addClass('fadeOutUp');
    $number.append('<span class="fadeInUp">' + number + '</span>');
  } else{
    $number.find('span').addClass('fadeOutDown');
    $number.append('<span class="fadeInDown">' + number + '</span>');
  }
}
