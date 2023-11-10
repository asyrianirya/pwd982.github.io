# asyrianirya.github.io
Asyrianirya WEB

## Content Resources
```
FORMAT{ 
	+ FILES 	= FILENAME.EXT ("PATH_TO_FILE") : SOURCE_FILE(DEFAULT= THIS_FILE);
	+ FUNCTIONAL 	= [
		HYPERLINK 	: ELEMENT_CAPTION ("DESTINATION_LINK_ADDRESS") : SOURCE_FILE(DEFAULT= THIS_FILE);
		SCRIPT		: FUNCTION_NAME_OR_SCRIPT_CONTENT : SOURCE_FILE(DEFAULT= THIS_FILE);
		ELEMENTS 	: ELEMENT_CAPTION AS TYPE
	]
}
##-----------------------
dir https://github.com/asyrianirya/asyrianirya.github.io/tree/main
Homepage (index.html) {
	+ FILES {
		+ .CSS {
			+ bootstrap.min.css ("assets\css\bootstrap-5.3.2\bootstrap.min.css");
			+ style.css ("style.css");
			+ my.css (assets\css\my.css);
		}
		
		+ Hacked-KerX.ttf (my.css) ("..\\css\\theme\\Hacked-KerX.ttf")
		
		+ .JS {
			+ jquery-3.7.1.slim.min.js ("assets\js\add\jquery-3.7.1.slim.min.js");
			+ popper.min.js ("assets\js\add\popper.min.js");
			+ bootstrap.min.js ("assets\js\bootstrap-5.3.2\bootstrap.min.js");
		}
	}
	+ FUNCTIONAL {
		+ HYPERLINK{
			+ [Home, Features, FAQs, About, Login, Learn more] ("https://i.pinimg.com/736x/95/69/d2/9569d2648349a3b2780e060762b29bfc.jpg");
			+ Register ("register\registrasi.html");
			+ Bootstrap ("https://getbootstrap.com/");
			+ @mdo ("https://twitter.com/mdo");
		}
		+ ELEMENTS {
			+ "ASYRIANIRYA | Homepage" AS PAGE_TITLE
			+ "Home" AS CURRENT_ACTIVE_NAVIGATION_LINK
			+ ["Features", "FAQs", "About"] AS NAVIGATION_LINK
		}
	
	}
}

dir https://github.com/asyrianirya/asyrianirya.github.io/tree/main/register
Registration (registrasi.html) {
	+ Resources {
		+ .CSS {
			+ style.css ("style.css");
			+ bootstrap.min.css ("..\assets\css\bootstrap-5.3.2\bootstrap.min.css");
		}
		
		+ .JS {
			+ jquery-3.7.1.slim.min.js ("..\assets\js\add\jquery-3.7.1.slim.min.js");
			+ popper.min.js ("..\assets\js\bootstrap-5.3.2\bootstrap.bundle.min.js");
			+ asyalert.js ("..\assets\js\asyalert.js");
			+ gettimedate.js ("..\assets\js\gettimedate.js");
			+ tooltip.js (..\assets\js\tooltip.js);
		}
		
		+ SCRIPT{
			+ onclick="aturNilaiTanggal('TANGGAL_REGISTRASI');
			+ window.jQuery || document.write();
			+ const alertId;
			+ const inputFormScript;
			+ function formControl(alert_id,URL){};
			+ formControl(alertId, inputFormScript);
			+ asyalert.js
			+ gettimedate.js
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

## Feedback

Jika kamu mempunyai saran, rekomendasi atau kritik untuk pengembangan web ini, silahkan menuju ke halaman register > silahkan isi pesan di kolom keterangan, terimakasih^^.

