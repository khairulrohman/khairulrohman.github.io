import React from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import "./ProjectDetail.css";

const projectDetails = {
    "marketing-dashboard": {
    title: "Marketing",
    category: "POWER BI · SALES ANALYTICS",
    description: "Dashboard Marketing.",
    powerBiUrl: "https://app.powerbi.com/view?r=eyJrIjoiNjE2ZjAzZTgtZjhkNy00OWVjLTk2ODQtNmZlOWQ5NDVhNmU5IiwidCI6ImFlYTgxMzk3LTQ5MmUtNDRiYy1iYWM5LTgzN2Q3OWU4YTc4YSJ9",
    dashboardUrl: "",
    githubUrl: "",
    author: "Khairul Rohman",
    tools: ["Power BI", "DAX", "Power Query", "Data Modeling"],
    caseLabel: "CASE STUDY / SALES ANALYTICS",
    intro: "Halaman ini intro ",
    sections: [
      { number: "01", title: "Project Overview", paragraphs: ["Dashboard dirancang untuk memberikan ringkasan performa penjualan dan perubahan pendapatan dari waktu ke waktu.", "Metrik utama mencakup revenue, pertumbuhan, pencapaian target, dan kontribusi produk."], image: "/images/sales-overview.png", imageAlt: "Sales Performance Dashboard", caption: "Gambaran umum performa penjualan." },
      { number: "02", title: "Business Questions", paragraphs: ["Bisnis perlu memahami apakah target tercapai, bagaimana tren penjualan berubah, dan produk mana yang memberi kontribusi terbesar.", "Visualisasi membantu pengguna menelusuri metrik berdasarkan dimensi data yang tersedia."], image: "/images/sales-questions.png", imageAlt: "Analisis pertanyaan bisnis penjualan", caption: "Pertanyaan utama dalam analisis penjualan." },
      { number: "03", title: "Data Modeling", paragraphs: ["Data disiapkan dan ditransformasikan agar metrik penjualan dapat dibandingkan secara konsisten.", "Model data dan measure DAX membantu menghitung indikator performa yang digunakan pada dashboard."], image: "/images/sales-model.png", imageAlt: "Sales data model", caption: "Persiapan data dan metrik." },
      { number: "04", title: "Performance Insights", paragraphs: ["Kartu KPI dan visual tren menyajikan gambaran ringkas revenue, growth, serta pencapaian target.", "Insight dari dashboard dapat menjadi masukan untuk evaluasi performa dan perencanaan penjualan."], image: "/images/sales-insights.png", imageAlt: "Sales performance insights", caption: "Ringkasan indikator performa penjualan." }
    ]
  },

  marketing: {
    title: "HR Analytics Dashboard",
    category: "DATA ANALYTICS · HUMAN RESOURCES · POWER BI",
    description: "Studi kasus analisis data sumber daya manusia menggunakan Power BI untuk membantu perusahaan memahami kondisi tenaga kerja, mengidentifikasi tren turnover, dan meningkatkan efektivitas pengambilan keputusan.",
    powerBiUrl: "https://app.powerbi.com/view?r=eyJrIjoiNjE2ZjAzZTgtZjhkNy00OWVjLTk2ODQtNmZlOWQ5NDVhNmU5IiwidCI6ImFlYTgxMzk3LTQ5MmUtNDRiYy1iYWM5LTgzN2Q3OWU4YTc4YSJ9",
    dashboardUrl: "",
    githubUrl: "",
    author: "Khairul Rohman",
    tools: ["Power BI", "Power Query", "DAX", "Excel", "Data Modeling"],
    caseLabel: "CASE STUDY / HUMAN RESOURCES",
    intro: "Berikut adalah penjelasan proses pengerjaan proyek, mulai dari identifikasi masalah bisnis, persiapan data, hingga penyajian insight melalui dashboard interaktif.",
    sections: [
      { number: "01", title: "Project Overview", paragraphs: ["Proyek HR Analytics Dashboard berfokus pada pengolahan dan visualisasi data karyawan untuk memberikan gambaran menyeluruh mengenai kondisi tenaga kerja perusahaan.", "Dashboard dirancang untuk membantu tim Human Resources dan manajemen memantau headcount, turnover, absensi, demografi karyawan, serta distribusi tenaga kerja berdasarkan divisi dan lokasi."], image: "/images/hr-overview.png", imageAlt: "Preview HR Analytics Dashboard", caption: "Gambaran umum dashboard HR Analytics." },
      { number: "02", title: "Business Problem", paragraphs: ["Data HR yang tersebar di berbagai file dapat menyulitkan proses pemantauan dan pelaporan. Tim HR membutuhkan waktu untuk menggabungkan data, memeriksa konsistensi, dan menyusun laporan secara manual.", "Kondisi tersebut membuat perusahaan lebih sulit mengidentifikasi perubahan jumlah karyawan, tren turnover, dan masalah kehadiran secara cepat."], image: "/images/hr-business-problem.png", imageAlt: "Ilustrasi permasalahan pengelolaan data HR", caption: "Tantangan konsolidasi dan pelaporan data HR." },
      { number: "03", title: "Data Preparation & Modeling", paragraphs: ["Data dipersiapkan melalui pemeriksaan kualitas, standardisasi format, penanganan missing values, dan validasi data yang relevan.", "Power Query digunakan untuk membantu proses transformasi data. Selanjutnya, model data disusun agar tabel terkait dapat digunakan secara konsisten dalam analisis."], image: "/images/hr-data-model.png", imageAlt: "Diagram proses data preparation dan data modeling", caption: "Alur persiapan data sebelum divisualisasikan." },
      { number: "04", title: "Dashboard & Key Insights", paragraphs: ["Dashboard menyajikan indikator HR dalam bentuk kartu KPI, grafik tren, dan visualisasi distribusi karyawan.", "Pengguna dapat mengeksplorasi informasi berdasarkan dimensi yang tersedia untuk memahami pola tenaga kerja dan menentukan area yang memerlukan perhatian lebih lanjut."], image: "/images/hr-insights.png", imageAlt: "Visualisasi insight HR Analytics", caption: "Contoh visualisasi untuk mendukung analisis SDM." }
    ]
  },

};

