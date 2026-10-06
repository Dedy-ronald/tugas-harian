# Jawaban GitHub — Push, Pull, Fork, dan Pull Request

## 1. Push dan Pull

Ada dua arah utama aliran kode antara komputer lokal dan GitHub:

- **Push** → mengirim perubahan dari komputer lokal ke GitHub.
- **Pull** → mengambil perubahan terbaru dari GitHub ke komputer lokal.

Contoh:

- **Push**: *setelah selesai membuat fitur dan melakukan commit, kita melakukan "git push" agar perubahan tersimpan di GitHub.*
- **Pull**: *sebelum mulai bekerja, kita melakukan "git pull" untuk mengambil perubahan terbaru dari anggota tim.*

---

## 2. Fungsi "git push"

**"git push"** digunakan untuk **mengirim commit dari repository lokal ke repository di GitHub.**

**a. Fungsi opsi "-u"**

Pada:

git push -u origin main

"-u" atau "--set-upstream" menghubungkan branch lokal "main" dengan branch "main" di remote "origin".

**b. Jika "-u" tidak digunakan**

Push pertama tetap bisa dilakukan dengan:

git push origin main

Namun, hubungan branch lokal dengan remote belum diatur sebagai upstream, sehingga pada push berikutnya biasanya perlu menuliskan "origin main" lagi.

**c. Mengapa setelah "-u" cukup "git push"?**

Karena Git sudah mengetahui bahwa branch lokal tersebut terhubung dengan branch remote tertentu. Jadi Git tahu ke mana perubahan harus dikirim.

---

## 3. Perbedaan "git clone" dan "git init"

- **"git clone"** → *mengambil repository yang sudah ada, termasuk file, riwayat commit, dan konfigurasi remote dari GitHub*.
- **"git init"** → *membuat repository Git baru dari folder lokal yang belum menjadi repository*.

Setelah "git clone", tidak perlu menjalankan "git init" lagi karena repository Git sudah dibuat oleh proses clone dan folder ".git" sudah tersedia.

---

## 4. Fungsi "git pull"

**"git pull"** digunakan untuk **mengambil perubahan terbaru dari repository remote dan menggabungkannya ke branch lokal**.

Perintah ini penting dalam kerja tim agar kode lokal tetap mengikuti perubahan yang sudah dibuat anggota tim lain dan mengurangi kemungkinan konflik.

Dua waktu yang sebaiknya melakukan "git pull":

*1. Sebelum mulai bekerja pada proyek agar mendapatkan versi terbaru*.
*2. Sebelum melakukan push jika proyek dikerjakan bersama dan ada kemungkinan anggota lain sudah melakukan perubahan*.

---

## 5. Alur kerja harian yang direkomendasikan

Contoh urutannya:

git switch main
git pull
git switch -c fitur-baru
# mengerjakan perubahan
git status
git add .
git commit -m "Menambahkan fitur baru"
git push -u origin fitur-baru

Penjelasan:

*1. "git switch main" → memastikan memulai dari branch utama*.
*2. "git pull" → mengambil perubahan terbaru dari GitHub*.
*3. "git switch -c fitur-baru" → membuat branch khusus untuk pekerjaan*.
*4. Mengerjakan perubahan → membuat atau mengubah file yang diperlukan*.
*5. "git status" → memeriksa kondisi file*.
*6. "git add ." → memasukkan perubahan ke Staging Area*.
*7. "git commit" → menyimpan perubahan sebagai riwayat*.
*8. "git push" → mengirim branch dan commit ke GitHub agar dapat dibagikan atau dibuatkan Pull Request*.

---

## 6. Apa itu Fork?

**Fork adalah membuat salinan repository milik orang lain ke akun GitHub kita sendiri**.

Contoh situasi menggunakan fork:

*1. Ingin berkontribusi ke proyek open source tetapi tidak memiliki akses langsung untuk melakukan push ke repository asli*.
*2. Ingin mengembangkan atau memodifikasi proyek orang lain tanpa mengubah repository aslinya*.

Perbedaan fork dan clone:

- **Fork** → *membuat salinan repository di akun GitHub*.
- **Clone** → *menyalin repository dari remote ke komputer lokal*.

---

## 7. Alur kontribusi Open Source dengan Fork + Pull Request

**1. Fork repository**

Membuat salinan repository ke akun GitHub sendiri agar dapat mengembangkan proyek tanpa akses langsung ke repository asli.

**2. Clone repository**

git clone <a href:https://github.com/username/proyek.git>

