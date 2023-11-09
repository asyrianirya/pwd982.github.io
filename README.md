# asyrianirya.github.io
Asyrianirya WEB

## Content Resources
```
FORMAT{ 
	+ FILES 	= FILENAME.EXT ("PATH_TO_FILE") : SOURCE_FILE(DEFAULT= THIS_FILE)[LINE][COLUMN];
	+ FUNCTIONAL 	= [
		HYPERLINK 	: ELEMENT_CAPTION ("DESTINATION_LINK_ADDRESS") : SOURCE_FILE(DEFAULT= THIS_FILE)[LINE][COLUMN];
		SCRIPT		: FUNCTION_NAME_OR_SCRIPT_CONTENT : SOURCE_FILE(DEFAULT= THIS_FILE)[LINE][COLUMN];
		ELEMENTS 	: ELEMENT_CAPTION AS TYPE
	]
}
##-----------------------
dir https://github.com/asyrianirya/asyrianirya.github.io/tree/main
Homepage (index.html) {
	+ FILES {
		+ .CSS {
			+ bootstrap.min.css ("assets\css\bootstrap-5.3.2\bootstrap.min.css") : [12][5];
			+ cover.css ("assets\css\theme\cover.css") : [12][80];
		}
		
		+ 559128.jpg ("assets\css\theme\background\559128.jpg") : cover.css[32][3];
		
		+ .JS {
			+ jquery-3.7.1.slim.min.js ("assets\js\add\jquery-3.7.1.slim.min.js") : [46][5];
			+ popper.min.js ("assets\js\add\popper.min.js") : [46][190];
			+ bootstrap.min.js ("assets\js\bootstrap-5.3.2\bootstrap.min.js") : [46][241];
		}
	}
	+ FUNCTIONAL {
		+ HYPERLINK{
			+ Features ("https://2.bp.blogspot.com/-ps5i5PzKSf4/Wvm0bFrflTI/AAAAAAAAASw/1VFgfGaybtIdDFwq3ypUBQy7wwnO_g7CQCLcBGAs/s320/tapi-boong-9.jpg") : [24][13];
			+ Contact ("https://1.bp.blogspot.com/-thKujO7-NUU/Wvm0WVhExNI/AAAAAAAAASI/IHvn-3gheukClpuZyF0pePtlMSNoitdbACLcBGAs/s320/tapi-boong-10.jpg") : [25][13];
			+ Register ("register\registrasi.html") : [26][13];
			+ Learn more ("https://i.pinimg.com/736x/95/69/d2/9569d2648349a3b2780e060762b29bfc.jpg") : [36][11];
			+ Bootstrap ("https://getbootstrap.com/") : [42][33];
			+ @mdo ("https://twitter.com/mdo") : [42][87];
		}
		+ ELEMENTS {
			+ "ASYRIANIRYA | Homepage" AS PAGE_TITLE
			+ "Home" AS CURRENT_ACTIVE_NAVIGATION_LINK
			+ "Features" AS NAVIGATION_LINK
			+ "Contact" AS NAVIGATION_LINK
			+ "Register" AS NAVIGATION_LINK
			+ "Learn more" AS BUTTON
		}
	
	}
}

dir https://github.com/asyrianirya/asyrianirya.github.io/tree/main/register
Registration (registrasi.html) {
	+ Resources {
		+ .CSS {
			+ style.css ("style.css"): [7][5];
			+ bootstrap.min.css ("..\assets\css\bootstrap-5.3.2\bootstrap.min.css"): [7][45];
		}
		
		+ .JS {
			+ jquery-3.7.1.slim.min.js ("..\assets\js\add\jquery-3.7.1.slim.min.js"): [8][5];
			+ popper.min.js ("..\assets\js\bootstrap-5.3.2\bootstrap.bundle.min.js"): [8][70];
			+ asyalert.js ("..\assets\js\asyalert.js"): [130][5];
			+ gettimedate.js ("..\assets\js\gettimedate.js"): [131][5];
		}
		
		+ SCRIPT{
			+ onclick="aturNilaiTanggal('TANGGAL_REGISTRASI'): [79][78];
			+ window.jQuery || document.write() : [94][5];
			+ const alertId : [96][5];
			+ const inputFormScript : [97][5];
			+ function formControl(alert_id,URL){} : [99][5];
			+ formControl(alertId, inputFormScript); : [128][5]
			+ asyalert.js
			+ gettimedate.js
			+ $(document).ready(function(){ $('[data-toggle="tooltip"]').tooltip();}); : [134][5];
		}
		
		+ ELEMENTS {
			+ "REGISTRASI" AS PAGE_TITLE;
			+ "NAMA_LENGKAP" AS FORM_INPUT_TEXTBOX;
			+ "JENIS_KELAMIN" AS FORM_INPUT_TEXTBOX;
			+ "TEMPAT_LAHIR" AS FORM_INPUT_TEXTBOX;
			+ "TANGGAL_LAHIR" AS FORM_INPUT_TEXTBOX;
			+ "ALAMAT" AS FORM_INPUT_TEXTBOX;
			+ "EMAIL" AS FORM_INPUT_TEXTBOX;
			+ "KONTAK" AS FORM_INPUT_TEXTBOX;
			+ "TANGGAL_REGISTRASI" AS INVISIBLE_IMMUTABLE_FORM_INPUT_TEXTBOX;
			+ "Kirim Registrasi" AS FORM_SUBMIT_BUTTON;
		}
	}
}
```
