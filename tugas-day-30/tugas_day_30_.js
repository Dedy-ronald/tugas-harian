/*Tugas Langkah 1
/* Potongan A */

if (0) {
  console.log("1: masuk");
}
if ("0") {
  console.log("2: masuk");
}
if ("") {
  console.log("3: masuk");
}
if ([]) {
  console.log("4: masuk");
}
if (null) {
  console.log("5: masuk");
}
if (-1) {
  console.log("6: masuk");
}

/* Tebakan Bagian 1 Potongan A
Output:
1) Tak Terbaca karena nilainya Falsy
2) "2: masuk" karena nilainya Truthy
3) Tak Terbaca karena niainya Falsy
4) "4: masuk" karena nilainya Truthy
5) Tak Terbaca karena nilainya Falsy
6) "6: masuk" karena nilainya Truthy
*/

/* Potongan B */

let belanja = 120000;

if (belanja >= 25000) {
  console.log("Diskon 5%");
} else if (belanja >= 50000) {
  console.log("Diskon 10%");
} else if (belanja >= 100000) {
  console.log("Diskon 15%");
} else {
  console.log("Tidak ada diskon");
}

/* Tebakan Bagian 1 Potongan B
Output:
Diskon 15% karena nilainya adalah 100000 yang paling dekat dengan 120000 setelah Javascript memeriksanya secara berurutan
*/
/* Potongan C */

let hari = "sabtu";

switch (hari) {
  case "jumat":
    console.log("Promo Jumat Berkah");
  case "sabtu":
    console.log("Promo Akhir Pekan");
  case "minggu":
    console.log("Promo Keluarga");
    break;
  default:
    console.log("Tidak ada promo");
}

/* Tebakan Bagian 1 Potongan C
Output:
Promo Akhir Pekan 
Promo Keluarga
karena perbandingan nilai switch adalah sabtu dan minggu (tidak break jadi dia lanjut sampai minggu)
*/

/* Tips dan Pertanyaan 
- Tebakan potongan B salah karena jawabannya ada di pertanyaan B
- Pertanyaan:
    - Pada potongan A, `"0"` dan `[]` tetap masuk ke dalam `if`, padahal terlihat seperti kosong karena Javascript tetap membaca keduanya dengan nilai Truthy
    - Pada potongan B, Jawaban: Struktur `if-else` mengeksekusi kondisi dari atas ke bawah dan langsung berhenti pada kondisi pertama yang bernilai `true`. Karena `120000` sudah memenuhi syarat pertama yaitu `>= 25000`, maka blok kode pertama langsung dijalankan.
     - Cara memperbaikinya: Urutkan pengecekan dari nominal terbesar ke terkecil (dari atas ke bawah: `>= 100000`, lalu `>= 50000`, lalu `>= 25000`).
    - Pada potongan C, yang tercetak dua baris dan yang harus ditambahkan agar hanya satu baris yang tercetak adalah break; di setiap casenya agar javascript membaca jika telah menemukan satu yang tepat ia tidak meneruskannya.
*/

/* Tugas Langkah 2 */

let totalBelanja = 80000;
let jenisMember = "gold";
let kodeVoucher = "";
let diskon;
let potonganMember;

// Diskon berdasarkan total belanja. Seharusnya: 8000 (diskon 10%)
// FIX 1: Urutan kondisi if-else dibalik dari nominal terbesar ke terkecil agar 80000 masuk ke kondisi >= 50000 (diskon 10%)
if (totalBelanja >= 100000) {
  diskon = totalBelanja * 0.15;
} else if (totalBelanja >= 50000) {
  diskon = totalBelanja * 0.1;
} else if (totalBelanja >= 25000) {
  diskon = totalBelanja * 0.05;
} else {
  diskon = 0;
}

// Potongan member. "gold" 5000, "silver" 2000, lainnya 0. Seharusnya untuk "gold": 5000
// FIX 2: Mengubah 'jenismember' menjadi 'jenisMember' (huruf M besar) agar sesuai dengan nama variabel di atas
switch (jenisMember) {
  case "gold":
    potonganMember = 5000;
    break;
    // FIX 3: Menambahkan 'break;' pada case "gold" agar tidak terjadi fall-through ke case "silver"
  case "silver":
    potonganMember = 2000;
    break;
  default: 
    potonganMember = 0
}

