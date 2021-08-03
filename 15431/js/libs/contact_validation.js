	// CONTACT FORM VALIDATION
	$(document).ready(function(){
		$("#contact_form").validate({
			meta: "validate",
			submitHandler: function (form) {
				$('#contact_form').hide();
				$('#sucessmessage').append("<h4 class='form_thanks'>Thanks! Our Team will get in touch in next 24 hours</h4>");
				return false;
				form.submit();
			},
			/* */
			rules: {
				name: "required",
				
				lastname: "required",
				// simple rule, converted to {required:true}
				email: { // compound rule
					required: true,
					email: true
				},
				subject: {
					required: true,
				},
				comment: {
					required: true
				}
			},
			messages: {
				name: "*",
				lastname: "*",
				email: {
					required: "*",
					email: "*"
				},
				subject: "*",
				comment: "*"
			},
		});
	});					
	