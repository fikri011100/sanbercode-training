//soal no 1

const lingkaran = (r) => {
  const phi = Math.PI;
  //initialitation
  let luasLingkaran = phi * (r * r);
  let kelilingLingkaran = 2 * phi * r;

  return `Hasil Luas lingkaran: ${luasLingkaran} \nHasil Keliling lingkaran: ${kelilingLingkaran}`;
};

console.log(lingkaran(7));
console.log("\n");

//soal no 2
let kalimat = "";
const gabungKata = (kalimat) => {
  const kataPertaman = "saya";
  const kataKedua = "adalah";
  const kataKetiga = "seorang";
  const kataKeempat = "frontend";
  const kataKelima = "developer";

  kalimat = `${kataPertaman} ${kataKedua} ${kataKetiga} ${kataKeempat} ${kataKelima}`;
  return kalimat;
};
console.log(gabungKata(kalimat));
console.log("\n");

//soal no 3

class Book {
  constructor(name, totalPage, price) {
    this.CName = name;
    this.CTotalPage = totalPage;
    this.CPrice = price;
  }
  message() {
    return `Judul buku : ${this.CName}\nTotal Halaman : ${this.CTotalPage} halaman\nHarga Buku : ${this.CPrice}`;
  }
}

class Comic extends Book {
  constructor(name, totalPage, price, isColorful) {
    super(name, totalPage, price);
    this.CIsColorful = isColorful;
  }
  fullMessage() {
    return this.message() + `\nTambahan Komik ${this.CIsColorful}`;
  }
}

cmc = new Comic("Avatar", 100, 150000, "Berwarna");
console.log(cmc.fullMessage());
