// Langkah 1

// Potongan A
const nama = "Global";

function luar() {
  const nama = "Luar";

  function dalam() {
    const nama = "Dalam";
    console.log(nama);          // Output: Dalam
  }

  dalam();
  console.log(nama);            // Output: Luar 
}

luar();
console.log(nama);              // Output: Global

const diskonGlobal = 10;

function hitung(harga) {
  const diskonLokal = 5;
  return harga - diskonGlobal - diskonLokal;
}

console.log(hitung(100));       // Output: 85

if (true) {
  let pesanBlok = "di dalam blok";
  console.log(pesanBlok);       // Output: di dalam blok
}

for (let i = 0; i < 2; i++) {
  console.log("putaran", i);    // Output: putaran 0
}                               // Output: putaran 1

// console.log(pesanBlok);         // Output: Error
// console.log(i);                 // Output: Error

// Potongan B
console.log(sapa());            // Output: Halo!

function sapa() {
  return "Halo!";
}

console.log(warna);             // Output: Undefined
var warna = "biru";
console.log(warna);             // Output: biru

/*console.log(lokasi);            // Output: Error karena const mengalami dead zone
const lokasi = "Sleman";*/

/* console.log(salam());                           // Output: Error karena menggunakan const sehingga tidak di hoist
const salam = function () { return "Hai"; };*/

// Potongan C
function buatPenghitung() {
  let hitungan = 0;

  return function () {
    hitungan++;
    return hitungan;
  };
}

const penghitungA = buatPenghitung();
const penghitungB = buatPenghitung();

console.log(penghitungA());             // Output: 1
console.log(penghitungA());             // Output: 2
console.log(penghitungA());             // Output: 3
console.log(penghitungB());             // Output: 1
console.log(penghitungA());             // Output: 4

/*
Jawaban Langkah 1:
1) Pada potongan A, tiga `console.log(nama)` menghasilkan nilai yang berbeda karena konsep Variable Shadowing dan Scope Chain (Rantai Cakupan). JavaScript mencari variabel mulai dari cakupan yang paling dekat (lokal). Di dalam(), ada variabel nama bernilai "Dalâm". Di luar(), ada "Luar". Di luar fungsi, ada "Global". Masing-masing fungsi memiliki ruang lingkupnya sendiri.
    `hitung(100)` tetap bisa memakai `diskonGlobal` karena diskonGlobal dideklarasikan di luar fungsi (cakupan global). Fungsi di dalam dapat mengakses variabel yang berada di cakupan luar atau global di atasnya (namun tidak sebaliknya).
    `pesanBlok` dan `i` error di luar blok karena let memiliki sifat Block Scope (hanya hidup di dalam blok {} tempat ia dideklarasikan, seperti di dalam if atau for). Begitu blok selesai, variabel tersebut dihapus dari memori.
2) Pada potongan B, `sapa()` bisa dipanggil sebelum didefinisikan karena mekanisme Hoisting pada Function Declaration. JavaScript mengangkat deklarasi fungsi ke bagian paling atas dari cakupannya sebelum kode dieksekusi.
    sedangkan `warna` bernilai `undefined`, dan `lokasi` serta `salam` menimbulkan error karena Variabel yang dibuat dengan var juga di-hoist, tetapi hanya deklarasinya, bukan nilainya (assignment). Sehingga saat dipanggil sebelum diisi, nilainya masih undefined dan karena variabel yang dideklarasikan dengan let atau const (termasuk Function Expression menggunakan const) masuk ke dalam Temporal Dead Zone (TDZ). Mereka tidak bisa diakses sama sekali sebelum baris kodenya dieksekusi secara nyata.
3) Pada potongan C, `penghitungA` terus bertambah padahal `buatPenghitung` sudah selesai dijalankan? Kenapa `penghitungB` mulai dari 1 lagi karena Ini adalah konsep Closure. Fungsi di dalam (return function()) tetap "mengingat" dan memiliki akses ke variabel hitungan yang berada di fungsi luarnya (buatPenghitung), meskipun fungsi luarnya sudah selesai dieksekusi. Variabel hitungan terikat aman di dalam memori fungsi tersebut dan Karena penghitungB memanggil fungsi buatPenghitung() yang baru secara terpisah. Ini membuat instance (lingkungan memori) baru dengan variabel hitungan-nya sendiri yang terisolasi dari penghitungA.
Tips Penutup: semua tebakanku sudah tepat, bagian yang paling sering mengecoh biasanya adalah Temporal Dead Zone (const/let) pada Potongan B serta bagaimana Closure menyimpan memori terpisah pada Potongan C.
*/


// Langkah 2

// Cek stok. Seharusnya tercetak: Stok aman
const stok = 10;
if (stok > 5) {
  var pesanStok = "Stok aman";  // FIX: Pindahkan deklarasi variabel keluar blok (atau console.log ke dalam blok) agar dapat diakses    
}
console.log(pesanStok);

// Potongan 10%. Seharusnya tercetak: 45000
function hitungPotongan(harga) {
  const potongan = harga * 0.1;
  return harga - potongan;
}
// FIX: Tangkap nilai return dari fungsi ke dalam variabel agar bisa dicetak
const potongan = hitungPotongan(50000);
console.log(potongan);

// Sambutan. Seharusnya tercetak: Selamat datang di Kedai Senja
// FIX: Ubah 'const' menjadi 'function declaration' agar bisa di-hoist (atau pindahkan console.log ke bawah deklarasi)
function sambutan() {
  return "Selamat datang di Kedai Senja";
}
console.log(sambutan());

