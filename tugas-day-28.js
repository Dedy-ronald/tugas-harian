//Soal Javascript Day 28
//Latihan 1
console.log(7 + 3 * 2);
console.log((7 + 3) * 2);
console.log(17 % 5);
console.log(2 ** 3);
console.log(5 == "5");
console.log(5 === "5");
console.log(true && false);
console.log(true || false);
console.log(!true);
console.log(10 > 5 && 3 > 8);

//Hasil 

// Tebakan: 13
// Hasil asli: 13 ✔
console.log(7 + 3 * 2); // Karena operator (*) diprioritaskan terlebih dahulu, dibandingkan operator (+). Sehingga 3 * 2 = 6, lalu 7 + 6 = 13

// Tebakan: 20
// Hasil asli: 20 ✔
console.log((7 + 3) * 2); // Karena operator dalam kurung diprioritaskan terlebih dahulu, sehingga 7 + 3 = 10, lalu 10 * 2 = 20

// Tebakan: 2
// Hasil asli: 2 ✔
console.log(17 % 5); // Karena operator modulus (%) menghasilkan sisa dari pembagian, sehingga 17 dibagi 5 = 3 sisa 2, maka hasilnya adalah 2

// Tebakan: 8
// Hasil asli: 8 ✔
console.log(2 ** 3); // Karena operator eksponen (**) menghasilkan pangkat dari suatu bilangan, sehingga 2 pangkat 3 = 2 * 2 * 2 = 8

// Tebakan: true
// Hasil asli: true ✔
console.log(5 == "5"); // Karena operator perbandingan (==) membandingkan nilai dari kedua operand, sehingga 5 sama dengan "5" (string) karena JavaScript melakukan konversi tipe data secara otomatis

// Tebakan: false
// Hasil asli: false ✔
console.log(5 === "5"); // Karena operator perbandingan (===) membandingkan nilai dan tipe data dari kedua operand, sehingga 5 (number) tidak sama dengan "5" (string)

// Tebakan: false
// Hasil asli: false ✔
console.log(true && false); // Karena operator logika AND (&&) hanya menghasilkan true jika kedua operand bernilai true, sehingga true && false = false

// Tebakan: true
// Hasil asli: true ✔
console.log(true || false); // Karena operator logika OR (||) hanya menghasilkan false jika kedua operand bernilai false, sehingga true || false = true

// Tebakan: false
// Hasil asli: false ✔
console.log(!true); // Karena operator logika NOT (!) membalikkan nilai dari operand, sehingga !true = false

// Tebakan: false
// Hasil asli: false ✔
console.log(10 > 5 && 3 > 8); // Karena operator logika AND (&&) hanya menghasilkan true jika kedua operand bernilai true, sehingga 10 > 5 = true dan 3 > 8 = false, maka hasilnya adalah false

/* Jawaban Latihan Day 28 bagian 1:
1) Tidak ada yang sulit asal kita memahami operator dan prioritasnya
2)  `7 + 3 * 2` hasilnya `13`, bukan `20` Karena operator perkalian (*) memiliki prioritas lebih tinggi dibandingkan operator penjumlahan (+). Sehingga, 3 * 2 = 6, lalu 7 + 6 = 13.
3) Kenapa `5 == "5"` hasilnya `true`, tetapi `5 === "5"` hasilnya `false` Karena operator `==` melakukan konversi tipe data secara otomatis, sedangkan operator `===` membandingkan nilai dan tipe data secara ketat.
*/

//Latihan 2
const hargaKopi = 18000;
const hargaTeh = 7500;
let jumlahMember = 5;
let sudahMember = true;
let uangDiterima = "51000";

// Total 2 kopi + 2 teh. Seharusnya: 51000
// FIX Menambahkan kurung untuk memastikan operasi penjumlahan dilakukan terlebih dahulu sebelum perkalian
let totalPesanan = (hargaKopi + hargaTeh) * 2;

// Uang diterima sama persis dengan total? Seharusnya: true
let uangPas = parseInt(uangDiterima) == totalPesanan;

// Tambah 1 member baru. Seharusnya jumlahMember jadi 6
// FIX Menambahkan operator penugasan untuk menambahkan jumlahMember
jumlahMember += 1;

// Dapat diskon jika sudah member ATAU total lebih dari 100000. Seharusnya: true
//FIX Menambahkan operator logika OR (||) untuk memeriksa apakah sudahMember bernilai true atau totalPesanan lebih dari 100000
let dapatDiskon = sudahMember || totalPesanan > 100000;

console.log(totalPesanan, uangPas, jumlahMember, dapatDiskon);

