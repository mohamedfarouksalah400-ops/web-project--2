var counter = 1;

function next1(){
	var slideshow = document.getElementById("slideshow1");
	if(counter != 3){
		counter++;
	}
	else {
		counter = 1;
	}
	slideshow1.src = "images/"+counter+".jpeg";
}

function prev1(){
	var slideshow = document.getElementById("slideshow1");
	if(counter != 1){
		counter--;
	}
	else {
		counter = 3;
	}
	slideshow1.src = "images/"+counter+".jpeg";
}
setTimeout(next1, 2000);

function next2(){
	var slideshow = document.getElementById("slideshow2");
	if(counter != 2){
		counter++;
	}
	else {
		counter = 1;
	}
	slideshow2.src = "slideshowimages/"+counter+".jpg";
}

function prev2(){
	var slideshow = document.getElementById("slideshow2");
	if(counter != 1){
		counter--;
	}
	else {
		counter = 2;
	}
	slideshow2.src = "slideshowimages/"+counter+".jpg";
}
setTimeout(next2, 2000);

function next3(){
	var slideshow = document.getElementById("slideshow3");
	if(counter != 2){
		counter++;
	}
	else {
		counter = 1;
	}
	slideshow3.src = "slideshowimages1/"+counter+".jpg";
}

function prev3(){
	var slideshow = document.getElementById("slideshow3");
	if(counter != 1){
		counter--;
	}
	else {
		counter = 2;
	}
	slideshow3.src = "slideshowimages1/"+counter+".jpg";
}
setTimeout(next1, 2000);