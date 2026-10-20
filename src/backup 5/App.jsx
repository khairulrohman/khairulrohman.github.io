import { useEffect } from "react";
import "./App.css";
import PortfolioDetail from "./PortfolioDetail";

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
      "Developed 15+ interactive Power BI dashboards for sales analysis, supply chain, customer churn, inventory management, stock-out risk, and various business intelligence needs.",
      "Collected, cleaned, transformed, and modeled data using SQL, Power Query, DAX, and Microsoft Excel to deliver actionable insights that support business decision-making.",
	    "Developed data automation solutions using Google Apps Script and Google Sheets, including data pipelines, payment reminders, automated report distribution, and certificate generation.",
	    "Reduced reporting time from approximately 2 hours to less than 10 minutes by automating data consolidation and reporting processes across multiple data sources, improving operational efficiency and data accuracy.",
    ],
  },
  {
    date: "MAR 2023 — JUL 2024",
    role: "SLIK Officer & Analyst",
    company: "PT Moladin Finance Indonesia",
    achievements: [
      "Extracted, validated, and analyzed prospective customer data using SQL to support creditworthiness assessments and large-scale credit bureau checking processes.",

      "Developed automated workflows using Google Apps Script to collect, validate, and distribute credit bureau data for prospective customers, improving operational efficiency and reducing manual effort.",

      "Reduced data verification time from 1 hour to 20 minutes by automating data cleansing and batch processing activities, increasing operational efficiency by 40%.",

      "Developed Power BI dashboards to monitor credit quality, approval rates, and portfolio performance, supporting risk monitoring and management decision-making.",
      "Identified operational bottlenecks and translated analytical findings into actionable recommendations to improve process efficiency and risk monitoring.",
    ],
  },
  {
    date: "FEB 2015 — FEB 2024",
    role: "MIS Staff - Data & Reporting Support",
    company: "PT Procar International Finance",
    achievements: [
      "Extracted, validated, and processed operational, payment, and portfolio data using SQL Server to support business reporting and analytics requirements.",
      "Prepared and analyzed monthly performance reports covering sales, portfolio distribution, and payment delinquency trends, providing management visibility across 30 branches.",
	    "Developed KPI dashboards using Microsoft Excel and Power BI to monitor branch performance and operational metrics, supporting performance evaluation and decision-making.",
	    "Analyzed payment and collection trends to generate insights for Collection, Marketing, and Operations teams.",
	    "Ensured data accuracy and report availability by auditing more than 9,000 transactions daily.",
    ],
  },
  {
    date: "MAR 2011 — MAR 2014",
    role: "Broadcast Development Staff",
    company: "PT MNC Sky Vision INDOVISION",
    achievements: [
      "Managed data upload, validation, and monitoring processes to ensure consistency and accuracy of operational information within internal systems.",
      "Participated in User Acceptance Testing (UAT) and documented business requirements to support system development initiatives.",
    ],
  },
];


const projects = [
  {
    id: "kopi",
    number: "01",
    category: "POWER BI · HUMAN RESOURCES",
    title: "HR Analytics Dashboard",
    description:
      "Dashboard analitik SDM untuk mengeksplorasi headcount, turnover, absensi, demografi, serta distribusi karyawan berdasarkan divisi dan lokasi.",

    image: "/images/kopi.png",
    imageAlt: "HR Analytics Dashboard",
    imageFit: "contain",
    
    metrics: [
      ["HEADCOUNT", "Workforce overview"],
      ["TURNOVER", "Attrition analysis"],
      ["ABSENSI", "Attendance trends"],
    ],
    tags: ["Power BI", "DAX", "Power Query", "Data Modeling"],
    label: "HR ANALYTICS",
    link: "/portfolio/kopi",
    linkLabel: "Project details ↗",
    videoUrl: "/videos/GudangKopiKhai.mp4",
    dashboardLink: "https://app.powerbi.com/view?r=LINK_KAMU",
    tone: "teal",
  },
  {
    id: "laundry",
    number: "02",
    category: "SQL · BUSINESS INTELLIGENCE",
    title: "Finance & Portfolio Analysis",
    description:
      "Analisis data pembiayaan untuk memahami tren portofolio, performa pembayaran, kualitas data, dan indikator operasional yang relevan bagi bisnis.",

    image: "/images/laundry.png",
    imageAlt: "HR Analytics Dashboard",
    imageFit: "contain",
  
      metrics: [
      ["SQL", "Data extraction"],
      ["QUALITY", "Data validation"],
      ["REPORTING", "Business insights"],
    ],
    tags: ["SQL Server", "Excel", "Power BI", "Reporting"],
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
      "Dashboard untuk menganalisis performa Marketing.",
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
      "Dashboard untuk memantau indikator Stock.",
    image: "/images/stock.jpg",
    imageAlt: "Operations Performance Dashboard",
    imageFit: "contain",
    metrics: [
      ["OPERATIONS", "Performance tracking"],
      ["QUALITY", "Data validation"],
      ["EFFICIENCY", "Process analysis"],
    ],
    tags: ["SQL Server", "Excel", "Power BI", "Reporting"],
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
      "Dashboard untuk memantau Supply Chain.",
    image: "/images/supply.jpg",
    imageAlt: "Supply Chain Performance Dashboard",
    imageFit: "contain",
    tags: ["SQL Server", "Excel", "Power BI", "Reporting"],
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
      "Dashboard untuk memantau Sales.",
    image: "/images/sales.jpg",
    imageAlt: "Sales Performance Dashboard",
    imageFit: "contain",
    tags: ["SQL Server", "Excel", "Power BI", "Reporting"],
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
      "Dashboard untuk memantau Sales.",
    image: "/images/campaign.jpg",
    imageAlt: "Marketing Campaign Performance Analysis Using SQL",
    imageFit: "contain",
    tags: ["SQL Server", "Excel", "Power BI", "Reporting"],
    label: "OPERATIONS ANALYTICS",
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
      "Dashboard untuk memantau Sales.",
    image: "/images/pipeline.jpg",
    imageAlt: "Automated Data Pipeline",
    imageFit: "contain",
    tags: ["SQL Server", "Excel", "Power BI", "Reporting"],
    label: "OPERATIONS ANALYTICS",
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
            Data and reporting professional with 10+ years of experience in data, reporting, and operations within the financial services industry. Skilled in SQL Server, Power BI, Python, ETL processes, and dashboard development, with a proven track record of automating workflows and improving operational efficiency by up to 40%. Experienced in transforming and analyzing data, developing Business Intelligence solutions, and building reporting automation to support data-driven decision-making.
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

              <h3>{project.title}</h3>

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
                <a className="project-link-badge" href={item.link}>
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