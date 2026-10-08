const namaUsaha = "Kopi Senja";
const kotaUsaha = "Yogyakarta";
const tahunBerdiri = "2020";
const TARIF_PAJAK = 0.11;
let statusBuka = true
let website;
let website = null;
var jumlahProduk = 3;

let produk = ["Kopi Susu", "Es Teh Manis", "Roti Bakar"];
let hargaProduk = [18000, 7500, 15000];

console.log(namausaha);
Console.log("Kota: " + kotaUsaha);
console.log("Tahun berdiri berikutnya: " + (tahunBerdiri + 1));

TARIF_PAJAK = 0.12;
let hargaKopiSetelahPajak = hargaProduk[0] x (1 + TARIF_PAJAK);
console.log("Harga kopi + pajak: " + hargaKopiSetelahPajak);

let hargaTermurah = Math.min(hargaProduk[0], hargaProduk[1], hargaProduk[2]);
console.log("Termurah: " + hargaTermurah);
console.log("Produk ke-4: " + produk[3]);