import React, { useEffect } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import "./ProjectDetail.css";

const projectData = {
  marketing: {
    id: "marketing",
    title: "HR Analytics Dashboard",
    category: "DATA ANALYTICS · HUMAN RESOURCES · POWER BI",
    description: "Studi kasus analisis data sumber daya manusia menggunakan Power BI untuk membantu perusahaan memahami kondisi tenaga kerja, mengidentifikasi tren turnover, dan meningkatkan efektivitas pengambilan keputusan.",
    video: "/videos/GudangKopiKhai.mp4",
    poster: "/images/hr-overview.png",
    dashboardUrl: "https://app.powerbi.com/view?r=LINK_KAMU",
    githubUrl: "",
    author: "Khairul Rohman",
    tools: ["Power BI", "Power Query", "DAX", "Excel", "Data Modeling"],
    caseLabel: "CASE STUDY / HUMAN RESOURCES",
    intro: "Penjelasan proses pengerjaan proyek HR Analytics, mulai dari identifikasi masalah bisnis dan persiapan data hingga penyajian insight melalui dashboard interaktif.",
    sections: [
      { number: "01", title: "Project Overview", paragraphs: ["Proyek HR Analytics Dashboard berfokus pada pengolahan dan visualisasi data karyawan untuk memberikan gambaran menyeluruh mengenai kondisi tenaga kerja perusahaan.", "Dashboard dirancang untuk membantu tim Human Resources dan manajemen memantau headcount, turnover, absensi, demografi karyawan, serta distribusi tenaga kerja berdasarkan divisi dan lokasi."], image: "/images/hr-overview.png", imageAlt: "Preview HR Analytics Dashboard", caption: "Gambaran umum dashboard HR Analytics." },
      { number: "02", title: "Business Problem", paragraphs: ["Data HR yang tersebar di berbagai file dapat menyulitkan proses pemantauan dan pelaporan. Tim HR membutuhkan waktu untuk menggabungkan data, memeriksa konsistensi, dan menyusun laporan secara manual.", "Kondisi tersebut membuat perusahaan lebih sulit mengidentifikasi perubahan jumlah karyawan, tren turnover, dan masalah kehadiran secara cepat."], image: "/images/hr-business-problem.png", imageAlt: "Ilustrasi permasalahan pengelolaan data HR", caption: "Tantangan konsolidasi dan pelaporan data HR." },
      { number: "03", title: "Data Preparation & Modeling", paragraphs: ["Data dipersiapkan melalui pemeriksaan kualitas, standardisasi format, penanganan missing values, dan validasi data yang relevan.", "Power Query digunakan untuk membantu proses transformasi data. Selanjutnya, model data disusun agar tabel terkait dapat digunakan secara konsisten dalam analisis."], image: "/images/hr-data-model.png", imageAlt: "Diagram data preparation dan data modeling", caption: "Alur persiapan data sebelum divisualisasikan." },
      { number: "04", title: "Dashboard & Key Insights", paragraphs: ["Dashboard menyajikan indikator HR dalam bentuk kartu KPI, grafik tren, dan visualisasi distribusi karyawan.", "Pengguna dapat mengeksplorasi informasi berdasarkan dimensi yang tersedia untuk memahami pola tenaga kerja dan menentukan area yang memerlukan perhatian lebih lanjut."], image: "/images/hr-insights.png", imageAlt: "Visualisasi insight HR Analytics", caption: "Contoh visualisasi untuk mendukung analisis SDM." }
    ],
    conclusion: "Proyek ini menunjukkan bagaimana data dapat diolah menjadi informasi yang lebih mudah dipahami melalui analisis, pemodelan data, dan visualisasi yang terstruktur."
  },
  "finance-analysis": {
    id: "finance-analysis",
    title: "Finance & Portfolio Analysis",
    category: "DATA ANALYTICS · FINANCE · SQL",
    description: "Studi kasus analisis data keuangan dan portofolio untuk memahami tren, memeriksa kualitas data, dan menyajikan informasi yang mendukung pelaporan bisnis.",
    video: "",
    poster: "/images/marketing.jpg",
    dashboardUrl: "",
    githubUrl: "",
    author: "Khairul Rohman",
    tools: ["SQL Server", "Excel", "Power BI", "Data Validation", "Reporting"],
    caseLabel: "CASE STUDY / FINANCE ANALYTICS",
    intro: "Studi kasus ini menjelaskan alur analisis data keuangan, mulai dari ekstraksi dan validasi data hingga penyusunan insight untuk kebutuhan bisnis.",
    sections: [
      { number: "01", title: "Project Overview", paragraphs: ["Proyek ini berfokus pada pemanfaatan data keuangan dan portofolio untuk menyajikan ringkasan kinerja yang lebih mudah dipahami.", "Analisis dapat membantu pengguna meninjau tren portofolio, status pembayaran, serta indikator operasional yang relevan."], image: "/images/finance-overview.png", imageAlt: "Finance and Portfolio Analysis preview", caption: "Gambaran analisis data keuangan." },
      { number: "02", title: "Business Problem", paragraphs: ["Data yang tersebar dan tidak seragam dapat memperlambat proses pelaporan serta menyulitkan validasi angka.", "Diperlukan proses yang konsisten untuk memeriksa kualitas data dan menyusun ringkasan yang dapat ditelusuri."], image: "/images/finance-business-problem.png", imageAlt: "Finance data quality challenge", caption: "Tantangan validasi dan pelaporan data." },
      { number: "03", title: "Data Preparation & SQL", paragraphs: ["Data diekstrak menggunakan query SQL sesuai kebutuhan analisis, lalu diperiksa untuk menemukan nilai kosong, duplikasi, dan ketidakkonsistenan.", "Hasil validasi digunakan sebagai dasar untuk menyiapkan dataset analisis yang lebih konsisten."], image: "/images/finance-data-model.png", imageAlt: "SQL data preparation", caption: "Proses ekstraksi dan validasi data." },
      { number: "04", title: "Analysis & Key Insights", paragraphs: ["Ringkasan analisis dapat digunakan untuk membandingkan tren dan meninjau area yang memerlukan pemeriksaan lebih lanjut.", "Insight akhir perlu disesuaikan dengan hasil query dan angka aktual dari dataset proyek."], image: "/images/finance-insights.png", imageAlt: "Finance analysis insights", caption: "Contoh visualisasi hasil analisis." }
    ],
    conclusion: "Proyek ini menggambarkan penggunaan SQL dan tools analitik untuk menyiapkan data yang lebih konsisten dan mendukung pelaporan bisnis."
  },
  "sales-dashboard": {
    id: "sales-dashboard",
    title: "Sales Performance Dashboard",
    category: "DATA ANALYTICS · SALES · POWER BI",
    description: "Dashboard untuk menganalisis performa penjualan, tren pendapatan, pencapaian target, dan kontribusi produk terhadap bisnis.",
    video: "",
    poster: "/images/marketing.jpg",
    dashboardUrl: "",
    githubUrl: "",
    author: "Khairul Rohman",
    tools: ["Power BI", "DAX", "Power Query", "Data Modeling"],
    caseLabel: "CASE STUDY / SALES ANALYTICS",
    intro: "Studi kasus dashboard penjualan, mulai dari persiapan data transaksi hingga penyajian metrik kinerja dan tren penjualan.",
    sections: [
      { number: "01", title: "Project Overview", paragraphs: ["Dashboard penjualan dirancang untuk merangkum performa penjualan dan pendapatan dalam satu tampilan.", "Pengguna dapat mengeksplorasi tren berdasarkan periode dan kategori yang tersedia dalam dataset."], image: "/images/sales-overview.png", imageAlt: "Sales dashboard preview", caption: "Gambaran dashboard performa penjualan." },
      { number: "02", title: "Business Problem", paragraphs: ["Laporan penjualan yang tersebar dapat menyulitkan perbandingan hasil aktual dengan target.", "Dashboard membantu menyatukan indikator agar tren dan area yang perlu ditinjau lebih mudah terlihat."], image: "/images/sales-business-problem.png", imageAlt: "Sales reporting challenge", caption: "Tantangan pemantauan performa penjualan." },
      { number: "03", title: "Data Preparation & Modeling", paragraphs: ["Data transaksi disiapkan dengan menyeragamkan tanggal, kategori, dan nilai yang digunakan dalam analisis.", "Model data dan measure disusun sesuai definisi KPI bisnis yang digunakan."], image: "/images/sales-data-model.png", imageAlt: "Sales data model", caption: "Persiapan data dan model analitik." },
      { number: "04", title: "Dashboard & Key Insights", paragraphs: ["Visualisasi dapat menyajikan tren pendapatan, pencapaian target, dan kontribusi produk.", "Kesimpulan akhir harus diisi berdasarkan hasil analisis aktual, bukan asumsi."], image: "/images/sales-insights.png", imageAlt: "Sales performance insights", caption: "Visualisasi untuk mendukung keputusan penjualan." }
    ],
    conclusion: "Dashboard mengubah data transaksi menjadi ringkasan kinerja yang dapat digunakan untuk diskusi dan evaluasi bisnis."
  },
  "operations-dashboard": {
    id: "operations-dashboard",
    title: "Operations Performance Dashboard",
    category: "DATA ANALYTICS · OPERATIONS · SQL",
    description: "Dashboard untuk memantau indikator operasional, kualitas data, tren kinerja, dan peluang peningkatan efisiensi proses bisnis.",
    video: "",
    poster: "/images/marketing.jpg",
    dashboardUrl: "",
    githubUrl: "",
    author: "Khairul Rohman",
    tools: ["SQL Server", "Excel", "Power BI", "Reporting"],
    caseLabel: "CASE STUDY / OPERATIONS ANALYTICS",
    intro: "Studi kasus analitik operasional yang menyoroti ekstraksi data, pemeriksaan kualitas, dan penyajian indikator kinerja.",
    sections: [
      { number: "01", title: "Project Overview", paragraphs: ["Dashboard operasional menyatukan indikator kinerja agar pengguna dapat melihat kondisi proses secara ringkas.", "Laporan membantu meninjau perubahan indikator dan area yang membutuhkan perhatian."], image: "/images/operations-overview.png", imageAlt: "Operations dashboard preview", caption: "Gambaran dashboard operasional." },
      { number: "02", title: "Business Problem", paragraphs: ["Indikator operasional yang tersebar dapat menyulitkan pemantauan dan perbandingan antarperiode.", "Proses validasi juga diperlukan agar keputusan didasarkan pada data yang konsisten."], image: "/images/operations-business-problem.png", imageAlt: "Operations data challenge", caption: "Tantangan pemantauan operasional." },
      { number: "03", title: "Data Preparation & Validation", paragraphs: ["Data diperiksa untuk memastikan kelengkapan, konsistensi, dan ketepatan format.", "Query dan langkah transformasi didokumentasikan agar hasil dapat ditinjau ulang."], image: "/images/operations-data-model.png", imageAlt: "Operations data preparation", caption: "Persiapan dan validasi data." },
      { number: "04", title: "Performance & Key Insights", paragraphs: ["Analisis dapat membantu meninjau tren indikator dan menemukan area untuk investigasi lebih lanjut.", "Insight final perlu mengikuti metrik dan hasil aktual dari dataset."], image: "/images/operations-insights.png", imageAlt: "Operations performance insights", caption: "Ringkasan analisis kinerja operasional." }
    ],
    conclusion: "Dashboard operasional membantu menyajikan indikator secara terstruktur untuk mendukung evaluasi dan perbaikan proses."
  }
};

