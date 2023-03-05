# Javascript

## Daftar Isi
- [1. Pengenalan Javascript](#1-pengenalan-javascript)
  - [1.1. Apa itu Javascript](#11-apa-itu-javascript)
  - [1.2. Mengapa Javascript?](#12-mengapa-javascript)
- [2. Pengenalan Javascript](#2-pengenalan-javascript)

  
## Materi

### 1. Pengenalan Javascript
#### 1.1. Apa itu Javascript
Javascript merupakan salah satu bahasa pemrograman yang terpopuler di dunia. Javascript membuat aplikasi web menjadi interaktif tanpa reload halaman. Hampir semua browser modern yang kita ketahui dapat menjalankan javascript agar website yang ditampilkan lebih menarik. Perhatikan Ilustrasi dibawah ini :

<img src="https://user-images.githubusercontent.com/96496752/220011217-2c16c1c2-4baa-490f-8c97-d8d20098e42d.jpg" width=480/>


Jika kita sudah tahu betapa pentingnya CSS untuk membuat tampilan menjadi lebih menarik dari pada sebuah kerangka saja, maka Javascript berfungsi sebagai sebuah otak, otot dan saraf agar seorang manusia dapat dinamis dan berinteraksi. Dalam website disini JavaScript-lah yang berperan dalam membuat website yang dinamis dan interaktif.

#### 1.2. Mengapa Javascript?
<img src="https://www.devjobsscanner.com/assets/blog/most-demanded-languages-2022/ranking-total-jobs-3.svg" width=480/>
Berdasarkan informasi data https://www.devjobsscanner.com, pada tahun 2022, javascript menjadi bahasa pemrograman paling diminati dan diperlukan. Kepopuleran javascript sebenarnya sudah dimulai dari awal kemunculannya sebagai bahasa pemrograman web yang dapat membuat website menjadi lebih dinamis.

#### 1.3. Keunggulan Javascript
1. **General Purpose**, Sekarang javascript tidak hanya digunakan untuk sisi client menggunakan browser saja tetapi untuk beragam aplikasi, seperti desktop, mobile, iot, dan lainnya dengan menggunakan node js
2. **Mudah untuk Dipelajari**, Javascript memiliki syntax yang lebih singkat dan sederhana dibandingkan dengan kebanyakan bahasa pemrograman pada umumnya, seperti contoh berikut :

````c++
// C++
#include <iostream>

int main(){
  std::cout << "Hello World";
}
````
````java
// Java
class Main{
  public static void main(String[] args) {
     System.out.println("Hello World!");     
  }
}
````
````javascript
// Javascript
console.log("Hello World")
````
***Perlu menjadi catatan bahwa Java dan Javascript merupakan dua hal yang berbeda.***

3. **Sangat Powerfull**, Pada masa kepopuleran php, logika dalam program semuanya dibuat dalam sisi server sedangkan browser era sekarang Browser modern memiliki sifat interaktif dan dinamis yang nantinya akan memperlambat proses komputasi. Javascript hadir untuk mengatasi hal tersebut.

4. **Komunitas yang berkembang dengan pesat**

5. **Banyak perusahaan yang menggunakan Javascript**
### 2. Pengenalan Javascript
#### 2.1. Variabel dan Tipe Data
Variabel dalam javascript sama halnya dengan variabel pada bahasa pemrograman pada umumnya, yaitu merupakan sebuah tempat untuk menyimpan nilai atau data yang akan digunakan dalam program yang akan dibuat. Namun, Javascript mempunyai cara sendiri untuk mendefinisikan variabel tersebut. Terdapat tiga cara pendefinisian variabel dalam javascript, yaitu `var`, `let`, `const`. Pada awalnya, pendefinisian variabel hanya menggunakan `var`, tetapi seiring berkembang muncul konsep `let` dan `const`. Ketiganya mempunyai perbedaan ketika digunakan tergantung pada kebutuhan yang akan dikerjakan.
1. `var`: Variabel yang dideklarasikan dengan `var` memiliki lingkup (scope) yang cukup luas, yaitu lingkup fungsi atau lingkup global. Artinya, variabel yang dideklarasikan dengan `var` dapat diakses dari mana saja di dalam fungsi atau di seluruh kode. Variabel yang dideklarasikan dengan `var` dapat diinisialisasi ulang dan nilainya dapat diubah di mana saja di dalam fungsi atau kode.

2. `let`: Variabel yang dideklarasikan dengan `let` memiliki lingkup yang lebih terbatas dibandingkan dengan var, yaitu hanya lingkup blok kode di mana variabel dideklarasikan. Variabel yang dideklarasikan dengan `let` tidak dapat diinisialisasi ulang, tetapi nilainya dapat diubah di dalam blok kode tempat variabel dideklarasikan.

3. `const`: Variabel yang dideklarasikan dengan `const` juga memiliki lingkup yang terbatas seperti `let`, yaitu hanya lingkup blok kode di mana variabel dideklarasikan. Namun, perbedaannya adalah nilai variabel yang dideklarasikan dengan `const` tidak dapat diubah setelah dideklarasikan. Variabel yang dideklarasikan dengan `const` harus diinisialisasi saat dideklarasikan, dan nilai variabel tidak dapat diubah setelahnya.

Berikut contoh penggunaan ketiganya:
```js
var a = 10;
const b = 20;
let c = 30;

console.log(a); // Output : 10
console.log(b); // Output : 20
console.log(c); // Output : 30

a = a + 5;
// b = b + 5;
c = c + 5;

console.log(a); // Output : 15
console.log(b); // Output : TypeError: Assignment to constant variable.
console.log(c); // Output : 35

{
  a = 50;
  c = c + 5;
  const d = 50;
  let e = 50;

  console.log(a); // Output : 50
  console.log(d); // Output : 50
  console.log(e); // Output : 50
}

console.log(a); // Output : 50
console.log(b); // Output : 20
console.log(c); // Output : 40
console.log(d); // Output : ReferenceError: d is not defined
console.log(e); // Output : ReferenceError: e is not defined

```

Dalam Javascript,  terdapat beberapa macam tipe data
| No | Tipe Data | Contoh | 
| ------------- | ------------- | ------------- |
| 1. | String | "Halo, Nama Saya ... " |
| 2. | Number | 8 |
| 3. | Array | [1,2,3,5,8,13,21] |
| 4. | Boolean | true or false |
| 5. | Undefined | undefined |
| 6. | Null | Null |
| 7. | Object | {firstName:"John", lastName:"Doe"} |

#### 2.2. Operator Aritmatika, Logika, perbandingan
##### 2.2.1 Operator Aritmatika
| Operator  | Deskripsi |
| ------------- | ------------- |
| +  | Addition  |
| -  | Subtraction  |
| *  | Multiplication  |
| **  | Exponentiation (ES2016)  |
| / | Division  |
| % | Modulus (Division Remainder)  |
| ++ | Increment  |
| -- | Decrement  |

##### 2.2.2 Operator Logika
| Operator | Deskripsi |
| ------------- | ------------- |
| && 	| logical and |
|  II 	| logical or |
| ! 	| logical not| 

##### 2.2.3 Operator perbandingan
| Operator | Deskripsi |
| ------------- | ------------- |
| == 		| equal to |
| === 		| equal value and equal type |
| != 		| not equal |
| !== 		| not equal value or not equal type |
| > 		| greater than |
| < 		| less than |
| >= 		| greater than or equal to |
| <= 		| less than or equal to |
| ? 		| ternary operator |

#### 2.3. Conditional Statements
##### 2.3.1 If
```javascript
let a = 10

if(a == 10){
  console.log("a sama dengan 10")
}
// Output : a sama dengan 10
```

##### 2.3.2 if else
```javascript
let a = 15

if(a == 10){
  console.log("a sama dengan 10")
} else {
  console.log("a tidak sama dengan 10")
}
// Output : a tidak sama dengan 10
```

##### 2.3.3 else if
```javascript
let a = 15

if(a == 10){
  console.log("a sama dengan 10")
} else if (a > 10) {
  console.log("a lebih besar dari 10")
} else if (a < 10) {
  console.log("a kurang dari 10")
} else {
  console.log("a undefined")
}
// Output : a lebih besar dari 10
```

##### 2.3.4 switch
```javascript
let a = 10

switch(true){
  case a == 10:
    console.log("a sama dengan 10")
    break
  case a > 10:
    console.log("a lebih besar dari 10")
    break
  case a < 10:
    console.log("a kurang dari 10")
    break
  default:
    console.log("a undefined")
    break
    
}
```
#### 2.4. Looping Statements
##### 2.4.1 While
```javascript
let i = 0;
while (i < 5) {
  console.log(i)
  i++;
}
// output : 
// 0
// 1
// 2
// 3
// 4

```
#### 2.4.2 For
```
for(let i = 0; i<5; i++){
  console.log(i)
}
// output : 
// 0
// 1
// 2
// 3
// 4
```

#### 2.4.2 For in
`for in` digunakan untuk melakukan iterasi pada sebuah objek.

```javascript
for (var propertyName in object) {
  // blok kode yang akan dijalankan untuk setiap properti objek
}
```

`propertyName`: variabel yang digunakan untuk menampung nama properti objek pada setiap iterasi.

`object`: objek yang akan diiterasi.

Berikut Contoh penggunaannya : 
```javascript
const mahasiswa = { nama: "labib", asal: "indonesia", age: 20 };

let val = [];
for (let mhs in mahasiswa) {
  val.push(mahasiswa[mhs]);
}

console.log(`Halo nama saya ${val[0]} dari ${val[1]} \numur saya ${val[2]}`);
\\ Output : 
\\ Halo nama saya labib dari indonesia 
\\ umur saya 20
```

```js
const mahasiswa = [
  { nama: "labib", asal: "indonesia", age: 20 },
  { nama: "alfaraby", asal: "indonesia", age: 21 },
  { nama: "muhammad", asal: "indonesia", age: 22 },
];

for (let mhs in mahasiswa) {
  //   val.push(mahasiswa[mhs]);
  console.log(
    `Halo nama saya ${mahasiswa[mhs].nama} dari ${mahasiswa[mhs].asal} \numur saya ${mahasiswa[mhs].age}`
  );
}

// Output : 
// Halo nama saya labib dari indonesia
// umur saya 20
// Halo nama saya alfaraby dari indonesia
// umur saya 21
// Halo nama saya muhammad dari indonesia
// umur saya 22
```
#### 2.4.2 For of
`for of` digunakan untuk melakukan iterasi pada objek iterables, seperti array, string, set.

```javascript
for (var propertyName of object) {
  // blok kode yang akan dijalankan untuk setiap properti objek iterable
}
```

```js
const fruits = ['apple', 'banana', 'orange'];

for (let fruit of fruits) {
  console.log(fruit);
}
// Output : 
// apple
// banana
// orange
```

```js
const message = 'Hello World!';

for (let char of message) {
  console.log(char);
}
// Output : 
// H
// e
// l
// l
// o

// W
// o
// r
// l
// d
// !

```

#### 2.5. Function
Function atau fungsi adalah salah satu fitur penting dalam pemrograman yang memungkinkan Anda untuk menulis kode yang dapat digunakan kembali atau dipanggil kembali pada bagian lain dari program. Function pada dasarnya adalah blok kode yang dapat dieksekusi secara terpisah dari program utama, dan dapat menerima masukan (parameter) dan menghasilkan keluaran (return value) (tidak harus). Dalam javascript terdapat tiga cara untuk mendefinisikan function.

##### 1. Function Declaration
Cara paling umum untuk membuat function di JavaScript adalah dengan menggunakan Function Declaration. Function Declaration biasanya digunakan untuk membuat function yang dapat dipanggil di seluruh program.

```js
function tambah(a, b) {
  return a + b;
}
```

##### 2. Function Expression
Function Expression adalah cara lain untuk membuat function di JavaScript. Function Expression biasanya digunakan untuk membuat function yang hanya digunakan di dalam satu blok kode tertentu.

```js
var kurang = function(a, b) {
  return a - b;
}
```

##### 3. Arrow Function
Arrow Function adalah cara baru untuk membuat function di JavaScript. Arrow Function biasanya digunakan untuk membuat function yang sederhana dan mudah dibaca.
```js
var kali = (a, b) => { 
  return a * b
};
```
```js
hello = val => "Hello " + val; 
```

#### 2.6. Object and Array
##### 2.6.1. Object
`Object` adalah tipe data yang penting dan sering digunakan. Object adalah kumpulan dari properti (properties) dan metode (methods) yang merepresentasikan suatu objek dalam dunia nyata. Properti adalah variabel yang berisi nilai, sedangkan metode adalah function yang memungkinkan objek untuk melakukan tindakan tertentu. Berikut adalah contoh object dalam JavaScript:

```js
var mahasiswa = {
  nama: "Labib",
  asal: "Indonesia",
  age: 25,
  say: function() {
    return "Halo saya " + this.nama + " dari " + this.asal;
  }
};
console.log(mahasiswa.say())
// Output : Halo saya Labib dari Indonesia
```

Untuk mengakses nilai dalam objek dapat menggunakan beberapa cara:
```js
// mengakses properti 
objectName.propertyName
objectName["propertyName"]

// mengakses methods
objectName.methodName()
```

Nilai dalam properti objek dapat kita ubah dengan cara re-assign value ke properti tersebut
```js
const obj = {first:"first", second:"second"}
obj.first = "satu"
obj["second"] = "dua"

console.log(obj)
// Output : { first: 'satu', second: 'dua' }
```

##### 2.6.2. Array

`Array` adalah struktur data dalam JavaScript yang digunakan untuk menyimpan kumpulan nilai (value) dalam satu variabel. Array pada dasarnya adalah kumpulan dari nilai yang dikelompokkan dalam satu tempat. Setiap nilai pada array memiliki indeks (index) yang dimulai dari 0 dan diurutkan secara teratur. Berikut contoh penggunaan array.

```js
const arr = [1,2,3,4,5]
arr.push(6)  // menambahkan nilai 1 ke akhir array [ Output : [ 1, 2, 3, 4, 5, 6 ] ]
arr.pop() // menghapus nilai terakhir dari array [ Output : [ 1, 2, 3, 4, 5 ] ] 
arr.shift() // menghapus nilai pertama dari array [ Output : [ 2, 3, 4, 5 ] ] 
arr.unshift(10) // menambahkan nilai baru di awal array [ Output : [ 10, 2, 3, 4, 5 ] ] 
arr.splice(1,0,100,120,130) // menambahkan nilai dimulai dari index 1 sebanyak nilai ( 100, 120, 130) menghapus nilai sebanyak 0 [ Output : [10, 100, 120, 130, 2, 3, 4, 5] ] 
```
