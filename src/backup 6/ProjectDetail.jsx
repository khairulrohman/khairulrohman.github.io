import React from "react";
import { ArrowLeft, ExternalLink, PlayCircle } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import "./ProjectDetail.css";

const project = {
"kopi": {
  title: "Gudang Kopi",
  category: "OTOMASI DATA · WORKFLOW",
  description:
    "Studi kasus analisis data sumber daya manusia menggunakan Power BI untuk membantu perusahaan memahami kondisi tenaga kerja, mengidentifikasi tren turnover, dan meningkatkan efektivitas pengambilan keputusan.",

  // Ganti dengan ID video YouTube milikmu.
  // Contoh URL: https://www.youtube.com/watch?v=abc123xyz
  youtubeId: "GANTI_DENGAN_ID_VIDEO",
  videoUrl: "/videos/GudangKopiKhai.mp4",
  dashboardUrl: "",
  githubUrl: "",
  reportUrl: "",

  author: "Khairul Rohman",
  publishedAt: "Portfolio Project",

  tools: ["Power BI", "Power Query", "DAX", "Excel", "Data Modeling"],

  sections: [
    {
      number: "01",
      title: "Project Overview",
      paragraphs: [
        "Proyek HR Analytics Dashboard berfokus pada pengolahan dan visualisasi data karyawan untuk memberikan gambaran menyeluruh mengenai kondisi tenaga kerja perusahaan.",
        "Dashboard dirancang untuk membantu tim Human Resources dan manajemen memantau headcount, turnover, absensi, demografi karyawan, serta distribusi tenaga kerja berdasarkan divisi dan lokasi.",
      ],
      image: "/images/hr-overview.png",
      imageAlt: "Preview HR Analytics Dashboard",
      caption: "Gambaran umum dashboard HR Analytics.",
    },
    {
      number: "02",
      title: "Business Problem",
      paragraphs: [
        "Data HR yang tersebar di berbagai file dapat menyulitkan proses pemantauan dan pelaporan. Tim HR membutuhkan waktu untuk menggabungkan data, memeriksa konsistensi, dan menyusun laporan secara manual.",
        "Kondisi tersebut membuat perusahaan lebih sulit mengidentifikasi perubahan jumlah karyawan, tren turnover, dan masalah kehadiran secara cepat.",
      ],
      image: "/images/hr-business-problem.png",
      imageAlt: "Ilustrasi permasalahan pengelolaan data HR",
      caption: "Tantangan konsolidasi dan pelaporan data HR.",
    },
    {
      number: "03",
      title: "Data Preparation & Modeling",
      paragraphs: [
        "Data dipersiapkan melalui proses pemeriksaan kualitas, standardisasi format, penanganan missing values, dan validasi data yang relevan.",
        "Power Query digunakan untuk membantu proses transformasi data. Selanjutnya, model data disusun agar tabel-tabel terkait dapat digunakan secara konsisten dalam analisis.",
      ],
      image: "/images/hr-data-model.png",
      imageAlt: "Diagram proses data preparation dan data modeling",
      caption: "Alur persiapan data sebelum divisualisasikan.",
    },
    {
      number: "04",
      title: "Dashboard & Key Insights",
      paragraphs: [
        "Dashboard menyajikan indikator HR dalam bentuk kartu KPI, grafik tren, dan visualisasi distribusi karyawan.",
        "Pengguna dapat mengeksplorasi informasi berdasarkan dimensi yang tersedia untuk memahami pola tenaga kerja dan menentukan area yang memerlukan perhatian lebih lanjut.",
      ],
      image: "/images/hr-insights.png",
      imageAlt: "Visualisasi insight HR Analytics",
      caption: "Contoh visualisasi untuk mendukung analisis SDM.",
    },
  ],
},

"laundry": {
  title: "Laundry",
  category: "OTOMASI DATA · WORKFLOW",
  description:
    "Studi kasus analisis data sumber daya manusia menggunakan Power BI untuk membantu perusahaan memahami kondisi tenaga kerja, mengidentifikasi tren turnover, dan meningkatkan efektivitas pengambilan keputusan.",

  // Ganti dengan ID video YouTube milikmu.
  // Contoh URL: https://www.youtube.com/watch?v=abc123xyz
  youtubeId: "GANTI_DENGAN_ID_VIDEO",
  videoUrl: "/videos/LaundryKhai.mp4",
  dashboardUrl: "",
  githubUrl: "",
  reportUrl: "",

  author: "Khairul Rohman",
  publishedAt: "Portfolio Project",

  tools: ["Power BI", "Power Query", "DAX", "Excel", "Data Modeling"],

  sections: [
    {
      number: "01",
      title: "Project Overview",
      paragraphs: [
        "Proyek HR Analytics Dashboard berfokus pada pengolahan dan visualisasi data karyawan untuk memberikan gambaran menyeluruh mengenai kondisi tenaga kerja perusahaan.",
        "Dashboard dirancang untuk membantu tim Human Resources dan manajemen memantau headcount, turnover, absensi, demografi karyawan, serta distribusi tenaga kerja berdasarkan divisi dan lokasi.",
      ],
      image: "/images/hr-overview.png",
      imageAlt: "Preview HR Analytics Dashboard",
      caption: "Gambaran umum dashboard HR Analytics.",
    },
    {
      number: "02",
      title: "Business Problem",
      paragraphs: [
        "Data HR yang tersebar di berbagai file dapat menyulitkan proses pemantauan dan pelaporan. Tim HR membutuhkan waktu untuk menggabungkan data, memeriksa konsistensi, dan menyusun laporan secara manual.",
        "Kondisi tersebut membuat perusahaan lebih sulit mengidentifikasi perubahan jumlah karyawan, tren turnover, dan masalah kehadiran secara cepat.",
      ],
      image: "/images/hr-business-problem.png",
      imageAlt: "Ilustrasi permasalahan pengelolaan data HR",
      caption: "Tantangan konsolidasi dan pelaporan data HR.",
    },
    {
      number: "03",
      title: "Data Preparation & Modeling",
      paragraphs: [
        "Data dipersiapkan melalui proses pemeriksaan kualitas, standardisasi format, penanganan missing values, dan validasi data yang relevan.",
        "Power Query digunakan untuk membantu proses transformasi data. Selanjutnya, model data disusun agar tabel-tabel terkait dapat digunakan secara konsisten dalam analisis.",
      ],
      image: "/images/hr-data-model.png",
      imageAlt: "Diagram proses data preparation dan data modeling",
      caption: "Alur persiapan data sebelum divisualisasikan.",
    },
    {
      number: "04",
      title: "Dashboard & Key Insights",
      paragraphs: [
        "Dashboard menyajikan indikator HR dalam bentuk kartu KPI, grafik tren, dan visualisasi distribusi karyawan.",
        "Pengguna dapat mengeksplorasi informasi berdasarkan dimensi yang tersedia untuk memahami pola tenaga kerja dan menentukan area yang memerlukan perhatian lebih lanjut.",
      ],
      image: "/images/hr-insights.png",
      imageAlt: "Visualisasi insight HR Analytics",
      caption: "Contoh visualisasi untuk mendukung analisis SDM.",
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
                controls
                preload="metadata"
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
                  <span>Data Analyst & BI Developer</span>
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

            <p className="detail-summary">{currentProject.description}</p>
          </section>

          {/* PROJECT CONTENT */}
          <section className="detail-article">
            <div className="detail-article-intro">
              <span className="detail-section-label">
                CASE STUDY / HUMAN RESOURCES
              </span>

              <h2>Behind the Analysis</h2>

              <p>
                Berikut adalah penjelasan proses pengerjaan proyek, mulai dari
                identifikasi masalah bisnis, persiapan data, hingga penyajian
                insight melalui dashboard interaktif.
              </p>
            </div>

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
                    <span>PROJECT VISUAL</span>
                    <p>{section.imageAlt}</p>
                    <small>
                      Tambahkan gambar di folder public/images.
                    </small>
                  </div>

                  <figcaption>{section.caption}</figcaption>
                </figure>
              </section>
            ))}

            {/* TOOLS */}
            <section className="detail-tools-section">
              <span className="detail-section-label">
                TECHNOLOGY STACK
              </span>

              <h2>Tools & Technologies</h2>

              <div className="detail-tools">
                {(currentProject.tools || []).map((tool) => (
                  <span className="detail-tool" key={tool}>
                    {tool}
                  </span>
                ))}
              </div>
            </section>

            {/* PENUTUP */}
            <section className="detail-conclusion">
              <span className="detail-section-label">
                PROJECT CONCLUSION
              </span>

              <h2>From Data to Decisions.</h2>

              <p>
                Proyek ini menunjukkan bagaimana data dapat diolah menjadi
                informasi yang lebih mudah dipahami melalui proses analisis,
                pemodelan data, dan visualisasi yang terstruktur.
              </p>

              <button
                type="button"
                className="detail-button detail-button-primary"
                onClick={() => navigate("/#projects")}
              >
                <ArrowLeft size={16} />
                Kembali ke Semua Proyek
              </button>
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