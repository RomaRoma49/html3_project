/*POPUP*/
$(document).ready(function() { // Ждём загрузки страницы
	
	$(".popup_bg").click(function(){	// Событие клика на затемненный фон	   
		$(".popup").fadeOut(800);
		$(".form_body")[0].reset();	// Медленно убираем всплывающее окно
	});
});

function showPopup() {
	$(".popup").fadeIn(800); // Медленно выводим изображение
}

function hidePopup() {
	$(".popup").fadeOut(800);
	$(".form_body")[0].reset();
}

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
