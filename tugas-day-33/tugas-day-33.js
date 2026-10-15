// TUGAS DAY 33

// Potongan A
const produk = { nama: "Kopi Susu", harga: 18000, stok: 10 };

produk.harga = 20000;
produk.kategori = "minuman";
delete produk.stok;
let kunci = "nama";

console.log(produk.nama);
console.log(produk[kunci]);
console.log(produk["harga"]);
console.log(produk.stok);
console.log("kategori" in produk);
console.log("stok" in produk);
console.log(Object.keys(produk));
console.log(Object.values(produk));

/* Tebakan Output:
Kopi Susu
Kopi Susu
20000
undefined
true
false
["nama", "harga", "kategori"]
["Kopi Susu", 20000, "minuman"]
*/

// Potongan B
const dompet = {
  pemilik: "Rina",
  saldo: 50000,

  belanja(jumlah) {
    this.saldo -= jumlah;
    return this.saldo;
  },

  cekSaldo() {
    console.log(this.pemilik + ": Rp " + this.saldo);
  },
};

let sisa = dompet.belanja(20000);
console.log(sisa);
dompet.cekSaldo();
dompet.belanja(10000);
dompet.cekSaldo();
console.log(dompet.saldo);

/* Tebakan Output:
30000
Rina: Rp 30000
Rina: Rp 20000
20000
*/

// Potongan C
const hari = ["Senin", "Selasa"];

for (let nilai of hari) {
  console.log(nilai);
}

for (let indeks in hari) {
  console.log(indeks);
}

const kopi = { nama: "Kopi", harga: 18000 };

for (let kolom in kopi) {
  console.log(kolom + ": " + kopi[kolom]);
}

for (let huruf of "Kopi") {
  console.log(huruf);
}

//for (let x of kopi) { console.log(x); }
/* Tebakan Output:
Senin
Selasa
0
1
nama: Kopi
harga: 18000
K
o
p
i
Error kopi is not iterable
*/

/* Jawaban:
1) beda `produk.nama` dan `produk[kunci]` adalah sama-sama mengakses properti `nama` dari objek `produk`, tetapi cara mengaksesnya berbeda. `produk.nama` menggunakan notasi titik, sedangkan `produk[kunci]` menggunakan notasi bracket dengan variabel `kunci` yang berisi string "nama".`produk.stok` hasilnya `undefined` karena properti `stok` telah dihapus dari objek `produk`.
2) `dompet.saldo` di akhir bernilai 20000, padahal `belanja(10000)` tidak disimpan ke variabel karena method `belanja` mengembalikan nilai sisa saldo setelah pengurangan, tetapi tidak mengubah properti `saldo` secara langsung. Namun, karena method `belanja` menggunakan `this.saldo -= jumlah`, maka properti `saldo` pada objek `dompet` tetap diperbarui. yang dirujuk oleh `this` adalah objek `dompet` itu sendiri, sehingga setiap kali method `belanja` dipanggil, properti `saldo` pada objek `dompet` akan diperbarui sesuai dengan jumlah yang dibelanjakan.
3) `for...in` pada array menghasilkan `0` dan `1`, bukan `"Senin"` dan `"Selasa"` karena `for...in` digunakan untuk mengiterasi properti enumerable dari objek, termasuk indeks array. Sedangkan `for...of` digunakan untuk mengiterasi nilai-nilai dari iterable, seperti array, sehingga menghasilkan `"Senin"` dan `"Selasa"`. Pada objek `kopi`, `for...in` digunakan untuk mengiterasi properti-properti dari objek tersebut, sehingga menghasilkan `"nama: Kopi"` dan `"harga: 18000"`. Namun, `for...of` tidak dapat digunakan pada objek karena objek tidak iterable, sehingga menghasilkan error "kopi is not iterable".`for...of` pada object `kopi` menghasilkan error karena objek tidak memiliki iterator default, sehingga tidak dapat digunakan dalam loop `for...of`.
*/

// Langkah 2

