-- 1. Buat database (jalankan saat terhubung ke database "postgres")
CREATE DATABASE mahasiswa;

-- 2. Pindah ke database "mahasiswa", lalu buat tabel
CREATE TABLE biodata (
    id SERIAL PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    nim VARCHAR(11) NOT NULL,
    kelas VARCHAR(5) NOT NULL
);

-- 3. Contoh data
INSERT INTO biodata (nama, nim, kelas)
VALUES ('Admaja Bahari', '20230140052', 'E');