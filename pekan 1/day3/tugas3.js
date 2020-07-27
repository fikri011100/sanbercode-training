//soal ke1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

console.log(
  kataPertama + " " + kataKedua + " " + kataKetiga + " " + kataKeempat
);

//soal ke2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";
var total = 0;
console.log("Kata Pertama = " + parseInt(kataPertama));
console.log("Kata Kedua = " + parseInt(kataKedua));
console.log("Kata Ketiga = " + parseInt(kataKetiga));
console.log("Kata Keempat = " + parseInt(kataKeempat));
total =
  parseInt(kataPertama) +
  parseInt(kataKedua) +
  parseInt(kataKetiga) +
  parseInt(kataKeempat);
console.log("Total Angka = " + total);

//soal ke3
var kalimat = "wah javascript itu keren sekali";

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18);
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25, 31);

console.log("Kata Pertama: " + kataPertama);
console.log("Kata Kedua: " + kataKedua);
console.log("Kata Ketiga: " + kataKetiga);
console.log("Kata Keempat: " + kataKeempat);
console.log("Kata Kelima: " + kataKelima);

//soal ke4
var nilai = 70;
if (nilai >= 80) {
  console.log("Index = A");
} else if (nilai >= 70 && nilai < 80) {
  console.log("Index = B");
} else if (nilai >= 60 && nilai < 70) {
  console.log("Index = C");
} else if (nilai >= 50 && nilai < 60) {
  console.log("Index = D");
} else {
  console.log("Index = EEE");
}

//soal ke5
var tanggal = 1;
var bulan = 11;
var tahun = 2000;
var tglLahir;

switch (bulan) {
  case 1:
    bulan = "Januari";
    break;
  case 2:
    bulan = "Februari";
    break;
  case 3:
    bulan = "Maret";
    break;
  case 4:
    bulan = "April";
    break;
  case 5:
    bulan = "Mei";
    break;
  case 6:
    bulan = "Juni";
    break;
  case 7:
    bulan = "Juli";
    break;
  case 8:
    bulan = "Agustus";
    break;
  case 9:
    bulan = "September";
    break;
  case 10:
    bulan = "Oktober";
    break;
  case 11:
    bulan = "November";
    break;
  case 12:
    bulan = "Desember";
    break;
}

if (tanggal.toString().length == 1) {
  tanggal = "0" + tanggal;
}

tglLahir = tanggal + "/" + bulan + "/" + tahun;
console.log("Tanggal Lahir = " + tglLahir);
