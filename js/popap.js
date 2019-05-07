		var link = document.querySelector(".login"); //В переменную передается элемент с классом .login (поиск селектора с классом .login)
		var popap = document.querySelector(".modal-content");
		var close = document.querySelector(".modal-content__close");
		var login = popap.querySelector("[name=login-field]");
		var password = popap.querySelector("[name=password-field]");
		var form = popap.querySelector("form");
		var storage = localStorage.getItem("login");  //получение данных из браузера
		var overlay = document.querySelector(".modal-overlay");
		var checkbox = document.querySelector(".modal-content__checkbox-field");
		
		
		link.addEventListener("click", function(event) {	//Событие при нажатии клике, после нажатия на которую выполняется функция
			event.preventDefault();							//Сброс событий по умолчанию
			overlay.classList.add("modal-content__show");
			popap.classList.toggle("modal-content__show");  //Добавление или удаление класса, при нажатии на ссылку
			if(storage) {									//Если в переменной есть значение 
				login.value = storage;						//То оно передается в логин
				password.focus();							//И фокус переходит на вторую строку
			}
			else {											
				login.focus();								//В противном случае, фокус на первой строке
			}
		});
		
		close.addEventListener("click", function(event) {	//Удаление класса при клике на крестик
			event.preventDefault();
			popap.classList.remove("modal-content__show");
			popap.classList.remove("modal-error");
			overlay.classList.remove("modal-content__show");
		});
		
		form.addEventListener("submit", function(event) {	//Отправка формы
			if(!login.value || !password.value) {			//Проверка на незаполненые поля
				event.preventDefault();
				popap.classList.add("modal-error");
			}
			else {
				if(checkbox.checked) {
					localStorage.setItem("login", login.value);	//Запись данных из формы в браузер
					localStorage.setItem("password", password.value);
				}
			}
		});
		
		window.addEventListener("keydown", function(event) {	//Закрытие окна при нажатии на Esc
			if(event.keyCode === 27) {
				if(popap.classList.contains("modal-content__show")){
					popap.classList.remove("modal-content__show");
					popap.classList.remove("modal-error");
					overlay.classList.remove("modal-content__show");
				}
			}
		});
		
		overlay.addEventListener("click", function(event) {	
			event.preventDefault();
			popap.classList.remove("modal-content__show");
			popap.classList.remove("modal-error");
			overlay.classList.remove("modal-content__show");
		});