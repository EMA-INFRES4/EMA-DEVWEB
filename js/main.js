$(document).ready(function(){
	// EX 1
	$('#tp1-1 li').first().css('fontWeight' , 'bolder');
	$('#tp1-1 ul').before($('#tp1-1 .description'));

	//EX 2
	$('#tp1-2 input').blur(function(){
		console.log($(this).val());
	});
	
	//EX 3
	$('.todo').hide('fast');

	//EX 4
	$.get('chuck.html' , function(data){
		$('#tp1-4 .loading').hide('fast');
		$(data).appendTo($('#chuck'));
	});

	//EX 5
	console.exception('BOOM');
});

