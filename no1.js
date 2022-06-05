// 1. charAt = berfungsi untuk mencetak karakter pada posisi tertentu dalam string (indeks start dari 0)
const kalimat = "saya belajar javascript";
console.log(kalimat.charAt(1));

// 2. concat = berfungsi untuk menggabungkan dua atau lebih string dan mengembalikan string baru.
const kalimat1 = "saya belajar HTML ";
const kalimat2 = "saya belajar javascript";
const kalimat3 = kalimat1.concat("dan ",kalimat2);

console.log(kalimat3);

// 3. length = digunakan untuk menghitung panjang string, dimulai dari 1
const jumlahHuruf = "saya belajar javascript";
console.log(jumlahHuruf.length);

// 4. replace = digunakan mengganti karakter tertentu yang ada di sebuah string 
const string = "saya belajar javascript";
const newString = string.replaceAll("saya","kita");

console.log(newString);

// 5. lowerCase = digunakan untuk mengganti semua karakter menjadi huruf kecil
const variabel = "SAYA BELAJAR JAVASCRIPT";
console.log(variabel.toLowerCase());

// 6. split = digunakan untuk membagi sebuah string menjadi array, dalam 
// case ini space displit menjadi 2  
const string1 = "Saya belajar javascript";
const pecahan = string1.split(" ", 2);
console.log(pecahan);

// 7. slice = merupakan method array di JavaScript yang berfungsi menyalin 
// sebagian elemen array ke array baru. elemen ditentukan dengan indeks awal dan akhir
const str = ["saya","belajar","javascript"];
const sliced = str.slice(1, 3);         
console.log( sliced );

// 8. Uppercase = digunakan untuk mengganti semua karakter menjadi huruf kapital
const kata = "saya belajar javascript";
console.log(kata.toUpperCase());

// 9. filter = filter mengeksekusi setiap elemen dari array, dan memunculkan array baru yang hanya berisi 
//elemen callback dan mengembalikan nilai true
const coding = ["Javascript", "C++", "Java", "Phyton"];
const valueHasil = coding.filter(coding => coding.length >= 4);
console.log(valueHasil);

// 10. Join = menggabungkan semua elemen array dengan yang ditentukan, contohnya: koma(,) atau garis(-)
var arr = ["saya","belajar","javascript"];
console.log(arr.join("-"))