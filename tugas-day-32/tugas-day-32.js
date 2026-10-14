//TUGAS DAY 32

//Langkah 1

//Potongan A
let menu = ["Kopi", "Teh", "Roti", "Susu"];

menu.push("Jus");
menu.unshift("Air");
let terakhirDibuang = menu.pop();
let pertamaDibuang = menu.shift();
menu.splice(1, 1);
let irisan = menu.slice(1, 3);

console.log(terakhirDibuang);
console.log(pertamaDibuang);
console.log(menu);
console.log(irisan);
console.log(menu.indexOf("Susu"));
console.log(menu.indexOf("Nasi"));
console.log(menu.includes("Kopi"));
console.log(menu[menu.length - 1]);

/* Tebakan Output:                  Hasil Output:
Susu                                Jus
Kopi                                Air
Kopi, Teh, Roti, Susu               Kopi, Roti, Susu
Teh, Roti, Susu                     Roti, Susu
3                                   2
-1 - Tidak ditemukan                -1
true                                true
Susu                                Susu
*/

// Potongan B
function tambah(a, b) {
  return a + b;
}

function cetakTambah(a, b) {
  console.log(a + b);
}

let x = tambah(2, 3);
let y = cetakTambah(2, 3);
console.log(x);
console.log(y);

/* Tebakan Output:
5
5
undefined
*/

// Potongan C
const hitungDiskonPersen = (harga, persen = 10) => harga - (harga * persen) / 100;
console.log(hitungDiskonPersen(50000, 20));
console.log(hitungDiskonPersen(50000));

function cekAngka(n) {
  if (n < 0) {
    return "negatif";
    console.log("Baris ini muncul atau tidak?");
  }
  return "bukan negatif";
}

console.log(cekAngka(-5));
console.log(cekAngka(5));

/* Tebakan output:                  Hasil Output:
49,900                              40000
49,050                              45000
negatif                             negatif
bukan negatif 5                     bukan negatif
*/

/* Jawaban:
1. Pada Potongan A, Karena slice() bertindak sebagai penyalin/pemotong bagian tertentu tanpa merusak array aslinya, sedangkan splice() bekerja langsung dengan memodifikasi/mengubah struktur array aslinya (menu), Mengubah array asli (Mutating): push(), unshift(), pop(), shift(), splice() Sedangkan yang Tidak mengubah array asli (Non-mutating): slice(), indexOf(), includes().
2. Pada Potongan B, Perbedaannya adalah tambah menggunakan kata kunci return untuk mengembalikan nilai hasil operasi keluar fungsi sehingga nilainya dapat ditampung ke dalam variabel (x) sedangkan cetakTambah langsung menampilkan output ke terminal menggunakan console.log di dalam tubuh fungsinya tanpa mengembalikan nilai apa pun. Karena fungsi cetakTambah tidak memiliki keyword return, secara otomatis fungsi tersebut mengembalikan nilai kosong (undefined) yang kemudian ditampung ke dalam variabel y
3. Pada Potongan C, `hitungDiskonPersen(50000)` tetap menghasilkan angka Karena menggunakan fitur Default Parameter (persen = 10). Ketika parameter kedua tidak diisi saat pemanggilan fungsi, JavaScript secara otomatis memakai nilai 10.baris `console.log("Baris ini muncul atau tidak?")` tercetak Tidak Karena baris tersebut berada tepat di bawah perintah return "negatif";. Di dalam pemrograman, begitu kata kunci return dieksekusi, fungsi akan langsung berhenti bekerja dan keluar dari blok kode tersebut. Kode apa pun yang ditulis setelah return disebut sebagai dead code (kode mati) dan tidak akan pernah dieksekusi
*/

//Langkah 2

// FIX: Pindahkan deklarasi hitungTotal ke atas sebelum dipanggil agar terhindar dari error hoisting
const hitungTotal = (subtotal, pajak) => subtotal + pajak;

let daftarBelanja = ["Kopi", "Teh", "Roti"];

// FIX: Menggunakan push() alih-alih unshift() agar "Susu" ditambahkan di akhir array
daftarBelanja.push("Susu");

// FIX: Menggunakan splice(1, 1) alih-alih slice() agar array asli termutasi dan "Teh" terhapus
daftarBelanja.splice(1, 1);

// FIX: Menggunakan includes("Roti") alih-alih indexOf() agar menghasilkan nilai boolean (true)
let adaRoti = daftarBelanja.includes("Roti");

// FIX: Menggunakan length - 1 karena indeks array dimulai dari 0
let terakhir = daftarBelanja[daftarBelanja.length - 1];

