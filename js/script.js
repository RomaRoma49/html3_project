/*POPUP*/
$(document).ready(function() {
	
	$(".popup_bg").click(function(){ 
		$(".popup").fadeOut(800);
		$(".form_body")[0].reset();
	});
});

function showPopup() {
	$(".popup").fadeIn(800);
}

function hidePopup() {
	$(".popup").fadeOut(800);
	$(".form_body")[0].reset();
}

/*SLIDER*/
$(document).ready(function(){
    $('.slider').slick({
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true
    });
});