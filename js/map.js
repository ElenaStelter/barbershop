		var mapLink = document.querySelector(".js-open-map"); //В переменную передается элемент с классом 
		var mapPopap = document.querySelector(".modal-content-map");
		var mapClose = document.querySelector(".modal-content-map__close");
		var mapOverlay = document.querySelector(".modal-overlay");
		
		mapLink.addEventListener("click", function(event) {	//Событие при нажатии клике, после нажатия на которую выполняется функция
			event.preventDefault();							//Сброс событий по умолчанию
			mapOverlay.classList.add("modal-content__show");	
			mapPopap.classList.add("modal-content__show");  //Добавление или удаление класса, при нажатии на ссылку
		});
		
		mapClose.addEventListener("click", function(event) {	//Удаление класса при клике на крестик
			event.preventDefault();
			mapPopap.classList.remove("modal-content__show");
			mapOverlay.classList.remove("modal-content__show");
		});
		
		window.addEventListener("keydown", function(event) {	//Закрытие окна при нажатии на Esc
			if(event.keyCode === 27) {
				if(mapPopap.classList.contains("modal-content__show")){
					mapPopap.classList.remove("modal-content__show");
					mapOverlay.classList.remove("modal-content__show");
				}
			}
		});
		
		mapOverlay.addEventListener("click", function(event) {	
			event.preventDefault();
			mapPopap.classList.remove("modal-content__show");
			mapOverlay.classList.remove("modal-content__show");
		});