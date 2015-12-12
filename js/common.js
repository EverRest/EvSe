$(document).ready(function() {

	//uLogin
	//$s = file_get_contents('http://ulogin.ru/token.php?token=' . $_POST['token'] . '&host=' . $_SERVER['HTTP_HOST']);
	//$user = json_decode($s, true);
	//$user['network'] - соц. сеть, через которую авторизовался пользователь
	//$user['identity'] - уникальная строка определяющая конкретного пользователя соц. сети
	//$user['first_name'] - имя пользователя
	//$user['last_name'] - фамилия пользователя
	//END


	//MAP

	//END
	
	//TAB-MENU
	jQuery('.tabs .tab-menu a').on('click', function(e)  {
		var nilaiAttr = jQuery(this).attr('href');
	 
	    jQuery('.tabs ' + nilaiAttr).show().siblings().hide();
	 
	    jQuery(this).parent('li').addClass('active').siblings().removeClass('active').delay(800);
	 
	    e.preventDefault();
	});
	//END


	//HAMBURGER
	$('.registration .reg_btn').click(function(){
		$('.registration .reg').slideToggle().delay(700);
	});

	$('nav .top_nav_btn').click(function(){
		$('nav .top_nav').slideToggle().delay(700);
	});	
	//END

	//DATEPIKER
	$(function() {
		$( "#datepicker" ).datepicker({
			showButtonPanel: false
		});
	});
	//END

	//BOTTOM BTN
	$('nav .bottom_menu_btn').click(function(){
		$('nav .bottom_menu').slideToggle().delay(700);
	});		
	//

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 3,
		autoHeight : true
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function() {
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function() {
		owl.trigger("owl.prev");
	});

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#callback").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#callback").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});