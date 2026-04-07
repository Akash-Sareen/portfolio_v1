import { useRef } from 'react';
import type { Project } from '../../types';
import styles from './Projects.module.css';

interface Props {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const rotateX = ((e.clientY - cy) / rect.height) * -8;
    const rotateY = ((e.clientX - cx) / rect.width) * 8;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`;
  };

  const onMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)';
  };

  const techTags = project.tech.split(',').map((t) => t.trim()).filter(Boolean);

  return (
    <div
      ref={cardRef}
      className={`reveal ${styles.card} ${featured ? styles.featured : ''}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* Terminal title bar */}
      <div className={styles.titleBar}>
        <div className={styles.dots}>
          <span className={styles.dotRed} />
          <span className={styles.dotYellow} />
          <span className={styles.dotGreen} />
        </div>
        <span className={styles.windowTitle}>{project.title.toLowerCase().replace(/ /g, '_')}.exe</span>
      </div>

      {/* Body */}
      <div className={styles.body}>
        <h3 className={styles.projectName}>{project.title}</h3>
        <p className={styles.desc}>{project.desc}</p>

        <div className={styles.tags}>
          {techTags.map((t) => <span key={t} className="tag-pill">{t}</span>)}
        </div>
      </div>

      {/* Status bar / footer links */}
      <div className={styles.statusBar}>
        {project.livedemo ? (
          <a href={project.livedemo} target="_blank" rel="noopener noreferrer" className={styles.termLink}>
            [LIVE]
          </a>
        ) : (
          <span className={styles.termLinkDisabled}>[NO DEMO]</span>
        )}
        {project.githurl ? (
          <a href={project.githurl} target="_blank" rel="noopener noreferrer" className={styles.termLink}>
            [GITHUB]
          </a>
        ) : (
          <span className={styles.termLinkDisabled}>[PRIVATE]</span>
        )}
        <span className={styles.statusDot} />
        <span className={styles.statusText}>READY</span>
      </div>
    </div>
  );
}
