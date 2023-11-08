function aturNilaiTanggal(elementId) {
	var element = document.getElementById(elementId);

		var sekarang = new Date();
		var tahun = sekarang.getFullYear();
		var bulan = String(sekarang.getMonth() + 1).padStart(2, '0'); 
		var tanggal = String(sekarang.getDate()).padStart(2, '0');
		var jam = String(sekarang.getHours()).padStart(2, '0');
		var menit = String(sekarang.getMinutes()).padStart(2, '0');
		var detik = String(sekarang.getSeconds()).padStart(2, '0');

	dmy = tanggal + "/" + bulan + "/" + tahun;
	hms = jam + ":" + menit + ":" + detik;
	element.value = dmy + " " + hms;
}