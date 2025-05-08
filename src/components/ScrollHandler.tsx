'use client';

import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import Lenis from 'lenis';

export default function ScrollHandler() {
  const projectRef = useRef(null);
  const isInView = useInView(projectRef, { once: true, margin: '-100px' });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return <div ref={projectRef}>{/* content */}</div>;
}
