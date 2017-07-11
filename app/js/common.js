$(function() {

	$('#my-menu').mmenu({
		extensions: ['widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black'],
		navbar: {
			title: '<img src="img/logo-1.svg" alt="Салон красоты" />'
		},
		offCanvas: {
			position: 'right'
		}
	});
	var api = $('#my-menu').data('mmenu');
	var ham = $('.hamburger');
	api.bind('opened', function(){
		ham.addClass('is-active');
	});
	api.bind('closed', function(){
		ham.removeClass('is-active');
	});

	$('.carousel-services').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
	});
});