// FIX: Menambahkan kata kunci return agar fungsi mengembalikan hasil perhitungan diskon
function hitungDiskon(harga, persen) {
  return harga - (harga * persen) / 100;
}

// FIX: Menghapus kurung kurawal atau menambahkan return (implicit return) pada arrow function
const hitungPajak = (subtotal) => subtotal * 0.11;

console.log(daftarBelanja, adaRoti, terakhir);
console.log(hitungDiskon(100000, 20));
console.log(hitungPajak(80000));

// Total dengan pajak
console.log(hitungTotal(80000, 8800));

/* Jawaban:
1. 1)Tambah elemen: Menggunakan unshift() yang menaruh item di awal, diperbaiki menjadi push() untuk menaruhnya di akhir.
    2)Hapus elemen: Menggunakan slice() yang tidak mengubah array asli, diperbaiki menjadi splice() yang memutasi array.
    3)Cek keberadaan: Menggunakan indexOf() yang mengembalikan angka indeks, diperbaiki menjadi includes() yang menghasilkan nilai boolean.
    4)Elemen terakhir: Mengakses length murni yang menghasilkan undefined, diperbaiki dengan length - 1.
    5)Fungsi Diskon: Kurang kata kunci return di dalam fungsi biasa, diperbaiki dengan menambahkan return.
    6)Arrow Function Pajak: Menggunakan kurung kurawal {} tanpa return eksplisit, diperbaiki dengan menghapus kurung kurawal agar menjadi implicit return.
    7)Hoisting Total: Memanggil arrow function hitungTotal sebelum dideklarasikan, diperbaiki dengan memindahkan deklarasinya ke baris paling atas.
2. Kesalahan yang Menyebabkan Error vs Hasil Salah:
    Menyebabkan Error di Console (ReferenceError): Memanggil arrow function hitungTotal sebelum dideklarasikan di bawahnya (karena arrow function dengan const tidak mengalami hoisting).
    Tidak Error tetapi Hasilnya Salah/undefined: Enam kesalahan lainnya (seperti salah pakai method array, salah indeks length, tidak ada kata kunci return, dan salah penulisan blok arrow function). Kode berjalan tanpa crash, namun outputnya meleset dari ekspektasi.
3. Pada hitungDiskon (regular function), perhitungan dilakukan di dalam blok {} tanpa menggunakan kata kunci return, sehingga fungsi tidak mengembalikan nilai apa pun ke luar.
    Pada hitungPajak (arrow function), penggunaan kurung kurawal {} mewajibkan kita menuliskan return secara manual jika ingin mengembalikan nilai. Karena tidak ditulis, fungsi tersebut mengembalikan undefined secara otomatis.
*/


// LANGKAH 3: PROGRAM KASIR

const kasirNamaMenu = ["Kopi Susu", "Es Teh", "Roti Bakar", "Nasi Goreng", "Jus Jeruk"];
const kasirHargaMenu = [18000, 7500, 15000, 22000, 12000];
let kasirKeranjang = [];

// 1. Pengelolaan Keranjang menggunakan Array Methods
kasirKeranjang.push("Nasi Goreng");      // Menambah di akhir
kasirKeranjang.push("Roti Bakar");       // Menambah di akhir
kasirKeranjang.push("Kopi Susu");        // Menambah di akhir
kasirKeranjang.unshift("Es Teh");        // Menambah prioritas di depan
let itemDibatalkan = kasirKeranjang.pop(); // Membatalkan satu item terakhir ("Kopi Susu")
kasirKeranjang.splice(1, 1, "Jus Jeruk");  // Mengganti satu item di indeks 1

// Pembuktian Pertanyaan 1: push() mengubah array asli
console.log("--- Bukti Mutasi Array push() ---");
let testArray = ["A", "B"];
console.log("Sebelum push:", testArray); // [ 'A', 'B' ]
testArray.push("C");
console.log("Sesudah push:", testArray); // [ 'A', 'B', 'C' ] (Array asli berubah!)

// 2. Cek item dengan includes dan ambil paket cepat dengan slice
console.log("\n--- Cek Item & Paket Cepat ---");
console.log("Apakah 'Es Teh' ada di keranjang?:", kasirKeranjang.includes("Es Teh"));
let paketCepat = kasirKeranjang.slice(0, 3);
console.log("Paket Cepat (3 item pertama):", paketCepat);

// 3. Function Pertama (Function Declaration): kasirCariHarga
function kasirCariHarga(namaMenu) {
  let index = kasirNamaMenu.indexOf(namaMenu);
  if (index !== -1) {
    return kasirHargaMenu[index];
  }
  return 0;
}

