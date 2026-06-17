export default function LogoStrip() {
  const brands = [
    { name: 'Gráfica Sol', serif: true },
    { name: 'salãoClaro', serif: false },
    { name: 'Lojas Mirim', serif: true },
    { name: 'petbox', serif: false },
    { name: 'Dra. Helena', serif: true },
    { name: 'ateliê & Co.', serif: false },
  ];

  return (
    <div
      className="py-10 border-t border-b"
      style={{ borderColor: 'var(--line)', background: 'var(--cream-2)' }}
    >
      <div className="max-w-[1200px] mx-auto px-7">
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
          <span
            className="text-[11px] font-semibold tracking-[0.12em] uppercase whitespace-nowrap flex-shrink-0"
            style={{ color: 'var(--ink-3)' }}
          >
            PMEs no acesso antecipado
          </span>
          <div
            className="flex flex-wrap justify-center sm:justify-start items-center gap-x-8 gap-y-3"
          >
            {brands.map(b => (
              <span
                key={b.name}
                className="text-base font-semibold opacity-50 hover:opacity-80 transition-opacity"
                style={{
                  fontFamily: b.serif ? 'Fraunces, Georgia, serif' : 'Plus Jakarta Sans, system-ui, sans-serif',
                  color: 'var(--ink)',
                }}
              >
                {b.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
