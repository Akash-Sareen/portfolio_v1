import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import styles from './Hero.module.css';
import { RESUME_URL } from '../../data/portfolio';

const PARTICLE_COUNT = 4000;

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const isVisible = useRef(true);

  const sectionRef = useIntersectionObserver((visible) => {
    isVisible.current = visible;
  }) as React.RefObject<HTMLElement>;

  // Mount animation for hero content (not scroll-triggered, so text is never hidden)
  useEffect(() => {
    if (!contentRef.current) return;
    const els = contentRef.current.querySelectorAll('[data-hero]');
    gsap.fromTo(
      els,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out', delay: 1.6 }
    );
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    const getCameraZ = () => window.innerWidth < 768 ? 8 : 5;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(65, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
    camera.position.z = getCameraZ();

    // Particle field (toroid shape)
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const u = Math.random() * Math.PI * 2;
      const v = Math.random() * Math.PI * 2;
      const R = 2.2, r = 0.9;
      positions[i * 3] = (R + r * Math.cos(v)) * Math.cos(u);
      positions[i * 3 + 1] = (R + r * Math.cos(v)) * Math.sin(u);
      positions[i * 3 + 2] = r * Math.sin(v);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({ size: 0.025, color: 0x00f5ff, transparent: true, opacity: 0.75 });
    const points = new THREE.Points(geo, mat);
    points.position.x = window.innerWidth > 768 ? 1.2 : 0;
    scene.add(points);

    // Grid horizon
    const grid = new THREE.GridHelper(30, 40, 0x00f5ff, 0x001a1f);
    grid.position.y = -3;
    (grid.material as THREE.LineBasicMaterial).opacity = 0.15;
    (grid.material as THREE.LineBasicMaterial).transparent = true;
    scene.add(grid);

    const onMouse = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouse);

    const onResize = () => {
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.position.z = getCameraZ();
      points.position.x = window.innerWidth > 768 ? 1.2 : 0;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    };
    window.addEventListener('resize', onResize);

    let clock = 0;
    const loop = () => {
      if (isVisible.current) {
        clock += 0.003;
        points.rotation.y += 0.0025 + mouseRef.current.x * 0.0008;
        points.rotation.x += 0.0008 + mouseRef.current.y * 0.0005;
        mat.opacity = 0.65 + Math.sin(clock) * 0.1;
        renderer.render(scene, camera);
      }
      animRef.current = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
    };
  }, []);

  return (
    <section id="hero" ref={sectionRef as React.RefObject<HTMLElement>} className={styles.hero}>
      <canvas ref={canvasRef} className={styles.canvas} style={{ touchAction: 'pan-y' }} />

      <div ref={contentRef} className={styles.content}>
        <p data-hero="" className={`section-label ${styles.preTitle}`}>// Full Stack Software Developer & Mentor //</p>
        <h1 data-hero="" className={styles.name}>AKASH<br />SAREEN</h1>
        <p data-hero="" className={styles.subtitle}>
          Building scalable systems&nbsp;&nbsp;<span className={styles.typeCursor}>|</span>
        </p>
        <div data-hero="" className={styles.ctas}>
          <a href="#projects" className="btn-terminal">[ VIEW MY WORK ]</a>
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className={`btn-terminal ${styles.btnOutline}`}>
            [ RESUME ↗ ]
          </a>
        </div>
        <div className={styles.scrollIndicator} aria-hidden="true">
          <span>SCROLL</span>
          <div className={styles.line} />
        </div>
      </div>
    </section>
  );
}
