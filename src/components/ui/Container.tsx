import type { ReactNode, Ref } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  innerRef?: Ref<HTMLDivElement>;
}

/** Largura padrão do site: max-w 1200px + px-7, centralizado. */
export default function Container({ children, className = '', innerRef }: ContainerProps) {
  return (
    <div ref={innerRef} className={`max-w-container mx-auto px-7 ${className}`}>
      {children}
    </div>
  );
}
