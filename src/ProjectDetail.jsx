import React from "react";
import { ArrowLeft, ExternalLink, PlayCircle } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import "./ProjectDetail.css";

const project = {

"asisten": {
  title: "Personal Schedule Assistant",
  category: "WORKFLOW AUTOMATION",
  description:
    "Personal Schedule Assistant",
  youtubeId: "GANTI_DENGAN_ID_VIDEO",
  videoUrl: "/videos/asisten.mp4",
  dashboardUrl: "",
  githubUrl: "",
  reportUrl: "",

  author: "Khairul Rohman",
  publishedAt: "Portfolio Project",

  tools: ["N8N", "AI AGENT", "TELEGRAM"],

  sections: [
    {
      number: "01",
      title: "Project Overview",
      paragraphs: [
        "Personal Schedule Assistant adalah sistem otomasi pengelolaan jadwal yang mengintegrasikan Telegram, Gmail, AI, dan Google Calendar. Sistem ini dirancang untuk membantu pengguna mencatat agenda, memproses undangan meeting dari email, memeriksa potensi bentrok jadwal, serta mengelola keputusan kehadiran melalui Telegram. Pengguna dapat memasukkan jadwal menggunakan bahasa sehari-hari atau menerima undangan melalui Gmail. AI kemudian mengekstrak informasi penting dan menyiapkannya untuk dikonfirmasi sebelum diproses lebih lanjut.",
      ],
    },
    {
      number: "02",
      title: "Key Features",
      paragraphs: [
        "Pengelolaan jadwal secara manual dapat menimbulkan beberapa kendala:",
        "✔ Informasi meeting tersebar di berbagai pesan Telegram dan email.",
        "✔ Pengguna harus memasukkan detail agenda secara manual ke kalender.",
        "✔ Risiko bentrok jadwal sulit diketahui jika tidak memeriksa kalender terlebih dahulu.",
        "✔ Undangan meeting membutuhkan proses konfirmasi dan pencatatan secara terpisah.",
        "✔ Pengguna perlu membuka Google Calendar untuk memeriksa agenda pada tanggal tertentu.",
        "Kondisi tersebut membuat pengelolaan jadwal membutuhkan lebih banyak langkah dan berpotensi meningkatkan risiko kesalahan pencatatan.",
              ],
    },
    {
      number: "03",
      title: "Solusi",
      paragraphs: [
        "Membangun sistem Personal Schedule Assistant berbasis n8n yang menghubungkan Telegram, Gmail, AI, dan Google Calendar dalam satu alur otomasi.",
        "Sistem menggunakan AI untuk memahami informasi jadwal dari pesan maupun email, kemudian mengekstrak detail seperti PIC, agenda, tanggal, waktu, dan lokasi.",
        "Sebelum jadwal baru dimasukkan ke Google Calendar, sistem melakukan pemeriksaan potensi bentrok dan meminta konfirmasi pengguna melalui tombol Telegram.",
        "Untuk undangan Google Calendar asli, sistem juga menyediakan proses respons RSVP sehingga keputusan pengguna dapat dikirimkan kembali ke penyelenggara undangan.",
      ],
    },
    {
      number: "04",
      title: "Key Features",
      paragraphs: [
        "Membangun sistem pengelolaan stok yang praktis dan mudah digunakan agar pemilik usaha dapat memantau persediaan gudang melalui WhatsApp tanpa proses pencatatan manual yang rumit.",
      ],

    },
    {
      number: "05",
      title: "Workflow Architecture",
      paragraphs: [
        "Sistem memiliki dua trigger utama: (1) Telegram Trigger untuk menerima pesan dan keputusan pengguna melalui tombol, serta (2) Gmail Trigger untuk memproses email undangan. Keduanya terhubung ke proses pengolahan yang sesuai.",
        "Alur pencatatan jadwal: Telegram → Schedule Input Normalization → AI Schedule Extraction → Date & Time Validation → Google Calendar Conflict Check → Pending Schedule Storage → Telegram Approval → Google Calendar.",
        "Alur undangan Gmail: Gmail → Email Filtering → Schedule Input Normalization → AI Schedule Extraction → Validation → Conflict Check → Telegram Approval → Google Calendar RSVP / Decision Processing.",
        "Alur pemeriksaan jadwal: Telegram → Schedule Query Detection → Date Range Preparation → Google Calendar Retrieval → Schedule Formatting → Telegram Response.",
        "Komponen penyimpanan dan pemrosesan meliputi n8n Data Tables untuk menyimpan jadwal sementara dan status keputusan, Google Calendar untuk mengambil serta mengelola event, dan AI Model untuk mengekstrak informasi jadwal."
      ],
    },
    {
      number: "06",
      title: "How It Works",
      paragraphs: [
        "1. Pengguna mengirim pesan jadwal melalui Telegram atau menerima undangan melalui Gmail.",
        "2. Sistem menormalisasi informasi dari sumber input.",
        "3. AI menganalisis pesan dan mengekstrak detail agenda.",
        "4. Sistem memeriksa apakah informasi tanggal dan waktu sudah lengkap.",
        "5. Jika informasi belum lengkap, pengguna diminta memberikan klarifikasi.",
        "6. Jika informasi lengkap, sistem memeriksa jadwal Google Calendar pada rentang waktu yang diusulkan.",
        "7. Sistem menyimpan informasi agenda dengan status pending.",
        "8. Telegram mengirimkan detail agenda, peringatan bentrok jika ada, dan tombol keputusan.",
        "9. Sistem memproses keputusan pengguna: YA (membuat event Google Calendar untuk jadwal baru), TIDAK (mencatat keputusan penolakan), BELUM PASTI (mencatat status tentative).",
        "10. Sistem mengirimkan notifikasi hasil keputusan melalui Telegram.",
        "Untuk undangan Google Calendar asli, keputusan pengguna diteruskan sebagai respons RSVP kepada penyelenggara. Pengguna juga dapat meminta rangkuman agenda berdasarkan periode tertentu melalui Telegram."
      ],
    },
    {
      number: "07",
      title: "Technology Stack",
      paragraphs: [
        "• n8n: Workflow automation dan integrasi sistem",
        "• Telegram Bot: Input jadwal, persetujuan, dan notifikasi",
        "• Gmail: Sumber undangan meeting melalui email",
        "• OpenAI Model: Membantu ekstraksi informasi jadwal",
        "• Google Calendar API: Mengambil, membuat, dan memperbarui event serta RSVP",
        "• n8n Data Tables: Menyimpan jadwal sementara dan status keputusan",
        "• JavaScript: Validasi, deteksi bentrok, dan pemformatan data"
      ],
    },
    {
      number: "08",
      title: "Business Benefits",
      paragraphs: [
        "✔ Mengurangi pekerjaan administratif: Pencatatan jadwal dapat dilakukan melalui percakapan Telegram.",
        "✔ Mempermudah pengelolaan undangan: Informasi meeting dari email dapat diproses secara otomatis.",
        "✔ Meningkatkan visibilitas jadwal: Pengguna memperoleh peringatan ketika terdapat agenda yang beririsan.",
        "✔ Memberikan kontrol kepada pengguna: Agenda baru tidak langsung dibuat sebelum ada keputusan.",
        "✔ Mempermudah pemantauan agenda: Informasi jadwal dapat diperoleh melalui percakapan Telegram.",
        "✔ Mengintegrasikan proses kerja: Telegram, Gmail, dan Google Calendar terhubung dalam satu workflow."
      ],
    },
    {
      number: "09",
      title: "Project Demonstration",
      paragraphs: [
        "Bagian demonstrasi akan menampilkan bukti implementasi sistem melalui screenshot dan video.",
        "Materi visual yang disiapkan mencakup: 1. n8n Workflow Overview, 2. Telegram Schedule Input, 3. AI Schedule Extraction, 4. Conflict Detection, 5. Telegram Approval, 6. Google Calendar Result, 7. Gmail Invitation Processing, dan 8. Schedule Inquiry."
      ],
    },
  ],
},

"HRD": {
  title: "HR Job Application Email Automation",
  category: "WORKFLOW AUTOMATION",
  description:
    "Sistem otomasi untuk membantu proses penerimaan dan pengelolaan email lamaran kerja menggunakan AI, Google Drive, Google Sheets, dan Telegram.",
  youtubeId: "GANTI_DENGAN_ID_VIDEO",
  videoUrl: "/videos/HRD.mp4",
  dashboardUrl: "",
  githubUrl: "",
  reportUrl: "",

  author: "Khairul Rohman",
  publishedAt: "Portfolio Project",

  tools: ["n8n", "Google Gemini", "Google Drive", "Google Sheets", "Telegram Bot", "Gmail"],

  sections: [
    {
      number: "01",
      title: "Project Overview",
      paragraphs: [
        "HR Job Application Email Automation merupakan sistem otomasi untuk membantu proses penerimaan dan pengelolaan email lamaran kerja.",
        "Sistem menggunakan AI untuk mengidentifikasi email lamaran berdasarkan format subject, mengekstrak nama pelamar dan posisi yang dilamar, kemudian mengelola dokumen lamaran secara otomatis.",
        "Informasi pelamar dicatat ke Google Sheets, dokumen disimpan di Google Drive, dan notifikasi penerimaan lamaran dikirimkan kepada HR melalui Telegram."
      ],
    },
    {
      number: "02",
      title: "Business Problem",
      paragraphs: [
        "Proses penerimaan lamaran kerja melalui email dapat menimbulkan beberapa tantangan operasional:",
        "✔ HR perlu memeriksa email masuk secara berkala.",
        "✔ Attachment lamaran harus diunduh dan disimpan secara manual.",
        "✔ Dokumen pelamar berpotensi tidak tersusun secara konsisten.",
        "✔ Informasi pelamar perlu dicatat kembali ke spreadsheet.",
        "✔ HR membutuhkan pemberitahuan ketika lamaran baru diterima.",
        "Aktivitas administratif tersebut dapat menyita waktu, terutama ketika jumlah email lamaran meningkat."
      ],
    },
    {
      number: "03",
      title: "Solution",
      paragraphs: [
        "Membangun workflow otomatis berbasis n8n yang mengintegrasikan Gmail, AI, Google Drive, Google Sheets, dan Telegram.",
        "Sistem memantau email masuk yang memiliki attachment dan belum dibaca. AI kemudian mengidentifikasi format subject untuk menentukan apakah email termasuk lamaran kerja.",
        "Jika memenuhi format yang ditentukan, sistem akan mengekstrak nama pelamar, memeriksa atau membuat folder penyimpanan, mengunggah attachment ke Google Drive, mencatat informasi ke Google Sheets, mengirimkan notifikasi ke Telegram, dan menandai email sebagai telah dibaca."
      ],
    },
    {
      number: "04",
      title: "Key Features",
      paragraphs: [
        "• Automated Email Monitoring: Memantau email Gmail secara berkala dengan filter email yang memiliki attachment dan belum dibaca.",
        "• AI-Based Application Classification: Menggunakan Google Gemini untuk mengidentifikasi email berdasarkan format subject Nama_Posisi.",
        "• Applicant Information Extraction: Mengekstrak nama pelamar dan posisi yang dilamar dari subject email.",
        "• Automated Document Management: Memeriksa keberadaan folder pelamar dan membuat folder baru jika belum tersedia.",
        "• Attachment Processing: Memproses seluruh attachment dalam satu email dan mengunggahnya ke Google Drive.",
        "• Application Tracking: Menyimpan informasi lamaran ke Google Sheets meliputi tanggal diterima, nama pelamar, posisi, alamat email, dan link attachment.",
        "• Telegram Notification: Mengirimkan notifikasi kepada HR ketika lamaran berhasil melewati proses pengelolaan dokumen."
      ],
    },
    {
      number: "05",
      title: "Workflow Architecture",
      paragraphs: [
        "Workflow terdiri dari beberapa komponen utama meliputi Gmail Trigger, AI Agent, Google Gemini Chat Model, Structured Output Parser, Google Drive Folder Management, Google Sheets, dan Telegram Notification.",
        "Alur utama sistem: Gmail → AI Classification → Applicant Data Extraction → Google Drive → Google Sheets → Telegram Notification.",
        "Email yang tidak memenuhi format klasifikasi akan diarahkan langsung ke proses penandaan sebagai telah dibaca."
      ],
    },
    {
      number: "06",
      title: "How It Works",
      paragraphs: [
        "1. Email Received: Gmail Trigger memantau email baru yang memiliki attachment dan belum dibaca.",
        "2. AI Classification: AI memeriksa subject email untuk menentukan apakah formatnya memenuhi pola Nama_Posisi.",
        "3. Applicant Data Extraction: Jika memenuhi format, AI mengambil nama pelamar dan posisi yang dilamar.",
        "4. Folder & Attachment Processing: Sistem memeriksa/membuat folder di Google Drive, lalu memisahkan dan mengunggah seluruh attachment.",
        "5. Data Recording & HR Notification: Informasi pelamar dicatat ke Google Sheets dan Telegram mengirimkan notifikasi kepada HR.",
        "6. Email Status Update: Email ditandai sebagai telah dibaca setelah seluruh proses selesai."
      ],
    },
    {
      number: "07",
      title: "Technology Stack",
      paragraphs: [
        "• n8n: Workflow automation",
        "• Gmail: Email monitoring",
        "• Google Gemini: AI classification and data extraction",
        "• Google Drive: Applicant document storage",
        "• Google Sheets: Application tracking",
        "• Telegram: HR notification"
      ],
    },
    {
      number: "08",
      title: "Business Benefits",
      paragraphs: [
        "✔ Reduced Administrative Work: Mengurangi pekerjaan manual dalam memeriksa dan mengelola email lamaran.",
        "✔ Organized Document Storage: Membantu menjaga dokumen pelamar tetap terstruktur di Google Drive.",
        "✔ Centralized Applicant Records: Informasi lamaran tersimpan rapi dalam Google Sheets.",
        "✔ Faster HR Notification: HR mendapatkan pemberitahuan instan ketika lamaran berhasil diproses.",
        "✔ Consistent Processing: Proses pengelolaan email dan attachment mengikuti alur baku yang otomatis."
      ],
    },
    {
      number: "09",
      title: "Project Demonstration",
      paragraphs: [
        "Bagian demonstrasi menampilkan implementasi workflow melalui beberapa bukti visual:",
        "1. Workflow Overview — Tampilan keseluruhan workflow n8n.",
        "2. Email Monitoring — Konfigurasi Gmail Trigger.",
        "3. AI Classification — Proses identifikasi subject dan ekstraksi informasi pelamar.",
        "4. Google Drive — Struktur folder dan dokumen attachment pelamar.",
        "5. Google Sheets — Hasil pencatatan informasi lamaran secara terpusat.",
        "6. Telegram Notification — Contoh format notifikasi lamaran masuk kepada HR."
      ],
    },
  ],
},

"RAG": {
  title: "Chatbot RAG — AI-Powered Document Assistant",
  category: "WORKFLOW AUTOMATION",
  description:
    "Sistem tanya jawab berbasis AI (Retrieval-Augmented Generation) yang terintegrasi dengan n8n, Telegram, Google Gemini, Supabase Vector Store, dan PostgreSQL untuk pencarian informasi dokumen secara cerdas.",
  youtubeId: "GANTI_DENGAN_ID_VIDEO",
  videoUrl: "/videos/RAG.mp4",
  dashboardUrl: "",
  githubUrl: "",
  reportUrl: "",

  author: "Khairul Rohman",
  publishedAt: "Portfolio Project",

  tools: ["n8n", "Telegram Bot", "Google Gemini", "Supabase Vector Store", "Cohere Reranker", "PostgreSQL"],

  sections: [
    {
      number: "01",
      title: "Project Overview",
      paragraphs: [
        "Chatbot RAG merupakan sistem tanya jawab berbasis AI yang dirancang untuk memberikan jawaban berdasarkan dokumen yang telah diunggah ke dalam knowledge base.",
        "Sistem mengintegrasikan n8n, Telegram, Google Gemini, Supabase Vector Store, dan PostgreSQL untuk membangun layanan pencarian informasi berbasis dokumen.",
        "Pengguna dapat mengunggah dokumen PDF melalui form, kemudian mengajukan pertanyaan melalui Telegram. AI akan menggunakan informasi yang tersimpan di database sebagai sumber jawaban."
      ],
    },
    {
      number: "02",
      title: "Business Problem",
      paragraphs: [
        "Dalam lingkungan perusahaan, informasi sering kali tersebar di berbagai dokumen seperti SOP, panduan kerja, kebijakan internal, dan dokumentasi operasional.",
        "Kondisi tersebut dapat menimbulkan beberapa tantangan:",
        "✔ Karyawan membutuhkan waktu untuk menemukan informasi dalam dokumen.",
        "✔ Informasi tersebar dalam banyak file.",
        "✔ Pertanyaan yang sama dapat berulang kali disampaikan kepada HR atau tim terkait.",
        "✔ Pencarian informasi secara manual kurang praktis.",
        "✔ Pengguna membutuhkan akses informasi yang lebih mudah melalui aplikasi komunikasi sehari-hari."
      ],
    },
    {
      number: "03",
      title: "Solution",
      paragraphs: [
        "Membangun chatbot berbasis Retrieval-Augmented Generation (RAG) yang memungkinkan pengguna mengakses informasi dari dokumen melalui Telegram.",
        "Dokumen PDF diunggah melalui form dan diproses menjadi potongan teks menggunakan Document Loader dan Text Splitter, kemudian diubah menjadi embedding dan disimpan di Supabase Vector Store.",
        "Ketika pengguna mengajukan pertanyaan melalui Telegram, AI Agent menggunakan Supabase Vector Store sebagai sumber pencarian informasi, yang selanjutnya diproses menggunakan Cohere Reranker sebelum disusun menjadi jawaban oleh AI."
      ],
    },
    {
      number: "04",
      title: "Key Features",
      paragraphs: [
        "• PDF Document Upload: Menyediakan form untuk mengunggah dokumen PDF sebagai sumber knowledge base.",
        "• Document Processing: Memproses dokumen menggunakan Default Data Loader dan Recursive Character Text Splitter (Chunk Size: 1.500 karakter, Chunk Overlap: 150 karakter).",
        "• Vector Database Storage: Menggunakan Supabase Vector Store untuk menyimpan representasi informasi dokumen dalam tabel documents.",
        "• AI-Powered Question Answering: Menggunakan Google Gemini sebagai model bahasa untuk menghasilkan jawaban berdasarkan informasi dokumen.",
        "• Contextual Document Retrieval & Reranking: Mengintegrasikan Supabase Vector Store dan Cohere Reranker untuk menyaring serta mengurutkan hasil pencarian berdasarkan relevansi.",
        "• Conversation Memory: Menggunakan PostgreSQL Chat Memory dengan session berdasarkan Telegram Chat ID.",
        "• Telegram Integration: Memungkinkan pengguna mengajukan pertanyaan dan menerima jawaban langsung melalui Telegram."
      ],
    },
    {
      number: "05",
      title: "Workflow Architecture",
      paragraphs: [
        "Workflow memiliki dua jalur utama:",
        "A. Document Ingestion (Upload Knowledge Base): Form Submission → Default Data Loader → Recursive Character Text Splitter → Google Gemini Embeddings → Supabase Vector Store.",
        "B. Question Answering (Telegram Chatbot): Telegram Trigger → AI Agent → Supabase Vector Store Retrieval → Cohere Reranker → AI Response → Telegram.",
        "Komponen pendukung meliputi Google Gemini Chat Model sebagai language model, PostgreSQL Chat Memory sebagai penyimpanan konteks percakapan, dan Supabase Vector Store."
      ],
    },
    {
      number: "06",
      title: "How It Works",
      paragraphs: [
        "1. Upload Document: Pengguna mengunggah dokumen PDF melalui form.",
        "2. Document Loading & Splitting: Dokumen dibaca dalam bentuk binary dan dibagi menjadi potongan teks menggunakan Recursive Character Text Splitter.",
        "3. Embedding & Storage: Google Gemini Embeddings mengubah teks menjadi vektor dan menyimpannya ke Supabase Vector Store.",
        "4. User Question & Retrieval: Pengguna mengirimkan pertanyaan via Telegram; AI Agent mencari informasi relevan dengan bantuan Cohere Reranker.",
        "5. Response Generation & Delivery: Google Gemini menyusun jawaban berdasarkan konteks dokumen dan mengirimkannya kembali ke Telegram."
      ],
    },
    {
      number: "07",
      title: "Technology Stack",
      paragraphs: [
        "• n8n: Workflow automation and orchestration",
        "• Telegram: User interaction and chatbot interface",
        "• Google Gemini Chat Model: AI response generation",
        "• Google Gemini Embeddings: Text embedding generation",
        "• Supabase Vector Store: Vector database and document retrieval",
        "• Cohere Reranker: Search result reranking",
        "• PostgreSQL: Conversation memory",
        "• Default Data Loader & Text Splitter: Document loading and segmentation"
      ],
    },
    {
      number: "08",
      title: "Business Benefits",
      paragraphs: [
        "✔ Faster Information Access: Membantu pengguna menemukan informasi dari dokumen dengan cepat melalui percakapan.",
        "✔ Centralized Knowledge Base: Mengumpulkan sumber informasi dokumen dalam satu database terpusat.",
        "✔ Reduced Repetitive Questions: Menjawab pertanyaan berulang secara otomatis berdasarkan dokumen yang tersedia.",
        "✔ Accessible Through Telegram: Memudahkan akses informasi melalui aplikasi komunikasi harian.",
        "✔ Context-Aware Conversations: Menyediakan penyimpanan konteks percakapan berdasarkan sesi pengguna.",
        "✔ Scalable Document Knowledge: Mendukung penambahan dokumen PDF baru sebagai sumber informasi."
      ],
    },
    {
      number: "09",
      title: "Project Demonstration",
      paragraphs: [
        "Bagian demonstrasi menampilkan implementasi sistem melalui beberapa bukti visual:",
        "1. Workflow Overview — Tampilan keseluruhan workflow n8n.",
        "2. Document Upload — Form untuk mengunggah dokumen PDF.",
        "3. Document Processing — Proses pemecahan dokumen dan penyimpanan embedding.",
        "4. Telegram Interaction — Contoh pengguna mengajukan pertanyaan melalui Telegram.",
        "5. AI Response — Contoh jawaban chatbot berdasarkan dokumen.",
        "6. Knowledge Base — Tampilan data dokumen pada Supabase Vector Store."
      ],
    },
  ],
},

"keuangan": {
  title: "Sistem Otomatisasi Pencatatan Keuangan dengan Telegram",
  category: "WORKFLOW AUTOMATION",
  description:
    "Sistem pencatatan transaksi keuangan berbasis chatbot Telegram yang memanfaatkan AI untuk membaca foto struk atau teks bebas, serta mengotomatisasi penyimpanan data ke Google Sheets dan pembuatan laporan finansial.",
  youtubeId: "GANTI_DENGAN_ID_VIDEO",
  videoUrl: "/videos/keuangan.mp4",
  dashboardUrl: "",
  githubUrl: "",
  reportUrl: "",

  author: "Khairul Rohman",
  publishedAt: "Portfolio Project",

  tools: ["n8n", "Telegram Bot", "Google Gemini", "Google Sheets", "AI Agent"],

  sections: [
    {
      number: "01",
      title: "Project Overview",
      paragraphs: [
        "Catat Keuangan dengan Telegram merupakan sistem pencatatan transaksi keuangan berbasis chatbot yang memungkinkan pengguna mencatat pemasukan atau pengeluaran melalui percakapan Telegram.",
        "Sistem menggunakan AI untuk membaca informasi dari foto struk maupun memahami input teks bebas. Data transaksi kemudian disimpan secara otomatis ke Google Sheets.",
        "Pengguna juga dapat meminta laporan transaksi melalui Telegram berdasarkan periode tertentu tanpa harus membuka spreadsheet secara langsung."
      ],
    },
    {
      number: "02",
      title: "Business Problem",
      paragraphs: [
        "Pencatatan keuangan secara manual sering menghadapi beberapa kendala:",
        "✔ Pengguna harus membuka aplikasi atau spreadsheet untuk mencatat transaksi.",
        "✔ Informasi transaksi dari struk perlu dimasukkan satu per satu.",
        "✔ Pencatatan sering tertunda sehingga transaksi berisiko terlupakan.",
        "✔ Data transaksi belum tersusun dalam satu tempat.",
        "✔ Pengguna perlu menghitung total pengeluaran secara manual.",
        "✔ Membuat laporan keuangan membutuhkan waktu tambahan."
      ],
    },
    {
      number: "03",
      title: "Solution",
      paragraphs: [
        "Membangun sistem pencatatan keuangan otomatis menggunakan Telegram sebagai antarmuka utama di mana pengguna dapat mengirimkan foto struk atau menuliskan transaksi menggunakan bahasa sehari-hari.",
        "AI memproses input tersebut menjadi informasi terstruktur seperti nama toko, jenis transaksi, nominal, catatan/daftar barang, dan tanggal transaksi, lalu menyimpannya ke Google Sheets.",
        "Selain pencatatan, pengguna dapat meminta laporan keuangan dengan perintah /laporan, di mana AI akan mengambil data dari Google Sheets dan menyusun ringkasan transaksi sesuai periode yang diminta."
      ],
    },
    {
      number: "04",
      title: "Key Features",
      paragraphs: [
        "• Receipt Image Recognition: Menggunakan Google Gemini untuk membaca informasi transaksi dari foto struk.",
        "• Natural Language Transaction Input: Memungkinkan pencatatan transaksi menggunakan bahasa sehari-hari tanpa format yang kaku.",
        "• AI-Based Data Extraction: Mengekstrak informasi terstruktur (nama toko, jenis transaksi, nominal, catatan, dan tanggal).",
        "• Automated Transaction Recording: Menyimpan hasil ekstraksi transaksi secara otomatis ke Google Sheets.",
        "• Transaction Confirmation: Mengirimkan konfirmasi melalui Telegram setelah data berhasil dicatat.",
        "• Financial Report Generation: Menyediakan laporan instan melalui perintah /laporan untuk periode hari ini, minggu ini, atau bulan ini.",
        "• Transaction Summary: Menyajikan total pengeluaran, jumlah transaksi, detail, dan urutan dari terbaru ke terlama."
      ],
    },
    {
      number: "05",
      title: "Workflow Architecture",
      paragraphs: [
        "Workflow terdiri dari tiga jalur utama:",
        "A. Receipt Image Processing: Telegram Photo → Get File → Download Image → Base64 Conversion → Google Gemini → Validate Extraction → Google Sheets → Telegram Confirmation.",
        "B. Manual Text Input: Telegram Text → AI Agent → Google Gemini → Validate Extraction → Google Sheets → Telegram Confirmation.",
        "C. Financial Report: Telegram /laporan → AI Agent → Google Sheets Retrieval → Financial Data Analysis → Telegram Report."
      ],
    },
    {
      number: "06",
      title: "How It Works",
      paragraphs: [
        "1. User Input: Pengguna mengirimkan foto struk, teks transaksi, atau perintah laporan melalui Telegram.",
        "2. Input Classification: Workflow mengidentifikasi jenis pesan dan mengarahkannya ke jalur pemrosesan yang sesuai.",
        "3. Processing & Validation: Foto struk diunduh dan dibaca oleh Google Gemini, atau teks transaksi diproses oleh AI Agent menjadi data terstruktur.",
        "4. Transaction Recording: Data yang valid ditambahkan secara otomatis ke Google Sheets dan sistem mengirimkan konfirmasi.",
        "5. Financial Report Request: Pengguna dapat meminta laporan berkala menggunakan perintah /laporan untuk dianalisis dan dikirimkan oleh AI via Telegram."
      ],
    },
    {
      number: "07",
      title: "Technology Stack",
      paragraphs: [
        "• n8n: Workflow automation",
        "• Telegram Bot: User interaction and transaction input",
        "• Google Gemini 3.5 Flash Lite: Receipt recognition and text processing",
        "• Google Sheets: Transaction database",
        "• AI Agent: Transaction parsing and report generation"
      ],
    },
    {
      number: "08",
      title: "Business Benefits",
      paragraphs: [
        "✔ Simplified Transaction Recording — Mencatat transaksi langsung melalui Telegram secara cepat.",
        "✔ Reduced Manual Data Entry — Mengurangi kebutuhan input data manual dari struk atau catatan fisik.",
        "✔ Automated Reporting — Mempercepat pembuatan laporan keuangan berdasarkan periode tertentu.",
        "✔ Centralized Records — Seluruh data transaksi tersimpan rapi dan terstruktur dalam Google Sheets.",
        "✔ Real-time Access — Memantau pengeluaran dan ringkasan keuangan kapan saja melalui aplikasi percakapan."
      ],
    },
    {
      number: "09",
      title: "Project Demonstration",
      paragraphs: [
        "Bagian demonstrasi menampilkan implementasi sistem melalui beberapa bukti visual:",
        "1. Workflow Overview — Tampilan keseluruhan workflow n8n.",
        "2. Receipt Processing — Contoh pengiriman foto struk dan hasil pembacaan AI.",
        "3. Text Input Recording — Contoh pencatatan transaksi via chat teks.",
        "4. Google Sheets Database — Tampilan data transaksi yang tersimpan secara otomatis.",
        "5. Financial Report Output — Contoh hasil rekapitulasi laporan keuangan melalui perintah /laporan di Telegram."
      ],
    },
  ],
},

"kopi": {
  title: "Sistem Otomatisasi Pengelolaan Stok Gudang Kopi",
  category: "WORKFLOW AUTOMATION",
  description:
    "Sistem otomatisasi pengelolaan stok gudang kopi berbasis WhatsApp yang memungkinkan pengguna mencatat barang masuk dan keluar hanya dengan mengirimkan pesan. Sistem memperbarui jumlah stok secara otomatis, memberikan konfirmasi transaksi, mencegah pengeluaran melebihi stok tersedia, serta mengirimkan notifikasi ketika stok menipis atau tidak mencukupi.",
  youtubeId: "GANTI_DENGAN_ID_VIDEO",
  videoUrl: "/videos/GudangKopiKhai.mp4",
  dashboardUrl: "",
  githubUrl: "",
  reportUrl: "",

  author: "Khairul Rohman",
  publishedAt: "Portfolio Project",

  tools: ["Google Apps Script", "Google Sheets", "WhatsApp Automation"],

  sections: [
    {
      number: "01",
      title: "Project Overview",
      paragraphs: [
        "Sistem pengelolaan stok gudang kopi berbasis WhatsApp yang memungkinkan pengguna mencatat barang masuk dan keluar hanya dengan mengirimkan pesan. Sistem memperbarui jumlah stok secara otomatis, memberikan konfirmasi transaksi, mencegah pengeluaran melebihi stok tersedia, serta mengirimkan notifikasi ketika stok menipis atau tidak mencukupi.",
      ],
      image: "/images/hr-overview.png",
      imageAlt: "",
      caption: "",
    },
    {
      number: "02",
      title: "Key Features",
      paragraphs: [
        "✔  Pencatatan Stok via WhatsApp: Mencatat barang masuk dan keluar melalui pesan",
        "✔  Pembaruan Stok Otomatis: Menghitung ulang persediaan setiap transaksi",
        "✔  Konfirmasi Transaksi: Mengirimkan informasi transaksi dan jumlah stok terkini",
        "✔  Pencegahan Stok Minus: Menolak pengeluaran yang melebihi persediaan",
        "✔  Notifikasi Stok Menipis: Memberikan peringatan saat stok mencapai batas minimum",
        "✔  Notifikasi Stok Tidak Cukup: Memberitahu owner saat stok tidak cukup",
        "✔  Ringkasan Stok Gudang: Menampilkan jumlah dan status persediaan setiap barang",
              ],
      image: "/images/hr-business-problem.png",
      imageAlt: "",
      caption: "",
    },
    {
      number: "03",
      title: "Business Benefits",
      paragraphs: [
        "✔  Mengurangi pencatatan stok secara manual.",
        "✔  Mempercepat proses pencatatan transaksi.",
        "✔  Meminimalkan kesalahan perhitungan persediaan.",
        "✔  Membantu pemilik memantau stok tanpa harus membuka laptop.",
        "✔  Mendukung pengambilan keputusan untuk pengisian ulang stok.",
      ],
      image: "/images/hr-data-model.png",
      imageAlt: "",
      caption: "",
    },
    {
      number: "04",
      title: "Project Objective",
      paragraphs: [
        "Membangun sistem pengelolaan stok yang praktis dan mudah digunakan agar pemilik usaha dapat memantau persediaan gudang melalui WhatsApp tanpa proses pencatatan manual yang rumit.",
      ],
      image: "/images/hr-insights.png",
      imageAlt: "",
      caption: "",
    },
  ],
},

"laundry": {
  title: "Sistem Otomatisasi Nota Digital via WhatsApp",
  category: "WORKFLOW AUTOMATION",
  description:
    "Studi kasus analisis data sumber daya manusia menggunakan Power BI untuk membantu perusahaan memahami kondisi tenaga kerja, mengidentifikasi tren turnover, dan meningkatkan efektivitas pengambilan keputusan.",
  youtubeId: "GANTI_DENGAN_ID_VIDEO",
  videoUrl: "/videos/LaundryKhai.mp4",
  dashboardUrl: "",
  githubUrl: "",
  reportUrl: "",

  author: "Khairul Rohman",
  publishedAt: "Portfolio Project",

 tools: ["Google Apps Script", "Google Sheets", "WhatsApp Automation"],

  sections: [
    {
      number: "01",
      title: "Project Overview",
      paragraphs: [
        "Sistem otomatisasi transaksi laundry sepatu yang mengintegrasikan POS, pembayaran QRIS, dan pengiriman nota digital melalui WhatsApp. Pelanggan menerima nota secara otomatis setelah transaksi, sehingga proses pembayaran lebih praktis tanpa nota kertas maupun biaya langganan yang mahal.",
      ],
      image: "/images/hr-overview.png",
      imageAlt: "",
      caption: "",
    },
    {
      number: "02",
      title: "Key Features",
      paragraphs: [
        "✔  Input Transaksi POS: Mencatat transaksi layanan laundry sepatu.",
        "✔  Pembayaran QRIS: Memudahkan pelanggan melakukan pembayaran melalui pemindaian QRIS.",
        "✔  Nota Digital Otomatis: Mengirimkan detail transaksi ke WhatsApp pelanggan.",
        "✔  Riwayat Transaksi: Mendokumentasikan informasi transaksi secara digital.",
        "✔  Pengurangan Nota Kertas: Mengurangi penggunaan kertas dan mempermudah penyimpanan catatan transaksi.",
      ],
      image: "/images/hr-business-problem.png",
      imageAlt: "",
      caption: "",
    },
    {
      number: "03",
      title: "Business Benefits",
      paragraphs: [
        "✔  Mempercepat proses transaksi dan pengiriman nota digital.",
        "✔  Mengurangi pencatatan manual dan penggunaan kertas.",
        "✔  Memudahkan pelanggan menyimpan bukti transaksi.",
        "✔  Menyediakan solusi yang praktis dan terjangkau bagi UMKM.",
      ],
      image: "/images/hr-data-model.png",
      imageAlt: "",
      caption: "",
    },
    {
      number: "04",
      title: "Project Objective",
      paragraphs: [
        "Membangun sistem otomatisasi transaksi yang mengintegrasikan POS, pembayaran QRIS, dan WhatsApp untuk mengirimkan nota digital kepada pelanggan secara praktis, mengurangi penggunaan kertas, serta menyediakan solusi terjangkau bagi UMKM tanpa biaya langganan mahal dan fitur yang berlebihan.",
      ],
      image: "/images/hr-insights.png",
      imageAlt: "",
      caption: "",
    },
  ],
},

}