// Voucher. Seharusnya tercetak: Voucher tidak dipakai
// FIX 4: Mengganti operator penugasan '=' dengan operator perbandingan '===' (atau '==') untuk mengecek apakah kodeVoucher kosong
if ((kodeVoucher === "")) {
  console.log("Voucher tidak dipakai");
} else {
  console.log("Voucher dipakai: " + kodeVoucher);
}

// Total akhir. Seharusnya: 67000
let totalAkhir = totalBelanja - diskon - potonganMember;

// Pembayaran dengan uang pas. Seharusnya tercetak: Status: Lunas
let uangBayar = 67000;
// FIX 5: Mengubah operator '>' menjadi '>=' agar jika uang bayar pas dengan total akhir (sama besar), statusnya tetap Lunas
if (uangBayar >= totalAkhir) {
  console.log("Status: Lunas");
} else {
  console.log("Status: Kurang");
}

console.log(diskon, potonganMember, totalAkhir);

/* Pertanyaan Langkah 2

  1. Tulis ke-5 kesalahan tadi dalam satu kalimat singkat masing-masing:
     - Kesalahan 1: Urutan kondisi if-else diskon terbalik dari kecil ke besar, diperbaiki dengan mengurutkannya dari nominal terbesar.
     - Kesalahan 2: Penulisan variabel jenisMember pada switch salah (huruf kecil semua), diperbaiki menjadi 'jenisMember' yang benar.
     - Kesalahan 3: Tidak adanya perintah break pada case "gold", diperbaiki dengan menambahkan 'break;'.
     - Kesalahan 4: Penggunaan operator assignment '=' di dalam if, diperbaiki menggunakan operator perbandingan '===' atau '=='.
     - Kesalahan 5: Penggunaan operator perbandingan '>' untuk uang bayar pas, diperbaiki dengan menggunakan '>=' agar uang pas tetap terbaca Lunas.

  2. Mana kesalahan yang menyebabkan error di console, dan mana yang tidak error tetapi hasilnya salah?
     - Yang menyebabkan error di console adalah Kesalahan ke-2 (`jenismember is not defined`), karena JavaScript mencoba mengakses variabel yang belum dideklarasikan.
     - Kesalahan 1, 3, 4, dan 5 tidak menghasilkan error sintaks, tetapi membuat hasil logika atau output program menjadi salah atau tidak sesuai harapan.

  3. Pada if (kodeVoucher = ""), apa bedanya =, ==, dan ===? Kenapa kodenya tidak error?
     - '=' adalah operator penugasan (assignment) untuk memasukkan nilai ke dalam variabel.
     - '==' adalah operator perbandingan nilai (equality) dengan konversi tipe data otomatis (type coercion).
     - '===' adalah operator perbandingan ketat (strict equality) yang mengecek nilai sekaligus tipe datanya.
     - Kodenya tidak error secara sintaks karena `(kodeVoucher = "")` valid untuk mengeksekusi operasi penugasan di dalam kurung. Hasil dari penugasan tersebut adalah string kosong `""`, yang di dalam JavaScript dievaluasi sebagai nilai *falsy*, sehingga blok `else` yang tereksekusi.
*/

// LANGKAH 3: BIKIN KASIR SENDIRI

// Data Awal (Ubah variabel di sini untuk mengetes skenario)
let kasirNamaPelanggan = "Rina";
let kasirTotalBelanja = 90000;
let kasirHari = "sabtu";
let kasirJenisMember = "silver";
let kasirKodeVoucher = "SENJA10";
let kasirUangBayar = 100000;

// 1. Validasi Nama (Truthy / Falsy)
let statusNama;
if (kasirNamaPelanggan) {
  statusNama = `Pelanggan: ${kasirNamaPelanggan}`;
} else {
  statusNama = "Nama pelanggan belum diisi";
}

// 2. Diskon berdasarkan total belanja
let kasirDiskon = 0;
if (kasirTotalBelanja >= 100000) {
  kasirDiskon = kasirTotalBelanja * 0.15;
} else if (kasirTotalBelanja >= 50000) {
  kasirDiskon = kasirTotalBelanja * 0.1;
} else if (kasirTotalBelanja >= 25000) {
  kasirDiskon = kasirTotalBelanja * 0.05;
} else {
  kasirDiskon = 0;
}