Tujuannya mengambil repository hasil fork ke komputer lokal.

**3. Buat branch dan kerjakan perubahan**

git switch -c fitur-baru

Kemudian lakukan perubahan pada kode. Branch digunakan agar pekerjaan tidak langsung mengubah "main".

**4. Commit dan push**

git add .
git commit -m "Menambahkan fitur baru"
git push -u origin fitur-baru

Tujuannya menyimpan perubahan dan mengirim branch ke repository hasil fork di GitHub.

**5. Buat Pull Request**

Membuat PR dari branch di repository fork menuju repository asli. PR digunakan untuk mengajukan perubahan kepada pemilik atau maintainer proyek.

**6. Review dan merge**

Maintainer memeriksa kode, memberikan komentar atau meminta revisi jika diperlukan. Jika sudah sesuai, perubahan dapat di-merge ke repository utama.

---

## 8. Apa itu Pull Request?

Pull Request (PR) adalah pengajuan perubahan dari suatu branch agar dapat diperiksa dan digabungkan ke branch tujuan, biasanya "main".

Tim profesional menggunakan PR sebelum merge karena perubahan perlu diperiksa terlebih dahulu.

Keuntungan PR:

1. Code review → anggota tim dapat memeriksa kualitas dan kesalahan kode.
2. Diskusi perubahan → anggota tim dapat memberikan komentar atau saran.
3. Mengurangi bug → kesalahan dapat ditemukan sebelum masuk ke "main".
4. Dokumentasi → PR menyimpan informasi mengenai perubahan yang dilakukan.

---

## 9. Studi Kasus Andi dan Budi

a. Apa yang terjadi saat Budi mencoba push?

Kemungkinan besar push Budi akan ditolak oleh Git karena repository remote sudah memiliki commit baru dari Andi yang belum dimiliki Budi.

Biasanya muncul pesan seperti:

rejected
non-fast-forward

b. Mengapa terjadi?

Karena Budi terakhir melakukan "git pull" kemarin, sedangkan Andi sudah melakukan push perubahan baru pagi ini.

Repository lokal Budi menjadi tertinggal dari repository GitHub.

c. Apa yang seharusnya dilakukan Budi?

Budi sebaiknya melakukan "git pull" terlebih dahulu sebelum mulai mengedit atau melakukan push, agar mendapatkan perubahan terbaru dari Andi.

d. Urutan perintah yang seharusnya dilakukan Budi

Contohnya:

git pull
# edit style.css
git status
git add style.css
git commit -m "Memperbarui style.css"
git push

Dengan begitu, Budi bekerja berdasarkan versi terbaru dari repository.

---

## 10. Studi Kasus Alur Kerja Lengkap

a. Apa yang dilakukan "git clone"?

git clone <a href:https://github.com/andi/proyek.git></a>

Perintah tersebut menyalin repository "proyek" dari GitHub ke komputer lokal, termasuk file, riwayat commit, dan konfigurasi remote.

b. Mengapa membuat branch "perbaikan-bug"?

git switch -c perbaikan-bug

Branch dibuat agar perbaikan bug dikerjakan secara terpisah dan tidak langsung mengubah "main".

Ini membuat branch "main" tetap aman dan stabil selama perubahan masih dikerjakan.

c. Mengapa menggunakan "git push origin perbaikan-bug"?

git push origin perbaikan-bug

Perintah tersebut secara jelas mengirim branch "perbaikan-bug" ke remote bernama "origin".

"git push" saja belum tentu bisa digunakan jika branch tersebut belum memiliki upstream.

d. Apa yang dilakukan di GitHub setelah push?

Setelah push, pengguna membuka repository di GitHub dan memilih opsi Compare & pull request atau membuat Pull Request secara manual.

Kemudian pengguna memilih:

base: main
compare: perbaikan-bug

Setelah itu isi judul dan deskripsi perubahan, lalu mengirim Pull Request kepada pemilik repository.

e. Jika pemilik repo meminta revisi

Pengguna kembali ke branch "perbaikan-bug", melakukan perubahan sesuai permintaan, kemudian:

git add .
git commit -m "Memperbaiki revisi validasi form"
git push

Pull Request yang sama akan otomatis diperbarui dengan commit baru tersebut.

Alurnya:

Review PR
   ↓
Menerima permintaan revisi
   ↓
Edit kode
   ↓
git add
   ↓
git commit
   ↓
git push
   ↓
PR diperbarui
   ↓
Review ulang
   ↓
Merge