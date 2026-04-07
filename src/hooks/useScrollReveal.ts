import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Fades + slides up child elements with class `.reveal` when the section
 * scrolls into view.
 */
export function useScrollReveal(stagger = 0.12) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.reveal', el).forEach((target) => {
        gsap.fromTo(
          target,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            stagger,
            scrollTrigger: {
              trigger: target,
              start: 'top 88%',
              once: true,
            },
          }
        );
      });
    }, el);

    return () => ctx.revert();
  }, [stagger]);

  return ref;
}
