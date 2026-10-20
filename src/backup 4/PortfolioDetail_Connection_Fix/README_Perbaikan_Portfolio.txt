PERBAIKAN KONEKSI PORTFOLIO DETAIL

File:
- App_Connected.jsx: App.jsx yang sudah diarahkan ke halaman detail portfolio.
- PortfolioDetail_Connected.jsx: PortfolioDetail.jsx yang tidak lagi bergantung pada react-router-dom.

Pemasangan:
1. Ganti src/App.jsx dengan isi App_Connected.jsx (atau salin perubahannya).
2. Ganti src/PortfolioDetail.jsx dengan isi PortfolioDetail_Connected.jsx.
3. Tetap gunakan PortfolioDetail.css yang sudah ada.
4. Klik Portfolio details pada kartu. URL akan menjadi /portfolio/sales-dashboard atau /portfolio/operations-dashboard.

Catatan penting:
- Kedua entri di PortfolioDetail.jsx masih memiliki powerBiUrl kosong. Isi dengan URL embed Power BI yang benar untuk masing-masing dashboard agar iframe muncul. Jangan gunakan URL dashboard yang tidak sesuai dengan judulnya.
- Pada App.jsx, link Portfolio sekarang menuju detail berdasarkan item.id, bukan #contact.
- Jika memakai GitHub Pages, akses langsung/refresh URL /portfolio/... mungkin perlu konfigurasi fallback SPA; uji navigasi dari halaman utama terlebih dahulu.
