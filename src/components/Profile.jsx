import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Smartphone } from 'lucide-react';
import './Profile.css';

const roles = [
  'Data Analyst',
  'Business Intelligence',
  'Power BI Developer',
];

function Profile() {
  const [displayed, setDisplayed] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];

    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1500);
        }
      } else {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, deleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section className="profile-section container animate-fade-in" id="profile">

      {/* ── Left Content ── */}
      <div className="profile-content">
        <p className="profile-eyebrow">Data Analyst</p>
        <h1 className="name">Khairul <em>Rohman</em></h1>
        <div className="profile-divline"></div>

        {/* Typing Role */}
        <h3 className="role">
          {displayed}
          <span className="cursor-blink">|</span>
        </h3>

        <p className="bio text-muted">
          Data Analyst
        </p>

        {/* Tech Tags */}
        <div className="profile-tags">
          <span className="profile-tag">SQL</span>
          <span className="profile-tag">Power BI</span>
          <span className="profile-tag">Python</span>
          <span className="profile-tag">Excel</span>
        </div>

        {/* Buttons & Icons */}
        <div className="social-links">
          <a href="#contact" className="social-btn primary">
            <Mail size={18} /> Contact Me
          </a>
          <a
  href={`${import.meta.env.BASE_URL}CV_Khairul-Rohman_Data-Analyst.pdf`}
  download="Khairul_Rohman_CV.pdf"
  className="social-btn secondary"
>
  Download CV
</a>
          <a href="" className="social-icon" target="_blank" rel="noreferrer">
            <Github size={22} />
          </a>
          <a href="tel:+6281219971941" className="social-icon">
            <Smartphone size={22} />
          </a>
        </div>
      </div>

      {/* ── Right — Circular Image ── */}
      <div className="profile-image-container animate-float">
        <div className="image-wrapper glow-effect">
          <div className="animated-border"></div>
          <div className="avatar-placeholder" style={{ padding: '6px' }}>
            <img
              src={`${import.meta.env.BASE_URL}KH.jpg`}
              alt="Khairul Rohman"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
            />
          </div>
        </div>
        <div className="floating-badge badge-1 glass-card">
          <span>🌐</span> Data Analyst
        </div>
        <div className="floating-badge badge-2 glass-card">
          <span>⚡</span> Business Intelligence
        </div>
      </div>

    </section>
  );
}

export default Profile;