function ProjectDetail() {
  const projectId = window.location.hash.startsWith("#/project/") ? window.location.hash.replace("#/project/", "").split("/")[0] : window.location.pathname.split("/").filter(Boolean).pop();
  const project = projectData[projectId];

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = project ? `${project.title} | Khairul Rohman` : "Project Not Found | Khairul Rohman";
  }, [project]);

  if (!project) {
    return <main className="project-detail-page"><header className="detail-navbar"><a className="detail-brand" href="/"><span className="detail-brand-dot" />KHAIRUL.ROHMAN</a><a className="detail-back-link" href="/#projects"><ArrowLeft size={16} /> Kembali ke Portfolio</a></header><div className="detail-layout detail-layout-single"><h1>Project tidak ditemukan.</h1><p>Periksa URL atau kembali ke halaman portfolio.</p><a className="detail-button detail-button-primary" href="/#projects">Kembali ke Semua Proyek</a></div></main>;
  }

  const hasVideo = Boolean(project.video);

  return (
    <main className="project-detail-page">
      <header className="detail-navbar">
        <a className="detail-brand" href="/"><span className="detail-brand-dot" />KHAIRUL.ROHMAN<span className="detail-brand-divider">/</span><span className="detail-brand-role">data-analyst</span></a>
        <a className="detail-back-link" href="/#projects"><ArrowLeft size={16} />Kembali ke Portfolio</a>
      </header>
      <div className="detail-layout detail-layout-single">
        <article className="detail-main">
          <section className="detail-video-section">
            <div className="detail-video-frame">
              {hasVideo ? (
                <video className="detail-local-video" controls preload="metadata" playsInline poster={project.poster}>
                  <source src={project.video} type="video/mp4" />
                  Browser kamu tidak mendukung pemutaran video.
                </video>
              ) : (
                <div className="detail-video-placeholder">
                  <ExternalLink size={30} />
                  <h2>{project.title}</h2>
                  <p>Project preview</p>
                  <span>Tambahkan video atau visual project di folder public.</span>
                </div>
              )}
            </div>
          </section>

          <section className="detail-heading">
            <p className="detail-category">{project.category}</p>
            <h1>{project.title}</h1>
            <div className="detail-heading-bottom">
              <div className="detail-author"><div className="detail-avatar">KR</div><div><strong>{project.author}</strong><span>Data Analyst & BI Developer</span></div></div>
              <div className="detail-actions">
                {project.dashboardUrl && !project.dashboardUrl.includes("LINK_KAMU") && <a className="detail-button detail-button-primary" href={project.dashboardUrl} target="_blank" rel="noreferrer"><ExternalLink size={16} />Live Dashboard</a>}
                {project.githubUrl && <a className="detail-button" href={project.githubUrl} target="_blank" rel="noreferrer">Source Code</a>}
              </div>
            </div>
            <p className="detail-summary">{project.description}</p>
          </section>

          <section className="detail-article">
            <div className="detail-article-intro"><span className="detail-section-label">{project.caseLabel}</span><h2>Behind the Analysis</h2><p>{project.intro}</p></div>
            {project.sections.map((section, index) => (
              <section className={`detail-story ${index % 2 === 1 ? "detail-story-reverse" : ""}`} key={section.number}>
                <div className="detail-story-copy"><span className="detail-story-number">{section.number}</span><h2>{section.title}</h2>{section.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}</div>
                <figure className="detail-story-figure">
                  <img src={section.image} alt={section.imageAlt} loading="lazy" onError={(event) => { event.currentTarget.style.display = "none"; event.currentTarget.nextElementSibling.style.display = "flex"; }} />
                  <div className="detail-image-fallback" style={{ display: "none" }}><span>PROJECT VISUAL</span><p>{section.imageAlt}</p><small>Tambahkan gambar yang sesuai di folder public/images.</small></div>
                  <figcaption>{section.caption}</figcaption>
                </figure>
              </section>
            ))}
            <section className="detail-tools-section"><span className="detail-section-label">TECHNOLOGY STACK</span><h2>Tools & Technologies</h2><div className="detail-tools">{project.tools.map((tool) => <span className="detail-tool" key={tool}>{tool}</span>)}</div></section>
            <section className="detail-conclusion"><span className="detail-section-label">PROJECT CONCLUSION</span><h2>From Data to Decisions.</h2><p>{project.conclusion}</p><a className="detail-button detail-button-primary" href="/#projects"><ArrowLeft size={16} />Kembali ke Semua Proyek</a></section>
          </section>
        </article>
      </div>
      <footer className="detail-footer"><span>© {new Date().getFullYear()} Khairul Rohman</span><span>Data Analytics · Business Intelligence · Power BI</span></footer>
    </main>
  );
}
export default ProjectDetail;
