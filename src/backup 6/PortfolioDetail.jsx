import React from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import "./PortfolioDetail.css";

// Detail untuk item pada array `portfolio` di App.jsx.
// Video default menggunakan file public/videos/GudangKopiKhai.mp4.
const portfolioDetails = {
  "marketing-dashboard": {
    title: "Marketing Performance Dashboard",
    category: "POWER BI · SALES ANALYTICS",
    description:
      "Dashboard untuk menganalisis Marketing.",
    powerBiUrl: "https://app.powerbi.com/view?r=eyJrIjoiNjE2ZjAzZTgtZjhkNy00OWVjLTk2ODQtNmZlOWQ5NDVhNmU5IiwidCI6ImFlYTgxMzk3LTQ5MmUtNDRiYy1iYWM5LTgzN2Q3OWU4YTc4YSJ9",
    dashboardUrl: "https://app.powerbi.com/view?r=eyJrIjoiNjE2ZjAzZTgtZjhkNy00OWVjLTk2ODQtNmZlOWQ5NDVhNmU5IiwidCI6ImFlYTgxMzk3LTQ5MmUtNDRiYy1iYWM5LTgzN2Q3OWU4YTc4YSJ9",
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
          "Dashboard untuk memantau kinerja pemasaran melalui indikator pendapatan, leads, conversions, dan biaya pemasaran.", 
          "Dashboard juga membandingkan pencapaian aktual dengan target serta performa periode sebelumnya.",
        ],
        image: "/images/sales-questions.png",

      },
      {
        number: "02",
        title: "Monitoring Focus",
        paragraphs: [
          "✔ Total Revenue ✔ Total Leads ✔ Total Conversion ✔ Total Marketing Spend ✔ Revenue vs. Target ✔ Conversions vs. Target ✔ Leads vs. Target ✔ Spend vs. Target",
        ],
        image: "/images/sales-questions.png",

      },
      {
        number: "03",
        title: "Business Value",
        paragraphs: [
          "Membantu tim pemasaran memantau pencapaian target, mengevaluasi perubahan performa, dan menentukan area yang memerlukan evaluasi lebih lanjut.",
        ],
        image: "/images/sales-model.png",

      },

    ],
  },

  "stock-dashboard": {
    title: "Operations Performance Dashboard",
    category: "SQL · OPERATIONS ANALYTICS",
    description:
      "Dashboard untuk memantau indikator operasional, kualitas data, tren kinerja, dan peluang peningkatan efisiensi proses bisnis.",
    powerBiUrl: "https://app.powerbi.com/view?r=eyJrIjoiY2U4ZjdkNWUtMTIxYi00ZDBmLTllMWUtMzZhZjE5OTBlNDg2IiwidCI6ImFlYTgxMzk3LTQ5MmUtNDRiYy1iYWM5LTgzN2Q3OWU4YTc4YSJ9",
    dashboardUrl: "https://app.powerbi.com/view?r=eyJrIjoiY2U4ZjdkNWUtMTIxYi00ZDBmLTllMWUtMzZhZjE5OTBlNDg2IiwidCI6ImFlYTgxMzk3LTQ5MmUtNDRiYy1iYWM5LTgzN2Q3OWU4YTc4YSJ9",
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
          "Dashboard analisis untuk mengidentifikasi toko yang berisiko mengalami kehabisan stok, mengukur potensi kerugian penjualan, dan menentukan prioritas tindakan berdasarkan tingkat risiko persediaan.",
          "Berbeda dengan dashboard monitoring yang berfokus pada pemantauan KPI, dashboard ini menekankan analisis risiko dan penerjemahan temuan menjadi rekomendasi bisnis.",
        ],
        image: "/images/sales-questions.png",

      },
      {
        number: "02",
        title: "Monitoring Focus",
        paragraphs: [
          "Stock-Out Risk Identification, High-Risk Store Analysis, Stock Coverage, Potential Sales Loss, Inventory Distribution, Risk Prioritization, Recommended Actions, Potential Recovery Estimation",
        ],
        image: "/images/sales-questions.png",

      },
      {
        number: "03",
        title: "Key Findings",
        paragraphs: [
          "✔ Terdapat 50 toko dalam cakupan dashboard.  ✔ Sebanyak 23 toko ditampilkan sebagai toko berisiko tinggi pada salah satu KPI.  ✔ Potensi kerugian dan potensi pemulihan ditampilkan sebagai estimasi.  ✔ Dashboard menyajikan rekomendasi redistribusi stok dan prioritas pengisian ulang.",
        ],
        image: "/images/sales-model.png",

      },
      {
        number: "04",
        title: "Business Value",
        paragraphs: [
          "Membantu perusahaan mengidentifikasi risiko persediaan lebih awal, menentukan prioritas tindakan, dan mengevaluasi potensi dampak finansial dari keputusan pengelolaan stok.",
        ],
        image: "/images/sales-insights.png",

      },
    ],
  },

  "supply-dashboard": {
    title: "Supply Chain Performance Dashboard",
    category: "POWER BI · SALES ANALYTICS",
    description:
      "Dashboard untuk memantau indikator operasional, kualitas data, tren kinerja, dan peluang peningkatan efisiensi proses bisnis.",
    powerBiUrl: "https://app.powerbi.com/view?r=eyJrIjoiZTY4M2M1NTEtOGFmMy00YTc3LWFmMjEtZTk3YjdlOGYzZjRjIiwidCI6ImFlYTgxMzk3LTQ5MmUtNDRiYy1iYWM5LTgzN2Q3OWU4YTc4YSJ9",
    dashboardUrl: "https://app.powerbi.com/view?r=eyJrIjoiZTY4M2M1NTEtOGFmMy00YTc3LWFmMjEtZTk3YjdlOGYzZjRjIiwidCI6ImFlYTgxMzk3LTQ5MmUtNDRiYy1iYWM5LTgzN2Q3OWU4YTc4YSJ9",
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
          "Dashboard untuk memantau kinerja pengiriman berdasarkan ketepatan waktu, rata-rata keterlambatan, volume pesanan, dan metode pengiriman. Dashboard memberikan gambaran mengenai kondisi operasional pengiriman dalam periode tertentu.",
        ],
        image: "/images/sales-questions.png",

      },
      {
        number: "02",
        title: "Monitoring Focus",
        paragraphs: [
          "On-Time Delivery Rate ,Average Delay Days, Total Orders, Monthly Order Volume, Delay Rate by Shipping Method, Actual vs. Planned Shipping Days",
        ],
        image: "/images/sales-questions.png",

      },
      {
        number: "03",
        title: "Business Value",
        paragraphs: [
          "Membantu tim operasional memantau performa pengiriman, mengevaluasi pencapaian ketepatan waktu, dan mengidentifikasi area yang membutuhkan perhatian.",
        ],
        image: "/images/sales-model.png",

      },

    ],
  },

  "sales-dashboard": {
    title: "Sales Performance Dashboard",
    category: "SQL · OPERATIONS ANALYTICS",
    description:
      "Dashboard untuk memantau indikator operasional, kualitas data, tren kinerja, dan peluang peningkatan efisiensi proses bisnis.",
    powerBiUrl: "https://app.powerbi.com/view?r=eyJrIjoiMzc0YmI0YjctYmFmZC00NDY2LWI1NDYtNzIxOTk5YjcyZmI1IiwidCI6ImFlYTgxMzk3LTQ5MmUtNDRiYy1iYWM5LTgzN2Q3OWU4YTc4YSJ9",
    dashboardUrl: "https://app.powerbi.com/view?r=eyJrIjoiMzc0YmI0YjctYmFmZC00NDY2LWI1NDYtNzIxOTk5YjcyZmI1IiwidCI6ImFlYTgxMzk3LTQ5MmUtNDRiYy1iYWM5LTgzN2Q3OWU4YTc4YSJ9",
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
          "Dashboard untuk memantau performa penjualan, profitabilitas, dan pertumbuhan bisnis. Dashboard menyajikan KPI utama serta perbandingan dengan periode sebelumnya untuk membantu pengguna mengevaluasi perkembangan penjualan.",
        ],
        image: "/images/sales-questions.png",

      },
      {
        number: "02",
        title: "Monitoring Focus",
        paragraphs: [
          "Total Revenue, Total Profit, Average Revenue per Transaction, Active Stores, Year-over-Year Growth, Monthly Sales Performance, Product Growth Performance",
        ],
        image: "/images/sales-questions.png",

      },
      {
        number: "03",
        title: "Business Value",
        paragraphs: [
          "Membantu pengguna memantau pencapaian penjualan, mengevaluasi perubahan KPI, dan mengidentifikasi produk yang perlu mendapatkan perhatian lebih lanjut.",
        ],
        image: "/images/sales-model.png",

      },
    ],
  },

  "campaign-dashboard": {
    title: "Marketing Campaign Performance Analysis Using SQL",
    category: "SQL · ANALYTICS",
    description:
      "Dashboard untuk memantau indikator operasional, kualitas data, tren kinerja, dan peluang peningkatan efisiensi proses bisnis.",
    powerBiUrl: "",
    dashboardUrl: "",
    pdfUrl: "https://drive.google.com/file/d/1xbisueYqvMOE_6UglrlJU0indw9Q6X5g/preview",
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

  "pipeline-dashboard": {
    title: "Automated Data Pipeline",
    category: "SQL · ANALYTICS",
    description:
      "Dashboard untuk memantau indikator operasional, kualitas data, tren kinerja, dan peluang peningkatan efisiensi proses bisnis.",
    powerBiUrl: "",
    dashboardUrl: "",
    pdfUrl: "https://drive.google.com/file/d/1hGVxq6ww9JgP2DW6V0p5LkxOfu8CqcXH/preview",
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
        image: "/images/pipeline.png",
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
    const navigate = useNavigate();
    const { portfolioId } = useParams();
    const portfolio = portfolioDetails[portfolioId];

  if (!portfolio) {
    return (
      <main className="project-detail-page portfolio-detail-page">
        <header className="detail-navbar">
          <a className="detail-brand" href="/">
            <span className="detail-brand-dot" />
            KHAIRUL.ROHMAN
            
          </a>
          <a className="detail-back-link" href="/#portfolio">
            <ArrowLeft size={16} />
            Kembali ke Portfolio
          </a>
        </header>
        <section className="detail-conclusion portfolio-detail-not-found">
          <h2>Portfolio tidak ditemukan</h2>
          <p>Alamat portfolio tidak valid atau detailnya belum tersedia.</p>
          <button
            type="button"
            className="detail-button detail-button-primary"
            onClick={() => {
  window.location.href = "/#portfolio";
}}
          >
            <ArrowLeft size={16} />
            Kembali ke Portfolio
          </button>
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
              {portfolio.pdfUrl ? (
  <iframe
    title={`PDF - ${portfolio.title}`}
    src={portfolio.pdfUrl}
    style={{
      width: "100%",
      height: "650px",
      border: 0,
    }}
    allow="autoplay"
  />
) : portfolio.powerBiUrl ? (
  <iframe
    title={`Power BI - ${portfolio.title}`}
    src={portfolio.powerBiUrl}
    style={{
      width: "100%",
      height: "650px",
      border: 0,
    }}
  />
) : (
  <div className="detail-video-placeholder">
    <h2>{portfolio.title}</h2>
    <p>Dashboard atau dokumen belum dikonfigurasi.</p>
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
          </section>

          <section className="detail-article">


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
                    <span></span>
                    <p>{section.imageAlt}</p>
                    <small></small>
                  </div>
                  <figcaption>{section.caption}</figcaption>
                </figure>
              </section>
            ))}

            <section className="detail-tools-section">
              <div className="detail-tools">
                {portfolio.tools.map((tool) => (
                  <span className="detail-tool" key={tool}>{tool}</span>
                ))}
              </div>
            </section>
            <br></br>
              <button
                type="button"
                className="detail-button detail-button-primary"
                onClick={() => {
                  window.location.href = "/#portfolio";
                }}
              >
                <ArrowLeft size={16} />
                Kembali ke Portfolio
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

export default PortfolioDetail;
