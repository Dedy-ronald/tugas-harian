const namaUsaha = "Kopi Senja";
const kotaUsaha = "Yogyakarta";
const tahunBerdiri = 2020; //FIX Diubah ke number agar aritmatika dapat beroperasi + 1 menjadi 2021
const TARIF_PAJAK = 0.11;
let statusBuka = true; //FIX Menambahkan tanda titik petik ; agar menjadi pembatas dari suatu statement 
//FIX Menghapus bagian let website karena tabrakan dengan variabel bawahnya
let website = null;
var jumlahProduk = 3;

let produk = ["Kopi Susu", "Es Teh Manis", "Roti Bakar"];
let hargaProduk = [18000, 7500, 15000];

console.log(namaUsaha); //FIX Diperbaiki menggunakan penulisan camelCase 
console.log("Kota: " + kotaUsaha); //FIX Mengubah yang awalnya Console.log menjadi console.log 
console.log("Tahun berdiri berikutnya: " + (tahunBerdiri + 1));

/*TARIF_PAJAK = 0.12;*/ //FIX Mengnonaktifkan barisan ini karena variabel const tidak bisa diubah nilainya
let hargaKopiSetelahPajak = hargaProduk[0] * (1 + TARIF_PAJAK); //FIX Mengubah operator x menjadi *
console.log("Harga kopi + pajak: " + hargaKopiSetelahPajak);

let hargaTermurah = Math.min(hargaProduk[0], hargaProduk[1], hargaProduk[2]);
console.log("Termurah: " + hargaTermurah);
console.log("Produk ke-4: " + (produk[3] || "Tidak Ditemukan")); //FIX Menangani akses index diluar jangkauan undefined

/*
Catatan Bug:

No | Baris/bagian | Jenis (Error / Tidak error tapi salah) | Penyebab | Perbaikan
1  | const tahunBerdiri = "2020" | Tidak error tapi salah | "2020" dibaca string bukan number | Diubah menjadi 2020
2  | let statusBuka = true | Error | tidak ada tanda titik petik | menambahkan tanda ; diakhir statement let statusBuka = true;
3  | let website & let webiste=null | Error | Pendeklerasian ulang pada variabel menggunakan let di cakupan yang sama | Hapus salah satunya
4  | console.log(namausaha); |Error | Tidak memakai penulisan camelCase sesuai pendeklerasiannya | Mengubahnya menjadi console.log(namaUsaha);
5  | Console.log("Kota: " + kotaUsaha); | Error | Salahnya penulisan Console.log | Mengubahnya menjadi console.log("Kota: " + kotaUsaha);
6  | *TARIF_PAJAK = 0.12; | Error | Variabel const tidak bisa diubah nilainya | Mengnonaktifkan barisan ini
7  | let hargaKopiSetelahPajak = hargaProduk[0] x (1 + TARIF_PAJAK); | Error | Menggunakan operator x | Mengubah operator x menjadi *
8  | console.log("Produk ke-4: " + produk[3]); | Error | Adanya akses index diluar jangkauan underfined | console.log("Produk ke-4: " + (produk[3] || "Tidak Ditemukan"))

Jawaban singkat:
1) `namausaha` dan `namaUsaha` berbeda karena Javascript bersifat sensitive terhadap besar kecilnya satu huruf.
2) baris `TARIF_PAJAK = 0.12;` ditolak, sementara mengubah `statusBuka` diperbolehkan karena TARIF_PAJAK dideklarasikan menggunakan const sehingga nilainya bersifat konstan dan tidak diubah sedangkan `statusBuka` diperbolehkan karena dideklarasikan menggunakan let sehingga nilainya bersifat dinamis dan dapat diubah.
3) `"2020" + 1` menghasilkan `"20201"` karena variabel string jika menggunakan operator + akan melakukan penggabungan sedangkan number akan melakukan penjumlahan aritmatika dan perubahan yang saya lakukan adalah mengubahnya dari variabel string menjadi variabel number
*/