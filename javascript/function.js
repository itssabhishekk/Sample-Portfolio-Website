/* function to check the validity of the form*/
function validateForm() {
	var fname = document.forms["messageForm"]["firstName"].value;
	var lname = document.forms["messageForm"]["lastName"].value;
	var gender = document.forms["messageForm"]["gender"].value;
	var email = document.forms["messageForm"]["email"].value;
	var message = document.forms["messageForm"]["Message"].value;

			/* if all fields are empty*/
			if (fname == "" && lname == "" && email == "" && message == ""){
				alert("Please fill up the form.");
			}
			/* if First name is only empty*/
			else if (fname == "") {
				alert("First Name is left empty. Please fill the form.");
			}
			/* if Last name is only empty*/
			else if (lname == ""){
				alert("Last Name is left empty, please fill it");
			}
			/* if email is only empty*/
			else if (email == ""){
				alert("Email not entered, please fill it.");
			}
			/* if message is only empty*/
			else if (message == ""){
				alert("Plese fill the message");
			}
			/* if nothing is empty and everything is filled*/
			else{
				alert("Thank you for the feedback.");
				}
			}

/* function to hide-display the division on a click on the button*/
function myFunction() {
  	var x = document.getElementById("myDIV");
  			/* if the division's display is hidden then it will show on the click*/
	  		if (x.style.display === "none") {
	  				  		x.style.display = "block";
	  		} 
	  		/* if the division's display is shown then it will hide on the click*/
	  		else {
	   						x.style.display = "none";
	 		}
		}