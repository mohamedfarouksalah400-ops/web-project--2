function form(){
	var valid = true;
	
	formLabels = document.getElementsByTagName("label");

	var email = document.loginForm.email.value;
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(email==""){
		formLabels[0].innerHTML="Email: [Required]";
		formLabels[0].style="color: red";
		valid = false;
	}
	else if(!re.test(email)){
		formLabels[0].innerHTML="Email: [Incorrect Email]";
		formLabels[0].style="color: red";
		valid = false;
	}
	else {
		formLabels[0].innerHTML="Email:";
		formLabels[0].style="color: black";
		valid = (valid) ? true : false;
	}
	
	var password = document.loginForm.password.value;
	if(password == ""){
		formLabels[1].innerHTML="Password: [Required]";
		formLabels[1].style="color: red";
		valid = false;
	}
	else if(password.length < 8){
		formLabels[1].innerHTML="Password: [Incorrect password]";
		formLabels[1].style="color: red";
		valid = false;
	}
	else {
		formLabels[1].innerHTML="Password:";
		formLabels[1].style="color: black";
		valid = (valid) ? true : false;
	}
	
	return valid;
}


