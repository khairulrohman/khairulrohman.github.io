import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';
import sql from '../assets/icons/azuresqldatabase-original.svg';
import tableau from '../assets/icons/Tableau.svg';
import python from '../assets/icons/Python.svg';
import apps from '../assets/icons/Apps.svg';
import bi from '../assets/icons/powerbi.svg';


const projects = [
    {
        id: 1,
        title: 'Stock Out Risk Analyst Dashboard',
        description: 'Dashboard ini dirancang untuk membantu tim operasional dan manajemen memprioritaskan redistribusi stok dan pengambilan keputusan replenishment. Menganalisis data penjualan dan persediaan pada 50 toko ritel untuk mengidentifikasi risiko stock-out dan potensi kehilangan pendapatan. Insight: 46% toko teridentifikasi memiliki risiko stock-out tinggi 5 toko berada pada level risiko kritikal (>95%). Penyebab utama: distribusi stok tidak merata dan lonjakan permintaan.',
        tags: ['Power BI', 'DAX'],
        gradient: 'linear-gradient(135deg, #052e16 0%, #065f46 50%, #0d9488 100%)',
        accent: '#10b981',
        iconBg: 'linear-gradient(135deg, #065f46, #10b981)',
        iconShadow: '#10b981',
        iconImage: bi,
        link: 'https://app.powerbi.com/view?r=eyJrIjoiY2U4ZjdkNWUtMTIxYi00ZDBmLTllMWUtMzZhZjE5OTBlNDg2IiwidCI6ImFlYTgxMzk3LTQ5MmUtNDRiYy1iYWM5LTgzN2Q3OWU4YTc4YSJ9',
        github: '#'
    },
    {
        id: 2,
        title: 'Supply Chain Performance Dashboard',
        description: 'Membangun dashboard yang fokus pada kinerja pengiriman dan inventori. Tujuannya adalah memberikan insight komprehensif mengenai efektivitas proses supply chain — mulai dari kecepatan dan ketepatan pengiriman hingga efisiensi pengelolaan stok. Dashboard ini membantu manajemen memastikan kelancaran rantai pasok dan pengambilan keputusan berbasis data.',
        tags: ['Power BI', 'DAX'],
        gradient: 'linear-gradient(135deg, #052e16 0%, #065f46 50%, #0d9488 100%)',
        accent: '#10b981',
        iconBg: 'linear-gradient(135deg, #065f46, #10b981)',
        iconShadow: '#10b981',
        iconImage: bi,
        link: 'https://app.powerbi.com/view?r=eyJrIjoiZTY4M2M1NTEtOGFmMy00YTc3LWFmMjEtZTk3YjdlOGYzZjRjIiwidCI6ImFlYTgxMzk3LTQ5MmUtNDRiYy1iYWM5LTgzN2Q3OWU4YTc4YSJ9',
        github: '#'
    },
    {
        id: 3,
        title: 'Sales Performance Dashboard',
        description: 'Membangun dashboard interaktif untuk memberikan insight cepat, jelas, dan actionable kepada manajemen. Dashboard ini membantu memantau performa bisnis dari level gambaran besar hingga detail produk dan store.',
        tags: ['Power BI', 'DAX'],
        gradient: 'linear-gradient(135deg, #052e16 0%, #065f46 50%, #0d9488 100%)',
        accent: '#10b981',
        iconBg: 'linear-gradient(135deg, #065f46, #10b981)',
        iconShadow: '#10b981',
        iconImage: bi,
        link: 'https://app.powerbi.com/view?r=eyJrIjoiMzc0YmI0YjctYmFmZC00NDY2LWI1NDYtNzIxOTk5YjcyZmI1IiwidCI6ImFlYTgxMzk3LTQ5MmUtNDRiYy1iYWM5LTgzN2Q3OWU4YTc4YSJ9',
        github: '#'
    },
    {
        id: 4,
        title: 'Applicant Tracking Dashboard',
        description: 'Merancang dashboard interaktif menggunakan Power BI untuk menganalisis demografi pelamar, status pekerjaan, sumber rekrutmen, dan distribusi posisi secara visual.',
        tags: ['Power BI', 'DAX'],
        gradient: 'linear-gradient(135deg, #052e16 0%, #065f46 50%, #0d9488 100%)',
        accent: '#10b981',
        iconBg: 'linear-gradient(135deg, #065f46, #10b981)',
        iconShadow: '#10b981',
        iconImage: bi,
        link: 'https://app.powerbi.com/view?r=eyJrIjoiMWI3N2E5ZmItN2Q0NC00ZDJmLThmZGItZTZmMTBmOTliMzI1IiwidCI6ImFlYTgxMzk3LTQ5MmUtNDRiYy1iYWM5LTgzN2Q3OWU4YTc4YSJ9',
        github: '#'
    },
    {
        id: 5,
        title: 'Marketing Campaign Performance Analysis Using SQL',
        description: 'Analyzed marketing campaign performance using SQL to identify the most profitable channels and campaigns. Delivered data-driven recommendations to optimize budget allocation based on key metrics such as ROAS, CTR, and conversion rate.',
        tags: ['SQL', 'SQL Server'],
        gradient: 'linear-gradient(135deg, #052e16 0%, #065f46 50%, #0d9488 100%)',
        accent: '#10b981',
        iconBg: 'linear-gradient(135deg, #065f46, #10b981)',
        iconShadow: '#10b981',
        iconImage: sql,
        link: 'https://drive.google.com/file/d/1xbisueYqvMOE_6UglrlJU0indw9Q6X5g/view?usp=sharing',
        github: '#'
    },
    {
        id: 6,
        title: 'Automated ETL Pipeline',
        description: 'Built a data integration and cleansing pipeline to consolidate customer data from multiple systems into a reliable single source of truth.',
        tags: ['SQL', 'SQL Server'],
        gradient: 'linear-gradient(135deg, #052e16 0%, #065f46 50%, #0d9488 100%)',
        accent: '#10b981',
        iconBg: 'linear-gradient(135deg, #065f46, #10b981)',
        iconShadow: '#10b981',
        iconImage: sql,
        link: 'https://drive.google.com/file/d/14P6NW7eZzDGNViW0wPhEyRypIedcnjc2/view?usp=sharing',
        github: '#'
    },
    {
        id: 7,
        title: 'Credit Risk Analysis',
        description: 'Developed a credit risk profiling model to estimate the probability of default and support more informed lending decisions.',
        tags: ['Power BI', 'Python'],
        gradient: 'linear-gradient(135deg, #052e16 0%, #065f46 50%, #0d9488 100%)',
        accent: '#10b981',
        iconBg: 'linear-gradient(135deg, #065f46, #10b981)',
        iconShadow: '#10b981',
        iconImage: bi,
        link: 'https://app.powerbi.com/view?r=eyJrIjoiYzliNzk1YmEtMGYwOC00NjUzLTkyMmMtODNiODE2YjZlZDc0IiwidCI6ImFlYTgxMzk3LTQ5MmUtNDRiYy1iYWM5LTgzN2Q3OWU4YTc4YSJ9',
        github: '#'
    },
    {
        id: 8,
        title: 'Customer Retention & Churn Insight',
        description: 'Analyzed customer churn drivers and developed data-driven retention strategies to reduce customer attrition.',
        tags: ['Tableau'],
        gradient: 'linear-gradient(135deg, #1c0a00 0%, #7c2d12 50%, #c2410c 100%)',
        accent: '#f97316',
        iconBg: 'linear-gradient(135deg, #7c2d12, #f97316)',
        iconShadow: '#f97316',
        iconImage: tableau,
        link: 'https://public.tableau.com/app/profile/khairul.rohman/viz/ProjectCustomerChurnAnalyst/EXPLORATORYDATAANALYSIS',
        github: '#'
    },
    {
        id: 9,
        title: 'Automated Data Pipeline',
        description: 'Automated data consolidation and cleansing solution that integrates 10+ data sources into a centralized real-time dashboard, reducing processing time by 95% and improving data accuracy to 99.2%.',
        tags: ['Apps Script', 'Google Sheet'],
        gradient: 'linear-gradient(135deg, #1c0a00 0%, #7c2d12 50%, #c2410c 100%)',
        accent: '#f97316',
        iconBg: 'linear-gradient(135deg, #7c2d12, #f97316)',
        iconShadow: '#f97316',
        iconImage: apps,
        link: 'https://drive.google.com/file/d/1hGVxq6ww9JgP2DW6V0p5LkxOfu8CqcXH/view?usp=sharing',
        github: '#'
    },
    {
        id: 10,
        title: 'Automated Collection System',
        description: 'Payment reminder automation system that automatically detects due dates and sends personalized email notifications, reducing manual effort by 95%.',
        tags: ['Apps Script', 'Google Sheet'],
        gradient: 'linear-gradient(135deg, #1c0a00 0%, #7c2d12 50%, #c2410c 100%)',
        accent: '#f97316',
        iconBg: 'linear-gradient(135deg, #7c2d12, #f97316)',
        iconShadow: '#f97316',
        iconImage: apps,
        link: 'https://drive.google.com/file/d/1AharNo5mbhViAYot6VqtbVGACInQ-R5U/view?usp=sharing',
        github: '#'
    },
    {
        id: 11,
        title: 'Auto Certificate Express',
        description: 'Automated certificate generation and mass email distribution platform that reduced processing time by over 95%, eliminated manual errors, and improved participant experience.',
        tags: ['Apps Script', 'Google Sheet', 'Google Slide'],
        gradient: 'linear-gradient(135deg, #1c0a00 0%, #7c2d12 50%, #c2410c 100%)',
        accent: '#f97316',
        iconBg: 'linear-gradient(135deg, #7c2d12, #f97316)',
        iconShadow: '#f97316',
        iconImage: apps,
        link: 'https://drive.google.com/file/d/1U0lgeQ4LryRahOvNbznqWDDJ9ePfj6jS/view?usp=sharing',
        github: '#'
    }
];

