import React from "react";
import { ArrowLeft, ExternalLink, PlayCircle } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import "./ProjectDetail.css";

const project = {
"kopi": {
  title: "Sistem Pengelolaan Stok Gudang Kopi",
  category: "WORKFLOW AUTOMATION",
  description:
    "Sistem pengelolaan stok gudang kopi berbasis WhatsApp yang memungkinkan pengguna mencatat barang masuk dan keluar hanya dengan mengirimkan pesan. Sistem memperbarui jumlah stok secara otomatis, memberikan konfirmasi transaksi, mencegah pengeluaran melebihi stok tersedia, serta mengirimkan notifikasi ketika stok menipis atau tidak mencukupi.",
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


            {(currentProject.sections || []).map((section, index) => (
              <section
                className={`detail-story ${
                  index % 2 === 1 ? "detail-story-reverse" : ""
                }`}
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
                  >
                    
                  </div>

                  
                </figure>
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