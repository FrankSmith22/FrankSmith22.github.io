$(function () {
	var isEmailValid;
	$('[data-toggle="tooltip"]').tooltip();

	slideMeHolder();
	fadeInText();

	function slideMeHolder() {
		var meHolder = document.querySelector('#meHolder');

		meHolder.style.transform = "translate(-50%, -50%) rotate(45deg)";
	}

	function fadeInText() {
		var frankHeader = document.querySelector('#frankHeader');
		var aboutMeHolder = document.querySelector('#aboutMeHolder');

		frankHeader.style.opacity = '1';
		aboutMeHolder.style.opacity = '1';
	}

	$('#emailField').focusout(function () {
		var emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
		if (emailPattern.test($('#emailField').val())) {
			isEmailValid = true;
			console.log('Youre good ' + isEmailValid);
			$('#emailField').tooltip('hide');
			$('#emailField').tooltip('disable');
		}
		else {
			isEmailValid = false;
			console.log('Please enter a valid email ' + isEmailValid);
			$('#emailField').tooltip('enable');
			$('#emailField').tooltip('show');
		}
	});

	//This event listener is here purely to force emailField tooltip from closing when there is an invalid email
	$('#emailField').on('hidden.bs.tooltip', function () {
		if (!isEmailValid) {
			$('#emailField').tooltip('show');
		}
	})
})