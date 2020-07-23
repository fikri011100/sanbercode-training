//soal no 1
var index = 2;
console.log("LOOPING PERTAMA");
for (var index = 2; index <= 20; index = index + 2) {
  console.log(index + " - I Love Coding");
}
console.log("LOOPING KEDUA");
for (var index = 20; index >= 2; index = index - 2) {
  console.log(index + " - I will become a frontend developer");
}
console.log("\n\n");
//soal no 2
for (var indexTwo = 1; indexTwo <= 20; indexTwo++) {
  if (3 / indexTwo == 1 || 9 / indexTwo == 1 || 15 / indexTwo == 1) {
    console.log(indexTwo + " - I Love Coding");
  } else if (indexTwo % 2 == 0) {
    console.log(indexTwo + " - Berkualitas");
  } else if (indexTwo % 2 == 1) {
    console.log(indexTwo + " - Santai");
  }
}
console.log("\n\n");

//soal no 3
var totalNumberofRows = 7;
var output = "";
for (var i = 1; i <= totalNumberofRows; i++) {
  for (var j = 1; j <= i; j++) {
    output += "#  ";
  }
  console.log(output);
  output = "";
}
console.log("\n\n");

//soal no 4
var kalimat = "saya sangat senang belajar javascript";
var array = kalimat.split(" ");
console.log(array);
console.log("\n\n");

//soal no 5
var daftarBuah = [
  "2. Apel",
  "5. Jeruk",
  "3. Anggur",
  "4. Semangka",
  "1. Mangga",
];
daftarBuah.sort();
console.log(daftarBuah.join(" \n"));
