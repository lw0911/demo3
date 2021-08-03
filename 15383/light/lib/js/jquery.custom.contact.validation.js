jQuery(document).ready(function($){
	
	$('.contact-submit').bind('click', function(e){
		e.preventDefault();
		$('#contact-form').submit();
	});

	$("#contact-form").validate({
		rules: {
			name: "required",
			email: {
				required: true,
				email: true
			},
			message: {
				required: true,
				minlength: 10
			}
		},
		messages: {
			name: "Please enter your name.",
			email: {
				required: "Please enter your email address.",
				email: "This is not a valid email address format."
			},
			message: {
				required: "Please enter a message.",
				minlength: "Message must have at least 10 characters."
			}
		}
	});
	
	function checkForm() {
		if (!$('#contact-form').valid()) {
			return false;
		}
		else {
			return true;
		}
	}
		
	$("#contact-form").ajaxForm({
		beforeSubmit: checkForm,
		type: "POST",
		url: "lib/php/contact-form-process.php",
		data: $("#contact-form").serialize(),
		success: function(msg){
			$("#contact-form-message").ajaxComplete(function(event, request, settings){
				if(msg == 'OK') // Message Sent? Show the 'Thank You' message and hide the form
				{
					result = '<p class="msg-success">Your message has been sent. Thank you!</p>';
					clear = true;
				}
				else
				{
					result = '<p class="msg-error">' + msg +'</p>';
				}
				$(this).html(result);

				if(clear == true) {
					$('#contact-name').val('');
					$('#contact-email').val('');
					$('#contact-subject').val('');
					$('#contact-message').val('');
				}
			});
		}
	});
});