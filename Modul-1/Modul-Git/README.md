# Git

## Daftar Isi
[Materi](#materi)
- [1. Definisi](#1-definisi)
  - [1.1. Apa itu Git?](#11-apa-itu-git)
  - [1.2. Apa itu GitHub?](#12-apa-itu-github)

- [2. Penggunaan Git](#2-penggunaan-git)
  - [2.1. Instalasi Git](#21-instalasi-git)
  - [2.2. Persiapan GitHub](#22-persiapan-github)
  - [2.3. Command Git](#23-command-git)

[Tugas](#tugas)

## Materi

### 1. Definisi

#### 1.1. Apa itu Git?

Git adalah version control system atau sistem pengontrol versi yang dirancang untuk menangani proyek pemrograman. Git bersifat gratis dan open source. Git merupakan teknologi version control yang paling banyak dipilih untuk digunakan karena kecepatan dan efisiensinya.

Git dapat digunakan sebagai perintah pada command prompt dengan mengunduh Git dan memasang environmentnya di komputer. Git dapat diunduh [di sini](https://git-scm.com/). Akan tetapi, sudah ada juga GitHub Desktop yang menyediakan layanan Git dengan UI sehingga developer tidak harus menggunakan command line. GitHub Desktop dapat diunduh [di sini](https://desktop.github.com/)

Namun, supaya bisa mendapatkan pemahaman lebih dalam, modul ini akan membahas cara menggunakan Git dengan terminal/command prompt.

#### 1.2. Apa itu GitHub?

Mendengar istilah Git, sering kali akan membuat kita teringat dengan website yang kental dengan ciri khas programming, yaitu GitHub. GitHub, seperti padanan dari namanya, adalah "hub" untuk Git. Dengan kata lain, GitHub adalah perusahaan yang didirikan oleh Chris Wanstrath yang menawarkan layanan repository Git berbasis awan pada website mereka. GitHub baru didirikan pada tahun 2008 dan pusatnya berlokasi di San Francisco. Sebelum ada GitHub, repository Git biasanya di-manage di local ataupun server. Pada pembelajaran kali ini, kita akan belajar bagaimana cara menggunakan Git pada platform GitHub.

### 2. Penggunaan Git

#### 2.1. Instalasi Git

Setelah menginstall Git di komputer, cari *Environment Variables* pada start.

![image](https://user-images.githubusercontent.com/34309557/225525423-8d41878d-c094-4ed7-b296-b1885d6b0011.png)

Lihat *Path* yang ada pada *System Variable* dengan menekan tombol *Edit*

![image](https://user-images.githubusercontent.com/34309557/225525606-c9830656-832a-4c77-8be4-7632279b6960.png)

Pastikan sudah ada path untuk Git tertulis di dalama sana.

![image](https://user-images.githubusercontent.com/34309557/225525733-8570ed06-b1d5-41bf-aeb5-6b1ecb5d6d1d.png)

Apabila sudah, tutup dan buka lagi command line dan tes dengan `git help`.

#### 2.2. Persiapan GitHub

Pastikan kalian sudah memiliki akun GitHub. Untuk membuat repository baru, silahkan menuju ke profil kalian. Setelah itu, pergi ke tab *Repository* dan klik tombol *New*.

![image](https://user-images.githubusercontent.com/34309557/225526184-d3f3500d-9563-479c-bbcf-57a7e0b5ff95.png)

Untuk mengikuti pembelajaran modul ini, silahkan membuat repository dengan setting sebagai berikut.

![image](https://user-images.githubusercontent.com/34309557/225526843-2ecb1f9e-c1f4-474d-80a1-2064cd1df1f8.png)

Setelah itu, kalian akan mendapati repository kalian dengan file README.md di dalamnya.

#### 2.3. Command Git

##### Membuat Repository

Cara untuk menjadikan sebuah repository/folder di komputer menjadi repository Git.

```
git init
```

##### Clone Repository

Cara untuk mendownload repository GitHub yang benar ke repository lokal tidak dengan mendownloadnya sebagai zip, tetapi menggunakan command Git supaya Git selalu dapat melacak perubahan dan melakukan version control. Cara untuk melakukan cloning adalah seperti sebagai berikut
```
git clone <link github>
```

##### Memasukkan Perubahan ke Dalam Git

Sebelum kita bisa mengupload perubahan kita ke remote repository yang terhubung dengan local repository Git kita, kita perlu menambahkan perubahan terlebih dahulu.

```
git add .
```

`.` menandakan untuk menambahkan semua perubahan yang terjadi di repository. Apabila tidak ingin menambahkan semuanya, kita bisa menuliskan file apa saja yang kita inginkan untuk disimpan perubahannya. Misal, apabila kita ingin menyimpan semua perubahan dalam file yang berformat `.txt`, penulisannya adalah sebagai berikut.

```
git add *.txt
```

`*` atau asterisk bersifat seperti konsep wild card.

##### Melakukan Commit

Apabila ingin mulai mengupload atau istilahnya dalam Git adalah commit ke remote repository, dapat dilakukan dengan sintaks seperti berikut.

```
git commit -m <nama commit>
```

##### Mengupload Commit ke Remote Repository

Mengupload remote repository bisa dilakukan dengan beberapa commit sekaligus. Cara untuk mengupload commit adalah sebagai berikut.

```
git push
```

##### Mengunduh Perubahan di Remote Repository

Apabila temanmu sudah melakukan pull untuk semua commitnya, kamu bisa mengambil perubahannya dengan berikut ini.
```
git pull
```

##### Branch

Cara untuk membuat branch dapat dengan `git branch` ataupun `git checkout`. Pada modul ini, akan lebih difokuskan manajemen branch menggunakan `git checkout` karena lebih fleksibel. 

###### Membuat Branch

```
git checkout -b <nama branch baru>
```

###### Pindah Branch

```
git checkout <nama branch>
```

Pada awalnya, `git checkout` memang diperuntukkan untuk mengganti branch saja. Tetapi, pada aplikasinya, command tersebut dapat digunakan juga untuk membuat branch.

###### Melihat List Branch
Untuk melihat branch apa saja yang kita punya di repository beserta lokasi kita saat ini, dapat menggunakan sebagai berikut.
```
git branch
```

##### Menghubungkan ke Remote Repository
Apabila repositroy masih belum terhubung dengan remote repository.
```
git remote add origin <link repository>
```

##### Menggabungkan Dua Branch
Menggabungkan dua branch dapat menggunakan command berikut. Akan tetapi, akan terjadi error apabila terjadi konflik. Maka dari itu, semua konflik harus diselesaikan supaya dapat di-merge. Untuk dapat melihat konflik dengan jelas, dapat dengan menginstall ekstensi pada IDE ataupun code editor yang kalian gunakan.
```
git merge <nama branch>
```
Branch yang sedang dikerjakan sekarang akan digabungkan dengan nama branch yang ditulis. Apabila hanya ingin mengetes kesesuaian merge, dapat dengan menambahkan `experimental` di akhir command.

##### Melihat History
Melihat semua history.
```
git log
```
Melihat history pada poin-poin tertentu.
```
git show <nomor versi yang tertera di git log>
```
Kita juga bisa menggunakan kode versi tertentu untuk mengeclone versi tertentu.

##### Reset
Apabila melakukan kesalahan, dapat melakukan git reset. Akan tetapi, command ini benar-benar dapat menghilangkan pekerjaan kalian jadi berhati-hatilah dalam penggunaan `git reset`. Berikut ini adalah visualisasi tentang teknis `git reset`
![image](https://user-images.githubusercontent.com/34309557/225557838-d62368c3-816c-4373-9a68-7d02b0522ff8.png)

##### Cherry Pick

Fitur cherry pick memungkinkan fitur pada suatu versi pada suatu branch dibawa ke branch lain. Berikut ini adalah visualisasinya.

![image](https://user-images.githubusercontent.com/34309557/225580972-59c74c14-3ee8-40a7-a34d-5ab5b812c512.png)

```
git cherry-pick <kode commit>
```

##### Pull Request

Apabila kita melakukan clone pada suatu repository publik yang tidak kita miliki akses authorisasinya, kita harus melakukan *Pull Request* apabila ingin memberikan changes yang kita ubah di repository ke repository asli. Cara untuk melakukan hal ini pertama-tama adalah dengan *Fork*. Kita perlu menyalin repository tersebut dan menjadikannya milik kita terlabeih dahulu dan barulah kita bisa melakukan perubahan pada repository yang sudah kita miliki ini. Apabila kita ingin menyatukannya dengan repository asli, kita harus melakukan *Pull Request* yang harus disetujui dulu oleh author pemilik repository. Apabila disetujui, kita akan menjadi kontributor dan code kita akan tersimpan pada repository asli.

## Materi

Lakukanlah *Pull Request* pada repository [ini](https://github.com/Manajemen-Cerdas-Informasi/camin-mci-2023) dengan memberikan perubahan nama beserta link ke sosial media kalian yang bertindak seperti CV (LinkedIn, GitHub, Medium, CodePen, dll) di README.




