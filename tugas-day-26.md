# Jawaban Merge Conflict, Git, dan JavaScript

## 1. Mengapa Merge Conflict bisa terjadi?

***Merge Conflict terjadi ketika Git tidak bisa menentukan perubahan mana yang harus dipakai saat menggabungkan dua branch.***

Situasi yang dapat memicu:

**1. Dua orang mengedit baris kode yang sama dengan isi berbeda**.
**2. Satu orang mengubah atau menghapus bagian file yang juga diubah oleh orang lain**.

Contoh nyata: *Andi dan Budi sama-sama mengubah warna tombol pada "style.css". Andi mengubahnya menjadi merah, sedangkan Budi mengubahnya menjadi biru. Saat branch mereka di-merge, Git meminta pengguna menentukan perubahan mana yang harus dipertahankan*.

---

##  2. Penanda Merge Conflict

<<<<<<< HEAD
<h1 style="color: red;">Selamat Datang</h1>
=======
<h1 style="color: blue;">Selamat Datang</h1>
>>>>>>> branch-teman

***a. Arti penanda***

- "<<<<<<< HEAD" → menandai awal kode dari branch yang sedang aktif.
- "=======" → pemisah antara dua versi kode yang mengalami konflik.
- ">>>>>>> branch-teman" → menandai akhir kode dari branch yang datang/akan digabungkan.

***b. Versi branch aktif***

<h1 style="color: red;">Selamat Datang</h1>

***c. Versi branch yang datang***

<h1 style="color: blue;">Selamat Datang</h1>

---

## 3. Cara menyelesaikan Merge Conflict

***A. Menggunakan Visual Studio Code***

Langkah-langkah:

**1. Buka file yang mengalami konflik di VS Code**.
**2. VS Code akan menampilkan pilihan seperti Accept Current Change, Accept Incoming Change, atau Accept Both Changes**.
**3. Pilih perubahan yang ingin digunakan**.
**4. Periksa kode hasil penyelesaian konflik**.
**5. Pastikan penanda "<<<<<<<", "=======", dan ">>>>>>>" sudah hilang**.
**6. Simpan file**.
**7. Lakukan "git add" dan "git commit"**.

VS Code direkomendasikan untuk pemula karena konflik ditampilkan secara visual dan pilihan penyelesaiannya lebih mudah dipahami.

***B. Menggunakan editor teks secara manual***

Langkah-langkah:

**1. Buka file yang mengalami konflik**.
**2. Cari penanda**:
   <<<<<<< HEAD
=======
>>>>>>> nama-branch
**3. Tentukan kode yang ingin dipertahankan**.
**4. Hapus kode yang tidak diperlukan**.
**5. Hapus semua penanda konflik**.
**6. Simpan file**.
**7. Jalankan "git add" dan "git commit"**.

---

## 4. Perintah setelah konflik diselesaikan

Setelah konflik selesai diperbaiki:

*git status*
*git add .*
*git commit -m "Menyelesaikan merge conflict"*

Fungsinya:

***1. "git status" → memeriksa apakah masih ada file yang mengalami konflik***.
***2. "git add ." → menandai file yang konfliknya sudah diselesaikan***.
***3. "git commit" → mencatat hasil penyelesaian konflik ke dalam riwayat Git***.
Jika proses merge dilakukan secara normal, "git commit" tersebut menyelesaikan proses merge.

---

## 5. Fungsi "git merge --abort"

***"git merge --abort" digunakan untuk membatalkan proses merge yang sedang berlangsung dan mengembalikan kondisi repository ke keadaan sebelum merge dimulai***.

**Contoh situasi: terjadi banyak konflik pada banyak file dan kita menyadari bahwa branch yang digabungkan ternyata salah. Daripada menyelesaikan banyak konflik satu per satu, kita dapat membatalkan merge dengan:**

git merge --abort

---

## 6. Praktik terbaik untuk mengurangi Merge Conflict

***1. Sering melakukan "git pull"***

**Mengambil perubahan terbaru sebelum mulai bekerja membuat kode lokal tidak terlalu tertinggal dari anggota tim**.

***2. Menggunakan branch untuk setiap fitur***

**Setiap fitur dikerjakan pada branch terpisah sehingga perubahan tidak langsung mengganggu "main"**.

***3. Membuat commit kecil dan jelas***

**Commit yang kecil membuat perubahan lebih mudah dipahami, direview, dan digabungkan**.

***4. Sering berkomunikasi dengan anggota tim***

**Memberi tahu bagian kode yang sedang dikerjakan dapat mencegah dua orang mengubah bagian yang sama**.

***5. Segera melakukan merge fitur yang sudah selesai***

**Branch yang terlalu lama terpisah akan semakin berbeda dari "main", sehingga kemungkinan konflik menjadi lebih besar**.

---

## 7. Pentingnya pesan commit yang jelas

***Pesan commit yang jelas membantu kita dan anggota tim memahami perubahan tanpa harus membuka seluruh kode. Pesan tersebut juga berguna ketika mencari riwayat perubahan atau mencari penyebab suatu masalah***.

