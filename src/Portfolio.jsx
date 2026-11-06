import React, { useState } from 'react';
import { Twitter, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const handleVideoClick = (videoId) => {
    const video = document.getElementById(videoId);
    if (video.paused) {
      video.play();
      setPlayingVideo(videoId);
      // Request fullscreen
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    } else {
      video.pause();
      setPlayingVideo(null);
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  return (
    <div style={styles.container}>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: #0a0a0a;
          background-image:
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(255, 0, 255, 0.03) 2px,
              rgba(255, 0, 255, 0.03) 4px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(0, 255, 0, 0.03) 2px,
              rgba(0, 255, 0, 0.03) 4px
            ),
            radial-gradient(
              circle at 20% 30%,
              rgba(255, 0, 255, 0.08) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 80% 70%,
              rgba(0, 255, 0, 0.08) 0%,
              transparent 50%
            );
          color: #ffffff;
          overflow-x: hidden;
        }

        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700;800;900&display=swap');

        .video-container {
          cursor: pointer;
        }

        .video-container:hover {
          transform: translateY(-4px);
        }

        @media (max-width: 900px) {
          .work-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
          .hero-section {
            padding: 120px 32px 100px !important;
          }
          .work-section {
            padding: 100px 32px !important;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section style={styles.hero} className="hero-section">
        <div style={styles.profilePicWrapper}>
          <img
            src="https://unavatar.io/x/icy_saransh"
            alt="Saranshx"
            style={styles.profilePic}
            loading="eager"
            onError={(e) => {
              e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23000' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' fill='%23fff' font-size='120' font-weight='900' text-anchor='middle' dominant-baseline='middle' font-family='Space Grotesk'%3ES%3C/text%3E%3C/svg%3E";
            }}
          />
        </div>

        <h1 style={styles.heroName}>SARANSHX</h1>

        <h2 style={styles.tagline}>"Your SaaS vision Sharpened"</h2>

        <a href="https://x.com/icy_saransh" target="_blank" rel="noopener noreferrer" style={styles.heroCta}>
          FOLLOW ON X
        </a>
      </section>

      {/* Work Section */}
      <section style={styles.workSection} className="work-section">
        <h3 style={styles.workHeading}>I've worked with:</h3>

        <div style={styles.workGrid} className="work-grid">
          {/* Cursis Card */}
          <div style={styles.workCard}>
            <div style={styles.cardHeader}>
              <div style={styles.logoWrapper}>
                <svg width="60" height="60" viewBox="0 0 100 100" style={styles.logo}>
                  <rect width="100" height="100" fill="#ff00ff" rx="12"/>
                  <text x="50" y="68" fill="#000" fontSize="52" fontWeight="900" textAnchor="middle" fontFamily="Space Grotesk">C</text>
                </svg>
              </div>
              <div style={styles.headerText}>
                <h4 style={styles.companyName}>CURSIS</h4>
                <p style={styles.companyTagline}>Launch animation that converts</p>
              </div>
            </div>
            <div
              className="video-container"
              style={styles.videoWrapper}
              onClick={() => handleVideoClick('video-cursis')}
            >
              <video
                id="video-cursis"
                style={styles.video}
                loop
                playsInline
                preload="metadata"
              >
                <source src="/videos/cursis-demo.mp4" type="video/mp4" />
              </video>
              {playingVideo !== 'video-cursis' && (
                <div style={styles.playOverlay}>
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#00ff00" strokeWidth="3" fill="#000"/>
                    <polygon points="10 8 16 12 10 16" fill="#00ff00" />
                  </svg>
                </div>
              )}
            </div>
          </div>

          {/* Lakai Card */}
          <div style={styles.workCard}>
            <div style={styles.cardHeader}>
              <div style={styles.logoWrapper}>
                <svg width="60" height="60" viewBox="0 0 100 100" style={styles.logo}>
                  <rect width="100" height="100" fill="#00ff00" rx="12"/>
                  <text x="50" y="68" fill="#000" fontSize="52" fontWeight="900" textAnchor="middle" fontFamily="Space Grotesk">L</text>
                </svg>
              </div>
              <div style={styles.headerText}>
                <h4 style={styles.companyName}>LAKAI.PRO</h4>
                <p style={styles.companyTagline}>Motion that drives action</p>
              </div>
            </div>
            <div
              className="video-container"
              style={styles.videoWrapper}
              onClick={() => handleVideoClick('video-lakai')}
            >
              <video
                id="video-lakai"
                style={styles.video}
                loop
                playsInline
                preload="metadata"
              >
                <source src="/videos/lakai-demo.mp4" type="video/mp4" />
              </video>
              {playingVideo !== 'video-lakai' && (
                <div style={styles.playOverlay}>
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#00ff00" strokeWidth="3" fill="#000"/>
                    <polygon points="10 8 16 12 10 16" fill="#00ff00" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer/Contact */}
      <footer style={styles.footer}>
        <h3 style={styles.footerHeading}>How to hire me:</h3>
        <a href="https://x.com/icy_saransh" target="_blank" rel="noopener noreferrer" style={styles.footerLink}>
          <Twitter size={24} strokeWidth={3} style={{marginRight: '12px'}} />
          DM me on X
        </a>
        <p style={styles.copyright}>© 2026 SARANSHX</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'transparent',
  },

  // Hero Section
  hero: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '160px 60px 120px',
    textAlign: 'center',
    borderBottom: '6px solid #ffffff',
  },
  profilePicWrapper: {
    width: '220px',
    height: '220px',
    marginBottom: '60px',
    border: '8px solid #ffffff',
    boxShadow: '20px 20px 0 #ff00ff',
    overflow: 'hidden',
    background: '#000000',
  },
  profilePic: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  heroName: {
    fontSize: 'clamp(60px, 15vw, 180px)',
    fontWeight: 900,
    letterSpacing: '4px',
    marginBottom: '40px',
    color: '#ffffff',
    lineHeight: '1',
  },
  tagline: {
    fontSize: 'clamp(24px, 5vw, 56px)',
    fontWeight: 900,
    color: '#00ff00',
    marginBottom: '80px',
    letterSpacing: '2px',
    lineHeight: '1.2',
    maxWidth: '1000px',
  },
  heroCta: {
    display: 'inline-block',
    padding: '28px 72px',
    background: '#ff00ff',
    color: '#000000',
    textDecoration: 'none',
    fontSize: '28px',
    fontWeight: 900,
    letterSpacing: '2px',
    border: '6px solid #ffffff',
    boxShadow: '12px 12px 0 #000',
  },

  // Work Section
  workSection: {
    maxWidth: '1600px',
    margin: '0 auto',
    padding: '180px 60px',
  },
  workHeading: {
    fontSize: 'clamp(32px, 6vw, 64px)',
    fontWeight: 900,
    letterSpacing: '2px',
    marginBottom: '100px',
    color: '#ffffff',
    textAlign: 'center',
  },
  workGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '100px',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  workCard: {
    background: '#000000',
    border: '6px solid #ffffff',
    boxShadow: '16px 16px 0 #000',
    padding: '32px',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    marginBottom: '32px',
    paddingBottom: '24px',
    borderBottom: '4px solid #ffffff',
  },
  logoWrapper: {
    flexShrink: 0,
  },
  logo: {
    display: 'block',
    boxShadow: '6px 6px 0 #000',
  },
  headerText: {
    flex: 1,
  },
  companyName: {
    fontSize: 'clamp(32px, 4vw, 48px)',
    fontWeight: 900,
    letterSpacing: '2px',
    color: '#ff00ff',
    marginBottom: '8px',
    lineHeight: '1',
  },
  companyTagline: {
    fontSize: '18px',
    fontWeight: 800,
    color: '#ffffff',
    letterSpacing: '0.5px',
    opacity: 0.9,
  },
  videoWrapper: {
    position: 'relative',
    width: '100%',
    aspectRatio: '16/9',
    overflow: 'hidden',
    border: '6px solid #ffffff',
    boxShadow: '16px 16px 0 #000',
    background: '#000000',
  },
  video: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  playOverlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
    opacity: 0.9,
  },

  // Footer
  footer: {
    textAlign: 'center',
    padding: '120px 60px 80px',
    borderTop: '6px solid #ffffff',
  },
  footerHeading: {
    fontSize: 'clamp(28px, 5vw, 48px)',
    fontWeight: 900,
    letterSpacing: '2px',
    marginBottom: '48px',
    color: '#ffffff',
  },
  footerLink: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '24px 56px',
    background: '#00ff00',
    color: '#000000',
    textDecoration: 'none',
    fontSize: '24px',
    fontWeight: 900,
    letterSpacing: '1px',
    border: '6px solid #ffffff',
    boxShadow: '12px 12px 0 #000',
    marginBottom: '60px',
  },
  copyright: {
    fontSize: '16px',
    fontWeight: 700,
    color: '#ffffff',
    opacity: 0.6,
    marginTop: '40px',
  },
};

export default Portfolio;
