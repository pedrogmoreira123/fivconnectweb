import { useEffect, useRef, useState } from 'react';

function shouldStartVisible() {
  if (typeof window === 'undefined') return false;
  const prefersReduced =
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Mostra de imediato se o usuário pediu menos movimento ou se o browser
  // não tem IntersectionObserver — nunca depender só do observer.
  return prefersReduced || !('IntersectionObserver' in window);
}

/**
 * Anima a entrada de uma seção quando ela aparece na viewport.
 *
 * Robustez (regra crítica do design):
 *  - `prefers-reduced-motion` ou ausência de IntersectionObserver:
 *    a seção já nasce visível (estado-base seguro).
 *  - Failsafe: mesmo que o observer nunca dispare, um timeout força a
 *    visibilidade — conteúdo nunca fica preso em opacity:0.
 */
export function useScrollAnimation(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(shouldStartVisible);

  useEffect(() => {
    if (isVisible) return;

    const el = ref.current;
    let observer: IntersectionObserver | undefined;

    if (el && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer?.disconnect();
          }
        },
        { threshold }
      );
      observer.observe(el);
    }

    // Failsafe: se o observer não disparar (ou não existir o elemento),
    // revela mesmo assim depois de um curto intervalo.
    const failsafe = window.setTimeout(() => setIsVisible(true), 1500);

    return () => {
      observer?.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [threshold, isVisible]);

  return { ref, isVisible };
}