**Contoh buruk**

*update*
*fix*
*perubahan*

**Contoh baik**

*Menambahkan halaman login*
*Memperbaiki validasi form pendaftaran*
*Mengubah warna tombol checkout*

---

## 8. Conventional Commits

***Format umum Conventional Commits:***

<type>: <deskripsi>

**Beberapa tipe yang umum:**

Tipe| Fungsi| Contoh
"feat"| Menambahkan fitur baru| "feat: menambahkan fitur pencarian"
"fix"| Memperbaiki bug| "fix: memperbaiki validasi login"
"docs"| Perubahan dokumentasi| "docs: memperbarui README"
"style"| Perubahan tampilan atau format kode tanpa mengubah fungsi| "style: memperbaiki tampilan navbar"
"refactor"| Merapikan struktur kode tanpa mengubah fungsi| "refactor: merapikan fungsi validasi"
"test"| Menambahkan atau memperbaiki pengujian| "test: menambahkan test login"

---

## 9. Analisis pesan commit

**Dari ketiga pesan:**

*git commit -m "update"*
*git commit -m "fix bug tombol"*
*git commit -m "feat: menambahkan fitur pencarian produk di navbar"*

Yang paling baik adalah:

**git commit -m "feat: menambahkan fitur pencarian produk di navbar"**

Alasannya:

*- Menggunakan format Conventional Commits*.
*- Menggunakan tipe "feat" yang menunjukkan penambahan fitur*.
*- Deskripsinya spesifik dan menjelaskan perubahan yang dilakukan*.

---

## 10. Fungsi ".gitignore"

***".gitignore" digunakan untuk menentukan file atau folder yang tidak perlu dilacak dan dikirim ke repository Git***.

Contoh yang biasanya dimasukkan:

**1. File rahasia**

Contoh:

.env

Berisi API key, password, atau konfigurasi rahasia yang tidak boleh dibagikan.

**2. Folder dependency**

Contoh:

node_modules/

Ukurannya bisa sangat besar dan dependency dapat di-install kembali menggunakan package manager.

**3. File hasil build**

Contoh:

dist/
build/

File tersebut biasanya dapat dibuat ulang dari source code.

**4. File sementara atau konfigurasi editor**

Contoh:

.vscode/
*.log

File tersebut biasanya bersifat lokal dan tidak diperlukan oleh seluruh anggota tim.

Contoh ".gitignore":

.env
node_modules/
dist/
*.log

---

## 11. Standar penamaan Branch

***Penamaan branch sebaiknya menggunakan format yang jelas, konsisten, dan menggambarkan tujuan branch.***

Contoh:

feature/login
fix/navbar-mobile
docs/update-readme

Alasannya:

*- "feature/" menunjukkan branch untuk fitur baru*.
*- "fix/" menunjukkan branch untuk perbaikan bug*.
*- "docs/" menunjukkan branch untuk dokumentasi*.
*- Nama setelah "/" menjelaskan pekerjaan yang dilakukan*.
*- Format yang konsisten membuat branch lebih mudah dicari dan dipahami oleh tim*.

---

## 12. Peran HTML, CSS, dan JavaScript

***HTML***

**HTML digunakan untuk membuat struktur dan isi website**.

Contoh:

<h1>Selamat Datang</h1>
<p>Ini halaman utama.</p>

***CSS***

**CSS digunakan untuk mengatur tampilan website, seperti warna, ukuran, posisi, dan layout.**

Contoh:

h1 {
  color: blue;
}

JavaScript

JavaScript digunakan untuk membuat website menjadi interaktif dan memiliki logika.

Contoh:

alert("Selamat Datang!");

Sederhananya:

HTML       → Struktur
CSS        → Tampilan
JavaScript → Perilaku/Interaksi

---

## 13. Dua lingkungan JavaScript

***JavaScript dapat dijalankan di berbagai lingkungan, dua yang paling umum adalah:***

**1. Browser**

*JavaScript dijalankan di browser seperti Chrome, Firefox, atau Edge untuk membuat halaman web interaktif.*

Contoh:

document.querySelector("button");

**2. Node.js**

*JavaScript dijalankan di luar browser menggunakan Node.js, misalnya untuk membuat server, menjalankan CLI, dan mengelola aplikasi backend.*

Contoh:

console.log("Hello World");

---

## 14. JavaScript dan ECMAScript

***JavaScript adalah bahasa pemrograman yang menggunakan ECMAScript sebagai standar spesifikasinya.***

**- ECMAScript (ES) → standar yang menentukan fitur dan aturan bahasa.**
**- JavaScript → implementasi bahasa yang mengikuti standar ECMAScript dan digunakan pada berbagai lingkungan seperti browser dan Node.js.**

Contoh gaya lama:

var nama = "Andi";

Contoh gaya modern:

const nama = "Andi";

"const" merupakan fitur JavaScript modern yang diperkenalkan dalam ECMAScript 2015 (ES6). Selain "const", ES6 juga memperkenalkan "let", arrow function, template literal, dan berbagai fitur lainnya.