/* Jawaban Latihan Day 28 bagian 2:
1) 4 kesalahan tadi dalam satu kalimat singkat masing-masing (apa salahnya, dan perbaikannya apa) ialah:
   - Kesalahan 1: Tidak menggunakan kurung untuk memastikan operasi penjumlahan dilakukan terlebih dahulu. Perbaikan: (hargaKopi + hargaTeh) * 2
   - Kesalahan 2: Tidak menggunakan operator penugasan untuk menambahkan jumlahMember. Perbaikan: jumlahMember += 1
   - Kesalahan 3: Menggunakan operator AND (&&) daripada OR (||) dalam kondisi diskon. Perbaikan: sudahMember || totalPesanan > 100000
   - Kesalahan 4: Tipe data uangDiterima adalah string, sementara totalPesanan adalah number. Perbaikan: uangDiterima = parseInt(uangDiterima)
*/

// Langkah 3: Program Kasir
// 1. Variabel const
const namaBarang = "Mod";
const hargaSatuan = 500000;
const TARIF_PAJAK = 0.11;

// 2. Variabel let
let jumlahBeli = 3;
let uangDibayar = 1800000;

// 3 & 9. Hitung subtotal, pajak, dan totalBayar (menggunakan `()` untuk kejelasan urutan)
let subtotal = hargaSatuan * jumlahBeli;
let pajak = subtotal * TARIF_PAJAK;
let totalBayar = (hargaSatuan * jumlahBeli) + pajak; 

// 4. Penggunaan MINIMAL 2 operator penugasan ringkas (+=, -=, *=, dll)
// Contoh: memberikan diskon member sebesar 50.000 dan pembulatan pajak
let diskon = 50000;
totalBayar -= diskon; // Operator penugasan ringkas 1 (-=)

let biayaLayanan = 2000;
totalBayar += biayaLayanan; // Operator penugasan ringkas 2 (+=)

// 5. Hitung kembalian
let kembalian = uangDibayar - totalBayar;

// 6 & 7. Buat 3 variabel Boolean (menggunakan %, perbandingan, dan logika)
let uangCukup = uangDibayar >= totalBayar;
let gratisOngkir = (subtotal >= 1000000) || (jumlahBeli >= 5); // Menggunakan operator || dan &&
let jumlahGenap = jumlahBeli % 2 === 0; // Menggunakan %

// 8. Tampilkan semua hasil dengan console.log yang rapi
console.log("==================================");
console.log("Barang        : " + namaBarang);
console.log("Harga Satuan  : Rp " + hargaSatuan);
console.log("Jumlah Beli   : " + jumlahBeli);
console.log("Subtotal      : Rp " + subtotal);
console.log("Pajak (11%)   : Rp " + pajak);
console.log("Diskon        : Rp " + diskon);
console.log("Biaya Layanan : Rp " + biayaLayanan);
console.log("Total Bayar   : Rp " + totalBayar);
console.log("Uang Dibayar  : Rp " + uangDibayar);
console.log("Kembalian     : Rp " + kembalian);
console.log("----------------------------------");
console.log("Uang cukup?   : " + uangCukup);
console.log("Gratis ongkir?: " + gratisOngkir);
console.log("Jumlah genap? : " + jumlahGenap);
console.log("==================================");

/* Jawaban Latihan Day 28 bagian 3:

1) Penjelasan variabel Boolean pilihan (`uangCukup`):
   - Arti: Memeriksa apakah uang yang dibayarkan oleh pembeli cukup untuk melunasi total tagihan.
   - Hasil saat ini: `true`.
   - Alasan: Variabel `uangDibayar` bernilai 1.800.000, sedangkan `totalBayar` bernilai 1.617.000. Karena 1.800.000 >= 1.617.000 bernilai benar, maka hasilnya adalah `true`.

2) Mengubah operator `||` menjadi `&&` pada variabel `gratisOngkir`:
   - Ekspresi awal : (subtotal >= 1000000) || (jumlahBeli >= 5) -> Hasil: true (karena subtotal 1.500.000 sudah >= 1.000.000 meskipun jumlah beli < 5).
   - Setelah diubah : (subtotal >= 1000000) && (jumlahBeli >= 5) -> Hasil: false.
   - Penjelasan: Operator `||` (OR) hanya butuh SALAH SATU kondisi bernilai true. Sedangkan operator `&&` (AND) mewajibkan KEDUA kondisi bernilai true. Karena `jumlahBeli` hanya 3 (kurang dari 5), maka hasilnya berubah menjadi `false`.

3) Contoh penggunaan tanda kurung `()` yang mengubah hasil perhitungan:
   - Kode : `(hargaSatuan + 10000) * jumlahBeli` vs `hargaSatuan + 10000 * jumlahBeli`
   - Dengan kurung  : (500000 + 10000) * 3 = 510000 * 3 = 1530000
   - Tanpa kurung   : 500000 + 10000 * 3 = 500000 + 30000 = 530000
   - Penjelasan: Tanda kurung memaksa operasi penjumlahan dilakukan terlebih dahulu sebelum perkalian.
*/