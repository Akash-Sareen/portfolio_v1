import { useRef, useEffect, useCallback } from 'react';
import * as THREE from 'three';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { ABOUT_SHORT, STATS } from '../../data/portfolio';
import StatCounter from './StatCounter';
import styles from './About.module.css';

export default function AboutSection() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef(0);
  const isVisible = useRef(false);

  const handleVisibility = useCallback((visible: boolean) => {
    isVisible.current = visible;
  }, []);
  const observerRef = useIntersectionObserver(handleVisibility);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
    camera.position.z = 4;

    const geo = new THREE.IcosahedronGeometry(2, 2);
    const wireGeo = new THREE.WireframeGeometry(geo);
    const mat = new THREE.LineBasicMaterial({ color: 0x00f5ff, opacity: 0.18, transparent: true });
    const wireframe = new THREE.LineSegments(wireGeo, mat);
    scene.add(wireframe);

    const onResize = () => {
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    };
    window.addEventListener('resize', onResize);

    const loop = () => {
      if (isVisible.current) {
        wireframe.rotation.y += 0.003;
        wireframe.rotation.x += 0.001;
        renderer.render(scene, camera);
      }
      animRef.current = requestAnimationFrame(loop);
    };
    animRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
    };
  }, []);

  return (
    <section
      id="about"
      ref={(el) => {
        (sectionRef as React.MutableRefObject<HTMLElement | null>).current = el;
        (observerRef as React.MutableRefObject<HTMLElement | null>).current = el;
      }}
      className={styles.section}
    >
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.overlay} />

      <div className={`section-content ${styles.content}`}>
        <p className={`section-label reveal ${styles.label}`}>// 001 ABOUT //</p>

        <div className={styles.grid}>
          {/* Stats Column - Left */}
          <div className={styles.statsCol}>
            {STATS.map((s) => (
              <StatCounter key={s.label} {...s} />
            ))}
          </div>

          {/* Text Column - Right */}
          <div className={styles.textCol}>
            <div className={styles.rulerBorder}>
              <h2 className={`${styles.heading} reveal`}>Full Stack Developer<br />& Mentor</h2>
              <p className={`${styles.body} reveal`}>{ABOUT_SHORT}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
