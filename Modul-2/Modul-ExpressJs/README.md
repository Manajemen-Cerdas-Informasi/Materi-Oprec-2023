# ExpressJS

## Daftar Isi
- [1. Pengenalan ExpressJS](#1-pengenalan-expressjs)
  - [1.1. Apa itu ExpressJS?](#11-apa-itu-expressjs)
  - [1.2. Kenapa ExpressJS?](#12-kenapa-expressjs)
- [2. Penggunaan ExpressJS](#2-penggunaan-expressjs)
  - [2.1. Setup ExpressJS](#21-setup-expressjs)
  - [2.2. Pembuatan Server](#22-pembuatan-server)
  - [2.3. Routing](#23-routing)
- [3. Penggunaan Sequelize](#3-penggunaan-sequelize)
  - [3.1 Apa Itu Sequelize?](#31-apa-itu-sequelize)
  - [3.2. Setup Sequelize](#32-setup-sequelize)
  - [3.3. Migration](#33-migration)
  - [3.4. Model](#34-model)
  - [3.5. ORM](#35-orm)
  
## Materi
### 1. Pengenalan ExpressJS
#### 1.1. Apa itu ExpressJS?
<img width="300" alt="Screenshot_20230222_211049" src="https://user-images.githubusercontent.com/87472849/220654257-019df9b7-4585-4aa8-9266-f06ec79dddec.png">
ExpressJS merupakan framework untuk aplikasi Node.JS sebagai framework back end. Untuk itu ExpressJS bertanggung jawab untuk mengatur fungsionalitas website, seperti pengelolaan routing dan session, permintaan HTTP, penanganan error, serta pertukaran data di server. 

#### 1.2. Kenapa ExpressJS?
Seperti yang disebutkan pada laman resmi <a href="https://expressjs.com/">ExpressJS</a>, kelebihannya sebagai berikut:
- Fast
- Unopinionated
- Minimalist

Hal ini dikarenakan ExpressJS memiliki fitur yang minimalis yang membuat framework ini relatif lebih cepat dibanding framework lainnya. 
Selain itu pengguna ExpressJS juga dibebaskan membuat dengan cara apapun karena tidak ada aturan baku dalam penggunaan ExpressJS. 
Fastify membuat perbandingan kecepatan framework NodeJS sebagai berikut <a href="https://www.fastify.io/benchmarks/">Perbandingan ExpressJS dengan Framework Lainnya</a>.
<img width="343" alt="image" src="https://user-images.githubusercontent.com/87472849/220654713-d0b9a5a5-8c02-481a-85fd-c2fdb439f5e0.png">

### 2. Penggunaan ExpressJS
#### 2.1. Setup ExpressJS
1. Buat folder kosong sebagai projek ExpressJS <img width="700" alt="image" src="https://user-images.githubusercontent.com/87472849/220656365-0dd7e2b8-baca-44dd-a0b0-b5daf06c07a2.png">
2. Buka terminal dan inisialisasi NodeJS dengan `npm init`. Isi pertanyaannya atau enter saja hingga proses selesai dan ketik "yes" untuk menyelesaikan proses. Akan muncul `package.json` pada folder projek tersebut. <img width="700" alt="image" src="https://user-images.githubusercontent.com/87472849/220657522-4a871755-fe20-47c9-bc15-d99d7cb31ebe.png">
3. Install ExpressJS ke projek dengan menjalankan perintah `npm install express` di terminal <img width="453" alt="image" src="https://user-images.githubusercontent.com/87472849/220660315-561ae645-4f03-4b8e-a4a4-9e8ca585ea87.png">
4. ExpressJS berhasil diinstall dan siap digunakan

#### 2.2. Pembuatan Server
Kegunaan ExpressJS adalah dapat membuat server. Berikut cara membuat server yang berjalan di local.
1. Buat file JS di projek untuk membuat program server. Import express ke program dengan `require("express")`. <img width="609" alt="image" src="https://user-images.githubusercontent.com/87472849/220661462-c0ba3a36-67b5-4f0a-a204-ae79ff18116c.png">
2. Inisialisasi fungsi express dan port-nya
```js
const app = express();
const port = 3000;
```
3. Gunakan `app` untuk request method HTTP
```js
app.get('/', (req, res) => res.send('Halo, calon admin MCI!'));
```
4. Buat server berjalan dengan port yang diinisialisasi di atas dan beri pesannya
```js
app.listen(port, () => console.log(`Server berjalan di http://localhost:${port}!`));
```
5. Untuk menjalankan file JS tersebut, perlu adanya perintah "start" pada "scripts" di package.json sebagai berikut <img width="396" alt="image" src="https://user-images.githubusercontent.com/87472849/220667152-83f08df1-f290-4391-9589-7b7969b9a50b.png">
6. Jalankan perintah `npm start` di terminal untuk memulai server </br> <img width="407" alt="image" src="https://user-images.githubusercontent.com/87472849/220669202-6f61cc81-bace-4325-9c86-5702f85f753d.png">
7. Jika buka link tersebut di browser, maka akan tampil response sebagai berikut </br> <img width="312" alt="image" src="https://user-images.githubusercontent.com/87472849/220669733-2df13e9e-f166-426d-b55b-fadbae74ebe5.png">

#### 2.3. Routing
Routing dapat dibuat dengan mudah dalam ExpressJS hanya dengan menambahkan method-method yang diinginkan. HTTP memiliki empat macam method yaitu
- Get
- Post
- Put
- Delete

Contoh routing pada aplikasi yang telah dibuat di atas dengan menambahkan sintaks berikut
```js
app.get('/dunia', (req, res) => res.send('Halo, dunia!'));
```
Struktur dalam membuat route sebagai berikut </br>
<img width="400" alt="image" src="https://user-images.githubusercontent.com/87472849/220675504-84445e6b-d958-465e-bb8b-6912aa39d409.png"> </br>

Jika server dijalankan ulang dan buka kembali aplikasinya di localhost, maka kita dapat mengarahkan ke `/dunia` dan akan tampil sebagai berikut </br>
<img width="358" alt="image" src="https://user-images.githubusercontent.com/87472849/220676271-07df3f93-fd6e-419e-8bbf-2872dac20be2.png"> </br>
