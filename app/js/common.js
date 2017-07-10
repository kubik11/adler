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
});
