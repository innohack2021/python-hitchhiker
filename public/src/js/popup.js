'use strict';

function signInSnackbar()
{
	var x = document.getElementById("signinfail");

	// Add the "snackbarshow" class to DIV
	x.className = "snackbarshow";

	// After 3 seconds, remove the show class from DIV
	setTimeout(function(){ x.className = x.className.replace("snackbarshow", ""); }, 3000);
}

function signUpSnackbar()
{
	var x = document.getElementById("signupsuccess");

	// Add the "snackbarshow" class to DIV
	x.className = "snackbarshow";

	// After 3 seconds, remove the show class from DIV
	setTimeout(function(){ x.className = x.className.replace("snackbarshow", ""); }, 3000);
}

