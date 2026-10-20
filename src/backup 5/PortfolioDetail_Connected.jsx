import React from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import "./PortfolioDetail.css";

// Detail untuk item pada array `portfolio` di App.jsx.
// Video default menggunakan file public/videos/GudangKopiKhai.mp4.
const portfolioDetails = {
  "sales-dashboard": {
    title: "Sales Performance Dashboard",
    category: "POWER BI · SALES ANALYTICS",
    description:
      "Dashboard untuk menganalisis performa penjualan, tren pendapatan, pencapaian target, dan kontribusi produk terhadap bisnis.",
    powerBiUrl: "",
    dashboardUrl: "",
    githubUrl: "",
    author: "Khairul Rohman",
    caseLabel: "CASE STUDY / SALES ANALYTICS",
    intro:
      "Halaman ini merangkum alur analisis performa penjualan dari penyiapan data hingga pemantauan indikator bisnis.",
    tools: ["Power BI", "DAX", "Power Query", "Data Modeling"],
    sections: [
      {
        number: "01",
        title: "Project Overview",
        paragraphs: [
          "Dashboard dirancang untuk memberikan ringkasan performa penjualan dan perubahan pendapatan dari waktu ke waktu.",
          "Metrik utama mencakup revenue, pertumbuhan, pencapaian target, dan kontribusi produk.",
        ],
        image: "/images/sales-overview.png",
        imageAlt: "Sales Performance Dashboard",
        caption: "Gambaran umum performa penjualan.",
      },
      {
        number: "02",
        title: "Business Questions",
        paragraphs: [
          "Bisnis perlu memahami apakah target tercapai, bagaimana tren penjualan berubah, dan produk mana yang memberi kontribusi terbesar.",
          "Visualisasi membantu pengguna menelusuri metrik berdasarkan dimensi data yang tersedia.",
        ],
        image: "/images/sales-questions.png",
        imageAlt: "Analisis pertanyaan bisnis penjualan",
        caption: "Pertanyaan utama dalam analisis penjualan.",
      },
      {
        number: "03",
        title: "Data Modeling",
        paragraphs: [
          "Data disiapkan dan ditransformasikan agar metrik penjualan dapat dibandingkan secara konsisten.",
          "Model data dan measure DAX membantu menghitung indikator performa yang digunakan pada dashboard.",
        ],
        image: "/images/sales-model.png",
        imageAlt: "Sales data model",
        caption: "Persiapan data dan metrik.",
      },
      {
        number: "04",
        title: "Performance Insights",
        paragraphs: [
          "Kartu KPI dan visual tren menyajikan gambaran ringkas revenue, growth, serta pencapaian target.",
          "Insight dari dashboard dapat menjadi masukan untuk evaluasi performa dan perencanaan penjualan.",
        ],
        image: "/images/sales-insights.png",
        imageAlt: "Sales performance insights",
        caption: "Ringkasan indikator performa penjualan.",
      },
    ],
  },

  "operations-dashboard": {
    title: "Operations Performance Dashboard",
    category: "SQL · OPERATIONS ANALYTICS",
    description:
      "Dashboard untuk memantau indikator operasional, kualitas data, tren kinerja, dan peluang peningkatan efisiensi proses bisnis.",
    powerBiUrl: "",
    dashboardUrl: "",
    githubUrl: "",
    author: "Khairul Rohman",
    caseLabel: "CASE STUDY / OPERATIONS ANALYTICS",
    intro:
      "Studi kasus ini menggambarkan penggunaan analisis data untuk memantau kinerja proses, kualitas data, dan peluang peningkatan efisiensi.",
    tools: ["SQL Server", "Excel", "Power BI", "Reporting", "Data Quality"],
    sections: [
      {
        number: "01",
        title: "Project Overview",
        paragraphs: [
          "Dashboard operasional menyajikan indikator kinerja utama agar pengguna dapat memantau kondisi proses bisnis.",
          "Ringkasan metrik membantu meninjau performa, kualitas data, dan efisiensi secara lebih terstruktur.",
        ],
        image: "/images/operations-overview.png",
        imageAlt: "Operations Performance Dashboard",
        caption: "Gambaran umum kinerja operasional.",
      },
      {
        number: "02",
        title: "Business Problem",
        paragraphs: [
          "Pemantauan yang mengandalkan laporan terpisah dapat menyulitkan identifikasi perubahan kinerja dan masalah kualitas data.",
          "Tampilan yang terpusat membantu pengguna menemukan area yang perlu diperiksa lebih lanjut.",
        ],
        image: "/images/operations-problem.png",
        imageAlt: "Tantangan pemantauan operasional",
        caption: "Tantangan pelaporan operasional.",
      },
      {
        number: "03",
        title: "Data Preparation",
        paragraphs: [
          "Data diekstrak dan divalidasi untuk menjaga konsistensi indikator operasional.",
          "Tahapan persiapan data membantu mengurangi ketidaksesuaian sebelum data digunakan dalam pelaporan.",
        ],
        image: "/images/operations-data.png",
        imageAlt: "Persiapan data operasional",
        caption: "Validasi dan persiapan data.",
      },
      {
        number: "04",
        title: "Operational Insights",
        paragraphs: [
          "Visualisasi membantu meninjau tren kinerja, kualitas data, dan indikator efisiensi.",
          "Hasil pemantauan dapat digunakan sebagai dasar untuk mengevaluasi proses dan menentukan tindak lanjut.",
        ],
        image: "/images/operations-insights.png",
        imageAlt: "Operations insights",
        caption: "Contoh ringkasan indikator operasional.",
      },
    ],
  },
};

