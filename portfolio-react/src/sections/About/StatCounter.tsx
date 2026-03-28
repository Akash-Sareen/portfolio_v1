import { useRef, useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import type { StatItem } from '../../types';
import styles from './About.module.css';

export default function StatCounter({ value, suffix, label }: StatItem) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  const ref = useIntersectionObserver((visible) => {
    if (visible && !started.current) {
      started.current = true;
      let start = 0;
      const step = Math.ceil(value / 40);
      const interval = setInterval(() => {
        start += step;
        if (start >= value) { setCount(value); clearInterval(interval); }
        else setCount(start);
      }, 30);
    }
  });

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={styles.stat}>
      <span className={styles.statValue}>{count}{suffix}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}