// 3. Potongan member
let kasirPotonganMember = 0;
if (kasirJenisMember === "gold") {
  kasirPotonganMember = 5000;
} else if (kasirJenisMember === "silver") {
  kasirPotonganMember = 2000;
} else {
  kasirPotonganMember = 0;
}

// 4. Promo hari menggunakan switch
let kasirPromoHari = 0;
switch (kasirHari) {
  case "jumat":
    kasirPromoHari = 3000;
    break;
  case "sabtu":
  case "minggu":
    kasirPromoHari = 5000;
    break;
  default:
    kasirPromoHari = 0;
    break;
}

// 6. Voucher (Truthy / Falsy) & Status Voucher
let kasirPotonganVoucher = 0;
let statusVoucher = "";
if (kasirKodeVoucher) {
  kasirPotonganVoucher = 2000;
  statusVoucher = `Voucher dipakai: ${kasirKodeVoucher}`;
} else {
  kasirPotonganVoucher = 0;
  statusVoucher = "Voucher tidak dipakai";
}

// 7. Total akhir
let kasirTotalAkhir = kasirTotalBelanja - kasirDiskon - kasirPotonganMember - kasirPromoHari - kasirPotonganVoucher;

// 8. Status Pembayaran
let statusPembayaran = "";
if (kasirUangBayar > kasirTotalAkhir) {
  let kembalian = kasirUangBayar - kasirTotalAkhir;
  statusPembayaran = `Status: Lunas (Kembalian: Rp ${kembalian})`;
} else if (kasirUangBayar === kasirTotalAkhir) {
  statusPembayaran = "Status: Lunas (uang pas)";
} else {
  let kurang = kasirTotalAkhir - kasirUangBayar;
  statusPembayaran = `Status: Kurang (Kekurangan: Rp ${kurang})`;
}

// 9. Cetak dengan Template Literal yang Rapi
console.log(`--- STRUK PEMBELAYANAN ---`);
console.log(statusNama);
console.log(statusVoucher);
console.log(`Total Belanja : Rp ${kasirTotalBelanja}`);
console.log(`Diskon        : Rp ${kasirDiskon}`);
console.log(`Pot. Member   : Rp ${kasirPotonganMember}`);
console.log(`Promo Hari    : Rp ${kasirPromoHari}`);
console.log(`Pot. Voucher  : Rp ${kasirPotonganVoucher}`);
console.log(`Total Akhir   : Rp ${kasirTotalAkhir}`);
console.log(`Uang Bayar    : Rp ${kasirUangBayar}`);
console.log(statusPembayaran);
console.log(`--------------------------\n`);


/*
// ==========================================
// UJI 3 SKENARIO
// ==========================================

// Skenario 1 (Belanja besar, hari sabtu, uang lebih, member gold)
// Data: nama "Rina", belanja 120000, hari "sabtu", member "gold", voucher "PROMO50", bayar 110000
// Hasil:
// --- STRUK PEMBELAYANAN ---
// Pelanggan: Rina
// Voucher dipakai: PROMO50
// Total Belanja : Rp 120000
// Diskon        : Rp 18000
// Pot. Member   : Rp 5000
// Promo Hari    : Rp 5000
// Pot. Voucher  : Rp 2000
// Total Akhir   : Rp 90000
// Uang Bayar    : Rp 110000
// Status: Lunas (Kembalian: Rp 20000)
// --------------------------

// Skenario 2 (Nama kosong, belanja sedang, hari jumat, uang pas, member silver)
// Data: nama "", belanja 60000, hari "jumat", member "silver", voucher "", bayar 49000
// Hasil:
// --- STRUK PEMBELAYANAN ---
// Nama pelanggan belum diisi
// Voucher tidak dipakai
// Total Belanja : Rp 60000
// Diskon        : Rp 6000
// Pot. Member   : Rp 2000
// Promo Hari    : Rp 3000
// Pot. Voucher  : Rp 0
// Total Akhir   : Rp 49000
// Uang Bayar    : Rp 49000
// Status: Lunas (uang pas)
// --------------------------

// Skenario 3 (Belanja kecil, hari rabu/default, uang kurang, tanpa member & voucher)
// Data: nama "Budi", belanja 20000, hari "rabu", member "umum", voucher "", bayar 10000
// Hasil:
// --- STRUK PEMBELAYANAN ---
// Pelanggan: Budi
// Voucher tidak dipakai
// Total Belanja : Rp 20000
// Diskon        : Rp 0
// Pot. Member   : Rp 0
// Promo Hari    : Rp 0
// Pot. Voucher  : Rp 0
// Total Akhir   : Rp 20000
// Uang Bayar    : Rp 10000
// Status: Kurang (Kekurangan: Rp 10000)
// --------------------------
*/


