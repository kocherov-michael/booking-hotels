$(function(){
	$('#btn-open-form').click(function(e){
		e.preventDefault();
		$(this).hide();
		$('.booking-form-wrapper').slideDown(1000);
	})

	$(".phone-mask").mask("+7 (999) 999-99-99");

	// var user = detect.parse(navigator.userAgent);
	// console.log(
	//   // user.browser.family
	// );

});
