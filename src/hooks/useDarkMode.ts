import { useState, useEffect } from 'react';

/**
 * Reactively tracks whether the site is in dark mode by observing
 * the `dark` class on <html>. Works with the existing useTheme toggle.
 */
export function useDarkMode(): boolean {
  const [isDark, setIsDark] = useState<boolean>(() =>
    document.documentElement.classList.contains('dark'),
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return isDark;
}
