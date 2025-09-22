function form(){
	var valid = true;
	
	formLabels = document.getElementsByTagName("label");
	
	var firstName = document.signupForm.firstName.value;
	if(firstName==""){
		formLabels[0].innerHTML="First Name: [Required]";
		formLabels[0].style="color: red";
		valid = false;
	}
	else if( !isNaN(firstName)){
		formLabels[0].innerHTML="First Name: [Text Only]";
		formLabels[0].style="color: red";
		valid = false;
	}
	else {
		formLabels[0].innerHTML="First Name:";
		formLabels[0].style="color: black";
		valid = (valid) ? true : false;
	}
	
	var lastName = document.signupForm.lastName.value;
	if(lastName==""){
		formLabels[1].innerHTML="Last Name: [Required]";
		formLabels[1].style="color: red";
		valid = false;
	}
	else if( !isNaN(lastName)){
		formLabels[1].innerHTML="Last Name: [Text Only]";
		formLabels[1].style="color: red";
		valid = false;
	}
	else {
		formLabels[1].innerHTML="Last Name:";
		formLabels[1].style="color: black";
		valid = (valid) ? true : false;
	}
	
	var email = document.signupForm.email.value;
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(email==""){
		formLabels[2].innerHTML="Email: [Required]";
		formLabels[2].style="color: red";
		valid = false;
	}
	else if(!re.test(email)){
		formLabels[2].innerHTML="Email: [Incorrect Email]";
		formLabels[2].style="color: red";
		valid = false;
	}
	else {
		formLabels[2].innerHTML="Email:";
		formLabels[2].style="color: black";
		valid = (valid) ? true : false;
	}
	
	var password = document.signupForm.password.value;
	if(password == ""){
		formLabels[3].innerHTML="Password: [Required]";
		formLabels[3].style="color: red";
		valid = false;
	}
	else if(password.length < 8){
		formLabels[3].innerHTML="Password: [Must be > 8]";
		formLabels[3].style="color: red";
		valid = false;
	}
	else {
		formLabels[3].innerHTML="Password:";
		formLabels[3].style="color: black";
		valid = (valid) ? true : false;
	}
	
	var repeatpassword = document.signupForm.repeatpassword.value;
	if(repeatpassword == ""){
		formLabels[4].innerHTML="Repeat password: [Required]";
		formLabels[4].style="color: red";
		valid = false;
	}
	else if(repeatpassword != password){
		formLabels[4].innerHTML="Repeat password: [Must be the same password]";
		formLabels[4].style="color: red";
		valid = false;
	}
	else {
		formLabels[4].innerHTML="Repeat password:";
		formLabels[4].style="color: black";
		valid = (valid) ? true : false;
	}
	
	var age = document.signupForm.age.value;
	if(age < 0 || age > 100){
		formLabels[5].innerHTML="Age: [Must be between 0 and 100]";
		formLabels[5].style="color: red";
		valid = false;
	}
	else if( isNaN(age)){
		formLabels[5].innerHTML="Age: [Age must be a number]";
		formLabels[5].style="color: red";
		valid = false;
	}
	else {
		formLabels[5].innerHTML="Age:";
		formLabels[5].style="color: black";
		valid = (valid) ? true : false;
	}
	
	var mobile = document.signupForm.mobile.value;
	if( isNaN(mobile)){
		formLabels[6].innerHTML="Mobile: [Numbers Only]";
		formLabels[6].style="color: red";
		valid = false;
	}
	else {
		formLabels[6].innerHTML="Mobile:";
		formLabels[6].style="color: black";
		valid = (valid) ? true : false;
	}
  
	return valid;
	
}
