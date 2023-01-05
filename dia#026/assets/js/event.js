var button = document.querySelectorAll('.button');
var active = 1;

for(var i = 0; i < button.length; i++){
button[i].addEventListener('click', function() {
	$('.card:nth-child(' + active + ')').removeClass('active').addClass('inactive');
	if (active == 3) {
		active = 0;
	}
	active++;
	$('.card:nth-child(' + active + ')').removeClass('inactive').addClass('active');
});
}