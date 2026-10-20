import { useEffect } from "react";
import "./App.css";

const technologies = [
  "Power BI",
  "DAX",
  "SQL Server",
  "Python",
  "Excel",
  "Power Query",
  "ETL",
  "Data Modeling",
  "Business Intelligence",
  "Reporting Automation",
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
    id: "marketing",
    number: "01",
    category: "POWER BI · HUMAN RESOURCES",
    title: "HR Analytics Dashboard",
    description:
      "Dashboard analitik SDM untuk mengeksplorasi headcount, turnover, absensi, demografi, serta distribusi karyawan berdasarkan divisi dan lokasi.",

    image: "/images/marketing.jpg",
    imageAlt: "HR Analytics Dashboard",
    imageFit: "contain",
    
    metrics: [
      ["HEADCOUNT", "Workforce overview"],
      ["TURNOVER", "Attrition analysis"],
      ["ABSENSI", "Attendance trends"],
    ],
    tags: ["Power BI", "DAX", "Power Query", "Data Modeling"],
    label: "HR ANALYTICS",
    link: "#contact",
    linkLabel: "Project details ↗",
    dashboardLink: "https://app.powerbi.com/view?r=LINK_KAMU",
    tone: "teal",
  }, 
];

const portfolioItems = [
  {
    id: "marketing-dashboard",
    number: "01",
    category: "POWER BI · SALES ANALYTICS",
    title: "Sales Performance Dashboard",
    description:
      "Dashboard untuk menganalisis performa penjualan, tren pendapatan, pencapaian target, dan kontribusi produk terhadap bisnis.",
    image: "/images/marketing.jpg",
    imageAlt: "Sales Performance Dashboard",
    imageFit: "contain",
    metrics: [
      ["REVENUE", "Sales performance"],
      ["GROWTH", "Trend analysis"],
      ["TARGET", "Achievement tracking"],
    ],
    tags: ["Power BI", "DAX", "Power Query", "Data Modeling"],
    label: "SALES ANALYTICS",
    link: "#contact",
    linkLabel: "Portfolio details ↗",
    tone: "teal",
  },
];

const skillGroups = [
  {
    title: "ANALYSIS & BI",
    skills: [
      ["Power BI & DAX", "Advanced", 88],
      ["Excel & Power Query", "Advanced", 88],
      ["SQL Server", "Proficient", 78],
      ["Data Storytelling", "Proficient", 75],
    ],
  },
  {
    title: "DATA & PROGRAMMING",
    skills: [
      ["Python & Pandas", "Proficient", 70],
      ["Data Cleaning", "Advanced", 85],
      ["ETL Processes", "Proficient", 74],
      ["Data Modeling", "Proficient", 76],
    ],
  },
  {
    title: "BUSINESS & WORKFLOW",
    skills: [
      ["Business Reporting", "Advanced", 86],
      ["Finance Operations", "Advanced", 88],
      ["Git & GitHub", "Learning", 55],
      ["Process Improvement", "Proficient", 78],
    ],
  },
];

const education = [
  {
    date: "2006 — 2010",
    title: "Bachelor of Computer Science",
    institution: "Universitas Budi Luhur",
    description:
      "Pendidikan di bidang ilmu komputer dengan dasar pemahaman sistem informasi dan teknologi.",
  },
  {
    date: "PROFESSIONAL DEVELOPMENT",
    title: "Data Analytics & Business Intelligence",
    institution: "Praktik dan pengembangan proyek",
    description:
      "Mengembangkan kemampuan SQL, Power BI, DAX, Excel, Python, data modeling, dan pembuatan dashboard melalui praktik proyek.",
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
          <span className="brand-role">data-analyst</span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          {navigation.map(([label, id]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>

        <a className="button button-outline header-contact" href="#contact">
          Say hello <span aria-hidden="true">→</span>
        </a>
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
          Data Analytics · Business Intelligence · Power BI
        </div>

        <p className="hero-eyebrow">
          DATA ANALYST / BUSINESS INTELLIGENCE
        </p>

        <h1>
          Turning raw data
          <br />
          into decisions<span style={{ color: "#ffb43b" }}>.</span>
          <span className="typing-cursor" />
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
            href="/CV_Khairul-Rohman_Data-Analyst.pdf"
            className="button button-outline"
            download="CV_Khairul-Rohman_Data-Analyst.pdf"
          >
            Get my CV
          </a>
        </div>

        <div className="hero-keywords">
          <span>DATA ANALYTICS</span>
          <i>·</i>
          <span>BUSINESS INSIGHTS</span>
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
            Profesional data dan pelaporan dengan pengalaman lebih dari 10 tahun di bidang data, pelaporan, dan operasional
            dalam industri jasa keuangan. Menguasai <strong>SQL</strong>, <strong>Power BI</strong>, <strong>Python</strong>, <strong>Excel</strong>, <strong>Google Sheet</strong>, <strong>n8n</strong> dan pengembangan dashboard, 
            dengan rekam jejak terbukti dalam mengotomatisasi alur kerja serta <strong>meningkatkan efisiensi operasional hingga 40%</strong>. 
            Berpengalaman dalam mentransformasi dan menganalisis data, mengembangkan solusi Business Intelligence, 
            serta <strong>membangun otomatisasi pelaporan</strong> untuk mendukung pengambilan keputusan berbasis data.
          </p>

          <div className="about-stats">
            <div>
              <strong>BI</strong>
              <span>Business Intelligence</span>
            </div>

            <div>
              <strong>SQL</strong>
              <span>Data Analysis</span>
            </div>

            <div>
              <strong>ETL</strong>
              <span>Data Processing</span>
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

              <h4>{project.title}</h4>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-metrics">
                {project.metrics.map(([name, detail]) => (
                  <div className="project-metric" key={name}>
                    <strong>{name}</strong>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  className="project-link-badge"
                  href={`/project/${project.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.linkLabel || "Project details ↗"}
                </a>

                {project.dashboardLink && (
                  <a
                    className="project-link-badge"
                    href={project.dashboardLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Dashboard ↗
                  </a>
                )}
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
        {portfolioItems.map((item) => (
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

              <div className="project-metrics">
                {item.metrics.map(([name, detail]) => (
                  <div className="project-metric" key={name}>
                    <strong>{name}</strong>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <div className="project-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="project-links">
                <a className="project-link-badge" href={`/project/${item.id}`}>
                  {item.linkLabel}
                </a>
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
                  <span>{level}</span>
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
  return (
    <section
      className="content-section section-wrap"
      id="education"
    >
      <SectionHeading

        title="EDUCATION & CERTIFICATIONS"
      />

      <div className="education-grid">
        {education.map((item) => (
          <article
            className="education-card"
            key={item.title}
          >
            <p className="education-date">{item.date}</p>

            <h3>{item.title}</h3>

            <p className="education-institution">
              {item.institution}
            </p>

            <p className="education-description">
              {item.description}
            </p>
          </article>
        ))}
      </div>
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
        <p className="section-label">06 / CONTACT</p>

        <h2>Let's turn your data into strategy.</h2>

        <p>
          Terbuka untuk peluang Data Analyst, Business Intelligence,
          dan proyek dashboard. Hubungi saya untuk berdiskusi mengenai
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

          <a
            className="button button-outline"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
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