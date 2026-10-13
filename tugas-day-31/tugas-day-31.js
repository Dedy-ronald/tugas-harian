for (let i = 5; i >= 3; i--) {
    console.log(i);
}
console.log("Mulai!");
// Output: 5, 4, 3, Mulai!

let total = 0;

for (let i = 5; i <= 8; i++) {
    total += i;
}

console.log("Total:", total); 
// Output: Total: 26

const myKonos = ["Monaco Royale", "Qonquer", "Reflection", "My Ego"];

for (let i = 0; i < myKonos.length; i++) {
  console.log(i + 1 + ")", myKonos[i]);
}

// Output:
//1) Monaco Royale
//2) Qonquer
//3) Reflection
//4) My Ego

let angkaRahasia = 9;
let tebakan = 0;
let percobaan = 0;

while (tebakan !== angkaRahasia) {
  percobaan++;
  tebakan = Math.floor(Math.random() * 10) + 1; // Angka acak 1-10
  console.log("Percobaan ke-" + percobaan + ": menebak angka", tebakan);
}

console.log(
  "Berhasil menebak angka",
  angkaRahasia,
  "dalam",
  percobaan,
  "percobaan.",
);

/* Output:
 Percobaan ke-1: menebak angka 4
 Percobaan ke-2: menebak angka 2
 Percobaan ke-3: menebak angka 6
 Percobaan ke-4: menebak angka 10
 Percobaan ke-5: menebak angka 3
 Percobaan ke-6: menebak angka 1
 Percobaan ke-7: menebak angka 8
 Percobaan ke-8: menebak angka 4
 Percobaan ke-9: menebak angka 7
 Percobaan ke-10: menebak angka 10
 Percobaan ke-11: menebak angka 4
 Percobaan ke-12: menebak angka 6
 Percobaan ke-13: menebak angka 1
 Percobaan ke-14: menebak angka 4
 Percobaan ke-15: menebak angka 9
 Berhasil menebak angka 9 dalam 15 percobaan.
*/

 let konfirmasi;

do {
  konfirmasi = prompt("Ketik 'Gas' untuk melanjutkan:");
} while (konfirmasi !== "Gas");

console.log("Pengguna telah mengkonfirmasi. Melanjutkan proses...");

/* Output:
    Muncul tab untuk diisi agar dapat melanjutkannya
*/

for (let i = 2; i <= 10; i++) {
  if (i === 10) {
    console.log(
      "Target ditemukan pada posisi ke-" + i + ". Pencarian dihentikan.",
    );
    break;
  }
  console.log("Memeriksa posisi ke-" + i);
}
// Output:
// Memeriksa posisi ke-2
// ... (hingga ke-9)
// Target ditemukan pada posisi ke-10. Pencarian dihentikan.

const nilai = [80, -5, 95, -1, 70, 63];

console.log("Nilai valid:");
for (let i = 0; i < nilai.length; i++) {
  if (nilai[i] < 0) {
    continue; // Lewati nilai negatif
  }
  console.log("-", nilai[i]);
}
// Output:
// Nilai valid:
// - 80
// - 95
// - 70
// - 63

const daftarNilai = [80, 40, 95, -3, 89, 53, 99, 0, 11];
let jumlah = 0;
let valid = 0;
let invalid = 0;

for (let i = 0; i < daftarNilai.length; i++) {
  const nilai = daftarNilai[i];

  // Lewati nilai yang tidak valid (di luar rentang 0–100)
  if (nilai < 0 || nilai > 100) {
    console.log("Nilai tidak valid dilewati:", nilai);
    invalid++;
    continue;
  }

  jumlah += nilai;
  valid++;
}

const rataRata = jumlah / valid;

console.log("---");
console.log("Total data    :", daftarNilai.length);
console.log("Data valid    :", valid);
console.log("Data tidak valid:", invalid);
console.log("Rata-rata     :", rataRata.toFixed(2));
// Output:
// Nilai tidak valid dilewati: -3
// ---
// Total data    : 9
// Data valid    : 8
// Data tidak valid: 1
// Rata-rata     : 58,38