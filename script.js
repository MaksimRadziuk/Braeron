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
			},
			{
			breakpoint:901,
			settings:{
				slidesToShow:3
				}
			}
		]
	});
	$('.history_slider').slick({
		slidesToShow:3,
		slidesToScroll:1,
		autoplay:false,
		autoplaySpeed:5000,
		speed:1500,
		arrows:true,
		infinite:true,
		dots:false,
		responsive:[
			{
			breakpoint:1231,
			settings:{
				slidesToShow:2
				}
			}
		]
	});
	$('#certSlider').slick({
		slidesToShow:4,
		slidesToScroll:1,
		autoplay:false,
		autoplaySpeed:5000,
		speed:1500,
		arrows:true,
		infinite:true,
		dots:false,
		responsive:[
			{
			breakpoint:1231,
			settings:{
				slidesToShow:3
				}
			},
			{
			breakpoint:901,
			settings:{
				slidesToShow:2
				}
			}
		]
	});

	$('.closePopup').click(function() {
		$(this).parent('.popup').toggleClass('active');
	})

	$('#mobileMenuTrigger').click(function() {
		$('#mobileMenu').toggleClass('active');
	})

});
