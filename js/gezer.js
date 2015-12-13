/**
 * @author oferr
 */

function smalMenu() {
	var x = document.getElementById("mnu").style.display;
	if (x === "block") {
		document.getElementById("mnu").style.display = "none";
	} else {
		document.getElementById("mnu").style.display = "block";
	}
}

function isEmpty (val){
	return !val;
}

function sendMail() {

//  Bring the field data from the form
	var name = document.getElementById("frm1-name");
	var phone = document.getElementById("frm1-phone");
	var email = ('ofer.rotshtein@gmail.com');
	var frmBody = document.getElementById("frm-bdy1");
	var frmSubject = document.getElementById("subject1");
	var cc = " ", body = " ";

//	Validity check
	if (isEmpty(name.value)){
		name.setCustomValidity("נא למלא את שמך כך שנוכל לחזור אליך באופן אישי");
		return;
	} else {
		name.setCustomValidity("");
	}
	if (isEmpty(phone.value)){
		phone.setCustomValidity("נא למלא מספר טלפון שנוכל לחזור אליך ...");
		return;
	} else {
		phone.setCustomValidity("");
	}
	if (isEmpty(frmSubject.value)){
		frmSubject.setCustomValidity("נא למלא את מהות הפניה ...");
		return;
	} else {
		frmSubject.setCustomValidity("");
	}

//	mack the MAILTO:
	if (document.getElementById("frm-email-cc").checked) {
		var cc = document.getElementById("email1").value;
	};
	subject = 'מהאתר אינטרנט: ' + name.value + ' - ' + frmSubject.value;
	body = 'התקבל מ: ' + name.value + ' - ' + phone.value + '%0D%0A' + frmBody.value.replace(/\n/g, "%0D%0A")+ '%0D%0A'  + '%0D%0A' + window.location.href;

//	Send the mail from the client side
	window.open('mailto:' + email + '?subject=' + subject + '&cc=' + cc + '&body=' + body);
}

function sendMailSideLogo() {

//  Bring the field data from the form
	var name = document.getElementById("frm2-name");
	var phone = document.getElementById("frm2-phone");
	var email = ('ofer.rotshtein@gmail.com');
	var frmSubject = document.getElementById("subject2");
	var frmBody = document.getElementById("frm-bdy2");
	var cc = " ", body = " ";

//	Validity check
	if (isEmpty(name.value)){
		name.setCustomValidity("נא למלא את שמך כך שנוכל לחזור אליך באופן אישי");
		return;
	} else {
		name.setCustomValidity("");
	}
	if (isEmpty(phone.value)){
		phone.setCustomValidity("נא למלא מספר טלפון שנוכל לחזור אליך ...");
		return;
	} else {
		phone.setCustomValidity("");
	}
	if (isEmpty(frmSubject.value)){
		frmSubject.setCustomValidity("נא למלא את מהות הפניה ...");
		return;
	} else {
		frmSubject.setCustomValidity("");
	}

//	mack the MAILTO:
	if (document.getElementById("frm-email-cc2").checked) {
		var cc = document.getElementById("email2").value;
	};
	subject = 'מהאתר אינטרנט: ' + name.value + ' - ' + frmSubject.value;
	body = 'התקבל מ: ' + name.value + ' - ' + phone.value + '%0D%0A' + frmBody.value.replace(/\n/g, "%0D%0A")+ '%0D%0A'  + '%0D%0A' + window.location.href;

//	Send the mail from the client side
	window.open('mailto:' + email + '?subject=' + subject + '&cc=' + cc + '&body=' + body);
}

function printPage() {
	window.print();
}

