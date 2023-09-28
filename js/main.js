"use strict";

	document.addEventListener("DOMContentLoaded", (e) => {
		const form = {
			response: {
			  button: document.getElementById("formButton"),
			  email: document.getElementById("email"),
			  subject: document.getElementById("subject"),
			  message: document.getElementById("message"),
			  feedback: document.getElementById("feedback"),
			}
		  }
	
	
		function initForm() {
			
			form.response.button.addEventListener("click", (e) => {
			e.preventDefault();
			formValidation();
			});
	
		}
		
		  function formValidation() {
		
			let frm = form.response,
			email = frm.email,
			subject = frm.subject,
			message = frm.message,
			feedback = frm.feedback;
	
			feedback.innerHTML = "";
			var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

			if(reg.test(email.value)) {
				email.setAttribute("aria-invalid", "false");
				alert("Cadastro realizado com sucesso!")

				email.innerHTML = "";
				subject.innerHTML = "";
				message.innerHTML="";

			} else {
				email.setAttribute("aria-invalid", "true");
				feedback.innerHTML = "O formulário apresenta erros que impedem a finalização do seu envio. Confira se todos os campos obrigatórios foram preenchidos."
				feedback.focus();
			}
	
		  }
		
		  initForm(); 
	});