function PortfolioDetail() {
  const portfolioId = window.location.pathname.split("/").filter(Boolean).pop();
  const portfolio = portfolioDetails[portfolioId];

  if (!portfolio) {
    return (
      <main className="project-detail-page portfolio-detail-page">
        <header className="detail-navbar">
          <a className="detail-brand" href="/">
            <span className="detail-brand-dot" />
            KHAIRUL.ROHMAN
            <span className="detail-brand-divider">/</span>
            <span className="detail-brand-role">data-analyst</span>
          </a>
          <a className="detail-back-link" href="/#portfolio">
            <ArrowLeft size={16} />
            Kembali ke Portfolio
          </a>
        </header>
        <section className="detail-conclusion portfolio-detail-not-found">
          <h2>Portfolio tidak ditemukan</h2>
          <p>Alamat portfolio tidak valid atau detailnya belum tersedia.</p>
          <a className="detail-button detail-button-primary" href="/#portfolio">
            <ArrowLeft size={16} />
            Kembali ke Portfolio
          </a>
        </section>
      </main>
    );
  }

  return (
    <main className="project-detail-page portfolio-detail-page">
      <header className="detail-navbar">
        <a className="detail-brand" href="/">
          <span className="detail-brand-dot" />
          KHAIRUL.ROHMAN
          <span className="detail-brand-divider">/</span>
          <span className="detail-brand-role">data-analyst</span>
        </a>
        <a className="detail-back-link" href="/#portfolio">
          <ArrowLeft size={16} />
          Kembali ke Portfolio
        </a>
      </header>

      <div className="detail-layout detail-layout-single">
        <article className="detail-main">
          {/* POWER BI DASHBOARD DI BAGIAN ATAS */}
          <section className="detail-video-section portfolio-powerbi-section">
            <div className="detail-video-frame portfolio-powerbi-frame">
              {portfolio.powerBiUrl ? (
                <iframe
                  title={`Power BI Dashboard - ${portfolio.title}`}
                  src={portfolio.powerBiUrl}
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    minHeight: "650px",
                    border: 0,
                  }}
                  allowFullScreen
                  loading="lazy"
                />
              ) : (
                <div className="detail-video-placeholder">
                  <h2>{portfolio.title}</h2>
                  <p>Dashboard Power BI belum dikonfigurasi.</p>
                  <span>TAMBAHKAN URL EMBED POWER BI</span>
                </div>
              )}
            </div>
          </section>

          <section className="detail-heading">
            <p className="detail-category">{portfolio.category}</p>
            <h1>{portfolio.title}</h1>

            <div className="detail-heading-bottom">
              <div className="detail-author">
                <div className="detail-avatar">KR</div>
                <div>
                  <strong>{portfolio.author}</strong>
                  <span>Data Analyst &amp; BI Developer</span>
                </div>
              </div>

              <div className="detail-actions">
                {portfolio.dashboardUrl && (
                  <a
                    className="detail-button detail-button-primary"
                    href={portfolio.dashboardUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink size={16} />
                    Live Dashboard
                  </a>
                )}
                {portfolio.githubUrl && (
                  <a
                    className="detail-button"
                    href={portfolio.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </div>

            <p className="detail-summary">{portfolio.description}</p>
          </section>

          <section className="detail-article">
            <div className="detail-article-intro">
              <span className="detail-section-label">{portfolio.caseLabel}</span>
              <h2>Behind the Analysis</h2>
              <p>{portfolio.intro}</p>
            </div>

            {portfolio.sections.map((section, index) => (
              <section
                className={`detail-story ${
                  index % 2 === 1 ? "detail-story-reverse" : ""
                }`}
                key={section.number}
              >
                <div className="detail-story-copy">
                  <span className="detail-story-number">{section.number}</span>
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
                      const fallback = event.currentTarget.nextElementSibling;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  <div className="detail-image-fallback" style={{ display: "none" }}>
                    <span>PORTFOLIO VISUAL</span>
                    <p>{section.imageAlt}</p>
                    <small>Tambahkan gambar terkait ke folder public/images.</small>
                  </div>
                  <figcaption>{section.caption}</figcaption>
                </figure>
              </section>
            ))}

            <section className="detail-tools-section">
              <span className="detail-section-label">TECHNOLOGY STACK</span>
              <h2>Tools &amp; Technologies</h2>
              <div className="detail-tools">
                {portfolio.tools.map((tool) => (
                  <span className="detail-tool" key={tool}>{tool}</span>
                ))}
              </div>
            </section>

            <section className="detail-conclusion">
              <span className="detail-section-label">PORTFOLIO CONCLUSION</span>
              <h2>From Data to Decisions.</h2>
              <p>
                Portfolio ini menunjukkan bagaimana data dapat disiapkan,
                dianalisis, dan disajikan menjadi informasi yang mendukung
                pemahaman serta pengambilan keputusan bisnis.
              </p>
              <a className="detail-button detail-button-primary" href="/#portfolio">
                <ArrowLeft size={16} />
                Kembali ke Portfolio
              </a>
            </section>
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

export default PortfolioDetail;
