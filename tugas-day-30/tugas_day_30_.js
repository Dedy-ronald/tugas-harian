/*Tugas Bagian 1
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
