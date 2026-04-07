import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './LoadingScreen.module.css';

interface Props {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: Props) {
  const screenRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(screenRef.current, {
          opacity: 0,
          duration: 0.6,
          ease: 'power2.in',
          onComplete,
        });
      },
    });

    tl.to(barRef.current, { width: '100%', duration: 1.4, ease: 'power1.inOut' })
      .to(textRef.current, { opacity: 0, duration: 0.3 }, '-=0.1');
  }, [onComplete]);

  return (
    <div ref={screenRef} className={styles.screen}>
      <div className={styles.inner}>
        <span ref={textRef} className={styles.label}>INITIALIZING SYSTEM...</span>
        <div className={styles.track}>
          <div ref={barRef} className={styles.bar} />
        </div>
        <span className={styles.sub}>akashsareen.dev</span>
      </div>
    </div>
  );
}
