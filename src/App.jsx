import { useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

/**
              <div className="project-metrics">
                {item.metrics.map(([name, detail]) => (
                  <div className="project-metric" key={name}>
                    <strong>{name}</strong>
                    <span>{detail}</span>
                  </div>
                ))}
              </div> 
**/
/**
           <a
            className="button button-outline"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
 **/

const technologies = [
  "Power BI",
  "DAX",
  "SQL",
  "Python",
  "Excel",
  "Google Sheet",
  "Power Query",
  "ETL",
  "Data Modeling",
  "Business Intelligence",
  "Reporting Automation",
  "n8n",
  "App Script",
];

const experiences = [
    {
    date: "JAN 2025 — Now",
    role: "Freelance Data Analyst & Automation Specialist",
    achievements: [
      "Mengembangkan 15+ Dashoard Power BI interaktif untuk analisis penjualan, supply chain, customer churn, inventory management, stock-out risk, serta berbagai kebutuhan Business Intelligence.",
      "Mengumpulkan, membersihkan, mentransformasi, dan memodelkan data menggunakan SQL, Power Query, dan Google Sheet untuk menghasilkan insight yang dapat ditindaklanjuti guna mendukung pengambilan keputusan bisnis.",
      "Mengembangkan solusi otomatisasi data menggunakan n8n, Google Apps Script dan Google Sheets, termasuk pipeline data, distribusi laporan otomatis, dan chat bot.",
    ],
  },
  {
    date: "MAR 2023 — JUL 2024",
    role: "SLIK Officer & Analyst",
    company: "PT Moladin Finance Indonesia",
    achievements: [
      "Mengekstrak, memvalidasi, dan menganalisis data calon nasabah menggunakan SQL untuk mendukung penilaian kelayakan kredit dan proses pemeriksaan BI Checking SLIK.",
      "Mengembangkan alur kerja otomatis menggunakan Google Apps Script untuk mengumpulkan, memvalidasi, dan mendistribusikan data SLIK calon nasabah, sehingga meningkatkan efisiensi operasional dan mengurangi pekerjaan manual.",
      "Mengurangi waktu verifikasi data dari 1 jam menjadi 20 menit melalui otomatisasi pembersihan data dan pemrosesan batch, sehingga meningkatkan efisiensi operasional sebesar 40%.",
      "Mengembangkan Dashboard Power BI untuk memantau kualitas data pelanggan, tingkat persetujuan, dan kinerja portofolio guna mendukung pemantauan risiko serta pengambilan keputusan manajemen.",
      "Mengidentifikasi hambatan operasional dan menerjemahkan temuan analisis menjadi rekomendasi yang dapat ditindaklanjuti untuk meningkatkan efisiensi proses dan pemantauan risiko.",
    ],
  },
  {
    date: "FEB 2015 — FEB 2024",
    role: "MIS Staff - Data & Reporting Support",
    company: "PT Procar International Finance",
    achievements: [
      "Mengekstrak, memvalidasi, dan memproses data operasional, pembayaran, serta portofolio menggunakan SQL Server untuk memenuhi kebutuhan pelaporan bisnis dan analisis.",
      "Menyusun dan menganalisis laporan kinerja bulanan yang mencakup penjualan, distribusi portofolio, dan tren tunggakan pembayaran, sehingga manajemen memperoleh gambaran kinerja di 30 cabang.",
      "Mengembangkan Dashboard KPI menggunakan Microsoft Excel dan Power BI untuk memantau kinerja cabang dan metrik operasional guna mendukung evaluasi kinerja serta pengambilan keputusan.",
      "Menganalisis tren pembayaran dan penagihan untuk menghasilkan insight bagi tim Collection, Marketing, dan Operations.",
      "Menjaga akurasi data dan ketersediaan laporan dengan mengaudit lebih dari 9.000 transaksi setiap hari.",
    ],
  },
  {
    date: "MAR 2011 — MAR 2014",
    role: "Broadcast Development Staff",
    company: "PT MNC Sky Vision INDOVISION",
    achievements: [
      "Mengelola proses pengunggahan, validasi, dan pemantauan data untuk memastikan konsistensi dan akurasi informasi operasional dalam sistem internal.",
      "Berpartisipasi dalam User Acceptance Testing (UAT) serta mendokumentasikan kebutuhan bisnis untuk mendukung inisiatif pengembangan sistem.",
    ],
  },
];


const projects = [
  {
    id: "kopi",
    number: "01",
    category: "GOOGLE APPS SCRIPT · WORKFLOW AUTOMATION",
    title: "Sistem Pengelolaan Stok Gudang Kopi",
    description:
      "Sistem pengelolaan stok gudang berbasis WhatsApp yang memungkinkan pengguna mencatat barang masuk dan keluar hanya dengan mengirimkan pesan. Sistem memperbarui jumlah stok secara otomatis, memberikan konfirmasi transaksi, mencegah pengeluaran melebihi stok tersedia, serta mengirimkan notifikasi ketika stok menipis atau tidak mencukupi.",
    image: "/images/kopi.png",
    imageAlt: "",
    imageFit: "contain",
    
    metrics: [
      ["HEADCOUNT", "Workforce overview"],
      ["TURNOVER", "Attrition analysis"],
      ["ABSENSI", "Attendance trends"],
    ],
    tags: ["Google Apps Script", "Google Sheets", "WhatsApp Automation"],
    label: "Sistem Pengelolaan Stok Gudang Kopi",
    link: "/portfolio/kopi",
    linkLabel: "Project details ↗",
    videoUrl: "/videos/GudangKopiKhai.mp4",
    dashboardLink: "https://app.powerbi.com/view?r=LINK_KAMU",
    tone: "teal",
  },
  {
    id: "laundry",
    number: "02",
    category: "GOOGLE APPS SCRIPT · WORKFLOW AUTOMATION",
    title: "Sistem Otomatisasi Nota Digital via WhatsApp",
    description:
      "Sistem otomatisasi transaksi laundry sepatu yang mengintegrasikan POS, pembayaran QRIS, dan pengiriman nota digital melalui WhatsApp. Pelanggan menerima nota secara otomatis setelah transaksi, sehingga proses pembayaran lebih praktis tanpa nota kertas maupun biaya langganan yang mahal.",
    image: "/images/laundry.png",
    imageAlt: "",
    imageFit: "contain",
  
      metrics: [
      ["SQL", "Data extraction"],
      ["QUALITY", "Data validation"],
      ["REPORTING", "Business insights"],
    ],
    tags: ["Google Apps Script", "Google Sheets", "WhatsApp Automation"],
    label: "FINANCE DATA",
    link: "/portfolio/laundry",
    linkLabel: "Project details ↗",
    tone: "orange",
  },
  
];

const portfolio = [
  {
    id: "marketing-dashboard",
    number: "01",
    category: "DASHBOARD POWER BI · ANALYTICS",
    title: "Marketing Performance Dashboard",
    description:
      "Dashboard untuk memantau kinerja pemasaran melalui indikator pendapatan, leads, conversions, dan biaya pemasaran. Dashboard juga membandingkan pencapaian aktual dengan target serta performa periode sebelumnya.",
    image: "/images/marketing.jpg",
    imageAlt: "Marketing Performance Dashboard",
    imageFit: "contain",

    tags: ["Power BI", "DAX", "Power Query", "Data Modeling"],
    label: "SALES ANALYTICS",
    link: "/portfolio/marketing-dashboard",
    linkLabel: "Portfolio details ↗",
    tone: "teal",
  },

  {
    id: "stock-dashboard",
    number: "02",
    category: "DASHBOARD POWER BI · ANALYTICS",
    title: "Stock Out Risk Analyst Dashboard",
    description:
      "Dashboard analisis untuk mengidentifikasi toko yang berisiko mengalami kehabisan stok, mengukur potensi kerugian penjualan, dan menentukan prioritas tindakan berdasarkan tingkat risiko persediaan.",
    image: "/images/stock.jpg",
    imageAlt: "Operations Performance Dashboard",
    imageFit: "contain",
    metrics: [
      ["OPERATIONS", "Performance tracking"],
      ["QUALITY", "Data validation"],
      ["EFFICIENCY", "Process analysis"],
    ],
    tags: ["Power BI", "DAX", "Power Query", "Data Modeling"],
    label: "OPERATIONS ANALYTICS",
    link: "/portfolio/stock-dashboard",
    linkLabel: "Portfolio details ↗",
    tone: "orange",
  },

  {
    id: "supply-dashboard",
    number: "03",
    category: "DASHBOARD POWER BI · ANALYTICS",
    title: "Supply Chain Performance Dashboard",
    description:
      "Dashboard untuk memantau kinerja pengiriman berdasarkan ketepatan waktu, rata-rata keterlambatan, volume pesanan, dan metode pengiriman. Dashboard memberikan gambaran mengenai kondisi operasional pengiriman dalam periode tertentu.",
    image: "/images/supply.jpg",
    imageAlt: "Supply Chain Performance Dashboard",
    imageFit: "contain",
    tags: ["Power BI", "DAX", "Power Query", "Data Modeling"],
    label: "OPERATIONS ANALYTICS",
    link: "/portfolio/supply-dashboard",
    linkLabel: "Portfolio details ↗",
    tone: "orange",
  },

  {
    id: "sales-dashboard",
    number: "04",
    category: "DASHBOARD POWER BI · ANALYTICS",
    title: "Sales Performance Dashboard",
    description:
      "Dashboard untuk memantau performa penjualan, profitabilitas, dan pertumbuhan bisnis. Dashboard menyajikan KPI utama serta perbandingan dengan periode sebelumnya untuk membantu pengguna mengevaluasi perkembangan penjualan.",
    image: "/images/sales.jpg",
    imageAlt: "Sales Performance Dashboard",
    imageFit: "contain",
    tags: ["Power BI", "DAX", "Power Query", "Data Modeling"],
    label: "OPERATIONS ANALYTICS",
    link: "/portfolio/sales-dashboard",
    linkLabel: "Portfolio details ↗",
    tone: "orange",
  },

  {
    id: "campaign-dashboard",
    number: "05",
    category: "SQL · ANALYTICS",
    title: "Marketing Campaign Performance Analysis Using SQL",
    description:
      "Project ini menggunakan SQL Server untuk menganalisis efektivitas kampanye pemasaran berdasarkan biaya, pendapatan, konversi, dan profitabilitas. Analisis dilakukan untuk mengidentifikasi campaign dan channel terbaik serta memberikan rekomendasi optimasi anggaran pemasaran.",
    image: "/images/campaign.jpg",
    imageAlt: "Marketing Campaign Performance Analysis Using SQL",
    imageFit: "contain",
    tags: ["SQL Server", "Excel", "Reporting", "Data Quality"],
    label: "SQL · ANALYTICS",
    link: "/portfolio/campaign-dashboard",
    linkLabel: "Portfolio details ↗",
    tone: "orange",
  },

  {
    id: "pipeline-dashboard",
    number: "05",
    category: "SQL · ANALYTICS",
    title: "Automated Data Pipeline",
    description:
      "Sistem otomatisasi menggunakan Google Apps Script dan Google Sheets untuk menggabungkan, membersihkan, dan memperbarui data dari 10 sumber secara otomatis. Solusi ini mengurangi waktu konsolidasi data dari 3,5 jam menjadi 10 menit per hari serta meminimalkan kesalahan manual.",
    image: "/images/pipeline.jpg",
    imageAlt: "Automated Data Pipeline",
    imageFit: "contain",
    tags: ["SQL Server", "Excel", "Reporting", "Data Quality"],
    label: "SQL · ANALYTICS",
    link: "/portfolio/pipeline-dashboard",
    linkLabel: "Portfolio details ↗",
    tone: "orange",
  },

];

const skillGroups = [
  {
    title: "ANALYSIS & BI",
    skills: [
      ["Power BI & DAX", 100],
      ["Excel & Power Query", 100],
      ["SQL", 100],
      ["Data Visualization", 100],
    ],
  },
  {
    title: "DATA & PROGRAMMING",
    skills: [
      ["Python & Pandas", 100],
      ["Data Cleaning", 100],
      ["ETL Processes", 100],
      ["Data Modeling", 100],
    ],
  },
  {
    title: "AUTOMATION",
    skills: [
      ["n8n", 100],
      ["Google Apps Script", 100],
      ["API Integration", 100],
      ["Process Improvement", 100],
    ],
  },
];

const education = [
  {
    date: "2006 — 2010",
    title: "Bachelor of Computer Science",
    institution: "Universitas Budi Luhur",
    image: "/certificates/bl.jpg",
    description:
      "Pendidikan di bidang ilmu komputer dengan dasar pemahaman sistem informasi dan teknologi.",
  },
  {
    date: "Sep 2026",
    title: "Data Science & Generative AI",
    institution: "Microsoft Elevate Training Center",
    image: "/certificates/elevate.jpg",
    description:
      "Menyelesaikan 14 jam pembelajaran mengenai penerapan Data Science menggunakan Microsoft Fabric dan pengembangan aplikasi Generative AI dengan Microsoft Azure.",
  },
  {
    date: "Jul 2026",
    title: "Google Analytics",
    institution: "Google",
    image: "/certificates/google.jpg",
    description:
      "Mengembangkan kemampuan SQL, Power BI, DAX, Excel, Python, data modeling, dan pembuatan dashboard melalui praktik proyek.",
  },
  {
    date: "Juli 2026",
    title: "Google AI Professional Certificate",
    institution: "Google melalui Coursera",
    image: "/certificates/ai.jpg",
    description:
      "Mengembangkan kemampuan SQL, Power BI, DAX, Excel, Python, data modeling, dan pembuatan dashboard melalui praktik proyek.",
  },
  {
    date: "2026",
    title: "Microsoft AI Skills Fest",
    institution: "Microsoft",
    image: "/certificates/Fest.jpeg",
    description:
      "Partisipasi dalam program AI Skills Fest 2026",
  },
  {
    date: "2025",
    title: "Bootcamp Data Analyst",
    institution: "DQLab, UMN, dan XERATIC",
    image: "/certificates/dqlab.jpg",
    description:
      "Menyelesaikan bootcamp Data Analyst dengan fokus pada penggunaan SQL dan Python di Google Platform",
  },
  {
    date: "Mei 2025",
    title: "Kursus SQL",
    institution: "PT Nextgen Inovasi Indonesia",
    image: "/certificates/sql.jpg",
    description:
      "Menyelesaikan kursus SQL untuk meningkatkan keterampilan dalam pengolahan dan pengelolaan data menggunakan SQL.",
  },
  {
    date: "2025",
    title: "Data Analyst Bootcamp",
    institution: "Pijar Academy",
    image: "/certificates/pijar.png",
    description:
      "Menyelesaikan program bootcamp Data Analyst yang berfokus pada pengembangan keterampilan analisis data.",
  },
];

function Header() {
  const navigation = [
    ["About", "about"],
    ["Experience", "experience"],
    ["Portfolio", "portfolio"],
    ["Projects", "projects"],
    ["Skills", "skills"],
    ["Education", "education"],
    ["Contact", "contact"],
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#home" aria-label="Khairul Rohman home">
          <span className="brand-dot" />
          <strong>KHAIRUL.ROHMAN</strong>
          <span className="brand-divider">/</span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          {navigation.map(([label, id]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>


      </div>
    </header>
  );
}

function DashboardMockup() {
  const bars = [36, 56, 43, 68, 50, 82, 61, 46, 72];

  return (
    <div
      className="dashboard-window"
      aria-label="Decorative analytics dashboard preview"
    >
      <div className="dashboard-topbar">
        <span>overview_dashboard.pbix</span>

        <span className="window-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      </div>

      <div className="dashboard-stats">
        <div className="dashboard-stat">
          <span>CORE FOCUS</span>
          <strong className="teal-text">Analytics</strong>
        </div>

        <div className="dashboard-stat">
          <span>BUSINESS INTELLIGENCE</span>
          <strong className="orange-text">Power BI</strong>
        </div>

        <div className="dashboard-stat">
          <span>DATA PROCESSING</span>
          <strong className="teal-text">SQL</strong>
        </div>

        <div className="dashboard-stat">
          <span>PROGRAMMING</span>
          <strong className="orange-text">Python</strong>
        </div>
      </div>

      <div className="chart-panel">
        <div className="chart-caption">
          <span>DATA INSIGHTS</span>
          <span>VISUAL OVERVIEW</span>
        </div>

        <div className="bar-chart" aria-hidden="true">
          {bars.map((height, index) => (
            <span
              key={index}
              className="bar-column"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>

      <div className="dashboard-footer">
        <span>
          <i /> Data-driven thinking
        </span>

        <span>01 / 04</span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <div className="availability">
          <span />
          Data Analyst · Automation Specialist
        </div>

        <p className="hero-eyebrow">
          
        </p>

        <h1>
          Turning raw data
          <br />
          into decisions<span>.</span>
        </h1>

        <p className="hero-description">
          Saya Khairul Rohman, profesional yang berfokus pada analisis data,
          pengembangan dashboard interaktif, dan pelaporan bisnis untuk
          membantu menghasilkan insight yang relevan dan mendukung
          pengambilan keputusan.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View projects <span>→</span>
          </a>

          <a
            href="/CV_Khairul Rohman_Data Analyst.pdf"
            className="button button-outline hero-cv-button"
            download="CV-Khairul-Rohman.pdf"
            aria-label="Download CV Khairul Rohman dalam format PDF"
          >
            Download CV <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="hero-keywords">
          <span>DATA ANALYTICS</span>
          <i>·</i>
          <span>DASHBOARD VISUALIZATION</span>
          <i>·</i>
          <span>WORKFLOW AUTOMATION</span>
          <i>·</i>
          <span>REPORTING</span>
        </div>
      </div>

      <DashboardMockup />
    </section>
  );
}

function TechMarquee() {
  return (
    <div className="tech-strip" aria-label="Technology stack">
      <div className="tech-track">
        {[0, 1].map((group) => (
          <div
            className="tech-group"
            key={group}
            aria-hidden={group === 1 ? "true" : undefined}
          >
            {technologies.map((technology) => (
              <span
                className="tech-item"
                key={`${group}-${technology}`}
              >
                <i>◆</i>
                {technology}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionHeading({ number, label, title }) {
  return (
    <div className="section-heading">
      <p className="section-label">
        <span>{number}</span>  {label}
      </p>

      <h2>{title}</h2>
    </div>
  );
}

function About() {
  return (
    <section className="content-section section-wrap" id="about">
      <SectionHeading

        title="PROFESSIONAL SUMMARY"
      />

      <div className="about-grid">
        <div className="about-visual">
          <img
            className="about-photo"
            src="/images/foto-profil.jpg"
            alt="Foto profil Khairul Rohman"
          />

          <div className="location-badge">
            <span />
            Indonesia
          </div>
        </div>

        <div className="about-copy">
          <p>
            <strong>Data Analyst</strong> dengan pengalaman lebih dari 10 tahun di bidang data, pelaporan, dan operasional, 
            terutama di industri jasa keuangan. Terbiasa menggunakan <strong>SQL</strong>, <strong>Power BI</strong>, 
            <strong> Python</strong>, dan <strong>Excel </strong> 
             untuk mengolah data, membuat laporan, serta mengembangkan dashboard untuk kebutuhan bisnis. 
            Saat ini juga bekerja sebagai freelance Data Analyst, mengerjakan proyek dashboard Power BI dan otomatisasi 
            proses pelaporan menggunakan Google Apps Script dan Google Sheets. 
          </p>
          <p>
            Berhasil mengurangi waktu pelaporan 
            dari sekitar <strong>2 jam menjadi kurang dari 10 menit</strong> melalui otomatisasi proses pengolahan dan konsolidasi data.
          </p>

          <div className="about-stats">
            <div>
              <strong>Power BI</strong>
              <span>Dashboard & Visualization</span>
            </div>

            <div>
              <strong>SQL</strong>
              <span>Data Processing</span>
            </div>

            <div>
              <strong>Automation</strong>
              <span>Process Automation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section
      className="content-section section-wrap"
      id="experience"
    >
      <SectionHeading title="PROFESSIONAL EXPERIENCE" />

      <div className="experience-timeline">
        {experiences.map((item) => (
          <article
            className="experience-item"
            key={`${item.company}-${item.date}`}
          >
            <span className="timeline-dot" />

            <div className="experience-content">
              <p className="experience-date">
                {item.date}
              </p>

              <h3>{item.role}</h3>

              <p className="experience-company">
                {item.company}
              </p>

              {item.achievements ? (
                <ul className="experience-achievements">
                  {item.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              ) : (
                <p className="experience-description">
                  {item.description}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectPreview({ image, imageAlt, label, imageFit = "contain" }) {
  return (
    <div className="project-preview">
      {image ? (
        <img
          className="project-preview-image"
          src={image}
          alt={imageAlt || label || "Project dashboard"}
          style={{ objectFit: imageFit }}
          loading="lazy"
          onError={(event) => {
            console.error("Gambar gagal dimuat:", event.currentTarget.src);
          }}
        />
      ) : (
        <div className="project-preview-placeholder">
          <span>{label || "PROJECT PREVIEW"}</span>
        </div>
      )}
    </div>
  );
}

function Projects() {
  return (
    <section
      className="content-section section-wrap"
      id="projects"
    >
      <SectionHeading

        title="PROJECT"
      />   

      <div className="projects-grid">
        {projects.map((project) => (
          <article
            className={`project-card project-card-${project.tone}`}
            key={project.title}
          >
            <div className="project-visual">


              <ProjectPreview
                image={project.image}
                imageAlt={project.imageAlt}
                imageFit={project.imageFit}
                label={project.label}
              />
            </div>

            <div className="project-body">
              <p className="project-category">
                {project.category}
              </p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>



              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="project-links">
                <Link
                    className="project-link-badge"
                    to={`/project/${project.id}`}
                  >
                    {project.linkLabel || "Project details ↗"}
                </Link>

              </div>
            </div>
          </article>
        ))}
      </div>

    </section>
  );
}



function Portfolio() {
  return (
    <section
      className="content-section section-wrap"
      id="portfolio"
    >
      <SectionHeading title="PORTFOLIO" />

      <div className="projects-grid">
        {portfolio.map((item) => (
          <article
            className={`project-card project-card-${item.tone}`}
            key={item.id}
          >
            <div className="project-visual">
              <ProjectPreview
                image={item.image}
                imageAlt={item.imageAlt}
                imageFit={item.imageFit}
                label={item.label}
              />
            </div>

            <div className="project-body">
              <p className="project-category">{item.category}</p>
              <h3>{item.title}</h3>
              <p className="project-description">{item.description}</p>



              <div className="project-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="project-links">
                <Link className="project-link-badge" to={item.link}>
                  {item.linkLabel}
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


function Skills() {
  return (
    <section className="content-section section-wrap" id="skills">
      <div className="skills-heading">
        <h2>CORE COMPETENCIES</h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>

            {group.skills.map(([name, level, percent]) => (
              <div className="skill-row" key={name}>
                <div className="skill-label">
                  <strong>{name}</strong>
                  
                </div>

                <div className="skill-progress">
                  <span style={{ width: `${percent}%` }} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function Education() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    if (!selectedCertificate) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedCertificate(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedCertificate]);

  return (
    <section className="content-section section-wrap" id="education">
      <SectionHeading title="EDUCATION & CERTIFICATIONS" />

      <div className="education-grid">
        {education.map((item) => (
          <article className="education-card" key={item.title}>
            {item.image && (
              <button
                type="button"
                className="education-image-button"
                onClick={() => setSelectedCertificate(item)}
                aria-label={`Lihat sertifikat ${item.title}`}
              >
                <img
                  className="education-image"
                  src={item.image}
                  alt={`Sertifikat ${item.title}`}
                  loading="lazy"
                />
                <span className="education-image-hint">Click to enlarge ↗</span>
              </button>
            )}

            <div className="education-card-body">
              <p className="education-date">{item.date}</p>
              <h3>{item.title}</h3>
              <p className="education-institution">{item.institution}</p>
              <p className="education-description">{item.description}</p>
              {item.image && (
                <button
                  type="button"
                  className="project-link-badge education-view-button"
                  onClick={() => setSelectedCertificate(item)}
                >
                  View Certificate ↗
                </button>
              )}
            </div>
          </article>
        ))}
      </div>

      {selectedCertificate && (
        <div
          className="certificate-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`Sertifikat ${selectedCertificate.title}`}
          onClick={() => setSelectedCertificate(null)}
        >
          <button
            type="button"
            className="certificate-modal-close"
            aria-label="Tutup sertifikat"
            onClick={() => setSelectedCertificate(null)}
          >
            ×
          </button>
          <img
            className="certificate-modal-image"
            src={selectedCertificate.image}
            alt={`Sertifikat ${selectedCertificate.title}`}
            onClick={() => setSelectedCertificate(null)}
          />
        </div>
      )}
    </section>
  );
}

function Contact() {
  return (
    <section
      className="contact-section section-wrap"
      id="contact"
    >
      <div className="contact-panel">
        <h2>Let's turn your data into strategy.</h2>
        <p>
          Terbuka untuk peluang Data Analyst, Business Intelligence,
          proyek dashboard, dan Otomatisasi Data. Hubungi saya untuk berdiskusi mengenai
          data dan kebutuhan bisnis.
        </p>

        <div className="contact-actions">
          <a
            className="button button-primary"
            href="mailto:khairulrohman87@gmail.com"
          >
            Email me ↗
          </a>

          <a
            className="button button-outline"
            href="https://www.linkedin.com/in/khairulrohman/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>


        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span>
          © {new Date().getFullYear()} KHAIRUL ROHMAN — INDONESIA
        </span>

        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".content-section, .contact-panel"
    );

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("is-visible");
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />

      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Experience />
        <Portfolio />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}