const warung = {
  nama: "Warung Senja",
  saldoKas: 100000,

  // Fix menambahkan this.saldoKas dengan jumlah. Seharusnya mengembalikan sisa saldoKas
  tambahKas(jumlah) {
    this.saldoKas += jumlah;
  },

  // Fix: Menembahkan return this.saldoKas. Seharusnya mengurangi this.saldoKas dengan jumlah dan mengembalikan sisa saldoKas
  ambilKas(jumlah) {
    this.saldoKas -= jumlah;
    return this.saldoKas;
  },
};

warung.tambahKas(50000);
console.log(warung.saldoKas);
console.log(warung.ambilKas(30000));

// Fix: Mengubah properti no-wa menjadi noWa. Seharusnya tercetak: 08123
const kontak = { noWa: "08123" };
console.log(kontak.noWa);

// Fix mengubah properti kataSandi menjadi undefined. Seharusnya tercetak: { nama: "Rina", kataSandi: undefined }
const akun = { nama: "Rina", kataSandi: "abc123" };
akun.kataSandi = undefined;
console.log(akun);

// Fix mencetak semua isi array menu. Seharusnya: Kopi, Teh, Roti
const menu = ["Kopi", "Teh", "Roti"];
for (let i = 0; i < menu.length; i++) {
  console.log(menu[i]);
}

// Fix mencetak semua properti object info. Seharusnya: nama: Warung Senja, kota: Yogyakarta
const info = { nama: "Warung Senja", kota: "Yogyakarta" };
for (let kolom in info) {
  console.log(kolom + ": " + info[kolom]);
}

// Fix mencetak semua properti object info. Seharusnya: ["nama", "kota"]
console.log(Object.keys(info));

/* Jawaban:
1) ke-7 kesalahan tadi dalam satu kalimat singkat masing-masing (apa salahnya, dan perbaikannya apa) adalah:
    1) `tambahKas` tidak mengembalikan nilai sisa saldoKas, sehingga perlu menambahkan `return this.saldoKas;` di akhir method.
    2) `ambilKas` tidak mengembalikan nilai sisa saldoKas, sehingga perlu menambahkan `return this.saldoKas;` di akhir method.
    3) Properti `no-wa` tidak valid karena menggunakan tanda hubung, sehingga perlu diganti menjadi `noWa`.
    4) Properti `kataSandi` tidak diubah menjadi `undefined`, sehingga perlu menambahkan `akun.kataSandi = undefined;`.
    5) Looping pada array `menu` tidak mencetak semua isi array, sehingga perlu menggunakan loop `for` dengan indeks untuk mencetak setiap elemen.
    6) Looping pada object `info` tidak mencetak semua properti, sehingga perlu menggunakan loop `for...in` untuk mencetak setiap properti dan nilainya.
    7) Mencetak properti object `info` tidak menggunakan `Object.keys()`, sehingga perlu menggunakan `console.log(Object.keys(info));` untuk mencetak semua properti sebagai array.
2) kesalahan yang menyebabkan error di console adalah:
    1) `tambahKas` tidak mengembalikan nilai sisa saldoKas.
    2) `ambilKas` tidak mengembalikan nilai sisa saldoKas.
    3) Properti `no-wa` tidak valid.
    4) Properti `kataSandi` tidak diubah menjadi `undefined`.
    5) Looping pada array `menu` tidak mencetak semua isi array.
    6) Looping pada object `info` tidak mencetak semua properti.
    7) Mencetak properti object `info` tidak menggunakan `Object.keys()`.
   yang tidak error tetapi hasilnya salah adalah:
    1) `tambahKas` tidak mengembalikan nilai sisa saldoKas.
    2) `ambilKas` tidak mengembalikan nilai sisa saldoKas.
3) `akun.kataSandi = undefined` tidak sama dengan `delete akun.kataSandi` karena `akun.kataSandi = undefined` hanya mengubah nilai properti `kataSandi` menjadi `undefined`, tetapi properti tersebut masih ada dalam objek `akun`. Sedangkan `delete akun.kataSandi` akan menghapus properti `kataSandi` dari objek `akun`, sehingga properti tersebut tidak lagi ada dalam objek. bedanya memakai `in` adalah `kataSandi` masih ada dalam objek `akun`, sehingga `kataSandi in akun` akan mengembalikan `true`. Namun, jika menggunakan `delete akun.kataSandi`, maka properti tersebut akan dihapus dari objek, sehingga `kataSandi in akun` akan mengembalikan `false`.
*/

