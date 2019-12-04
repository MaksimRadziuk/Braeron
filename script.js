$(document).ready(function(){
	$('#mainPagePartners').slick({
		slidesToShow:5,
		slidesToScroll:1,
		autoplay:true,
		autoplaySpeed:5000,
		speed:1500,
		arrows:true,
		infinite:true,
		dots:false,
		responsive:[
			{
			breakpoint:1231,
			settings:{
				slidesToShow:4
			}
			}
		]
	});


});
