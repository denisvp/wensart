$(function() {

	// Custom JS
	
	$('.top-line-menu li').not('.user-link').mouseover(function(){
		$('.top-line-menu').addClass('top-line-menu-hover');
	}).mouseout(function(){
		$('.top-line-menu').removeClass('top-line-menu-hover');
	});

	
	if ($('#page-wrap').hasClass('is-home')){
		$('.left-menu').addClass('left-menu-hidden');
	}


	$("#my-menu").mmenu({
		
		extensions: [ "theme-white", "pagedim-black", "fx-menu-slide" ],
		navbar: {
			// title: '<img src="img/brend-name.svg" alt="Рекламное агентство ВенсАрт">'
			title: '<img src="img/logo.svg" style="height: 20px; width: auto; padding-right: 10px;" alt="Рекламное агентство ВенсАрт">РА "ВенсАрт"'
		}
	});

	var api = $("#my-menu").data( "mmenu" );
      
  api.bind( "open:finish", function() {         
	  $('.hamburger').addClass('is-active');
  });
  api.bind( "close:finish", function() {
   	$('.hamburger').removeClass('is-active');         
  });
	
	$('.frontpage-slider').slick({	
  autoplay: false,
  autoplaySpeed: 6000
	});
	

});
