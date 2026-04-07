import { useScrollReveal } from '../../hooks/useScrollReveal';
import { PROJECTS } from '../../data/portfolio';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

export default function ProjectsSection() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;

  return (
    <section id="projects" ref={sectionRef} className={styles.section}>
      <div className={`section-content ${styles.content}`}>
        <p className={`section-label reveal ${styles.label}`}>// 003 PROJECTS //</p>
        <h2 className={`${styles.heading} reveal`}>Selected Work</h2>

        <div className={styles.grid}>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} featured={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
