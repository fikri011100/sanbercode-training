//soal no 1
function halo() {
  return "Halo Sanbers!!";
}

console.log(halo()); //halo sanbers
console.log("\n");

//soal no 2
function kalikan(p1, p2) {
  var p3 = p1 * p2;
  return p3;
}

var num1 = 12;
var num2 = 4;

var hasilKali = kalikan(num1, num2);
console.log(hasilKali); // 48
console.log("\n");

//soal no 3
function introduce(p1, p2, p3, p4) {
  var hasil;
  hasil =
    "Nama saya " +
    p1 +
    ", Umur saya " +
    p2 +
    " tahun, alamat saya di " +
    p3 +
    ", dan saya punya hobby yaitu " +
    p4 +
    "!";
  return hasil;
}

var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan); // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di jalan belum jadi, dan saya punya hobby yaitu Gaming!"