// 4. Function Kedua (Function Expression): kasirHitungSubtotal
const kasirHitungSubtotal = function(keranjang) {
  let subtotal = 0;
  for (let i = 0; i < keranjang.length; i++) {
    subtotal += kasirCariHarga(keranjang[i]);
  }
  return subtotal;
};

// 5. Function Ketiga (Arrow Function dengan block & return): kasirHitungDiskon
const kasirHitungDiskon = (subtotal) => {
  if (subtotal >= 100000) {
    return subtotal * 0.15;
  } else if (subtotal >= 50000) {
    return subtotal * 0.10;
  } else if (subtotal >= 25000) {
    return subtotal * 0.05;
  } else {
    return 0;
  }
};

// 6. Function Keempat (Arrow Function ringkas + default parameter): kasirHitungPajak
const kasirHitungPajak = (nilai, tarif = 0.11) => nilai * tarif;

// 7. Function Kelima: kasirCetakStruk
function kasirCetakStruk(subtotal, diskon, pajak, keranjang) {
  console.log("===== STRUK PEMBAYARAN KASIR =====");
  console.log("Daftar Item:");
  for (let i = 0; i < keranjang.length; i++) {
    console.log(`${i + 1}. ${keranjang[i]} - Rp${kasirCariHarga(keranjang[i])}`);
  }
  let subtotalSetelahDiskon = subtotal - diskon;
  let totalAkhir = subtotalSetelahDiskon + pajak;

  console.log("----------------------------------");
  console.log(`Subtotal : Rp${subtotal}`);
  console.log(`Diskon   : Rp${diskon}`);
  console.log(`Pajak    : Rp${pajak}`);
  console.log(`Total    : Rp${totalAkhir}`);
  console.log("==================================");
}

// 8 & 9. UJI 2 SKENARIO

// Skenario 1: Keranjang bernilai total >= 50000 (Mendapat diskon 10%)
console.log("\n>>> MENJALANKAN SKENARIO 1 <<<");
kasirKeranjang = ["Nasi Goreng", "Nasi Goreng", "Es Teh"]; // Subtotal: 22000 + 22000 + 7500 = 51500
let sub1 = kasirHitungSubtotal(kasirKeranjang);
let diskon1 = kasirHitungDiskon(sub1);
let pajak1 = kasirHitungPajak(sub1 - diskon1); // Pajak dihitung setelah diskon
kasirCetakStruk(sub1, diskon1, pajak1, kasirKeranjang);

/* Hasil Skenario 1:
Subtotal: Rp51500
Diskon  : Rp5150
Pajak   : Rp5098.5
Total   : Rp51448.5
*/


// Skenario 2: Keranjang bernilai total >= 100000 (Mendapat diskon 15%)
console.log("\n>>> MENJALANKAN SKENARIO 2 <<<");
kasirKeranjang = ["Nasi Goreng", "Nasi Goreng", "Kopi Susu", "Roti Bakar"]; // Subtotal: 22000 + 22000 + 18000 + 15000 = 77000... mari kita perbesar agar >= 100000
kasirKeranjang = ["Nasi Goreng", "Nasi Goreng", "Nasi Goreng", "Nasi Goreng", "Kopi Susu"]; // Subtotal: (22000*4) + 18000 = 106000
let sub2 = kasirHitungSubtotal(kasirKeranjang);
let diskon2 = kasirHitungDiskon(sub2);
let pajak2 = kasirHitungPajak(sub2 - diskon2);
kasirCetakStruk(sub2, diskon2, pajak2, kasirKeranjang);

/* Hasil Skenario 2:
Subtotal: Rp106000
Diskon  : Rp15900
Pajak   : Rp9911
Total   : Rp100011
*/


// BONUS: FUNCTION KASIR BATALKAN ITEM

function kasirBatalkanItem(namaMenu) {
  let index = kasirKeranjang.indexOf(namaMenu);
  if (index !== -1) {
    kasirKeranjang.splice(index, 1);
    return true;
  }
  return false;
}

console.log("\n--- Uji Coba Bonus: Batalkan Item ---");
console.log("Keranjang sebelum:", kasirKeranjang);
console.log("Batalkan 'Kopi Susu' (Ada):", kasirBatalkanItem("Kopi Susu"));   // true
console.log("Batalkan 'Es Krim' (Tidak ada):", kasirBatalkanItem("Es Krim")); // false
console.log("Keranjang sesudah:", kasirKeranjang);


// PENGUJIAN HOISTING (Jawaban Pertanyaan 6)
// console.log(kasirHitungSubtotalSebelum("Test")); // Baris ini jika diaktifkan akan menyebabkan Error: Cannot access 'kasirHitungSubtotalSebelum' before initialization
const kasirHitungSubtotalSebelum = (param) => param;