// Langkah 3

const kasirKedai = {
  nama: "Kedai Senja",
  kota: "Yogyakarta",
  saldoKas: 0,
  jamOperasional: { buka: "08:00", tutup: "21:00" },
  menu: [
    { nama: "Kopi Susu", kategori: "minuman", harga: 18000, stok: 10 },
    { nama: "Teh Tarik", kategori: "minuman", harga: 12000, stok: 8 },
    { nama: "Roti Bakar", kategori: "makanan", harga: 15000, stok: 6 },
    { nama: "Mie Goreng", kategori: "makanan", harga: 16000, stok: 4 },
    { nama: "Es Jeruk", kategori: "minuman", harga: 10000, stok: 5 }
  ],
  keranjang: [],

  // Syarat 2: Method cariHarga
  cariHarga(namaMenu) {
    for (let item of this.menu) {
      if (item.nama === namaMenu) {
        return item.harga;
      }
    }
    return 0;
  },

  // Syarat 3: Method tambahKeKeranjang
  tambahKeKeranjang(namaMenu, jumlah) {
    for (let item of this.menu) {
      if (item.nama === namaMenu) {
        if (item.stok >= jumlah) {
          this.keranjang.push({ nama: namaMenu, jumlah: jumlah });
          item.stok -= jumlah;
          return true;
        } else {
          return false; // Stok tidak cukup
        }
      }
    }
    return false; // Menu tidak ditemukan
  },

  // Syarat 4: Method hitungSubtotal
  hitungSubtotal() {
    let subtotal = 0;
    for (let item of this.keranjang) {
      let hargaSatuan = this.cariHarga(item.nama);
      subtotal += hargaSatuan * item.jumlah;
    }
    return subtotal;
  },

  // Syarat 5: Method hitungDiskon
  hitungDiskon(subtotal) {
    if (subtotal >= 100000) {
      return 0.15; // 15%
    } else if (subtotal >= 50000) {
      return 0.10; // 10%
    } else if (subtotal >= 25000) {
      return 0.05; // 5%
    } else {
      return 0;
    }
  },

  // Syarat 6: Method cetakStruk
  cetakStruk() {
    let subtotal = this.hitungSubtotal();
    let persenDiskon = this.hitungDiskon(subtotal);
    let besarDiskon = subtotal * persenDiskon;
    let setelahDiskon = subtotal - besarDiskon;
    let pajak = setelahDiskon * 0.11;
    let totalAkhir = setelahDiskon + pajak;

    console.log("=== STRUK PEMBELANJAAN ===");
    console.log(`Nama Kedai: ${this.nama}`);
    console.log(`Kota      : ${this.kota}`);
    console.log("Daftar Item:");
    
    let no = 1;
    for (let item of this.keranjang) {
      let harga = this.cariHarga(item.nama);
      console.log(`${no}. ${item.nama} x${item.jumlah} - Rp${harga * item.jumlah}`);
      no++;
    }

    console.log("------------------------");
    console.log(`Subtotal  : Rp${subtotal}`);
    console.log(`Diskon    : Rp${besarDiskon} (${persenDiskon * 100}%)`);
    console.log(`Pajak 11% : Rp${pajak}`);
    console.log(`Total     : Rp${totalAkhir}`);
    console.log("========================");

    // Tambah total akhir ke saldo kas
    this.saldoKas += totalAkhir;
  },

  // Bonus: Method menuMenipis
  menuMenipis() {
    let listMenipis = [];
    for (let item of this.menu) {
      if (item.stok < 5) {
        listMenipis.push(item.nama);
      }
    }
    return listMenipis;
  }
};

