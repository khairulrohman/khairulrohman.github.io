KODE HALAMAN DETAIL

1. PortfolioDetail.jsx + PortfolioDetail.css
   Halaman Portfolio dengan Power BI embed.

2. ProjectDetail_Video.jsx
   Komponen detail berbasis video dari kode video yang tersedia.

Penempatan:
- PortfolioDetail.jsx -> src/PortfolioDetail.jsx
- PortfolioDetail.css -> src/PortfolioDetail.css
- ProjectDetail_Video.jsx -> src/ProjectDetail.jsx (ganti nama file menjadi ProjectDetail.jsx)

Routing di main.jsx:
<Route path="/project/:projectId" element={<ProjectDetail />} />
<Route path="/portfolio/:portfolioId" element={<PortfolioDetail />} />

Import:
import ProjectDetail from "./ProjectDetail";
import PortfolioDetail from "./PortfolioDetail";

App.jsx:
- Kartu Projects: /project/${project.id}
- Kartu Portfolio: /portfolio/${item.id}

Catatan:
ProjectDetail versi video yang tersedia pada file sumber adalah komponen video yang diunggah sebelumnya. Periksa kecocokan data proyek/ID dengan App.jsx sebelum mengganti file aktif. Untuk PortfolioDetail, isi `powerBiUrl` di masing-masing objek dengan URL embed Power BI yang sesuai.
