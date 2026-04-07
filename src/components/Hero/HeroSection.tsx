import { HeroCanvas } from './HeroCanvas';
import './Hero.css';

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* Canvas - code fills space and reflows around orbs + title zone */}
      <div className="hero-canvas-container">
        <HeroCanvas />
      </div>

      {/* Name block - Top Left, matching the new high-impact title placement */}
      <div className="hero-overlay">
        <p className="hero-tagline">
          // Full Stack Software Developer& Mentor
        </p>
        <h1 className="hero-name">
          AKASH<br />SAREEN
        </h1>
      </div>

      {/* Scroll indicator - Bottom Center */}
      <div className="hero-scroll">
        scroll
      </div>

      {/* Vignette effect */}
      <div className="hero-vignette" />
    </section>
  );
}
