//soal no 1

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992];
var arrayDaftarPeserta = {
  nama: "Asep",
  "jenis kelamin": "laki-laki",
  hobi: "baca buku",
  "tahun lahir": 1992,
};
console.debug(arrayDaftarPeserta);
console.log("\n");

//soal no 2
var arrayDaftarBuah = [
  { nama: "strawberry", warna: "merah", "ada bijinya": "tidak", harga: 9000 },
  { nama: "jeruk", warna: "oranye", "ada bijinya": "ada", harga: 8000 },
  {
    nama: "Semangka",
    warna: "Hijau & Merah",
    "ada bijinya": "ada",
    harga: 10000,
  },
  { nama: "Pisang", warna: "Kuning", "ada bijinya": "tidak", harga: 5000 },
];
console.log(arrayDaftarBuah[0]);
console.log("\n");

//soal no 3
var dataFilm = [];
var index = 0;

function addFilm(p1, p2, p3, p4) {
  dataFilm[index] = { nama: p1, durasi: p2, genre: p3, tahun: p4 };
  index++;
}

addFilm("Avengers End game", "3 jam 8 menit", "Action", 2019);
addFilm("Money Heist", "2 jam", "Crime", 2020);
addFilm("Star Wars", "3 jam 40 menit", "Action", 2019);
console.debug(dataFilm);

//soal no 4
class Animal {
  constructor(name) {
    this.name = name;
    this.legs = 4;
    this.cold_blooded = false;
  }
}

var sheep = new Animal("shaun");

console.log(sheep.name); // "shaun"
console.log(sheep.legs); // 4
console.log(sheep.cold_blooded); // false

class Ape extends Animal {
  constructor(name) {
    super(name);
    this.legs = 2;
  }
  yell() {
    console.log("Auooo");
  }
}
class Frog extends Animal {
  constructor(name) {
    super(name);
  }
  jump() {
    console.log("hop hop");
  }
}

var sungokong = new Ape("kera sakti");
sungokong.yell();

var kodok = new Frog("buduk");
kodok.jump();

//soal no 5
class Clock {
  constructor({ template }) {
    this.template = template;
  }
  render() {
    var date = new Date();
    var hours = date.getHours();
    if (hours < 10) hours = "0" + hours;
    var mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;
    var secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;
    var output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);
    console.log(output);
  }
  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

var clock = new Clock({ template: "h:m:s" });
clock.start();
