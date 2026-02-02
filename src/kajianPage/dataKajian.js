import relAbs from "../assets/poster/rel-abs.png";
import relAbsSlide from "../assets/tampilan/relatiabsoluteslide.png";
import gradientSlide from "../assets/tampilan/gradientslide.png";
import htmlSlide from "../assets/tampilan/htmlSlide.png";
import dasarhtmlslide from "../assets/tampilan/dasarhtmlslide.png";
import kelaspersegi from "../assets/tampilan/kelaspersegi.png";
import spslide from "../assets/tampilan/spslide.png";
import aljabarslide from "../assets/tampilan/aljabarslide.png";
import WWIslide from "../assets/tampilan/WWIslide.png";
import gradient from "../assets/poster/gradient.png";
import html from "../assets/poster/html.png";
import dasarhtml from "../assets/poster/dasarhtml.png";
import kelas from "../assets/poster/kelas.png";
import sp from "../assets/poster/sp.png";
import aljabar from "../assets/poster/aljabar.png";
import WWI from "../assets/poster/WWI.png";

const dataKajian = [
  {
    id: 1,
    nama: "Absolute & Relative Dalam Website",
    desc: "Dalam CSS position relative diartikan sebagai elemen yang tetap berada di tempat asalnya namun memiliki kemampuan untuk digeser sedikit menggunakan properti seperti top atau left. Ciri penting dari relative adalah elemen tersebut masih mengikuti alur tata letak normal dan berfungsi sebagai patokan atau acuan bagi elemen absolute yang berada di dalamnya. Sementara itu position absolute berarti elemen tersebut bersifat bebas dan tidak lagi mengikuti alur normal sehingga kehadirannya tidak memengaruhi posisi elemen lainnya. Posisi elemen absolute akan menempel pada induk terdekatnya yang memiliki status relative namun jika tidak ditemukan induk yang sesuai maka ia akan menempel pada layar atau viewport. Hubungan keduanya dapat diibaratkan seperti papan sebagai relative dan stiker sebagai absolute di mana stiker akan menempel mengikuti posisi papannya. Secara singkat relative digunakan untuk menjaga elemen tetap normal sekaligus menjadi acuan sedangkan absolute digunakan agar elemen bisa bergerak bebas menempel pada acuan tersebut",
    imgTampilan: relAbsSlide,
    poster: relAbs,
    slide:
      "https://drive.google.com/file/d/1fX13T3CiRLClUatrZYO9h2DVSepCDRzk/view?usp=sharing",
    tema: ["IT"],
  },
  {
    id: 2,
    nama: "Membuat Text Gradient Dalam Website",
    desc: "Membuat teks gradient pada web dapat dilakukan dengan menggunakan trik CSS khusus karena properti warna teks biasa tidak bisa langsung menerima nilai gradient,. Cara kerjanya adalah dengan memasang gradient sebagai latar belakang atau background, kemudian memotong background tersebut agar mengikuti bentuk huruf menggunakan properti background-clip, dan terakhir mengubah warna asli teks menjadi transparan agar warna gradient di belakangnya terlihat,,. Proses ini murni menggunakan CSS tanpa memerlukan JavaScript, kecuali jika pengembang ingin menambahkan efek animasi lanjutan. Selain menggunakan CSS manual, teknik ini juga bisa diterapkan secara lebih praktis menggunakan Tailwind CSS melalui utility class seperti bg-clip-text dan text-transparent,. Penggunaan teks gradient sangat cocok untuk judul besar, headline, atau kata kunci penting, namun tidak disarankan untuk paragraf yang panjang karena dapat mengganggu kenyamanan serta keterbacaan teks tersebut,.",
    imgTampilan: gradientSlide,
    poster: gradient,
    slide:
      "https://drive.google.com/file/d/15UajUUOj7EDJ4T7fGtbi6j3w2YTBCFCR/view?usp=sharing",
    tema: ["IT"],
  },
  {
    id: 3,
    nama: "Langkah Awal Belajar HTML Untuk Pemula",
    desc: "HTML atau HyperText Markup Language merupakan bahasa dasar yang menjadi pondasi untuk menyusun kerangka sebuah halaman web seperti judul, paragraf, link, dan tombol. Mempelajari HTML bagi pemula diibaratkan seperti menyusun batu bata sebelum membangun sebuah rumah karena perannya adalah untuk menyusun struktur dan bukan merupakan bahasa pemrograman logika. Alat yang diperlukan untuk memulai sangat sederhana yaitu sebuah browser untuk melihat hasil website serta text editor seperti Visual Studio Code untuk menulis kode. Langkah awal yang harus dilakukan adalah membuat folder dan file bernama index.html yang diisi dengan kode dasar agar dapat langsung ditampilkan melalui browser,.Pemula disarankan untuk fokus terlebih dahulu pada tag yang wajib dikuasai seperti elemen teks dari h1 hingga h6, paragraf, serta elemen untuk gambar dan link. Metode terbaik dalam mempelajari HTML adalah dengan membiasakan diri menulis kode lalu menyimpannya dan segera melihat hasilnya di browser karena HTML bersifat visual. Setelah memahami struktur dasar, urutan belajar yang disarankan adalah melanjutkan ke CSS untuk mengatur tampilan dan JavaScript untuk menambahkan interaksi sebelum melompat ke penggunaan framework. Sebagai latihan, pemula bisa mencoba membuat proyek kecil seperti profil diri atau halaman biodata agar lebih terbiasa dengan kode yang ditulis. Dalam waktu singkat seperti tujuh hari, target yang realistis adalah memahami struktur dasar dan mampu membuat halaman statis yang menggunakan layout sederhana. Untuk memperdalam materi, sumber belajar seperti W3Schools dan MDN Web Docs dapat menjadi referensi teks yang sangat membantu bagi pemula",
    imgTampilan: htmlSlide,
    poster: html,
    slide:
      "https://drive.google.com/file/d/1IThxBazLvUbuSCFwOrkvLH9SlarGt6ia/view?usp=sharing",
    tema: ["IT"],
  },
  {
    id: 4,
    nama: "dasar html",
    desc: "HTML merupakan fondasi dasar website di mana setiap filenya memiliki kerangka tetap yang terdiri dari deklarasi doctype untuk memberi tahu browser tentang versi HTML5 serta elemen html sebagai pembungkus seluruh isi halaman. Bagian head berfungsi menyimpan informasi meta yang tidak terlihat pengunjung seperti judul tab melalui tag title, pengaturan karakter agar emoji atau huruf tertentu tampil normal, serta optimasi responsif dan SEO,. Sebaliknya bagian body adalah tempat bagi semua konten yang ingin ditampilkan secara visual di layar,. dalam body pengembang menggunakan heading h1 hingga h6 untuk membuat tingkatan judul serta tag p untuk teks paragraf biasa karena HTML mengabaikan enter manual pada editor,. Untuk penekanan gaya teks tersedia tag b untuk menebalkan, i untuk memiringkan, dan u untuk memberikan garis bawah pada kata tertentu,. Selain itu terdapat elemen br untuk berpindah baris tanpa tag penutup dan hr untuk membuat garis horizontal sebagai pemisah antar bagian,. Guna mempercepat proses penulisan kode di Visual Studio Code terdapat berbagai shortcut penting seperti menekan tanda seru diikuti enter untuk membuat struktur dasar secara instan atau mengetik nama tag diikuti tab untuk menghasilkan tag lengkap secara otomatis. Pengembang juga dapat menduplikasi baris dengan kombinasi Alt, Shift, dan tombol panah atau memindahkan baris tanpa perlu menyalin menggunakan Alt dan tombol panah. Fitur lain yang sangat membantu adalah Ctrl dengan garis miring untuk membuat komentar serta Alt disertai klik di beberapa tempat untuk mengaktifkan multi cursor yang memungkinkan penulisan di banyak baris secara bersamaan. Penggunaan shortcut ini sangat disarankan karena dapat menghemat waktu penulisan serta menjaga kerapian kode yang sedang dikerjakan.",
    imgTampilan: dasarhtmlslide,
    poster: dasarhtml,
    slide:
      "https://drive.google.com/file/d/1yoFyb3-PI32nCB91NgxDSfdaUf4jYXAt/view?usp=sharing",
    tema: ["IT"],
  },
  {
    id: 5,
    nama: "keliling dan luas persegi",
    desc: "Persegi adalah bangun datar yang memiliki empat sisi sama panjang serta empat sudut siku-siku yang masing-masing besarnya sembilan puluh derajat. Keliling persegi didefinisikan sebagai panjang seluruh sisi yang mengelilingi bangun tersebut, yang dapat diibaratkan seperti jarak yang ditempuh saat kita berjalan mengelilingi tepi sebuah lapangan. Karena semua sisinya memiliki panjang yang sama, rumus keliling disingkat menjadi empat dikali sisi atau K sama dengan 4 kali s. Di sisi lain, luas persegi adalah daerah yang menutupi seluruh permukaan bangun datar tersebut, sebagaimana banyaknya bagian yang tertutup warna saat kita mewarnai seluruh permukaan persegi tanpa keluar garis. Luas persegi dihitung dengan cara mengalikan sisi dengan sisi atau L sama dengan s pangkat dua. Perbedaan utama antara keduanya terletak pada fungsinya, di mana keliling menghitung semua sisi luar dengan satuan panjang seperti sentimeter, sedangkan luas menghitung area cakupan dengan satuan kuadrat seperti sentimeter persegi. Sebagai contoh, jika sebuah persegi memiliki sisi sepanjang sepuluh sentimeter, maka kelilingnya adalah empat puluh sentimeter sedangkan luasnya adalah seratus sentimeter persegi.",
    imgTampilan: kelaspersegi,
    poster: kelas,
    slide:
      "https://drive.google.com/file/d/1fXvjA53EczvU8B17XXRjfRDnt4bZazBZ/view?usp=sharing",
    tema: ["math"],
  },
  {
    id: 6,
    nama: "Sumpah Pemuda",
    desc: "Sumpah Pemuda berawal dari kondisi rakyat di Hindia Belanda yang awalnya belum memiliki kesadaran nasional dan masih terpecah dalam identitas kesukuan serta politik adu domba penjajah,. Perubahan pola perjuangan muncul melalui kehadiran kaum terpelajar yang menyadari bahwa persatuan adalah kunci utama kemerdekaan sehingga mereka mulai meninggalkan organisasi yang bersifat kedaerahan,. Puncaknya terjadi pada Kongres Pemuda II tanggal 28 Oktober 1928 di Batavia yang menghasilkan ikrar satu tanah air, satu bangsa, dan satu bahasa persatuan yaitu Indonesia,. Peristiwa ini merupakan revolusi cara berpikir yang menyatukan seluruh suku ke dalam identitas nasional serta menjadi fondasi kuat bagi lahirnya Proklamasi 1945,. Hingga saat ini, Sumpah Pemuda tetap dimaknai sebagai titik balik sejarah yang membuktikan bahwa kesadaran dan persatuan pikiran mampu melahirkan sebuah bangsa yang berdaulat.",
    imgTampilan: spslide,
    poster: sp,
    slide:
      "https://drive.google.com/file/d/1SKr3PUmme4uQLJvW4UWhwfI1_e6Togf8/view?usp=sharing",
    tema: ["sejarah"],
  },
  {
    id: 7,
    nama: "aljabar",
    desc: "Aljabar adalah cabang matematika yang menggunakan huruf, simbol, dan angka untuk mewakili suatu nilai tertentu. Berbeda dengan perhitungan dasar yang hanya menggunakan angka jelas, aljabar mengganti angka dengan huruf untuk mewakili bilangan yang belum diketahui atau nilainya bisa berubah-ubah. Penggunaan aljabar sangat penting untuk membantu manusia menyelesaikan masalah yang belum diketahui jawabannya, membuat rumus umum, serta memahami matematika tingkat lanjut seperti persamaan, fungsi, dan grafik. Dalam mempelajari aljabar, terdapat tiga komponen utama yang harus dipahami yaitu variabel sebagai huruf yang mewakili bilangan, konstanta sebagai bilangan tetap yang tidak memiliki huruf, dan koefisien sebagai angka yang mengalikan variabel. Gabungan dari variabel, koefisien, konstanta, serta operasi hitung seperti penjumlahan dan perkalian disebut sebagai bentuk aljabar. Bentuk ini dapat dibedakan menjadi beberapa jenis berdasarkan jumlah sukunya, yaitu suku satu (monomial), suku dua (binomial), dan suku tiga (trinomial). Memahami konsep suku sejenis juga merupakan bagian krusial dalam aljabar karena suku sejenis memiliki variabel dan pangkat variabel yang sama. Aturan utama dalam operasi hitung aljabar adalah hanya suku-suku sejenis yang boleh dijumlahkan atau dikurangkan. Sedangkan pada operasi perkalian dan pembagian, angka atau koefisien dapat langsung dioperasikan sesuai aturan hitung matematika,. Selain operasi hitung, terdapat teknik substitusi yang dilakukan dengan cara mengganti variabel menggunakan angka tertentu untuk menghitung nilai akhir dari sebuah bentuk aljabar. Melalui penguasaan komponen dan aturan ini, aljabar menjadi alat yang sangat berguna untuk mencari angka-angka yang belum diketahui secara pasti.",
    imgTampilan: aljabarslide,
    poster: aljabar,
    slide:
      "https://drive.google.com/file/d/15dm2CnJKisiKGDSLu3mL4Ci2JQ1lVOO2/view?usp=sharing",
    tema: ["math"],
  },
  {
    id: 8,
    nama: "WWI (World War I / Perang Dunia I)",
    desc: "Perang Dunia I adalah konflik global dahsyat yang berlangsung dari tahun 1914 sampai 1918 dan melibatkan negara-negara besar dari berbagai benua sehingga dampaknya memengaruhi hampir seluruh penjuru dunia. Sebelum meletusnya perang, kondisi dunia diwarnai oleh persaingan ekonomi akibat Revolusi Industri, nasionalisme yang berlebihan di mana suatu bangsa merasa paling hebat, serta perlombaan senjata yang sangat intens antarnegara Eropa. Situasi ini diperparah dengan adanya politik aliansi kaku yang membagi kekuatan menjadi Blok Sentral yang terdiri dari Jerman dan Austria-Hongaria serta Blok Sekutu yang dipimpin oleh Inggris, Prancis, dan Rusia. Perang secara resmi terpicu oleh peristiwa pembunuhan putra mahkota Austria-Hongaria, Archduke Franz Ferdinand, di Sarajevo oleh nasionalis Serbia yang kemudian menyeret negara-negara besar ke dalam konflik melalui reaksi berantai perjanjian militer mereka. Selama peperangan, strategi perang parit mendominasi wilayah Eropa Barat yang mengakibatkan pertempuran berjalan lambat, stagnan, dan sangat melelahkan bagi para tentara. Penggunaan teknologi perang modern seperti pesawat tempur, gas beracun, dan kapal selam menjadikan konflik ini sebagai perang modern pertama dengan jumlah korban jiwa yang sangat besar. Keterlibatan Amerika Serikat di pihak Sekutu memberikan tambahan pasukan serta bantuan logistik signifikan yang akhirnya membuat Jerman kelelahan dan menyerah pada 11 November 1918. Pasca perang, Perjanjian Versailles diberlakukan dengan isi yang sangat memberatkan Jerman melalui ganti rugi besar dan pembatasan wilayah, yang di kemudian hari justru menimbulkan rasa dendam serta memicu munculnya ideologi ekstrem. Selain meruntuhkan kekaisaran besar seperti Turki Utsmani dan mengubah peta politik Eropa, perang ini juga membawa dampak sosial berupa trauma mendalam serta kemiskinan yang meluas. Bagi Indonesia, meskipun tidak terlibat langsung, perang ini memengaruhi kondisi Belanda dan ikut membuka jalan bagi kebangkitan nasional serta meningkatnya kesadaran politik rakyat jajahan. Secara keseluruhan, Perang Dunia I merupakan tragedi besar yang mengubah wajah dunia dan memberikan pelajaran berharga bagi umat manusia mengenai dampak mengerikan dari persaingan serta kebencian antar bangsa.",
    imgTampilan: WWIslide,
    poster: WWI,
    slide:
      "https://drive.google.com/file/d/162qantuPpXe6zc7UKJnMxImLkZ57yb0g/view?usp=sharing",
    tema: ["sejarah"],
  },
];

export default dataKajian;
