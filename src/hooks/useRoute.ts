import { useState, useEffect } from 'react';

export function useRoute() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handler);
    return () => window.removeEventListener('popstate', handler);
  }, []);

  return path;
}

export function navigate(to: string) {
  window.history.pushState({}, '', to);
  window.dispatchEvent(new PopStateEvent('popstate'));
  // Âncora na mesma página: o path não muda, então o scroll é feito aqui.
  // (Entre páginas o efeito de rota do App cuida, após o render do destino.)
  const hashIndex = to.indexOf('#');
  if (hashIndex >= 0) {
    const hash = to.slice(hashIndex);
    requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }));
  }
}
