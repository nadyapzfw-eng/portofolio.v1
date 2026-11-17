# LAPORAN RINGKASAN MATERI PEMROGRAMAN DASAR
**Judul Video:** Pemprograman dasar (Varibel, Tipe Data, Operator)  
**Pemateri:** Iskandar Sholeh  
**Penyusun:** Nadya Putri Zahirah Fawwaz  
**Kelas:** XI RPL 3  
**Mata Pelajaran:** Pemrograman Dasar  
**Sumber Video:** [YouTube - Iskandar Sholeh](https://youtu.be/VXCk6ZyqoOQ?si=EGvYI4UpoyzX1BZN)

---

## 1. Pengantar Konsep Pemrograman

Pemrograman adalah proses memberikan sekumpulan instruksi logis kepada komputer agar dapat mengeksekusi dan menyelesaikan tugas tertentu. 

Sistem komputer bekerja berdasarkan alur **Input $\rightarrow$ Proses $\rightarrow$ Output**:
1. **Input:** Data yang dimasukkan oleh pengguna (contoh: menekan tombol huruf `I` pada keyboard).
2. **Proses:** Komputer menerjemahkan input tersebut menjadi bahasa mesin (bilangan biner `0` dan `1`) untuk diproses.
3. **Output:** Hasil akhir yang ditayangkan ke layar (contoh: muncul huruf `I` di layar monitor).

---

## 2. Variabel dan Tata Cara Penulisannya

### A. Pengertian Variabel
**Variabel** adalah tempat atau wadah sementara di dalam memori komputer yang digunakan untuk menyimpan data yang dapat diakses dan diubah selama program berjalan.

> **Analogi Laci:** Variabel dapat dianalogikan seperti sebuah lemari laci yang diberi label khusus (seperti "Sepatu", "Buku", atau "Baju"). Saat kita membuka laci berlabel "Buku", isinya adalah kumpulan buku.

### B. Aturan Wajib Penulisan Variabel
1. **Tidak Boleh Diawali Angka:** Nama variabel harus diawali huruf atau karakter khusus tertentu (seperti `_`).
2. **Tidak Boleh Menggunakan Spasi:** Spasi akan dianggap sebagai sintaks terpisah oleh komputer.
3. **Menggunakan Nama yang Deskriptif:** Hindari menggunakan nama satu huruf (seperti `b` atau `x`). Gunakan nama yang jelas menggambarkan fungsinya (contoh: `namaPengguna`) agar mudah dipahami oleh anggota tim (*developer* lain).

### C. Gaya Penulisan (*Naming Conventions*)

| Gaya Penulisan | Format Penulisan | Contoh Nama Variabel | Penggunaan Umum |
| :--- | :--- | :--- | :--- |
| **camelCase** | Huruf pertama kecil, kata selanjutnya diawali huruf kapital | `namaDepanSiswa` | JavaScript, Java, C# |
| **PascalCase** | Setiap kata diawali dengan huruf kapital | `NamaDepanSiswa` | Class/Object pada C++, C# |
| **snake_case** | Antarkata dihubungkan dengan *underscore* (`_`) | `nama_depan_siswa` | Python, Database SQL |
| **kebab-case** | Antarkata dihubungkan dengan tanda hubung (`-`) | `nama-depan-siswa` | HTML Class, CSS, URLs |

---

## 3. Tipe Data

Tipe data menentukan jenis nilai yang disimpan di dalam variabel serta batas operasi yang dapat dilakukan pada nilai tersebut.

| Tipe Data | Deskripsi | Contoh Nilai |
| :--- | :--- | :--- |
| **String** | Kumpulan karakter atau teks yang diapit tanda kutip | `"Budi"`, `'Admin123'` |
| **Number / Integer** | Bilangan bulat (tanpa koma/desimal) | `17`, `-5`, `2026` |
| **Float / Double** | Bilangan pecahan atau desimal | `3.14`, `87.5` |
| **Boolean** | Nilai logika yang hanya memiliki 2 kemungkinan | `true` (1) atau `false` (0) |
| **Character (Char)** | Karakter tunggal yang diapit tanda kutip | `'A'`, `'Z'` |
| **Date & Time** | Menyimpan data tanggal dan waktu spesifik | `2026-07-22`, `08:00:00` |

---

## 4. Operator Pemrograman

Operator adalah simbol khusus yang digunakan untuk melakukan operasi/manipulasi pada variabel maupun nilai (*operand*).

### A. Operator Aritmatika
Digunakan untuk perhitungan matematis dasar:
* **Penjumlahan (`+`):** `5 + 3 = 8`
* **Pengurangan (`-`):** `10 - 4 = 6`
* **Perkalian (`*`):** `4 * 2 = 8`
* **Pembagian (`/`):** `10 / 2 = 5`
* **Modulus (`%`):** Menghasilkan **sisa hasil bagi** dari dua bilangan.
  * *Contoh 1:* `100 % 2 = 0` (karena 100 habis dibagi 2 tanpa sisa).
  * *Contoh 2:* `100 % 3 = 1` (karena $3 \times 33 = 99$, sisanya $100 - 99 = 1$).

### B. Operator Perbandingan (Relasional)
Digunakan untuk membandingkan dua nilai dan menghasilkan keluaran berbentuk Boolean (`true` atau `false`):
* `>` (Lebih besar dari)
* `<` (Lebih kecil dari)
* `>=` (Lebih besar dari atau sama dengan)
* `<=` (Lebih kecil dari atau sama dengan)
* `==` atau `===` (Sama dengan)
* `!=` (Tidak sama dengan)

### C. Operator Logika
Digunakan untuk menggabungkan dua atau lebih kondisi logika:
1. **AND (`&&`):** Bernilai `true` **hanya jika semua kondisi** bernilai benar.
   * *Contoh:* Syarat masuk bioskop = Memiliki KTP **DAN** Berumur $\ge 17$ tahun.
2. **OR (`||`):** Bernilai `true` **jika salah satu kondisi** bernilai benar.
3. **NOT (`!`):** Membalikkan nilai logika (menjadi kebalikan dari kondisi aslinya).

---

## 5. Topik Tambahan: Alur Kontrol Program

### A. Percabangan (*Conditional*)
Digunakan untuk mengambil keputusan berdasarkan kondisi tertentu:
* **`if - else`:** Menjalankan blok kode tertentu jika kondisi bernilai `true`, dan mengeksekusi blok `else` jika kondisi `false` (seperti logika alur *login* username dan password).
* **`switch case`:** Digunakan untuk percabangan dengan kondisi yang nilainya sudah pasti (*fixed value*).

### B. Perulangan (*Looping*)
Digunakan untuk menjalankan blok kode secara berulang selama kondisi terpenuhi tanpa perlu menulis ulang instruksi:
* **`for` loop:** Melakukan perulangan dengan jumlah yang sudah ditentukan.
* **Nested Loop (`for` di dalam `for`):** Perulangan bersarang di mana perulangan bagian dalam harus diselesaikan terlebih dahulu sebelum perulangan bagian luar berlanjut.

---

## 6. Contoh Implementasi Kode Program (JavaScript)

Berikut adalah contoh program sederhana yang mengintegrasikan konsep **Variabel**, **Tipe Data**, dan **Operator** dalam satu alur kasus pemeriksaan akses bioskop:

```javascript
// ============================================
// 1. DEKLARASI VARIABEL & TIPE DATA
// ============================================

// Tipe Data String (teks)
let namaPengguna = "Budi Santoso"; 

// Tipe Data Number (Integer & Float)
let umurPengguna = 18;            
let nilaiUjianKomputer = 85.5;    

// Tipe Data Boolean (true / false)
let memilikiKTP = true;           
let isStatusAktif = true;         

// ============================================
// 2. IMPLEMENTASI OPERATOR ARITMATIKA
// ============================================

let nilaiTugas1 = 80;
let nilaiTugas2 = 90;

// Operator Penjumlahan (+) dan Pembagian (/)
let totalNilai = nilaiTugas1 + nilaiTugas2;
let rataRataTugas = totalNilai / 2; 

// Operator Modulus (%) - Cek apakah umur bernilai genap atau ganjil
let sisaBagiUmur = umurPengguna % 2; // Hasil: 0 (Genap)

// ============================================
// 3. IMPLEMENTASI OPERATOR PERBANDINGAN & LOGIKA
// ============================================

let batasanUmurMinimal = 17;

// Operator Perbandingan (>=)
let syaratUmurCukup = umurPengguna >= batasanUmurMinimal; // true

// Operator Logika AND (&&) - Kedua syarat harus terpenuhi
let izinMasukBioskop = syaratUmurCukup && memilikiKTP; // true

// ============================================
// 4. MENAMPILKAN HASIL LOG PROGRAM (OUTPUT)
// ============================================

console.log("==========================================");
console.log("       SISTEM INFORMASI DATA PENGGUNA     ");
console.log("==========================================");
console.log("Nama Pengguna       : " + namaPengguna);
console.log("Umur                : " + umurPengguna + " tahun");
console.log("Rata-rata Nilai     : " + rataRataTugas);
console.log("Status Sisa Bagi    : " + sisaBagiUmur + " (0 = Genap, 1 = Ganjil)");
console.log("------------------------------------------");
console.log("Syarat Umur (>=17)  : " + syaratUmurCukup);
console.log("Status Memiliki KTP : " + memilikiKTP);
console.log("Izin Masuk Bioskop  : " + izinMasukBioskop);
console.log("==========================================");



// ============================================
// FUNGSI KESIMPULAN / EVALUASI AKHIR
// ============================================

function cetakLaporanKesimpulan(nama, umur, ktp, statusIzin) {
  console.log("\n==========================================");
  console.log("       KESIMPULAN HASIL EVALUASI PROGRAM  ");
  console.log("==========================================");
  console.log(`Nama Pengguna : ${nama}`);
  console.log(`Kategori Umur : ${umur >= 17 ? "Dewasa (>=17)" : "Anak-anak (<17)"}`);
  console.log(`Kelengkapan   : ${ktp ? "KTP Tersedia" : "KTP Tidak Ada"}`);
  console.log("------------------------------------------");
  
  // Evaluasi Keputusan Akhir
  if (statusIzin) {
    console.log("STATUS AKHIR  : ✅ AKSES DITERIMA / LULUS");
  } else {
    console.log("STATUS AKHIR  : ❌ AKSES DITOLAK / TIDAK LULUS");
  }
  console.log("==========================================\n");
}

// Memanggil fungsi kesimpulan dengan variabel dari program utama
cetakLaporanKesimpulan(namaPengguna, umurPengguna, memilikiKTP, izinMasukBioskop);