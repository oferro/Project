/**
 * @author oferr
 */



function smalMenu() {
	var x = document.getElementById("mnu").style.display;
/*	alert(x); */
	if ( x === "none") {
		document.getElementById("mnu").style.display = "block";
	} else {
		document.getElementById("mnu").style.display = "none";
	}
/*		alert(x); */
}

function sendMail () {
		var z = document.getElementById("mail-contact");
//		alert(z.email.value )
		var email=('ofer.rotshtein@gmail.com');

		var subject = z.subject.value;
	
	//if (z.frm-email-cc.checked = true){
	//	var cc = z.email.value
	//};
	alert(z.frm-email-cc.checked);
	
	var body = z.frm-bdy.value;
	
	//	document.write( '<a href="
/*	mailto:(' + email +
		'?subject=' +subject+
		'&cc=' +cc+
		'&body=' +body+
		')
		">' + 'Click here to send feedback' + '<' + '/a>');
*/}

			var app = angular.module("galleryApp", []);

			app.controller("galleryCtrl", function($scope, $http) {
					$http.get('json/items.json').success(function(data) {
						$scope.items = data;
				});
			});

