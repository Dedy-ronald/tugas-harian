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
