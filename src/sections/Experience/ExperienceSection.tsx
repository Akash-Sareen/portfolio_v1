import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { EXPERIENCE } from '../../data/portfolio';
import styles from './Experience.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceSection() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;
  const lineRef = useRef<SVGLineElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;
    const length = line.getTotalLength?.() ?? 800;
    gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });
    gsap.to(line, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: svgRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1,
      },
    });
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className={`scanlines ${styles.section}`}
    >
      <div className={`section-content ${styles.content}`}>
        <p className={`section-label ${styles.bgLabel}`}>// 004 //</p>
        <p className={`section-label reveal ${styles.label}`}>// 004 EXPERIENCE //</p>

        <div className={styles.timelineWrap}>
          {/* SVG line */}
          <svg ref={svgRef} className={styles.svg} aria-hidden="true">
            <line
              ref={lineRef}
              x1="50%" y1="0"
              x2="50%" y2="100%"
              stroke="rgba(0,245,255,0.5)"
              strokeWidth="1"
            />
          </svg>

          {/* Entries */}
          <div className={styles.entries}>
            {EXPERIENCE.map((exp, i) => (
              <div key={exp.id} className={`reveal ${styles.entry} ${i % 2 === 0 ? styles.left : styles.right}`}>
                <div className={styles.nodeCircle} />
                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div>
                      <span className={styles.role}>{exp.role}</span>
                      <h3 className={styles.company}>{exp.company}</h3>
                    </div>
                    <div className={styles.meta}>
                      <span className={styles.timeline}>{exp.timeline}</span>
                      <span className={styles.location}>{exp.location}</span>
                    </div>
                  </div>
                  <p className={styles.tech}>
                    <span className={styles.techLabel}>Tech: </span>{exp.technologies}
                  </p>
                  <ul className={styles.bullets}>
                    {exp.work.map((w, wi) => (
                      <li key={wi}>{w}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
