import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Only render on real pointer/mouse devices — and respect reduced motion
const isPointerDevice =
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isPointer, setIsPointer] = useState(false);

  const springConfig = { stiffness: 600, damping: 32, mass: 0.5 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  const outerSpringConfig = { stiffness: 200, damping: 22, mass: 0.8 };
  const outerX = useSpring(cursorX, outerSpringConfig);
  const outerY = useSpring(cursorY, outerSpringConfig);

  useEffect(() => {
    if (!isPointerDevice) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const checkPointer = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const style = window.getComputedStyle(target);
      setIsPointer(
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        style.cursor === 'pointer'
      );
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousemove', checkPointer);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousemove', checkPointer);
    };
  }, [cursorX, cursorY]);

  if (!isPointerDevice) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-orange-400/40"
        style={{
          x: outerX,
          y: outerY,
          width: isPointer ? 36 : 28,
          height: isPointer ? 36 : 28,
          translateX: isPointer ? -18 : -14,
          translateY: isPointer ? -18 : -14,
          transition: 'width 0.2s, height 0.2s',
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-orange-500"
        style={{
          x: springX,
          y: springY,
          width: isPointer ? 8 : 6,
          height: isPointer ? 8 : 6,
          translateX: isPointer ? -4 : -3,
          translateY: isPointer ? -4 : -3,
          boxShadow: '0 0 8px rgba(248,121,68,0.5)',
          transition: 'width 0.2s, height 0.2s',
        }}
      />
    </>
  );
}