function ProjectDetail() {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const currentProject = project[projectId];

  if (!currentProject) {
    return (
      <main className="project-detail-page">
        <h1>Project tidak ditemukan</h1>
        <a href="/#projects">Kembali ke semua proyek</a>
      </main>
    );
  }
  const hasVideo =
  currentProject.youtubeId &&
  currentProject.youtubeId !== "GANTI_DENGAN_ID_VIDEO";

  return (
    <main className="project-detail-page">
      {/* NAVBAR */}
      <header className="detail-navbar">
        <a className="detail-brand" href="/">
          <span className="detail-brand-dot" />
          KHAIRUL.ROHMAN
          

        </a>

        <a className="detail-back-link" href="/#projects">
          <ArrowLeft size={16} />
          Kembali ke Portfolio
        </a>
      </header>

      <div className="detail-layout detail-layout-single">
        <article className="detail-main">
          {/* VIDEO PALING ATAS */}
          {currentProject.videoUrl && (
          <section className="detail-video-section">
            <div className="detail-video-frame">
              <video
  className="detail-local-video"
  autoPlay
  muted
  controls
  loop
  preload="auto"
  playsInline
  poster={currentProject.sections?.[0]?.image}
>
  <source src={currentProject.videoUrl} type="video/mp4" />
  Browser kamu tidak mendukung pemutaran video.
</video>
            </div>
          </section>
        )}

          {/* TITLE DAN ACTIONS */}
          <section className="detail-heading">
            <p className="detail-category">{currentProject.category}</p>

            <h1>{currentProject.title}</h1>

            <div className="detail-heading-bottom">
              <div className="detail-author">
                <div className="detail-avatar">KR</div>

                <div>
                  <strong>{project.author}</strong>
                  <span>Data Analyst & Automation Specialist</span>
                </div>
              </div>

              <div className="detail-actions">
                {currentProject.dashboardUrl && (
                  <a
                    className="detail-button detail-button-primary"
                    href={currentProject.dashboardUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink size={16} />
                    Live Dashboard
                  </a>
                )}

                {currentProject.githubUrl && (
                  <a
                    className="detail-button"
                    href={currentProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </div>


          </section>

          {/* PROJECT CONTENT */}
          <section className="detail-article">


            {(currentProject.sections || []).map((section) => (
  <section
    className="detail-story"
    key={section.number}
  >
    <div className="detail-story-copy">
      <span className="detail-story-number">
        {section.number}
      </span>

      <h2>{section.title}</h2>

      {section.paragraphs.map((paragraph, paragraphIndex) => (
        <p key={paragraphIndex}>{paragraph}</p>
      ))}
    </div>

    {section.image && (
      <figure className="detail-story-figure">
        <img
          src={section.image}
          alt={section.imageAlt}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
            event.currentTarget.nextElementSibling.style.display =
              "flex";
          }}
        />
        <div
          className="detail-image-fallback"
          style={{ display: "none" }}
        />
      </figure>
    )}
  </section>
))}

            {/* TOOLS */}
            <section className="detail-tools-section">
              <div className="detail-tools">
                {(currentProject.tools || []).map((tool) => (
                  <span className="detail-tool" key={tool}>
                    {tool}
                  </span>
                ))}
              </div>
            </section>
<br></br>
              <button
                type="button"
                className="detail-button detail-button-primary"
                onClick={() => navigate("/#projects")}
              >
                <ArrowLeft size={16} />
                Kembali ke Semua Proyek
              </button>
           
          </section>
        </article>

        
        
      </div>

      <footer className="detail-footer">
        <span>© {new Date().getFullYear()} Khairul Rohman</span>
        <span>Data Analytics · Business Intelligence · Power BI</span>
      </footer>
    </main>
  );
}

export default ProjectDetail;