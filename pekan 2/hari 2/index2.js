//Soal 2
var readBooksPromise = require("./promise.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
];

function readBook(waktu, urutan) {
  readBooksPromise(waktu, books[urutan])
    .then(function (timeLeft) {
      console.log(timeLeft);
      if (timeLeft > 0 && urutan + 1 < books.length) {
        readBook(timeLeft, urutan + 1);
      } else {
        console.log("I already done, read this books");
      }
    })
    .catch(function (salah) {
      console.log(salah);
    });
}

readBook(10000, 0);