// ==========================================
// SYARAT 7: Properti Dinamis
// ==========================================
let propWebsite = "website";
kasirKedai[propWebsite] = "www.kedaisenja.com";
console.log("website" in kasirKedai); // true
delete kasirKedai[propWebsite];
console.log("website" in kasirKedai); // false


// ==========================================
// SYARAT 8: for...in pada jamOperasional & menu[0]
// ==========================================
console.log("--- for...in jamOperasional ---");
for (let kunci in kasirKedai.jamOperasional) {
  console.log(`${kunci}: ${kasirKedai.jamOperasional[kunci]}`);
}

console.log("--- for...in menu pertama ---");
for (let kunci in kasirKedai.menu[0]) {
  console.log(`${kunci}: ${kasirKedai.menu[0][kunci]}`);
}


// ==========================================
// SYARAT 9: Object.keys & Object.values
// ==========================================
console.log("Keys jamOperasional:", Object.keys(kasirKedai.jamOperasional));
console.log("Values jamOperasional:", Object.values(kasirKedai.jamOperasional));


// ==========================================
// SYARAT 10: Menghitung huruf "a" kecil di kasirKedai.nama
// ==========================================
let jumlahA = 0;
for (let huruf of kasirKedai.nama) {
  if (huruf === "a") {
    jumlahA++;
  }
}
console.log(`Jumlah huruf "a" kecil pada nama kedai: ${jumlahA}`);


// ==========================================
// SYARAT 11: Uji 2 Skenario & Kasus Gagal
// ==========================================

// Uji Kasus Gagal:
// 1. Menu tidak ada
console.log(kasirKedai.tambahKeKeranjang("Es Campur", 2)); // Output: false
// 2. Jumlah melebihi stok (Kopi Susu stok awal 10, minta 15)
console.log(kasirKedai.tambahKeKeranjang("Kopi Susu", 15)); // Output: false


// Skenario 1: Kopi Susu x3 (54rb), Roti Bakar x2 (30rb) -> Subtotal 84rb (Diskon 10%)
kasirKedai.tambahKeKeranjang("Kopi Susu", 3);
kasirKedai.tambahKeKeranjang("Roti Bakar", 2);
kasirKedai.cetakStruk();

/* 
// Hasil Skenario 1:
// Subtotal: Rp84000
// Diskon  : Rp8400 (10%)
// Pajak   : Rp8316
// Total   : Rp83916
*/

// Bersihkan keranjang untuk skenario berikutnya
kasirKedai.keranjang = [];


// Skenario 2: Kopi Susu x4 (72rb), Teh Tarik x3 (36rb), Mie Goreng x2 (32rb) -> Subtotal 140rb (Diskon 15%)
kasirKedai.tambahKeKeranjang("Kopi Susu", 4);
kasirKedai.tambahKeKeranjang("Teh Tarik", 3);
kasirKedai.tambahKeKeranjang("Mie Goreng", 2);
kasirKedai.cetakStruk();

/* 
// Hasil Skenario 2:
// Subtotal: Rp140000
// Diskon  : Rp21000 (15%)
// Pajak   : Rp13090
// Total   : Rp132090
*/


// ==========================================
// PEMANGGILAN BONUS: menuMenipis()
// ==========================================
console.log("Menu menipis setelah skenario:", kasirKedai.menuMenipis());
/* 
Hasil: ["Kopi Susu", "Teh Tarik", "Roti Bakar", "Mie Goreng", "Es Jeruk"] (atau sebagian tergantung sisa stok).
Penjelasan: Hasilnya bisa berbeda (stok berkurang) karena method tambahKeKeranjang melakukan pengurangan nilai 'stok' secara langsung pada properti menu saat item dibeli di skenario 1 dan 2.
*/


// ==========================================
// PERTANYAAN & JAWABAN
// ==========================================

