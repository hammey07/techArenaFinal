function clicked() {
	// Declaring a variable 'score' to add points to it if they user inputs correct answer. 
	
	var email= document.getElementById("email").value;
	var comment =document.getElementById("comments").value;
	var div1 = document.getElementById('userName');
	var div2 = document.getElementById('feedbackResult');

	
	if ((email=="")||(comment=="")) {
	!alert("Please make sure all fields are entered before pressing 'Submit' button");
}
else {
!alert("Your feedback has been Published!");	
div1.innerHTML = email+ ": (wrote on : "+Date()+")";
div2.innerHTML = comment;
}

}

