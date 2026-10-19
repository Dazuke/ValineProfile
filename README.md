# Uang Kas — Sistem Informasi 002

Prototype awal berbasis HTML, CSS, dan JavaScript.

## Cara menjalankan
1. Ekstrak folder `kaskelas-si002`.
2. Buka `index.html` di browser, atau gunakan ekstensi Live Server di VS Code.
3. Klik **Masuk Bendahara**. Password demo: `kas002`.
4. Pilih bulan pada bagian atas untuk melihat kolom pembayaran setiap hari Sabtu.
5. Untuk menambahkan QRIS, masuk sebagai bendahara lalu buka tab Payment.
6. Rekap bisa diekspor sebagai CSV (bisa dibuka di Excel/Google Sheets) atau dicetak menjadi PDF.

## Fitur prototype
- Mode viewer untuk siswa dan mode edit demo untuk bendahara.
- Checklist per siswa dengan kolom otomatis berdasarkan jumlah hari Sabtu dalam bulan.
- Ringkasan saldo, pemasukan, pengeluaran, progres dan donut chart.
- Unggah gambar QRIS untuk preview lokal.
- Tambah siswa dan catat pengeluaran.
- Ekspor CSV dan cetak ke PDF.
- Data tersimpan di `localStorage` browser yang sedang digunakan.

## Penting sebelum dipakai sungguhan
Ini **belum terhubung ke Firebase**. Data hanya ada di browser/perangkat tempat data dimasukkan, sehingga siswa lain tidak akan melihat pembaruan yang sama. Password demo `kas002` tidak aman untuk produksi.

Tahap berikutnya:
1. Buat Firebase project.
2. Aktifkan Firebase Authentication untuk bendahara.
3. Simpan siswa, periode pembayaran, dan transaksi di Cloud Firestore.
4. Pasang Firestore Security Rules agar pengunjung hanya bisa membaca data yang memang boleh ditampilkan, sementara hanya akun bendahara terautentikasi yang bisa menulis.
5. Simpan gambar QRIS di Firebase Storage.
6. Tambahkan ekspor XLSX bila diperlukan; saat ini CSV bisa diimpor ke Google Sheets/Excel.

Jangan memasukkan password rahasia atau data pembayaran asli ke prototype ini sebelum keamanan Firebase diterapkan.
