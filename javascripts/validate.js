//
// FORM VALIDATION
function validate(myForm) {
	// SET VARS
	var message = 'The following fields are required:\n\n';
	var message2 = '';
	var error = 0;
	var i;
	//
	// CHECK FOR REQUIRED FIELDS
	for (i=0; i<myForm.elements.length; i++) {
		if (myForm.elements[i].name.substr(myForm.elements[i].name.length-2, 2) == "_r") {
			if (myForm.elements[i].value == '') {
				error = 1;
				if (myForm.elements[i].name.substr(myForm.elements[i].name.length-4, 2) == "_n") {
					var myName = myForm.elements[i].name.substr(0, myForm.elements[i].name.length-4);
				} else if (myForm.elements[i].name.substr(myForm.elements[i].name.length-4, 2) == "_p") {
					var myName = myForm.elements[i].name.substr(0, myForm.elements[i].name.length-4);
				} else {
					var myName = myForm.elements[i].name.substr(0, myForm.elements[i].name.length-2);
				}
				message += '- '+myName.replace(/_/g, " ")+'\n';
			}
		}
	}
	//
	// CHECK FOR FIELDS THAT NEED TO BE NUMBERS ONLY
	for (i=0; i<myForm.elements.length; i++) {
		if (myForm.elements[i].name.substr(myForm.elements[i].name.length-4, 2) == "_n" && myForm.elements[i].value !== '') {
			if (isNaN(myForm.elements[i].value) || myForm.elements[i].value == "") {
				error = 1;
				var myName = myForm.elements[i].name.substr(0, myForm.elements[i].name.length-4);
				message2 += myName.replace(/_/g, " ")+' Can Only Have Numbers!\n\n';
			}
		}
	}
	//
	// VALIDATE PHONE NUMBERS
	for (i=0; i<myForm.elements.length; i++) {
		if (myForm.elements[i].name.substr(myForm.elements[i].name.length-4, 2) == "_p" && myForm.elements[i].value !== '') {
			if (!isPhoneNumber(myForm.elements[i].value)) {
				error = 1;
				var myName = myForm.elements[i].name.substr(0, myForm.elements[i].name.length-4);
				message2 += myName.replace(/_/g, " ")+' Is Formatted Incorrectly!\nCorrect Format: 555-555-1234\n\n';
			}
		}
	}
	//
	// VALIDATE THE EMAIL ADDRESS
	if (myForm.Email_r.value !== '') {
		if (!validateEmail(myForm.Email_r.value,0,0)) {
			error = 1;
			message2 += 'Invalid Email Format!\n\n';
		  }
	}
  	//
	// SEE IF THERE WERE ERRORS AND OUTPUT
	if (error == 0) {
		return true;
	} else {
		if (message.length > 36) {
			alert (message);
		}
		if (message2 != '') {
			alert (message2);
		};
		return false;
	}
}
//
// EMAIL VALIDATION SCRIPT
// Email Validation Javascript
// copyright 23rd March 2003, by Stephen Chapman, Felgall Pty Ltd

// You have permission to copy and use this javascript provided that
// the content of the script is not changed in any way.

function validateEmail(addr,man,db) {
	if (addr == '' && man) {
	   if (db) alert('email address is mandatory');
	   return false;
	}
	var invalidChars = '\/\'\\ ";:?!()[]\{\}^|';
	for (i=0; i<invalidChars.length; i++) {
	   if (addr.indexOf(invalidChars.charAt(i),0) > -1) {
		  if (db) alert('email address contains invalid characters');
		  return false;
	   }
	}
	for (i=0; i<addr.length; i++) {
	   if (addr.charCodeAt(i)>127) {
		  if (db) alert("email address contains non ascii characters.");
		  return false;
	   }
	}
	
	var atPos = addr.indexOf('@',0);
	if (atPos == -1) {
	   if (db) alert('email address must contain an @');
	   return false;
	}
	if (atPos == 0) {
	   if (db) alert('email address must not start with @');
	   return false;
	}
	if (addr.indexOf('@', atPos + 1) > - 1) {
	   if (db) alert('email address must contain only one @');
	   return false;
	}
	if (addr.indexOf('.', atPos) == -1) {
	   if (db) alert('email address must contain a period in the domain name');
	   return false;
	}
	if (addr.indexOf('@.',0) != -1) {
	   if (db) alert('period must not immediately follow @ in email address');
	   return false;
	}
	if (addr.indexOf('.@',0) != -1){
	   if (db) alert('period must not immediately precede @ in email address');
	   return false;
	}
	if (addr.indexOf('..',0) != -1) {
	   if (db) alert('two periods must not be adjacent in email address');
	   return false;
	}
	var suffix = addr.substring(addr.lastIndexOf('.')+1);
	if (suffix.length != 2 && suffix != 'com' && suffix != 'net' && suffix != 'org' && suffix != 'edu' && suffix != 'int' && suffix != 'mil' && suffix != 'gov' & suffix != 'arpa' && suffix != 'biz' && suffix != 'aero' && suffix != 'name' && suffix != 'coop' && suffix != 'info' && suffix != 'pro' && suffix != 'museum') {
	   if (db) alert('invalid primary domain in email address');
	   return false;
	}
	return true;
}
//
// PHONE FORMAT
function isPhoneNumber(s) {
	// Check for correct phone number
	rePhoneNumber = new RegExp(/^\d{3}\-\d{3}\-\d{4}$/);
	if (!rePhoneNumber.test(s)) {
		return false;
		}
	return true;
}
//
// DATE OF BIRTH FORMAT
function valDOB(dob) {
	reDOB = new RegExp(/^\d{1,2}\/\d{1,2}\/\d{4}$/);
	if (!reDOB.test(dob)) {
		return false;
		}
	return true;
}