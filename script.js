$(document).ready(function(){
	$('#carousel').slick({
		autoplay:true,
		autoplaySpeed:5000,
		speed:500,
		arrows:true,
		infinite:true,
		responsive:[
			{
			breakpoint:601,
			settings:{
				dots:true
			}
			}
		]
	});


});
