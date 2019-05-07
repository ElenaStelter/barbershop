		var feedbackLink = document.querySelector(".js-feedback");
		var feedbackPopap = document.querySelector(".modal-content-feedback");
		var feedbackForm = document.querySelector(".modal-content-feedback form");
		var name = feedbackPopap.querySelector("[name=name-field]");
		var email = feedbackPopap.querySelector("[name=email-field]");
		var feedbackClose = document.querySelector(".modal-content-feedback__close");
		var feedbackOverlay = document.querySelector(".modal-overlay");
		
		feedbackLink.addEventListener("click", function(event) {
			event.preventDefault();		
			feedbackOverlay.classList.add("modal-content__show");			
			feedbackPopap.classList.add("modal-content__show");
		});
		
		
		feedbackClose.addEventListener("click", function(event) {	
			event.preventDefault();
			feedbackPopap.classList.remove("modal-content__show");
			feedbackOverlay.classList.remove("modal-content__show");
		});
		
		window.addEventListener("keydown", function(event) {
			if(event.keyCode === 27) {
				if(feedbackPopap.classList.contains("modal-content__show")){
					feedbackPopap.classList.remove("modal-content__show");
					feedbackOverlay.classList.remove("modal-content__show");
				}
			}
		});	
		
		feedbackOverlay.addEventListener("click", function(event) {	
			event.preventDefault();
			feedbackPopap.classList.remove("modal-content__show");
			feedbackOverlay.classList.remove("modal-content__show");
		});