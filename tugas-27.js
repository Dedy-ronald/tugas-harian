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
3  | let website & let website=null | Error | Pendeklerasian ulang pada variabel menggunakan let di cakupan yang sama | Hapus salah satunya
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

//1. Object Usaha
 let usaha = {
    namaUsaha:"Asavs",
    namaPemilik:"Mr.Ded",
    kotaUsaha:"Djogjakarta",
    tahunBerdiri:2027,
    statusBuka:"09.00 - 01.00",
    nomorWhatsapp:"081234567890",
    website: null 
 };

 //2. Array daftarProduk
 let daftarProduk = [
    { nama: "Mod", harga: 500000},
    { nama: "AIO", harga: 1000000},
    { nama: "Pod", harga: 200000},
    { nama: "Lq", harga: 150000}, //Produk ke-4 yang ditambahkan
    ];

//3. Cetak ke Console
console.log("Nama Usaha", usaha.namaUsaha); //Notasi Titik
console.log("Kota Usaha", usaha["kotaUsaha"]); //Notasi Kurung Siku
console.log("Produk Pertama", daftarProduk [0]); //Indeks Pertama
console.log("Produk Terakhir", daftarProduk [daftarProduk.length - 1]); //Indeks Terakhir

/*
Jawaban Singkat:
1) nomor WhatsApp (contoh `"08123456789"`) lebih tepat disimpan sebagai **string** karena jika disimpan sebagai number (contoh:081234567890), Javascript akan menganggap nol diawal tidak bernilai dan otomatis merubahnya 81234567890.
2) `website` diberi `null`, bukan dibiarkan tanpa nilai seperti di kode awal karena website diberi null untuk menunjukkan kesengajaan bahwa properti tersebut memang ada tetapi belum/tidak memiliki nilai saat ini.
    Perbedaan 'null' dan 'undefined' adalah 'null' nilainya sengaja dikosongkan oleh si programmer sedangkan 'undefined' variabel atau properti yang belum dideklarasikan atau belum pernah diberi nilai oleh Javascript.
3) `daftarProduk[4]` tidak berisi produk ke-4, dan apa yang tercetak jika kamu mengaksesnya Array di JavaScript menggunakan zero-based indexing (penomoran indeks dimulai dari angka 0). Produk ke-1 berada di indeks 0, produk ke-2 di indeks 1, produk ke-3 di indeks 2, dan produk ke-4 berada di indeks 3.
    Jika kita mengakses daftarProduk[4], JavaScript akan mencari elemen di posisi ke-5. Karena elemen tersebut tidak ada di dalam array, maka yang tercetak di console adalah undefined.
*/

//---Langkah 3 Perhitungan dan Tampilan---
const TAHUN_SEKARANG = 2030;
const usiaUsaha = TAHUN_SEKARANG - usaha.tahunBerdiri;

//1. Perhitungan harga setelah pajak
const hargaProduk0Pajak = daftarProduk[0].harga * (1 + TARIF_PAJAK);
const hargaProduk1Pajak = daftarProduk[1].harga * (1 + TARIF_PAJAK);
const hargaProduk2Pajak = daftarProduk[2].harga * (1 + TARIF_PAJAK);

//2. Perhitungan harga Termurah dan Termahal
const hargaTermura = Math.min(hargaProduk0Pajak,hargaProduk1Pajak,hargaProduk2Pajak);
const hargaTermahal = Math.max(hargaProduk0Pajak,hargaProduk1Pajak,hargaProduk2Pajak);

// Format status dan website agar tampil rapi
const statusTampil = usaha.statusBuka ? "Buka" : "Tutup";
const websiteTampil = usaha.website || "Belum Ada";

//4. Tampilan Rapi Menggunakan Template Literal
const kartuUsaha = `
===== KARTU USAHA =====
Nama Usaha  : ${usaha.namaUsaha}
Pemilik     : ${usaha.namaPemilik}
Kota        : ${usaha.kotaUsaha}
Usia Usaha  : ${usiaUsaha} tahun
Status      : ${statusTampil}
Website     : ${websiteTampil}

Daftar Produk (harga + PPN 11%):
1. ${daftarProduk[0].nama}     : Rp ${hargaProduk0Pajak}
2. ${daftarProduk[1].nama}  : Rp ${hargaProduk1Pajak}
3. ${daftarProduk[2].nama}    : Rp ${hargaProduk2Pajak}

Termurah : Rp ${hargaTermurah}
Termahal : Rp ${hargaTermahal}
=======================
`;
 
console.log(kartuUsaha);
/*
Jawaban singkat tugas ke-3:
1)Alasan Pemilihan `const` atau `let`:
   Semua variabel pada langkah ini (`TAHUN_SEKARANG`, `usiaUsaha`, `hargaProduk0Pajak`, `hargaProduk1Pajak`, `hargaProduk2Pajak`, `hargaTermurah`, `hargaTermahal`, `statusTampil`, `websiteTampil`, dan `kartuUsaha`) menggunakan `const`.
   Alasannya: Nilai dari masing-masing variabel ini hanya dihitung/diformat satu kali dari data dasar dan tidak perlu diubah kembali (di-assign ulang) di sepanjang jalannya program. Menggunakan `const` lebih tepat karena menjaga keamanan data agar tidak tersenggol/tertumpuk nilai baru secara tidak sengaja.
2)Perhitungan Manual Produk "Mod":
   - Harga Awal = Rp 500.000
   - TARIF_PAJAK = 0.11
   - Rumus = Harga Awal * (1 + TARIF_PAJAK)
   - Langkah Hitung = 500.000 * 1.11 = 555.000
   - Hasil Manual = Rp 555.000
   
   Perbandingan:
   Program menghasilkan angka 555000 untuk 'hargaProduk0Pajak'. Hasil perhitungan manual sama persis dengan hasil yang dicetak oleh program.
3)Pembuktian Jika Harga Produk di Object/Array Diubah:
   - Kode Pembuktian:
     daftarProduk[0].harga = 600000;
     console.log("Variabel yang sudah dihitung:", hargaProduk0Pajak); // Tetap tercetak 555000

   - Penjelasan:
     Hasil perhitungan yang sudah disimpan ke dalam variabel bertipe data primitif (number/string) tidak akan ikut berubah secara otomatis. JavaScript menganut prinsip pass-by-value untuk tipe data primitif, artinya variabel 'hargaProduk0Pajak' menyimpan hasil eksekusi perhitungan pada saat baris tersebut dijalankan. Jika data asli di array diubah belakangan, kita harus menghitung ulang dan membuat ulang string template literal-nya agar nilai di layar ikut terbarui.
*/