/*
1. Apa beda dot notation dan bracket notation? Beri contoh dari kodemu, dan jelaskan kapan bracket notation wajib dipakai.
- Jawab: 
  Dot notation (`object.properti`) menggunakan titik secara langsung dan lebih bersih, sedangkan bracket notation (`object["properti"]`) menggunakan tanda kurung siku dan string nama properti.
  Contoh dot notation: `kasirKedai.nama`
  Contoh bracket notation: `kasirKedai["kota"]` atau `kasirKedai[propWebsite]`
  Bracket notation **wajib** dipakai jika:
  a. Nama properti memiliki spasi atau karakter khusus (misal: `obj["nama lengkap"]`).
  b. Nama properti disimpan di dalam variabel (bersifat dinamis, seperti pada Syarat 7: `kasirKedai[propWebsite]`).
*/

/*
2. Kenapa di dalam method kamu menulis `this.saldoKas`, bukan `saldoKas`? Apa yang terjadi jika kata `this` dihapus? Buktikan dengan kode, lalu jadikan baris percobaan itu komentar dan tulis pesan errornya.
- Jawab:
  Kata kunci `this` digunakan agar program tahu bahwa properti tersebut merujuk ke dalam object `kasirKedai` itu sendiri. Jika `this` dihapus, JavaScript akan mengira `saldoKas` adalah variabel lokal di dalam function/method tersebut.
  Contoh uji coba error:
  // this.saldoKas += totalAkhir; (Benar)
  // saldoKas += totalAkhir; (Error)
  // Pesan error: Uncaught ReferenceError: saldoKas is not defined
*/

/*
3. Apa beda `for...of` dan `for...in`? Tunjuk satu tempat di kodemu yang memakai masing-masing, dan jelaskan kenapa yang satu tidak bisa ditukar dengan yang lain.
- Jawab:
  `for...of` digunakan untuk mengulang nilai (`iterable`) dari sebuah Array atau String (contoh di kode: `for (let item of this.menu)`).
  `for...in` digunakan untuk mengulang kunci (`keys`) dari sebuah Object (contoh di kode: `for (let kunci in kasirKedai.jamOperasional)`).
  Keduanya tidak bisa ditukar karena object biasa tidak bersifat iterable secara langsung dengan `for...of` (akan menghasilkan error), dan `for...in` jika dipakai ke array akan mengembalikan indeks dalam bentuk string, bukan nilai itemnya secara langsung.
*/

/*
4. Kenapa `for...of` pada `kasirKedai` (object) menghasilkan error, sedangkan pada string dan array tidak? Tulis pesan errornya.
- Jawab:
  Karena secara bawaan, Object di JavaScript tidak memiliki protokol iterator (`Symbol.iterator`), sehingga `for...of` tidak tahu bagaimana cara melakukan perulangan pada object biasa.
  Pesan error: Uncaught TypeError: kasirKedai is not iterable
*/

/*
5. Apa beda `Object.keys` dan `Object.values`? Tunjuk hasilnya dari kodemu.
- Jawab:
  `Object.keys()` mengembalikan sebuah array yang berisi daftar **nama kunci (keys)** dari suatu object.
  `Object.values()` mengembalikan sebuah array yang berisi daftar **nilai (values)** dari suatu object.
  Hasil dari kodemu (`jamOperasional`):
  - Object.keys: ["buka", "tutup"]
  - Object.values: ["08:00", "21:00"]
*/

/*
6. Kenapa `cariHarga` dan `hitungSubtotal` harus memakai `return`, sedangkan `cetakStruk` boleh tidak? Apa yang terjadi jika `hitungSubtotal` hanya memakai `console.log`?
- Jawab:
  `cariHarga` dan `hitungSubtotal` menghasilkan data/nilai yang wajib diolah dan dipakai kembali oleh method lain (seperti `cetakStruk`). Oleh karena itu, nilainya harus dikembalikan menggunakan `return`.
  Jika `hitungSubtotal` hanya memakai `console.log` tanpa `return`, maka nilai yang dikembalikan oleh function tersebut adalah `undefined`. Akibatnya, saat dipanggil di dalam `cetakStruk`, perhitungan matematika subtotal akan gagal (`NaN`) karena menjumlahkan nilai `undefined`.
  Sedangkan `cetakStruk` tujuannya adalah untuk mencetak teks ke konsol (`console.log`) tanpa perlu mengembalikan nilai apa pun ke proses lain.
*/