import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { SKILLS } from '../../data/portfolio';
import { getSkillIcon } from '../../utils/skillIcons';
import styles from './Skills.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function SkillsSection() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.bento-card', 
        { opacity: 0, y: 50 }, 
        { 
          opacity: 1, y: 0, 
          stagger: 0.1, 
          duration: 0.8, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
          }
        }
      );
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className={`noise-overlay ${styles.section}`}>
      <div className={`section-content ${styles.content}`}>
        <p className={styles.bgLabel} aria-hidden="true">// 002</p>
        <p className={`section-label reveal ${styles.label}`}>// 002 SKILLS & TECHNOLOGIES</p>

        <div ref={gridRef} className={styles.bentoGrid}>
          {SKILLS.map((group, i) => (
            <div key={group.category} className={`bento-card ${styles.card}`}>
              <div className={styles.cardHeader}>
                <span className={styles.cardNumber}>0{i + 1}</span>
                <h3 className={styles.cardTitle}>{group.category}</h3>
              </div>
              <div className={styles.skillList}>
                {group.items.map((skill) => (
                  <div key={skill} className={styles.skillItem}>
                    <span className={styles.iconWrap}>{getSkillIcon(skill)}</span>
                    <span className={styles.skillName}>{skill}</span>
                  </div>
                ))}
              </div>
              <div className={styles.cardGlow} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
