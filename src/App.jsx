import { useEffect, useState, useRef } from 'react';
import Lanyard from './components/Lanyard/Lanyard';
import Timeline from './components/Timeline/Timeline';
import VideoSamples from './components/VideoSamples/VideoSamples';
import Tools from './components/Tools/Tools';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { PiToolbox } from 'react-icons/pi';
import { FaEnvelope, FaVideo, FaBriefcase } from 'react-icons/fa';
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
        <h1><a href="#home" className="nav-brand"><FaVideo className="nav-brand-icon" /> Vince</a></h1>
        <div className="nav-right">
          <ul id="navMenu" ref={navMenuRef} style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
            <li><a href="#home">Home</a></li>
            <li><a href="#ad-samples">Work</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#tools">Tools</a></li>
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
            <h1 className="hero-name">Vince</h1>
            <h2 className="hero-title">AI Video Specialist — UGC, VSL &amp; Direct-Response Ads</h2>
            <div className="hero-hobbies">
              <h3>Looking for:</h3>
              <div className="pill-container">
                <span className="pill">AI UGC Ads</span>
                <span className="pill">VSL</span>
                <span className="pill">Freelance & Retainer</span>
                <span className="pill">Immediately Available</span>
              </div>
            </div>
            <div className="hero-stats">
              <div className="stat"><strong>2 yrs</strong><span>AI video ads</span></div>
              <div className="stat"><strong>3–4</strong><span>creatives / day</span></div>
              <div className="stat"><strong>~3 hrs</strong><span>brief to delivery (varies)</span></div>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <Lanyard position={[0, 0, 35]} gravity={[0, -40, 0]} fov={40} theme={theme} />
        </div>
      </section>

      {/* AI VIDEO WORK */}
      <div className="bento-container" id="ad-samples" style={{ marginTop: '2rem' }}>
        <div className="bento-card" style={{ gridColumn: '1 / -1' }}>
          <h2 className="section-title">
            <FaVideo className="section-icon" /> AI Video Work — Meta Ads
          </h2>
          <VideoSamples />
        </div>
      </div>

      {/* ABOUT + EXPERIENCE */}
      <div className="bento-container" id="about">
        <div className="bento-column">
          <div className="bento-card">
            <h2 className="section-title">
              <IoBriefcaseOutline className="section-icon" /> About
            </h2>
            <div className="about-text">
              <p>
                AI Video Specialist with 2 years of experience producing AI-generated UGC, VSL, and direct-response video ads for ecommerce brands on Meta, TikTok, and Shopee. I take a client brief and turn it into finished, ready-to-run creatives using AI video generation, avatars, and AI voice-over, then assemble everything in CapCut.
              </p>
              <p>
                I deliver 3–4 finished creatives a day, with a fastest turnaround of about 3 hours from brief to final ad. A recent Shopee skincare campaign delivered a 4% sales increase. Based in the Philippines, remote-first, immediately available, and flexible on timezone for clients in the UK, EU, Australia, and Asia.
              </p>
            </div>
          </div>
        </div>

        <div className="bento-column" id="experience">
          <div className="bento-card">
            <h2 className="section-title">
              <IoBriefcaseOutline className="section-icon" /> Experience
            </h2>
            <Timeline />
          </div>
        </div>
      </div>

      {/* TOOLS I USE */}
      <div className="bento-container" id="tools" style={{ marginTop: '2rem' }}>
        <div className="bento-card" style={{ gridColumn: '1 / -1' }}>
          <h2 className="section-title">
            <PiToolbox className="section-icon" /> Tools I Use
          </h2>
          <Tools />
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
            Immediately available for freelance and retainer work as an AI Video Specialist, producing UGC, VSL, and direct-response video ads for ecommerce brands on Meta, TikTok, and Shopee.
            Flexible on timezone. Feel free to reach out — I'd love to connect!
          </p>
          <div className="contact-cta-row">
            <a
              href="mailto:asutillavince@gmail.com"
              className="contact-cta"
            >
              Send me an email →
            </a>
            <a
              href="https://www.onlinejobs.ph/jobseekers/info/5090285"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-cta contact-cta-alt"
            >
              Hire me on OnlineJobs.ph →
            </a>
          </div>
        </div>

        {/* Right: Contact links */}
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

            <a href="https://www.onlinejobs.ph/jobseekers/info/5090285" target="_blank" rel="noopener noreferrer" className="contact-link-item">
              <div className="contact-icon-wrap"><FaBriefcase /></div>
              <div>
                <p className="contact-link-label">OnlineJobs.ph</p>
                <p className="contact-link-value">View my profile</p>
              </div>
            </a>

</div>
        </div>

      </div>

      {/* FOOTER */}
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Vince — All rights reserved.</p>
      </footer>

    </>
  );
}

export default App;
