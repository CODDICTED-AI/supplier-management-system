import type { Dictionary } from './en'

const id: Dictionary = {
  meta: {
    tagline: 'Layanan berobat ke Tiongkok bagi pasien internasional',
    description:
      'YiLu Health membantu pasien internasional berobat di rumah sakit terkemuka di Tiongkok: tinjauan kasus, janji temu, dokumen visa, penerjemah, bantuan pembayaran, dan tindak lanjut setelah pulang.',
  },
  nav: {
    treatments: 'Perawatan',
    hospitals: 'Rumah sakit',
    visa: 'Visa & masuk',
    costs: 'Biaya',
    faq: 'Tanya jawab',
    contact: 'Kontak',
    cta: 'Tinjauan kasus gratis',
    menu: 'Menu',
    close: 'Tutup',
    language: 'Bahasa',
    skip: 'Langsung ke konten',
  },
  common: {
    reviewed: 'Informasi terakhir ditinjau: {date}',
    officialSources: 'Sumber resmi',
    learnMore: 'Selengkapnya',
    typicalStay: 'Lama tinggal umumnya',
  },
  home: {
    hero: {
      eyebrow: 'Berobat ke Tiongkok',
      title: 'Rumah sakit terbaik Tiongkok, dalam jangkauan Anda.',
      subtitle:
        'Kami memandu pasien internasional ke rumah sakit yang tepat di Tiongkok — meninjau kasus Anda, mengatur janji temu, dokumen visa, penerjemah, dan pembayaran, serta mendampingi Anda hingga tindak lanjut setelah pulang.',
      primary: 'Mulai tinjauan kasus gratis',
      secondary: 'Lihat cara kerjanya',
      notes: ['Penilaian awal gratis', 'Tanpa kewajiban', 'Rahasia terjaga'],
    },
    journey: {
      title: 'Gambaran perjalanan berobat',
      note: 'Jadwal hanya ilustrasi — setiap kasus berbeda.',
      steps: [
        { when: 'Hari 1', text: 'Anda mengirim rekam medis' },
        { when: 'Hari 2–5', text: 'Masukan dokter spesialis dan perkiraan biaya' },
        { when: 'Minggu 2', text: 'Janji temu dan dokumen visa' },
        { when: 'Kedatangan', text: 'Penjemputan, penerjemah, pendaftaran rumah sakit' },
        { when: 'Setelahnya', text: 'Laporan terjemahan dan tindak lanjut jarak jauh' },
      ],
    },
    stats: {
      items: [
        { value: '1,28 juta', label: 'kunjungan pasien internasional ke rumah sakit besar Tiongkok pada 2025' },
        { value: '+73,6%', label: 'pertumbuhan kunjungan tersebut dalam tiga tahun' },
        { value: '79', label: 'negara dengan akses bebas visa ke Tiongkok daratan (Februari 2026)' },
        { value: '240 jam', label: 'transit bebas visa bagi warga 57 negara' },
      ],
      source:
        'Sumber: Komisi Kesehatan Nasional Tiongkok; Kementerian Luar Negeri Tiongkok; Administrasi Imigrasi Nasional Tiongkok.',
    },
    why: {
      title: 'Mengapa pasien memilih Tiongkok',
      subtitle: 'Bukan hanya soal harga: kecepatan, skala pengalaman, dan terapi yang sulit diperoleh di tempat lain.',
      items: [
        {
          title: 'Waktu tunggu singkat',
          body: 'Janji dengan dokter spesialis, pemeriksaan pencitraan, dan jadwal operasi biasanya dapat diatur dalam hitungan hari atau minggu, bukan bulan.',
        },
        {
          title: 'Terapi mutakhir',
          body: 'Terapi sel CAR-T, radioterapi proton dan ion berat, bedah berbantuan robot, serta pilihan obat baru yang terus bertambah.',
        },
        {
          title: 'Pengalaman dalam jumlah besar',
          body: 'Rumah sakit pendidikan besar menangani kasus kompleks setiap hari, dengan tim multidisiplin dan departemen internasional khusus.',
        },
        {
          title: 'Biaya jelas dan kompetitif',
          body: 'Tarif pasien umum sering kali hanya sebagian kecil dari tarif di Amerika Serikat, dan Anda menerima perkiraan biaya tertulis sebelum berangkat.',
        },
        {
          title: 'Pengobatan Tradisional Tiongkok di tempat asalnya',
          body: 'Akupunktur, obat herbal, dan rehabilitasi di rumah sakit TCM terkemuka, dipadukan dengan diagnostik modern.',
        },
        {
          title: 'Masuk lebih mudah',
          body: 'Bebas visa untuk banyak paspor, transit bebas visa 240 jam, dan kartu kedatangan daring memudahkan perjalanan berobat singkat.',
        },
      ],
    },
    treatments: {
      title: 'Untuk apa Anda bisa datang',
      subtitle: 'Dari medical check-up sehari hingga penanganan kanker yang kompleks.',
      all: 'Lihat semua perawatan',
    },
    process: {
      title: 'Cara kerjanya',
      subtitle: 'Satu koordinator, sejak pesan pertama hingga tindak lanjut di rumah.',
      steps: [
        {
          title: 'Ceritakan kasus Anda',
          body: 'Kirim diagnosis, laporan medis, dan harapan Anda melalui formulir kami. Tidak ada biaya apa pun.',
        },
        {
          title: 'Terima pilihan dan perkiraan biaya',
          body: 'Kami menghubungi rumah sakit yang sesuai, lalu mengirimkan masukan dokter spesialis, usulan rencana, dan perkiraan biaya tertulis.',
        },
        {
          title: 'Siapkan perjalanan',
          body: 'Kami membuat janji temu, mengurus surat rumah sakit untuk visa bila diperlukan, serta mengatur penginapan dan penjemputan bandara.',
        },
        {
          title: 'Berobat dengan penerjemah',
          body: 'Koordinator dan penerjemah medis mendampingi Anda saat pendaftaran, konsultasi, pemeriksaan, dan pembayaran.',
        },
        {
          title: 'Tindak lanjut di rumah',
          body: 'Anda pulang membawa rekam medis terjemahan dan rencana tindak lanjut, dan kami mengatur konsultasi jarak jauh dengan dokter Anda.',
        },
      ],
    },
    destinations: {
      title: 'Di mana Anda bisa berobat',
      subtitle: 'Kami membantu Anda memilih di antara pusat-pusat medis utama Tiongkok berdasarkan kondisi Anda, bukan daftar baku.',
      cta: 'Jelajahi rumah sakit dan kota',
    },
    entry: {
      title: 'Masuk ke Tiongkok lebih mudah dari yang Anda kira',
      subtitle: 'Tiongkok membuka diri dengan cepat sejak 2024. Jalur yang tepat bergantung pada paspor dan rencana perawatan Anda.',
      items: [
        {
          title: 'Bebas visa 30 hari',
          body: 'Untuk paspor biasa dari sekitar 50 negara, ditambah negara-negara dengan perjanjian bebas visa timbal balik.',
        },
        {
          title: 'Hainan: berobat termasuk tujuan yang diizinkan',
          body: 'Warga sekitar 60 negara, termasuk Indonesia, dapat masuk ke Hainan tanpa visa, dan berobat termasuk tujuan yang diizinkan.',
        },
        {
          title: 'Visa S2 untuk perawatan terencana',
          body: 'Untuk perawatan yang lebih lama atau terencana, kami membantu Anda memperoleh surat rumah sakit yang diperlukan untuk permohonan visa.',
        },
      ],
      cta: 'Baca panduan visa & masuk',
    },
    cta: {
      title: 'Bingung harus mulai dari mana?',
      body: 'Ceritakan situasi Anda. Kami akan memberikan pilihan yang realistis, perkiraan waktu, dan perkiraan biaya — gratis dan tanpa kewajiban.',
      button: 'Mulai tinjauan kasus gratis',
    },
  },
  treatments: {
    title: 'Perawatan dan layanan',
    intro:
      'Inilah layanan yang paling sering ditanyakan pasien internasional. Jika kebutuhan Anda tidak tercantum, kirimkan kasus Anda — kami akan menyampaikan dengan jujur apakah Tiongkok pilihan yang tepat.',
    popular: 'Sering diminta',
    items: {
      checkup: {
        name: 'Medical check-up & skrining',
        summary:
          'Program menyeluruh selama satu hingga dua hari, dengan pencitraan dan endoskopi di satu tempat serta pembahasan hasil bersama dokter spesialis.',
        points: [
          'Paket medical check-up eksekutif',
          'MRI, CT dosis rendah, dan PET-CT',
          'Gastroskopi dan kolonoskopi dengan sedasi',
          'Skrining jantung dan kanker',
        ],
        stay: '1–3 hari',
      },
      oncology: {
        name: 'Perawatan kanker',
        summary:
          'Pusat kanker multidisiplin dengan jumlah kasus yang besar, radioterapi modern, dan akses ke terapi sel serta terapi target yang baru disetujui.',
        points: [
          'Terapi sel CAR-T untuk kanker darah',
          'Terapi proton dan ion berat (ion karbon)',
          'Terapi target dan imunoterapi',
          'Bedah minimal invasif dan berbantuan robot',
        ],
        stay: '2–8 minggu, bergantung pada rencana',
      },
      tcm: {
        name: 'Pengobatan Tradisional Tiongkok',
        summary:
          'Program integratif di rumah sakit TCM terkemuka untuk nyeri, pemulihan, dan penyakit kronis, disertai diagnostik modern.',
        points: [
          'Akupunktur dan moksibusi',
          'Pijat terapeutik tuina',
          'Obat herbal yang disesuaikan untuk tiap pasien',
          'Rehabilitasi pascastroke atau pascaoperasi',
        ],
        stay: '1–4 minggu',
      },
      dental: {
        name: 'Perawatan gigi',
        summary:
          'Implan, ortodonti, dan rehabilitasi seluruh mulut dengan sistem implan internasional dan perencanaan perawatan digital.',
        points: ['Implan gigi', 'Mahkota dan veneer', 'Ortodonti dan aligner bening', 'Rehabilitasi seluruh mulut'],
        stay: '3–10 hari; implan mungkin memerlukan dua kali kunjungan',
      },
      eye: {
        name: 'Perawatan mata',
        summary: 'Pusat mata dengan jumlah tindakan yang besar untuk koreksi penglihatan dengan laser, operasi katarak, dan pemeriksaan retina.',
        points: [
          'Koreksi penglihatan laser SMILE dan LASIK',
          'Lensa tanam ICL',
          'Operasi katarak dengan lensa premium',
          'Pemeriksaan retina dan glaukoma',
        ],
        stay: '3–7 hari',
      },
      ortho: {
        name: 'Ortopedi & tulang belakang',
        summary:
          'Penggantian sendi, bedah tulang belakang, dan kedokteran olahraga, yang makin banyak berbantuan robot, dilanjutkan rehabilitasi terstruktur.',
        points: [
          'Penggantian sendi panggul dan lutut',
          'Bedah tulang belakang minimal invasif',
          'Artroskopi dan cedera olahraga',
          'Program rehabilitasi',
        ],
        stay: '2–4 minggu',
      },
      cardio: {
        name: 'Jantung & pembuluh darah',
        summary:
          'Pusat kardiovaskular nasional yang menyediakan tindakan intervensi dan bedah untuk penyakit jantung kompleks.',
        points: [
          'Angiografi koroner dan pemasangan stent',
          'Perbaikan dan penggantian katup, termasuk TAVR',
          'Ablasi aritmia',
          'Bedah bypass dan bedah jantung struktural',
        ],
        stay: '1–3 minggu',
      },
      remote: {
        name: 'Second opinion jarak jauh',
        summary:
          'Sebelum memutuskan berangkat, dokter spesialis di Tiongkok meninjau rekam medis dan hasil pencitraan Anda, lalu membahas pilihan melalui panggilan video.',
        points: [
          'Tinjauan laporan dan hasil pencitraan',
          'Konsultasi video dengan penerjemah',
          'Ringkasan tertulis yang diterjemahkan',
          'Pilihan perawatan dan perkiraan biaya',
        ],
        stay: 'Tidak perlu bepergian',
      },
    },
    notOffered: {
      title: 'Yang tidak kami atur',
      body: 'Kami tidak mengatur transplantasi organ, surogasi (ibu pengganti), atau terapi yang belum disetujui regulator Tiongkok. Tiongkok melarang wisata transplantasi, dan kami hanya bekerja dengan institusi medis berizin.',
    },
  },
  hospitals: {
    title: 'Rumah sakit dan kota tujuan',
    intro:
      'Rumah sakit terkuat di Tiongkok terpusat di beberapa kota. Berikut institusi ternama yang sering ditanyakan pasien internasional, dikelompokkan per kota.',
    disclaimer:
      'Daftar rumah sakit ini hanya sebagai informasi. Pencantuman tidak berarti ada kemitraan atau rekomendasi, dan layanan bagi pasien internasional berbeda di tiap rumah sakit. Untuk setiap kasus, kami memastikan kepada rumah sakit bahwa Anda dapat diterima sebelum Anda berangkat.',
    types: {
      public: 'Rumah sakit pemerintah',
      private: 'Rumah sakit swasta',
      zone: 'Rumah sakit zona percontohan',
    },
    tags: {
      general: 'Kasus kompleks & perawatan multidisiplin',
      oncology: 'Onkologi',
      proton: 'Terapi proton & ion berat',
      hematology: 'Hematologi & terapi sel',
      cardio: 'Jantung & pembuluh darah',
      neuro: 'Neurologi & bedah saraf',
      ortho: 'Ortopedi',
      eye: 'Mata',
      dental: 'Gigi',
      tcm: 'Pengobatan Tradisional Tiongkok',
      surgery: 'Bedah minimal invasif',
      innovative: 'Obat & alat yang disetujui di luar negeri',
      checkup: 'Medical check-up',
    },
    cities: {
      beijing: {
        name: 'Beijing',
        blurb:
          'Ibu kota ini menjadi tempat banyak rumah sakit nasional terbaik Tiongkok — pilihan utama untuk diagnosis kompleks, penyakit jantung, saraf, dan kanker.',
      },
      shanghai: {
        name: 'Shanghai',
        blurb:
          'Kota paling internasional di Tiongkok, dengan lebih dari 20 rumah sakit pemerintah dalam program percontohan wisata medis internasional serta rumah sakit swasta yang kuat. Dikenal untuk onkologi serta terapi proton dan ion berat.',
      },
      guangzhou: {
        name: 'Guangzhou',
        blurb:
          'Pusat medis di selatan yang dekat dengan Hong Kong dan Asia Tenggara, terkenal untuk perawatan kanker, mata, dan Pengobatan Tradisional Tiongkok.',
      },
      shenzhen: {
        name: 'Shenzhen',
        blurb: 'Bersebelahan dengan Hong Kong, dengan rumah sakit modern berstandar internasional dan akses lintas batas yang mudah.',
      },
      hangzhou: {
        name: 'Hangzhou',
        blurb:
          'Lokasi rumah sakit pendidikan Universitas Zhejiang yang unggul dalam bedah hepatobilier dan bedah minimal invasif, sekitar satu jam naik kereta dari Shanghai.',
      },
      chengdu: {
        name: 'Chengdu',
        blurb:
          'Pusat medis Tiongkok bagian barat, dengan West China Hospital sebagai andalannya — salah satu rumah sakit terbesar dan berperingkat tertinggi di negeri ini.',
      },
      hainan: {
        name: 'Hainan · Boao Lecheng',
        blurb:
          'Pulau tropis dengan zona percontohan nasional, tempat rumah sakit berizin boleh menggunakan obat dan alat inovatif yang telah disetujui di luar negeri tetapi belum beredar di Tiongkok daratan — dan bebas visanya mencakup tujuan berobat.',
      },
    },
    choose: {
      title: 'Cara kami membantu Anda memilih',
      items: [
        {
          title: 'Spesialisasi lebih dulu',
          body: 'Kami berangkat dari departemen yang paling berpengalaman menangani kondisi Anda, bukan dari nama besar rumah sakit.',
        },
        {
          title: 'Kesiapan melayani pasien internasional',
          body: 'Kami memeriksa dukungan bahasa, bangsal internasional, pilihan pembayaran, dan seberapa cepat rumah sakit dapat menerima Anda.',
        },
        {
          title: 'Kecocokan praktis',
          body: 'Koneksi penerbangan, jalur visa, iklim, kebutuhan pendamping, dan anggaran ikut menentukan rekomendasi akhir.',
        },
      ],
    },
  },
  visa: {
    title: 'Panduan visa & masuk',
    intro:
      'Masuk ke Tiongkok jauh lebih mudah sejak 2024. Jalur yang cocok bergantung pada paspor Anda, lama perawatan, dan lokasi berobat. Halaman ini berisi panduan umum, bukan nasihat hukum — selalu pastikan ke sumber resmi sebelum memesan tiket.',
    options: [
      {
        title: 'Bebas visa 30 hari',
        badge: 'Kunjungan singkat',
        body: 'Pemegang paspor biasa dari sekitar 50 negara — termasuk sebagian besar Eropa, Inggris, Kanada, Australia, Selandia Baru, Jepang, Korea Selatan, Rusia, serta beberapa negara Teluk dan Amerika Latin — dapat masuk ke Tiongkok daratan tanpa visa hingga 30 hari. Negara dengan perjanjian bebas visa timbal balik, seperti Singapura, Malaysia, Thailand, Uni Emirat Arab, Qatar, dan Kazakhstan, mendapat kemudahan serupa.',
        points: [
          'Tujuan yang diizinkan: bisnis, wisata, kunjungan keluarga dan kerabat, pertukaran, dan transit.',
          'Berobat tidak tercantum sebagai tujuan. Konsultasi dan check-up selama kunjungan memang lazim, tetapi jika berobat adalah tujuan utama perjalanan, tanyakan kepada kedutaan atau konsulat Tiongkok apakah Anda perlu mengajukan visa.',
          'Sebagian besar skema ini diumumkan berlaku hingga 31 Desember 2026 (Rusia: 31 Desember 2027). Periksa perpanjangannya sebelum memesan tiket.',
        ],
      },
      {
        title: 'Bebas visa 30 hari ke Hainan',
        badge: 'Tujuan berobat diizinkan',
        body: 'Warga sekitar 60 negara, termasuk Indonesia, dapat masuk ke Provinsi Hainan tanpa visa hingga 30 hari, dan berobat secara tegas termasuk tujuan yang diizinkan. Hainan adalah lokasi Zona Percontohan Wisata Medis Internasional Boao Lecheng.',
        points: [
          'Anda hanya boleh tinggal di wilayah Provinsi Hainan.',
          'Cocok untuk check-up, tindakan terencana, dan terapi yang tersedia di Boao Lecheng.',
        ],
      },
      {
        title: 'Transit bebas visa 240 jam',
        badge: 'Hingga 10 hari',
        body: 'Warga 57 negara — termasuk Indonesia, Vietnam, dan Amerika Serikat — dapat tinggal hingga 240 jam di wilayah yang ditentukan saat melanjutkan perjalanan ke negara atau wilayah ketiga. Hong Kong dan Makau dihitung sebagai wilayah ketiga.',
        points: [
          'Anda memerlukan tiket lanjutan yang sudah terkonfirmasi ke negara atau wilayah ketiga dalam 240 jam.',
          'Masuk melalui pintu masuk yang ditentukan, dan Anda harus tetap berada di provinsi yang diizinkan.',
          'Cukup untuk banyak check-up, konsultasi, dan second opinion.',
        ],
      },
      {
        title: 'Visa S2 untuk berobat',
        badge: 'Perawatan terencana',
        body: 'Untuk perawatan terencana, tinggal lebih lama, atau paspor tanpa fasilitas bebas visa, jalur yang lazim adalah visa S2 (urusan pribadi jangka pendek) dengan surat undangan atau surat penerimaan dari rumah sakit.',
        points: [
          'Dokumen yang umum: paspor, formulir permohonan, pasfoto, dan surat rumah sakit yang memuat diagnosis, rencana perawatan, lamanya, serta perkiraan biaya. Bukti dana mungkin diminta.',
          'Visa S2 berlaku untuk tinggal hingga 180 hari. Perawatan yang lebih lama memerlukan visa S1 dan izin tinggal.',
          'Anggota keluarga yang mendampingi dapat mengajukan permohonan dengan bukti hubungan keluarga.',
          'Setelah rencana perawatan dipastikan, kami membantu Anda memperoleh surat dari rumah sakit.',
        ],
      },
      {
        title: 'Jika perawatan lebih lama dari rencana',
        badge: 'Perpanjangan',
        body: 'Anda dapat mengajukan perpanjangan atau izin tinggal ke kantor Administrasi Keluar-Masuk setempat sebelum izin Anda berakhir, dengan surat keterangan dari rumah sakit.',
        points: ['Ajukan sekurang-kurangnya tujuh hari sebelum masa tinggal yang diizinkan berakhir.'],
      },
    ],
    arrival: {
      title: 'Kartu kedatangan daring',
      body: 'Sejak 20 November 2025, pelancong asing dapat mengisi kartu kedatangan secara daring sebelum mendarat — di situs Administrasi Imigrasi Nasional (NIA), aplikasi “NIA 12367”, atau program mini-nya di WeChat dan Alipay. Anda juga dapat mengisinya saat tiba.',
    },
    checklist: {
      title: 'Sebelum berangkat',
      items: [
        'Paspor berlaku sekurang-kurangnya enam bulan dan masih memiliki halaman kosong',
        'Konfirmasi janji temu atau surat undangan rumah sakit (dicetak)',
        'Rekam medis dan hasil pencitraan, diterjemahkan ke bahasa Inggris atau Mandarin',
        'Obat resep dalam kemasan asli, disertai surat dokter',
        'Data asuransi perjalanan dan kesehatan',
        'Alamat penginapan dan nomor kontak setempat',
        'Kartu internasional, serta Alipay atau WeChat Pay yang sudah diaktifkan',
        'Tiket pulang atau tiket lanjutan',
      ],
    },
    links: {
      nia: 'Administrasi Imigrasi Nasional Tiongkok',
      visaCenter: 'Pusat Layanan Permohonan Visa Tiongkok',
      arrivalCard: 'Kartu kedatangan daring',
    },
    disclaimer:
      'Aturan visa dapat berubah dan diterapkan pihak berwenang kasus per kasus. Kami bukan agen visa dan tidak dapat menjamin Anda diizinkan masuk. Daftar negara dan tanggal di atas hanyalah ringkasan; pengumuman resmilah yang berlaku.',
  },
  costs: {
    title: 'Biaya & pembayaran',
    intro:
      'Pasien internasional membayar sendiri biaya berobat di Tiongkok. Tarif di departemen internasional dan rumah sakit swasta lebih tinggi daripada tarif rumah sakit pemerintah setempat, tetapi sering kali jauh di bawah tarif swasta di Amerika Serikat dan negara berbiaya tinggi lainnya.',
    table: {
      title: 'Kisaran harga indikatif',
      caption:
        'Kisaran perkiraan dalam dolar AS, dihimpun dari pemberitaan publik tahun 2026. Ini bukan penawaran harga — yang berlaku adalah perkiraan tertulis dari rumah sakit Anda.',
      service: 'Layanan',
      range: 'Kisaran indikatif di Tiongkok',
      note: 'Perlu diketahui',
      rows: {
        checkup: {
          name: 'Medical check-up menyeluruh',
          note: 'Bergantung pada tambahan pencitraan (MRI, CT, PET-CT) dan endoskopi',
        },
        mri: { name: 'MRI, satu area', note: 'Biasanya tersedia dalam beberapa hari' },
        implant: { name: 'Implan gigi dengan mahkota, per gigi', note: 'Merek implan paling menentukan harga' },
        vision: { name: 'Koreksi penglihatan laser, kedua mata', note: 'SMILE atau LASIK; lensa ICL lebih mahal' },
        proton: {
          name: 'Terapi proton atau ion berat, satu rangkaian penuh',
          note: 'Bervariasi menurut jenis tumor dan jumlah sesi',
        },
        cart: {
          name: 'Terapi sel CAR-T',
          note: 'Total biaya menurut pemberitaan; di Amerika Serikat, total di atas US$500.000 kerap dilaporkan',
        },
      },
    },
    pay: {
      title: 'Cara membayar',
      items: [
        {
          title: 'Kartu internasional',
          body: 'Visa dan Mastercard diterima di sebagian besar departemen internasional dan rumah sakit swasta.',
        },
        {
          title: 'Alipay dan WeChat Pay',
          body: 'Kedua aplikasi dapat ditautkan ke kartu luar negeri setelah verifikasi paspor — praktis untuk pengeluaran harian. Ada batas transaksi, sehingga tagihan besar biasanya dibayar dengan kartu atau transfer.',
        },
        {
          title: 'Transfer bank',
          body: 'Untuk perawatan besar, rumah sakit menerbitkan perkiraan biaya atau faktur proforma dan menerima transfer internasional.',
        },
        {
          title: 'Uang muka',
          body: 'Rumah sakit umumnya meminta uang muka sebelum rawat inap. Sisa yang tidak terpakai dikembalikan saat pasien pulang.',
        },
      ],
    },
    insurance: {
      title: 'Asuransi',
      points: [
        'Asuransi kesehatan publik Tiongkok tidak menanggung pengunjung.',
        'Banyak rumah sakit swasta dan sebagian departemen internasional melayani penagihan langsung ke perusahaan asuransi internasional; biasanya diperlukan persetujuan awal.',
        'Jika tidak, Anda membayar dahulu lalu mengajukan klaim. Kami membantu Anda memperoleh rincian tagihan dan laporan medis berbahasa Inggris.',
        'Sebelum berangkat, pastikan polis Anda menanggung perawatan terencana di luar negeri.',
      ],
    },
    factors: {
      title: 'Yang menentukan total biaya',
      items: [
        'Rumah sakit dan jenis bangsal (bangsal internasional atau VIP dibandingkan bangsal umum)',
        'Lama tinggal, dan apakah ada pendamping yang ikut',
        'Obat dan alat impor atau buatan dalam negeri Tiongkok',
        'Layanan penerjemah, koordinasi, dan penginapan',
      ],
    },
    fees: {
      title: 'Biaya layanan kami',
      body: 'Tinjauan awal kasus Anda gratis. Tagihan rumah sakit dibayar langsung ke rumah sakit. Jika Anda meminta kami mengoordinasikan perjalanan, kami menyampaikan biaya layanan secara tertulis sebelum Anda membuat komitmen apa pun.',
    },
  },
  faq: {
    title: 'Pertanyaan yang sering diajukan',
    intro: 'Jawaban singkat atas pertanyaan yang paling sering kami terima. Untuk hal lain, silakan hubungi kami.',
    items: [
      {
        q: 'Apakah orang asing bisa berobat di rumah sakit Tiongkok?',
        a: 'Bisa. Banyak rumah sakit pemerintah terkemuka memiliki departemen medis internasional, dan rumah sakit swasta internasional melayani pasien asing setiap hari. Anda mendaftar dengan paspor dan membayar sendiri.',
      },
      {
        q: 'Apakah dokter bisa berbahasa saya?',
        a: 'Di departemen internasional dan rumah sakit swasta, banyak dokter berbahasa Inggris. Untuk bahasa lain, dan di bangsal umum, kami menyediakan penerjemah medis yang mendampingi Anda saat konsultasi.',
      },
      {
        q: 'Apakah saya perlu visa?',
        a: 'Bergantung pada paspor dan lama tinggal Anda. Banyak warga negara dapat masuk bebas visa selama 30 hari atau memakai transit 240 jam; untuk perawatan terencana atau lebih lama, jalur yang lazim adalah visa S2 dengan surat dari rumah sakit. Lihat panduan visa & masuk kami.',
      },
      {
        q: 'Berapa biayanya?',
        a: 'Bergantung pada rumah sakit, bangsal, dan jenis perawatan. Sebelum berangkat Anda menerima perkiraan tertulis dari rumah sakit. Halaman biaya kami memuat kisaran indikatif untuk layanan yang umum.',
      },
      {
        q: 'Seberapa cepat saya bisa ditangani?',
        a: 'Check-up dan konsultasi spesialis biasanya dapat diatur dalam beberapa hari. Operasi dan terapi kompleks bergantung pada pemeriksaan praperawatan, tetapi antreannya umumnya singkat.',
      },
      {
        q: 'Rekam medis apa yang perlu saya kirim?',
        a: 'Ringkasan diagnosis, hasil pemeriksaan terbaru, laporan pencitraan (beserta berkas gambarnya jika ada), laporan patologi, dan daftar obat yang sedang dikonsumsi. Sebaiknya dalam bahasa Inggris atau Mandarin; kami dapat mengatur penerjemahan dari bahasa lain.',
      },
      {
        q: 'Apakah asuransi saya menanggungnya?',
        a: 'Asuransi publik Tiongkok tidak menanggung pengunjung. Sebagian polis internasional menanggung perawatan di Tiongkok dan sebagian rumah sakit melayani penagihan langsung. Tanyakan kepada perusahaan asuransi Anda sebelum berangkat; kami membantu menyiapkan dokumen klaim.',
      },
      {
        q: 'Apakah berobat di Tiongkok aman?',
        a: 'Setiap negara memiliki rumah sakit yang lebih kuat dan yang lebih lemah. Kami hanya bekerja dengan institusi berizin dan berfokus pada rumah sakit pendidikan besar serta rumah sakit swasta yang mapan. Tidak ada perawatan tanpa risiko, dan dokter akan menjelaskan risiko serta alternatifnya sebelum Anda memberikan persetujuan.',
      },
      {
        q: 'Bolehkah anggota keluarga ikut mendampingi?',
        a: 'Boleh, dan untuk operasi atau perawatan panjang kami menganjurkannya. Pendamping dapat memakai skema bebas visa yang sama atau mengajukan visa bersama Anda. Kami membantu mencarikan penginapan di dekat rumah sakit.',
      },
      {
        q: 'Bagaimana setelah saya pulang?',
        a: 'Anda menerima ringkasan pulang, hasil pemeriksaan, dan hasil pencitraan, yang diterjemahkan bila perlu. Kami mengatur tindak lanjut jarak jauh dengan dokter yang merawat Anda dan dapat meneruskan rekam medis kepada dokter Anda di negara asal.',
      },
      {
        q: 'Apakah Anda rumah sakit? Apakah Anda memberi nasihat medis?',
        a: 'Tidak. YiLu Health adalah koordinator perjalanan medis. Diagnosis dan keputusan perawatan hanya dibuat oleh dokter berizin di rumah sakit yang merawat Anda.',
      },
      {
        q: 'Adakah hal yang tidak Anda atur?',
        a: 'Ada. Kami tidak mengatur transplantasi organ, surogasi, atau terapi yang belum disetujui regulator Tiongkok.',
      },
    ],
  },
  contact: {
    title: 'Mulai tinjauan kasus gratis Anda',
    intro:
      'Ceritakan secara singkat kebutuhan Anda. Koordinator akan membalas dalam bahasa Anda beserta langkah selanjutnya. Mengirim formulir ini tidak menimbulkan kewajiban apa pun.',
    form: {
      name: 'Nama lengkap',
      email: 'Email',
      phone: 'Telepon / WhatsApp (opsional)',
      country: 'Negara atau wilayah tempat tinggal',
      treatment: 'Bantuan apa yang Anda perlukan?',
      city: 'Kota pilihan (opsional)',
      timeframe: 'Kapan Anda ingin berangkat? (opsional)',
      message: 'Jelaskan secara singkat situasi Anda',
      messageHint:
        'Misalnya: diagnosis, perawatan yang sudah dijalani, dan harapan Anda. Mohon jangan mengirim dokumen dulu — kami akan memberikan cara yang aman untuk membagikannya.',
      select: 'Silakan pilih',
      other: 'Lainnya / belum yakin',
      anyCity: 'Tidak ada preferensi',
      timeframes: {
        asap: 'Secepatnya',
        month: 'Dalam satu bulan',
        quarter: 'Dalam tiga bulan',
        exploring: 'Masih mencari informasi',
      },
      consent:
        'Saya setuju YiLu Health menggunakan informasi yang saya berikan, termasuk informasi kesehatan, untuk menjawab pertanyaan saya, sebagaimana dijelaskan dalam pemberitahuan privasi.',
      privacyLink: 'Pemberitahuan privasi',
      submit: 'Kirim pertanyaan',
      sending: 'Mengirim…',
      successTitle: 'Terima kasih — pertanyaan Anda sudah kami terima.',
      successBody: 'Koordinator akan membalas melalui email. Jika pesan kami tidak terlihat, mohon periksa folder spam.',
      again: 'Kirim pertanyaan lain',
      errorGeneric: 'Pertanyaan Anda tidak terkirim. Silakan coba lagi sebentar lagi.',
      errorValidation: 'Periksa kolom yang ditandai, lalu coba lagi.',
      errorRate: 'Terlalu banyak percobaan. Tunggu beberapa menit, lalu coba lagi.',
      errorUnavailable: 'Formulir daring sedang tidak tersedia. Silakan hubungi kami secara langsung.',
    },
    aside: {
      title: 'Apa yang terjadi selanjutnya',
      steps: [
        'Koordinator membaca pesan Anda dan mungkin mengajukan beberapa pertanyaan.',
        'Kami memberi tahu rekam medis apa yang perlu dikirim dan cara membagikannya dengan aman.',
        'Anda menerima masukan dokter spesialis, pilihan, dan perkiraan biaya.',
      ],
      privacy:
        'Informasi Anda hanya digunakan untuk menjawab pertanyaan Anda dan hanya dibagikan kepada rumah sakit atas persetujuan Anda.',
      directTitle: 'Lebih suka menghubungi kami langsung?',
      email: 'Email',
      whatsapp: 'WhatsApp',
      wechat: 'ID WeChat',
    },
  },
  legal: {
    title: 'Pemberitahuan privasi & penafian medis',
    updated: 'Terakhir diperbarui: {date}',
    sections: [
      {
        title: 'Penafian medis',
        body: 'Isi situs web ini merupakan informasi umum dan bukan nasihat medis. Isinya tidak menggantikan konsultasi dengan dokter yang berkualifikasi. Jangan menunda mencari pertolongan atau mengabaikan nasihat profesional karena sesuatu yang Anda baca di sini. Dalam keadaan darurat, hubungi nomor darurat setempat.',
      },
      {
        title: 'Peran kami',
        body: 'YiLu Health adalah koordinator perjalanan medis, bukan institusi medis. Kami tidak mendiagnosis atau mengobati. Semua keputusan medis dibuat oleh Anda dan dokter berizin di rumah sakit yang merawat Anda. Kami tidak menjamin hasil perawatan, keputusan visa, atau harga apa pun.',
      },
      {
        title: 'Informasi di situs ini',
        body: 'Aturan visa, harga, dan layanan rumah sakit dapat berubah. Kami meninjau situs ini secara berkala, tetapi tidak dapat menjamin setiap detail selalu mutakhir. Pengumuman resmi dan perkiraan tertulis dari rumah sakit Anda selalu yang berlaku.',
      },
      {
        title: 'Informasi pribadi yang kami kumpulkan',
        body: 'Saat Anda mengirim pertanyaan, kami mengumpulkan data yang Anda isikan: nama, data kontak, negara, dan informasi kesehatan yang Anda pilih untuk disampaikan. Kami tidak meminta dokumen medis melalui formulir situs web.',
      },
      {
        title: 'Cara kami menggunakan dan membagikannya',
        body: 'Kami menggunakan informasi Anda hanya untuk menjawab pertanyaan Anda dan, atas permintaan Anda, untuk mengoordinasikan perawatan. Kami membagikannya kepada rumah sakit atau penyedia layanan lain hanya atas persetujuan Anda. Kami tidak menjual informasi pribadi.',
      },
      {
        title: 'Penyimpanan dan hak Anda',
        body: 'Kami menyimpan informasi pertanyaan hanya selama diperlukan untuk tujuan di atas atau sebagaimana diwajibkan hukum. Anda dapat menghubungi kami kapan saja untuk meminta akses, perbaikan, atau penghapusan informasi Anda, atau menarik persetujuan.',
      },
      {
        title: 'Cookie',
        body: 'Situs web ini menggunakan satu cookie fungsional untuk mengingat pilihan bahasa Anda. Situs ini tidak menggunakan cookie iklan atau pelacakan.',
      },
    ],
  },
  footer: {
    tagline: 'Koordinator Anda untuk berobat ke Tiongkok.',
    explore: 'Jelajahi',
    support: 'Bantuan',
    legal: 'Privasi & penafian',
    disclaimer:
      'YiLu Health adalah koordinator perjalanan medis, bukan penyedia layanan medis. Isi situs ini merupakan informasi umum, bukan nasihat medis.',
    rights: 'Hak cipta dilindungi.',
  },
  notFound: {
    title: 'Halaman tidak ditemukan',
    body: 'Halaman yang Anda cari tidak ada atau telah dipindahkan.',
    cta: 'Kembali ke beranda',
  },
}

export default id
