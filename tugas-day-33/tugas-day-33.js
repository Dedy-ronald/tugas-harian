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