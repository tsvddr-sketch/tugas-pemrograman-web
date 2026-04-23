var nama = "Andre Basuki"
var nim = "12345"

var bil1 = 15;
var bil2 = 10;

var jumlah = bil1 + bil2;
var kurang = bil1 - bil2;
var kali = bil1 * bil2;
var bagi = bil1 / bil2;
var modulus = bil1 % bil2;
var pangkat = Math.pow(bil1, bil2);
var sisa = bil1 % bil2;

document.getElementById("nama").innerHTML = nama;
document.getElementById("nim").innerHTML = nim;

document.getElementById("bil1").innerHTML = "Bilangan 1: " + bil1;
document.getElementById("bil2").innerHTML = "Bilangan 2: " + bil2;

document.getElementById("jumlah").innerHTML = "Hasil Penjumlahan: " + jumlah;
document.getElementById("kurang").innerHTML = "Hasil Pengurangan: " + kurang;
document.getElementById("kali").innerHTML = "Hasil Perkalian: " + kali;
document.getElementById("bagi").innerHTML = "Hasil Pembagian: " + bagi;
document.getElementById("modulus").innerHTML = "Hasil Modulus: " + modulus;
document.getElementById("pangkat").innerHTML = "Hasil Perpangkatan: " + pangkat;
document.getElementById("sisa").innerHTML = "Sisa hasil bagi: " + sisa;