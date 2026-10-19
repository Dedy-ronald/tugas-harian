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

