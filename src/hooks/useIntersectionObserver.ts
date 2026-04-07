import { useEffect, useRef } from 'react';

/**
 * Runs a callback whenever the observed element enters/leaves the viewport.
 * Returns a ref to attach to the target element.
 */
export function useIntersectionObserver(
  callback: (isVisible: boolean) => void,
  options: IntersectionObserverInit = { threshold: 0.1 }
) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      callback(entry.isIntersecting);
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, [callback, options]);

  return ref;
}