// ==========================================
// JAWABAN PERTANYAAN ANALISIS LANGKAH 3
// ==========================================

/*
  1. Kenapa urutan `else if` pada diskon dimulai dari angka terbesar? Apa yang terjadi jika dibalik?
     - Jawab: Dimulai dari angka terbesar karena pengecekan kondisi `if-else` berjalan dari atas ke bawah dan langsung berhenti pada kondisi pertama yang bernilai benar (`true`). Jika dibalik dari angka terkecil (misal `>= 25000` ditaruh paling atas), maka belanja 120000 akan langsung masuk ke diskon 5% dan tidak akan pernah mengecek diskon 15%.

  2. Kenapa promo hari lebih cocok memakai `switch`, bukan `if...else if`?
     - Jawab: Karena `switch` jauh lebih bersih, rapi, dan mudah dibaca saat mencocokkan satu variabel spesifik (`kasirHari`) dengan banyak pilihan nilai pasti yang berdiri sendiri (seperti hari-hari dalam seminggu).

  3. Pada `switch` promo hari, di mana kamu sengaja tidak menulis `break`, dan kenapa hasilnya tetap benar?
     - Jawab: Sengaja tidak menulis `break` ditaruh di antara `case "sabtu":` dan `case "minggu":`. Hasilnya tetap benar karena memanfaatkan konsep *fall-through*, di mana jika hari `"sabtu"`, kode akan langsung turun mengeksekusi blok kode promo `5000` milik `"minggu"` sebelum akhirnya berhenti di `break` pada bagian bawahnya.

  4. Sebutkan 3 nilai yang membuat `if (namaPelanggan)` bernilai `false`.
     - Jawab: 
       1. `""` (string kosong)
       2. `null`
       3. `undefined`

  5. Jika jumlah beli bernilai `-1`, apa hasil `if (jumlahBeli)` dan `if (jumlahBeli > 0)`? Kenapa berbeda?
     - Jawab: 
       - `if (jumlahBeli)` akan bernilai **`true`** karena angka `-1` termasuk nilai non-nol yang dalam JavaScript dianggap sebagai *truthy*.
       - `if (jumlahBeli > 0)` akan bernilai **`false`** karena hasil perbandingan `-1 > 0` adalah salah. Keduanya berbeda karena yang pertama mengecek keaktifan nilai (truthiness), sedangkan yang kedua mengecek kondisi perbandingan matematika secara spesifik.
*/


// ==========================================
// BONUS (+5 POIN): JUMLAH HARI DALAM BULAN
// ==========================================

let bulan = 2; // Contoh: Februari

switch (bulan) {
  case 4:
  case 6:
  case 9:
  case 11:
    console.log(`Bulan ke-${bulan}: 30 hari`);
    break;
  case 2:
    console.log(`Bulan ke-${bulan}: 28 atau 29 hari`);
    break;
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log(`Bulan ke-${bulan}: 31 hari`);
    break;
  default:
    console.log("Bulan tidak valid");
    break;
}

/*
  Catatan Bonus: 
  Beberapa `case` dapat digabungkan tanpa `break` di antaranya karena kita ingin seluruh `case` tersebut menjalankan satu blok kode atau aksi yang sama secara bersamaan (teknik fall-through terstruktur). Ketika salah satu bulan yang digabung cocok, program akan terus mengalir turun ke baris aksi dan berhenti pada `break` setelah blok kode selesai.
*/