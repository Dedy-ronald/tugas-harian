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
