# ReactJS

## Daftar Isi
- [1. Pengenalan ReactJS](#1-pengenalan-reactjs)
  - [1.1. Apa itu ReactJS?](#11-apa-itu-reactjs)
  - [1.2. Kenapa ReactJS?](#12-kenapa-reactjs)
  - [1.3. Virtual DOM](#13-virtual-dom)
- [2. Instalasi ReactJS](#2-instalasi-reactjs)
  - [2.1. Instalasi NodeJS](#21-instalasi-nodejs)
  - [2.2. Instalasi Create React App](#22-instalasi-create-react-app)
  - [2.3. Menjalankan Aplikasi ReactJS](#23-menjalankan-aplikasi-reactjs)
  - [2.4. Struktur Folder ReactJS](#24-struktur-folder-reactjs)
  - [2.5. Struktur File ReactJS](#25-struktur-file-reactjs)
- [3. Praktik Membuat Aplikasi ReactJS](#3-praktik-membuat-aplikasi-reactjs)
  - [3.1 Repository](#31-repository)
  - [3.2. Daftar Isi Repository](#32-daftar-isi-repository)



## Materi
### 1. Pengenalan ReactJS
#### 1.1. Apa itu ReactJS?
ReactJS adalah sebuah library JavaScript yang digunakan untuk membangun user interface (UI) pada website. ReactJS dibuat oleh Facebook dan sekarang menjadi salah satu library JavaScript yang paling populer. ReactJS memungkinkan kita untuk membuat website yang interaktif dengan mudah. ReactJS juga memungkinkan kita untuk membuat website yang dinamis dengan cepat.

#### 1.2. Kenapa ReactJS?
ReactJS memiliki beberapa keunggulan dibandingkan dengan library JavaScript lainnya, yaitu:
- ReactJS menggunakan Virtual DOM, sehingga proses rendering menjadi lebih cepat.
- ReactJS menggunakan JSX, sehingga kita dapat menuliskan HTML di dalam JavaScript.
- ReactJS menggunakan component, sehingga kita dapat membuat website yang terdiri dari beberapa bagian yang saling terpisah.
- ReactJS menggunakan state, sehingga kita dapat membuat website yang interaktif.

#### 1.3. Virtual DOM
Virtual DOM adalah sebuah konsep yang digunakan oleh ReactJS untuk mempercepat proses rendering. Virtual DOM merupakan sebuah representasi dari DOM yang ada di browser. Virtual DOM ini akan selalu sinkron dengan DOM yang ada di browser. Ketika terjadi perubahan pada DOM, maka Virtual DOM akan melakukan perubahan pada Virtual DOM sesuai dengan perubahan yang terjadi pada DOM. Setelah itu, Virtual DOM akan melakukan perbandingan dengan Virtual DOM sebelumnya. Jika terdapat perubahan, maka Virtual DOM akan melakukan render ulang pada DOM yang ada di browser.

<img src="https://i2.wp.com/programmingwithmosh.com/wp-content/uploads/2018/11/lnrn_0201.png?ssl=1" alt="Virtual DOM" width="500">

Contoh: 

Setiap kali mengetikkan huruf baru, React akan memperbarui Virtual DOM untuk mencerminkan perubahan ini. Kemudian, React akan membandingkan Virtual DOM yang baru dengan Virtual DOM sebelumnya untuk menemukan perbedaan dan menentukan elemen mana yang harus dirubah. Setelah elemen yang perlu diubah diidentifikasi, React akan merender ulang hanya elemen yang berubah, yaitu kotak teks yang menampilkan pesan. 


### 2. Instalasi ReactJS
#### 2.1. Instalasi NodeJS
NodeJS adalah sebuah runtime environment yang digunakan untuk menjalankan JavaScript di luar browser. NodeJS dapat digunakan untuk membuat aplikasi berbasis web, aplikasi berbasis desktop, dan aplikasi berbasis mobile. Untuk menggunakan ReactJS, kita perlu menginstall NodeJS terlebih dahulu. Untuk menginstall NodeJS, silahkan download NodeJS di https://nodejs.org/en/download/. Setelah selesai menginstall NodeJS, silahkan buka terminal dan ketikkan perintah berikut untuk memastikan NodeJS sudah terinstall dengan benar.
```
node -v
```
Jika NodeJS sudah terinstall dengan benar, maka akan muncul versi NodeJS yang terinstall di komputer kita.

#### 2.2. Instalasi Create React App
silahkan buka terminal dan ketikkan perintah berikut.
```
npx create-react-app mci-blog
```

#### 2.3. Menjalankan Aplikasi ReactJS
Untuk menjalankan aplikasi ReactJS, silahkan buka terminal dan ketikkan perintah berikut.
```
cd mci-blog
npm run start
```

#### 2.4. Struktur Folder ReactJS
```
mci-blog
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── reportWebVitals.js
    ├── setupTests.js
    └── components
        └── Header.js
```

#### 2.5. Struktur File ReactJS
```
import React from 'react';

function Header() {
  return (
    <div>
      <h1>Header</h1>
    </div>
  );
}

export default Header;
```

### 3. Praktik Membuat Aplikasi ReactJS

#### 3.1 Repository
> https://github.com/kurniacf/react-tutor-oprec-mci

#### 3.2. Daftar Isi Repository
<a href="https://github.com/kurniacf/react-tutor-oprec-mci/tree/tahap-1">1. Initialization ReactJS</a> </br>
<a href="https://github.com/kurniacf/react-tutor-oprec-mci/tree/tahap-2">2. Create Components</a> </br>
<a href="https://github.com/kurniacf/react-tutor-oprec-mci/tree/tahap-3">3. Dynamic Value</a> </br>
<a href="https://github.com/kurniacf/react-tutor-oprec-mci/tree/tahap-4">4. Multiple Components</a> </br>
<a href="https://github.com/kurniacf/react-tutor-oprec-mci/tree/tahap-5">5. Adding Values</a> </br>
<a href="https://github.com/kurniacf/react-tutor-oprec-mci/tree/tahap-6">6. Click Events</a> </br>
<a href="https://github.com/kurniacf/react-tutor-oprec-mci/tree/tahap-7">7. Using State Hook</a> </br>
<a href="https://github.com/kurniacf/react-tutor-oprec-mci/tree/tahap-8">8. Extension React Developer Tools</a> </br>
<a href="https://github.com/kurniacf/react-tutor-oprec-mci/tree/tahap-9">9. Outputting Lists</a> </br>
<a href="https://github.com/kurniacf/react-tutor-oprec-mci/tree/tahap-10">10. Props</a> </br>
<a href="https://github.com/kurniacf/react-tutor-oprec-mci/tree/tahap-11">11. Reusing Components</a> </br>
<a href="https://github.com/kurniacf/react-tutor-oprec-mci/tree/tahap-12">12. Function as Props</a> </br>
<a href="https://github.com/kurniacf/react-tutor-oprec-mci/tree/tahap-13">13. Use Effect Hook</a> </br>
<a href="https://github.com/kurniacf/react-tutor-oprec-mci/tree/tahap-14">14. Use Effect Dependencies</a> </br>
<a href="https://github.com/kurniacf/react-tutor-oprec-mci/tree/tahap-15">15. Using JSON</a> </br>
<a href="https://github.com/kurniacf/react-tutor-oprec-mci/tree/tahap-16">16. Fetching Data</a> </br>
<a href="https://github.com/kurniacf/react-tutor-oprec-mci/tree/tahap-16">17. Loading Message</a> </br>
<a href="https://github.com/kurniacf/react-tutor-oprec-mci/tree/tahap-18">18. Handling Feych Error</a> </br>
<a href="https://github.com/kurniacf/react-tutor-oprec-mci/tree/tahap-19">19. Custom Hook</a> </br>
<a href="https://github.com/kurniacf/react-tutor-oprec-mci/tree/tahap-20">20. React Router</a> </br>
<a href="https://github.com/kurniacf/react-tutor-oprec-mci/tree/tahap-21">21. Exact Routes</a> </br>
<a href="https://github.com/kurniacf/react-tutor-oprec-mci/tree/tahap-22">22. Router Links</a> </br>
<a href="https://github.com/kurniacf/react-tutor-oprec-mci/tree/tahap-23">23. Clean Use Effect</a> </br>
<a href="https://github.com/kurniacf/react-tutor-oprec-mci/tree/tahap-24">24. Route Parameters</a> </br>
<a href="https://github.com/kurniacf/react-tutor-oprec-mci/tree/tahap-25">25. Reusing Custom Hooks</a> </br>