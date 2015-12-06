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

function sendMail() {
	var z = document.getElementById("mail-contact");
	var email = ('ofer.rotshtein@gmail.com');
	var subject = 'From Site:' + z.subject.value;
//	if (z.frm-email-cc.checked) {
//		var cc = z.email.value;
//	};
	var body = z.frm-bdy.value;
	document.getElementById("mail").href = 
	'mailto:' + email +
	'?subject=' +subject+
	'&cc=' +cc+
	'&body=' +body
	;
	//		">' + 'Click here to send feedback' + '<' + '/a>');
}

function printPage() {
	window.print();
}