// Kota. Seharusnya tercetak: Yogyakarta
// FIX: Ubah 'let' menjadi 'var' agar tidak terkena Temporal Dead Zone saat dipanggil sebelum dideklarasikan
var kota = "Yogyakarta";
console.log(kota);

// Total awal 100000. Diskon 90000 hanya dipakai di dalam blok.
// Seharusnya setelah blok, total tetap: 100000
var total = 100000;
if (true) {
  // FIX: Ubah 'var' menjadi 'let' agar variabel 'total' di dalam blok bersifat block scope dan tidak menimpa variabel global
  let total = 90000;
}
console.log(total);

// Saldo kas. Seharusnya setelah tambahKas(50000): 150000
let saldoKas = 100000;
function tambahKas(jumlah) {
  // FIX: Hapus kata 'let' agar fungsi mengubah variabel 'saldoKas' di luar (global/outer scope), bukan mendeklarasikan variabel lokal baru
  saldoKas += jumlah;
}
tambahKas(50000);
console.log(saldoKas);

// Nomor antrean. Seharusnya tercetak: 1 2 3
function buatAntrean() {
  // FIX: Pindahkan variabel 'nomor' ke luar fungsi inner agar nilainya diingat (closure) dan tidak selalu di-reset jadi 0 setiap kali dipanggil
  let nomor = 0;
  return function () {
    nomor++;
    return nomor;
  };
}
const ambilNomor = buatAntrean();
console.log(ambilNomor(), ambilNomor(), ambilNomor());

// Dompet. Seharusnya setelah belanja(30000), cekSaldo() mengembalikan: 70000
function buatDompet(saldoAwal) {
  let saldo = saldoAwal;
  return {
    belanja(jumlah) {
      saldo -= jumlah;
    },
    cekSaldo() {
      // FIX: Ubah 'this.saldo' menjadi 'saldo' agar langsung mengakses variabel dari closure (karena bukan properti objek 'this')
      return saldo;
    },
  };
}
const dompet = buatDompet(100000);
dompet.belanja(30000);
console.log(dompet.cekSaldo());

/* 
Jawaban Langkah 2:
1) Rangkuman 8 Kesalahan dan Perbaikannya:
Masalah Stok: pesanStok menggunakan let (block scope) sehingga tidak bisa diakses di luar blok if. Perbaikan: Ubah menjadi var atau pindahkan console.log ke dalam blok.

Masalah Potongan: Fungsi hitungPotongan() mengembalikan nilai tetapi tidak ditampung oleh variabel. Perbaikan: Simpan hasil fungsi ke dalam variabel const potongan.

Masalah Sambutan: Menggunakan Function Expression dengan const yang dipanggil sebelum dideklarasikan. Perbaikan: Ubah menjadi Function Declaration agar bisa di-hoist dengan sempurna.

Masalah Kota: Variabel let kota dipanggil sebelum dideklarasikan sehingga terkena Temporal Dead Zone. Perbaikan: Ubah menggunakan var agar bernilai undefined alih-alih error, atau pindahkan cetakan ke bawah.

Masalah Total: Penggunaan var di dalam blok if mendeklarasikan ulang variabel global. Perbaikan: Ubah menjadi let agar cakupannya terbatas di dalam blok saja.

Masalah Saldo Kas: Adanya deklarasi ulang let saldoKas = 0 di dalam fungsi yang menciptakan variabel lokal baru. Perbaikan: Hapus kata kunci let agar fungsi memodifikasi variabel global di luar.

Masalah Nomor Antrean: Variabel let nomor = 0 ditarik ke dalam fungsi inner, sehingga nilainya selalu di-reset jadi 0 setiap kali dipanggil. Perbaikan: Pindahkan deklarasi let nomor = 0 ke fungsi luar (buatAntrean).

Masalah Dompet: Penggunaan this.saldo di dalam objek, padahal variabel saldo dideklarasikan sebagai variabel lokal biasa di dalam fungsi, bukan sebagai properti objek (this.saldo). Perbaikan: Ubah menjadi return saldo;.

2. Mana yang Error vs Hasil Salah Tanpa Error?
Menyebabkan Error di Console:

Kasus ke-3 (sambutan karena ReferenceError akses const sebelum inisialisasi).

Kasus ke-4 (kota karena ReferenceError terkena Temporal Dead Zone).

Tidak Error tetapi Hasilnya Salah (Logical Error):

Kasus ke-1 (pesanStok error ReferenceError).

Kasus ke-2 (potongan bernilai undefined).

Kasus ke-5 (total tercetak 90000 alih-alih 100000).

Kasus ke-6 (saldoKas tetap 100000 tidak bertambah).

Kasus ke-7 (tercetak 1 1 1 alih-alih 1 2 3).

Kasus ke-8 (tercetak undefined alih-alih 70000).

3. Kenapa let saldoKas = 0 di dalam tambahKas membuat variabel luar tidak berubah?
Karena adanya Variable Shadowing. Penulisan let saldoKas di dalam fungsi membuat JavaScript menganggap itu adalah variabel lokal baru yang independen dan hanya hidup di dalam fungsi tersebut. Variabel saldoKas di luar fungsi sama sekali tidak tersentuh.

4. Kenapa this.saldo menghasilkan undefined?
Karena saldo dideklarasikan sebagai variabel lokal biasa di dalam fungsi buatAntrean, bukan sebagai properti dari objek penampungnya (this). Di dalam JavaScript, this merujuk pada objek tempat fungsi itu dipanggil (objek return), dan karena objek tersebut tidak pernah mendefinisikan properti bernama saldo, maka hasilnya undefined. Mengaksesnya langsung melalui nama variabel (saldo) memanfaatkan mekanisme Closure.
*/