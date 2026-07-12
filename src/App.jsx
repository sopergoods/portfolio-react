import { useEffect, useState, useRef } from 'react';
import Lanyard from './components/Lanyard/Lanyard';
import Timeline from './components/Timeline/Timeline';
import VideoSamples from './components/VideoSamples/VideoSamples';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { PiFlask } from 'react-icons/pi';
import { MdOutlineDashboard } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebookMessenger, FaEnvelope, FaVideo } from 'react-icons/fa';
import './App.css';

// --- PHOTOS ---
import photo1 from './assets/pic1.jpeg';
import photo2 from './assets/pic2.jpeg';
import photo3 from './assets/pic3.jpeg';

const photos = [
  photo1,
  photo2,
  photo3,
];

function App() {
  const [theme, setTheme] = useState('light');
  const [photoIndex, setPhotoIndex] = useState(0);
  const navMenuRef = useRef(null);
  const touchStartX = useRef(null);

  const prevPhoto = () => setPhotoIndex(i => (i - 1 + photos.length) % photos.length);
  const nextPhoto = () => setPhotoIndex(i => (i + 1) % photos.length);

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) nextPhoto();
    else if (diff < -50) prevPhoto();
    touchStartX.current = null;
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const toggleMenu = () => {
    navMenuRef.current?.classList.toggle('active');
  };

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          navMenuRef.current?.classList.remove('active');
        }
      });
    });
  }, []);

  return (
    <>
      {/* NAV */}
      <nav>
        <h1><a href="/">Vince</a></h1>
        <div className="nav-right">
          <ul id="navMenu" ref={navMenuRef} style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#ad-samples">Ad Samples</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <div className="menu-btn" onClick={toggleMenu} style={{ display: 'none' }}>☰</div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="hero-section">
        <div className="hero-left">
          {/* PHOTO CAROUSEL */}
          <div
            className="photo-carousel"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="carousel-frame" onClick={nextPhoto} title="Click to see next photo">
              {photos[photoIndex] ? (
                <img src={photos[photoIndex]} alt={`Photo ${photoIndex + 1}`} className="carousel-img" />
              ) : (
                <div className="carousel-placeholder">
                  <span>📷</span>
                  <p>Photo {photoIndex + 1}</p>
                  <small>Add photos to src/assets/</small>
                </div>
              )}
            </div>
            {/* Dots */}
            <div className="carousel-dots">
              {photos.map((_, i) => (
                <span
                  key={i}
                  className={`carousel-dot ${i === photoIndex ? 'active' : ''}`}
                  onClick={() => setPhotoIndex(i)}
                />
              ))}
            </div>
          </div>

          <div className="hero-details">
            <h1 className="hero-name">Vince Timothy Asutilla</h1>
            <h2 className="hero-title">Web Developer</h2>
            <div className="hero-hobbies">
              <h3>Looking for:</h3>
              <div className="pill-container">
                <span className="pill">Full Stack Dev</span>
                <span className="pill">Web Dev</span>
                <span className="pill">UI/UX Design</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <Lanyard position={[0, 0, 35]} gravity={[0, -40, 0]} fov={40} theme={theme} />
        </div>
      </section>

      {/* BENTO GRID */}
      <div className="bento-container" id="about">
        {/* LEFT COLUMN: About & Tech Stack */}
        <div className="bento-column">

          <div className="bento-card">
            <h2 className="section-title">
              <IoBriefcaseOutline className="section-icon" /> About
            </h2>
            <div className="about-text">
              <p>
                Computer Science graduate with hands-on experience in backend development, web application development, database management, and system deployment. Skilled in building real-world systems using Node.js, Express.js, React.js, PHP, MySQL, JavaScript, and modern web technologies.
              </p>
              <p>
                Experienced in RESTful API development, authentication systems, responsive UI design, deployment, and version control using Git. I am based in the Philippines and open to entry-level roles, collaborations, and opportunities in software and web development.
              </p>
            </div>
          </div>

          <div className="bento-card">
            <h2 className="section-title">
              <PiFlask className="section-icon" /> Tech Stack
            </h2>

            <div className="tech-category">
              <h3>This Website</h3>
              <div className="pill-container">
                <span className="pill">React.js</span>
                <span className="pill">Vite</span>
                <span className="pill">Three.js</span>
                <span className="pill">React Three Fiber</span>
                <span className="pill">React Three Drei</span>
                <span className="pill">Rapier Physics</span>
                <span className="pill">react-icons</span>
                <span className="pill">CSS Variables</span>
              </div>
            </div>

            <div className="tech-category">
              <h3>Frontend</h3>
              <div className="pill-container">
                <span className="pill">HTML5</span>
                <span className="pill">CSS3</span>
                <span className="pill">JavaScript</span>
                <span className="pill">React.js</span>
                <span className="pill">Bootstrap</span>
                <span className="pill">Responsive Web Design</span>
              </div>
            </div>

            <div className="tech-category">
              <h3>Backend</h3>
              <div className="pill-container">
                <span className="pill">Node.js</span>
                <span className="pill">Express.js</span>
                <span className="pill">PHP</span>
                <span className="pill">REST API</span>
                <span className="pill">JWT Authentication</span>
                <span className="pill">AJAX</span>
                <span className="pill">C++</span>
                <span className="pill">C#</span>
                <span className="pill">Java</span>
              </div>
            </div>

            <div className="tech-category">
              <h3>Database</h3>
              <div className="pill-container">
                <span className="pill">MySQL</span>
                <span className="pill">SQLite</span>
                <span className="pill">Database Management</span>
              </div>
            </div>

            <div className="tech-category">
              <h3>Tools & Deployment</h3>
              <div className="pill-container">
                <span className="pill">Git</span>
                <span className="pill">GitHub</span>
                <span className="pill">Railway</span>
                <span className="pill">Vercel</span>
                <span className="pill">Vite</span>
              </div>
            </div>

            <div className="tech-category">
              <h3>Skills</h3>
              <div className="pill-container">
                <span className="pill">System Design</span>
                <span className="pill">Problem Solving</span>
                <span className="pill">Database Management</span>
                <span className="pill">SDLC</span>
                <span className="pill">OOP</span>
                <span className="pill">Backend Development</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Experience / Timeline */}
        <div className="bento-column" id="experience">
          <div className="bento-card">
            <h2 className="section-title">
              <IoBriefcaseOutline className="section-icon" /> Experience
            </h2>
            <Timeline />
          </div>
        </div>

      </div>

      {/* AI AD SAMPLES */}
      <div className="bento-container" id="ad-samples" style={{ marginTop: '2rem' }}>
        <div className="bento-card" style={{ gridColumn: '1 / -1' }}>
          <h2 className="section-title">
            <FaVideo className="section-icon" /> AI Ad Samples
          </h2>
          <VideoSamples />
        </div>
      </div>

      {/* PROJECTS BENTO GRID */}
      <div className="bento-container" id="projects" style={{ marginTop: '2rem' }}>
        <div className="bento-card" style={{ gridColumn: '1 / -1' }}>
          <h2 className="section-title">
            <MdOutlineDashboard className="section-icon" /> Projects
          </h2>
          <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>

            {/* Queue Management System */}
            <div className="project-item" style={{ padding: '1.5rem', background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '12px', transition: 'transform 0.2s ease' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-color)' }}>Queue Management System</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Built for SSS Mandaluyong Branch during OJT. Handles ticket generation, queue tracking, and client prioritization to streamline government service flow.
              </p>
              <div className="pill-container">
                <span className="pill">Node.js</span>
                <span className="pill">Express.js</span>
                <span className="pill">SQLite</span>
                <span className="pill">JavaScript</span>
                <span className="pill">HTML</span>
                <span className="pill">CSS</span>
                <span className="pill">Git</span>
              </div>
            </div>

            {/* Personal Portfolio Website */}
            <div className="project-item" style={{ padding: '1.5rem', background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '12px', transition: 'transform 0.2s ease' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-color)' }}>Personal Portfolio Website</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Interactive 3D portfolio built with React and Three.js, featuring a physics-based Lanyard animation, dark/light theme toggle, and a responsive bento grid layout.
              </p>
              <div className="pill-container">
                <span className="pill">React.js</span>
                <span className="pill">Vite</span>
                <span className="pill">Three.js</span>
                <span className="pill">React Three Fiber</span>
                <span className="pill">React Three Drei</span>
                <span className="pill">JavaScript</span>
                <span className="pill">CSS</span>
                <span className="pill">Git</span>
              </div>
            </div>

            {/* Automated Judging System */}
            <div className="project-item" style={{ padding: '1.5rem', background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '12px', transition: 'transform 0.2s ease' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-color)' }}>Automated Judging System</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Web-based system for managing competitions, judges, participants, and automated score computation with real-time ranking and result reporting.
              </p>
              <div className="pill-container">
                <span className="pill">Node.js</span>
                <span className="pill">Express.js</span>
                <span className="pill">MySQL</span>
                <span className="pill">JavaScript</span>
                <span className="pill">Bootstrap</span>
                <span className="pill">JWT Auth</span>
                <span className="pill">Railway</span>
                <span className="pill">Git</span>
              </div>
            </div>

            {/* Water Billing System */}
            <div className="project-item" style={{ padding: '1.5rem', background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '12px', transition: 'transform 0.2s ease' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-color)' }}>Water Billing System</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Billing and payment tracking system for Mikesell Water Supply — handles customer records, billing computation, and automated report generation.
              </p>
              <div className="pill-container">
                <span className="pill">PHP</span>
                <span className="pill">MySQL</span>
                <span className="pill">JavaScript</span>
                <span className="pill">HTML</span>
                <span className="pill">CSS</span>
                <span className="pill">Git</span>
              </div>
            </div>

            {/* Hotel Booking System */}
            <div className="project-item" style={{ padding: '1.5rem', background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '12px', transition: 'transform 0.2s ease' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-color)' }}>Hotel Booking System</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Web-based hotel booking management system with reservation tracking, room availability, and customer record management with a responsive Bootstrap UI.
              </p>
              <div className="pill-container">
                <span className="pill">PHP</span>
                <span className="pill">MySQL</span>
                <span className="pill">Bootstrap</span>
                <span className="pill">JavaScript</span>
                <span className="pill">HTML</span>
                <span className="pill">CSS</span>
                <span className="pill">Railway</span>
                <span className="pill">Git</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div className="bento-container" id="contact" style={{ marginTop: '2rem' }}>

        {/* Left: Get in touch */}
        <div className="bento-card contact-card-left">
          <h2 className="section-title">
            <FaEnvelope className="section-icon" /> Get in Touch
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            I'm a fresh CS graduate open to entry-level roles, collaborations, and opportunities in web and software development.
            Feel free to reach out — I'd love to connect!
          </p>
          <a
            href="mailto:asutillavince@gmail.com"
            className="contact-cta"
          >
            Send me an email →
          </a>
        </div>

        {/* Right: Social links */}
        <div className="bento-card">
          <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Connect</h2>
          <div className="contact-links">

            <a href="mailto:asutillavince@gmail.com" className="contact-link-item">
              <div className="contact-icon-wrap"><FaEnvelope /></div>
              <div>
                <p className="contact-link-label">Email</p>
                <p className="contact-link-value">asutillavince@gmail.com</p>
              </div>
            </a>

            <a href="https://github.com/sopergoods" target="_blank" rel="noopener noreferrer" className="contact-link-item">
              <div className="contact-icon-wrap"><FaGithub /></div>
              <div>
                <p className="contact-link-label">GitHub</p>
                <p className="contact-link-value">github.com/sopergoods</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/vince-asutilla1/" target="_blank" rel="noopener noreferrer" className="contact-link-item">
              <div className="contact-icon-wrap"><FaLinkedin /></div>
              <div>
                <p className="contact-link-label">LinkedIn</p>
                <p className="contact-link-value">Vince Asutilla</p>
              </div>
            </a>

            <a href="https://www.facebook.com/timssasutilla" target="_blank" rel="noopener noreferrer" className="contact-link-item">
              <div className="contact-icon-wrap"><FaFacebookMessenger /></div>
              <div>
                <p className="contact-link-label">Messenger</p>
                <p className="contact-link-value">timssasutilla</p>
              </div>
            </a>

          </div>
        </div>

      </div>

      {/* FOOTER */}
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Vince Timothy Asutilla — All rights reserved.</p>
      </footer>

    </>
  );
}

export default App;