function ProjectDetail() {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const project = projectDetails[projectId];

  if (!project) {
    return (
      <main className="project-detail-page">
        <header className="detail-navbar">
          <a className="detail-brand" href="/"><span className="detail-brand-dot" />KHAIRUL.ROHMAN</a>
          <a className="detail-back-link" href="/#projects"><ArrowLeft size={16} /> Kembali ke Portfolio</a>
        </header>
        <section className="detail-conclusion" style={{ width: "min(900px, 90%)", margin: "60px auto" }}>
          <h2>Proyek tidak ditemukan</h2>
          <p>Alamat proyek tidak valid atau proyek tersebut belum tersedia.</p>
          <button type="button" className="detail-button detail-button-primary" onClick={() => navigate("/#projects")}>Kembali ke Semua Proyek</button>
        </section>
      </main>
    );
  }

  return (
    <main className="project-detail-page">
      <header className="detail-navbar">
        <a className="detail-brand" href="/">
          <span className="detail-brand-dot" />KHAIRUL.ROHMAN
          <span className="detail-brand-divider">/</span>
          <span className="detail-brand-role">data-analyst</span>
        </a>
        <a className="detail-back-link" href="/#projects"><ArrowLeft size={16} />Kembali ke Portfolio</a>
      </header>

      <div className="detail-layout detail-layout-single">
        <article className="detail-main">
          <section className="detail-dashboard-section" aria-label={`Dashboard Power BI ${project.title}`}>
            <div
              className="detail-dashboard-frame"
              style={{
                width: "100%",
                minHeight: "600px",
                height: "min(75vh, 900px)",
                overflow: "hidden",
                borderRadius: "12px",
              }}
            >
              {project.powerBiUrl ? (
                <iframe
                    title={`Power BI Dashboard - ${project.title}`}
                    src={project.powerBiUrl}
                    style={{
                      width: "100%",
                      height: "100%",
                      border: 0,
                      display: "block",
                    }}
                    allowFullScreen
                  />
              ) : (
                <div className="detail-dashboard-placeholder">
                  <h2>{project.title}</h2>
                  <p>Link embed Power BI untuk proyek ini belum ditambahkan.</p>
                  <span>POWER BI DASHBOARD</span>
                </div>
              )}
            </div>
          </section>

          <section className="detail-heading">
            <p className="detail-category">{project.category}</p>
            <h1>{project.title}</h1>
            <div className="detail-heading-bottom">
              <div className="detail-author">
                <div className="detail-avatar">KR</div>
                <div><strong>{project.author}</strong><span>Data Analyst & BI Developer</span></div>
              </div>
              <div className="detail-actions">
                {(project.dashboardUrl || project.powerBiUrl) && <a className="detail-button detail-button-primary" href={project.dashboardUrl || project.powerBiUrl} target="_blank" rel="noreferrer"><ExternalLink size={16} />Live Dashboard</a>}
                {project.githubUrl && <a className="detail-button" href={project.githubUrl} target="_blank" rel="noreferrer">Source Code</a>}
              </div>
            </div>
            <p className="detail-summary">{project.description}</p>
          </section>

          <section className="detail-article">
            <div className="detail-article-intro">
              <span className="detail-section-label">{project.caseLabel}</span>
              <h2>Behind the Analysis</h2>
              <p>{project.intro}</p>
            </div>

            {project.sections.map((section, index) => (
              <section className={`detail-story ${index % 2 === 1 ? "detail-story-reverse" : ""}`} key={section.number}>
                <div className="detail-story-copy">
                  <span className="detail-story-number">{section.number}</span>
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}
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
                    <span>PROJECT VISUAL</span><p>{section.imageAlt}</p>
                    <small>Tambahkan gambar terkait ke folder public/images.</small>
                  </div>
                  <figcaption>{section.caption}</figcaption>
                </figure>
              </section>
            ))}

            <section className="detail-tools-section">
              <span className="detail-section-label">TECHNOLOGY STACK</span>
              <h2>Tools & Technologies</h2>
              <div className="detail-tools">{project.tools.map((tool) => <span className="detail-tool" key={tool}>{tool}</span>)}</div>
            </section>

            <section className="detail-conclusion">
              <span className="detail-section-label">PROJECT CONCLUSION</span>
              <h2>From Data to Decisions.</h2>
              <p>Proyek ini menunjukkan bagaimana data dapat diolah menjadi informasi yang lebih mudah dipahami melalui proses analisis, pemodelan data, dan visualisasi yang terstruktur.</p>
              <button type="button" className="detail-button detail-button-primary" onClick={() => navigate("/#projects")}><ArrowLeft size={16} />Kembali ke Semua Proyek</button>
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

export default ProjectDetail;
