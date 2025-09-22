function validation(){
	var valid = true;
	
	formLabels = document.getElementsByTagName("label");
	
	var email = document.reservationForm.email.value;
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
	
	var password = document.reservationForm.password.value;
	if(password == ""){
		formLabels[1].innerHTML="Password: [Required]";
		formLabels[1].style="color: red";
		valid = false;
	}
	else if(password.length < 8){
		formLabels[1].innerHTML="Password: [Must be > 8]";
		formLabels[1].style="color: red";
		valid = false;
	}
	else {
		formLabels[1].innerHTML="Password:";
		formLabels[1].style="color: black";
		valid = (valid) ? true : false;
	}
	
	var age = document.reservationForm.age.value;
	if(age < 0 || age > 100){
		formLabels[2].innerHTML="Age: [Must be between 0 and 100]";
		formLabels[2].style="color: red";
		valid = false;
	}
	else if( isNaN(age)){
		formLabels[2].innerHTML="Age: [Age must be a number]";
		formLabels[2].style="color: red";
		valid = false;
	}
	else {
		formLabels[2].innerHTML="Age:";
		formLabels[2].style="color: black";
		valid = (valid) ? true : false;
	}
	
	var mobile = document.reservationForm.mobile.value;
	if( isNaN(mobile)){
		formLabels[3].innerHTML="Mobile: [Numbers Only]";
		formLabels[3].style="color: red";
		valid = false;
	}
	else {
		formLabels[3].innerHTML="Mobile:";
		formLabels[3].style="color: black";
		valid = (valid) ? true : false;
	}
	
	return valid;
}

function clear2(){
	var myArray = new Array();
	myArray[0] = "Email: *";
	myArray[1] = "Password: *";
	myArray[2] = "Age:";
	myArray[3] = "Mobile:";
	for(var i=0 ; i < myArray.length ; i++){
		formLabels[i].innerHTML = myArray[i];
		formLabels[i].style = "color: black";
	}
}


