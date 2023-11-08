function alertSuccess(message, timeout, alert_id){
var myAlert = document.getElementById(alert_id);
if ( myAlert.classList.contains('alert-danger') ) {
				myAlert.classList.remove('alert-danger');
				myAlert.classList.add('alert-success');
				
			} else {
				myAlert.classList.add('alert-success');
			}
			myAlert.innerHTML = message;
			myAlert.classList.toggle("d-none");
			setTimeout(function(){closeAlert(alert_id);}, 3000);
}

function alertDanger(message, timeout, alert_id) {
var myAlert = document.getElementById(alert_id);
if ( myAlert.classList.contains('alert-success') ) {
			myAlert.classList.remove('alert-danger');
			myAlert.classList.add('alert-success');
			
		} else {
			myAlert.classList.add('alert-success');
		}
		myAlert.innerHTML = message;
		myAlert.classList.toggle("d-none");
		setTimeout(function(){closeAlert(alert_id);}, 3000);
}

function closeAlert(alert_id){
	var myAlert = document.getElementById(alert_id);
	myAlert.classList.add("d-none");
}