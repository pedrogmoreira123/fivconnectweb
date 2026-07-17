import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react';
import { navigate } from '../../hooks/useRoute';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

/**
 * Âncora que navega internamente via History API (sem recarregar a página)
 * para hrefs iniciados por "/". Hrefs externos e âncoras (#) seguem o padrão.
 */
export default function Link({ href, onClick, children, ...rest }: LinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;
    const isInternal = href?.startsWith('/') && !href.startsWith('//');
    const isPlainClick = e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;
    if (isInternal && isPlainClick) {
      e.preventDefault();
      navigate(href!);
    }
  };

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
