$(document).ready(function(){
    $('.slider').slick({
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        arrows: true,
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 3000,
        fade: true
    });
}); 

/*POPUP*/
$(document).ready(function() { // Ждём загрузки страницы
	
	$(".popup_bg").click(function(){	// Событие клика на затемненный фон	   
		$(".popup").fadeOut(800);	// Медленно убираем всплывающее окно
	});

});

function showPopup() {
	$(".popup").fadeIn(800); // Медленно выводим изображение
}