function Projects() {
    return (
        <section className="projects-section container" id="projects">
            <h2 className="section-title gradient-text" style={{ textAlign: 'center' }}>
  Technical Projects
</h2>

            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">

                        <div className="project-banner" style={{ background: project.gradient }}>
    <div
        className="project-icon-wrapper"
        style={{
            background: project.iconBg,
            boxShadow: `0 8px 32px ${project.iconShadow}80, 0 0 0 1px ${project.iconShadow}30`,
        }}
    >
        {project.iconImage ? (
            <img
                src={project.iconImage}
                alt={project.title}
                className="project-icon-image"
            />
        ) : (
            <span className="project-icon">
                {project.iconEmoji}
            </span>
        )}
    </div>
    <div className="banner-glow" style={{ background: project.accent }}></div>
</div>

                        <div className="project-body">
                            <h3 className="project-title" style={{ '--accent': project.accent }}>
                                {project.title}
                            </h3>
                            <p className="project-desc">{project.description}</p>

                            <div className="project-tags">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="tag" style={{ '--accent': project.accent }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="project-links" style={{ '--accent': project.accent }}>
                            <a
                                href={project.link}
                                className="proj-btn proj-btn-primary"
                                style={{ background: project.accent, boxShadow: `0 4px 14px ${project.accent}40` }}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <ExternalLink size={16} />
                                View Dashboard
                            </a>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;