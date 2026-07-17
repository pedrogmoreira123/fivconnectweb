import { Hammer, CalendarClock } from 'lucide-react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Eyebrow from '../components/ui/Eyebrow';
import SectionTitle, { Accent } from '../components/ui/SectionTitle';
import CTASection from '../components/CTASection';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { CHANGELOG, ROADMAP, type ChangeTag } from '../data/changelog';

const TAG_STYLE: Record<ChangeTag, { label: string; color: string; bg: string }> = {
  novo: { label: 'Novo', color: 'var(--green)', bg: 'var(--green-soft)' },
  melhoria: { label: 'Melhoria', color: 'var(--coral-700)', bg: 'var(--coral-soft)' },
  correcao: { label: 'Correção', color: 'var(--purple)', bg: 'rgba(108,92,231,0.12)' },
};

const STATUS_STYLE = {
  desenvolvimento: { label: 'Em desenvolvimento', icon: Hammer, color: 'var(--amber-c)', bg: 'rgba(232,146,60,0.12)' },
  planejado: { label: 'Planejado', icon: CalendarClock, color: 'var(--ink-3)', bg: 'var(--muted)' },
} as const;

function Roadmap() {
  const { ref, isVisible } = useScrollAnimation();
  if (ROADMAP.length === 0) return null;

  return (
    <Section tone="cream-2" compact>
      <Container innerRef={ref}>
        <div className={`mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Eyebrow className="mb-4">O que vem por aí</Eyebrow>
          <SectionTitle className="!text-3xl sm:!text-4xl">
            Em construção, <Accent>a caminho.</Accent>
          </SectionTitle>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {ROADMAP.map(item => {
            const s = STATUS_STYLE[item.status];
            const Icon = s.icon;
            return (
              <div key={item.title} className="rounded-2xl p-6 border" style={{ background: 'var(--surface)', borderColor: 'var(--line)' }}>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full mb-4" style={{ color: s.color, background: s.bg }}>
                  <Icon size={12} />
                  {s.label}
                </span>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'var(--ink)' }}>{item.title}</h3>
                <p className="text-[14px] leading-relaxed" style={{ color: 'var(--ink-2)' }}>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

function Changelog() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <Section compact>
      <Container innerRef={ref} className="max-w-[820px]">
        <div className={`mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Eyebrow className="mb-4">Lançamentos</Eyebrow>
          <SectionTitle className="!text-3xl sm:!text-4xl">
            O que já <Accent>chegou.</Accent>
          </SectionTitle>
        </div>

        <div className={`flex flex-col transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {CHANGELOG.map((entry, i) => {
            const tag = TAG_STYLE[entry.tag];
            const last = i === CHANGELOG.length - 1;
            return (
              <article key={entry.title} className="flex gap-5 sm:gap-7">
                {/* Trilho da timeline */}
                <div className="flex flex-col items-center" aria-hidden="true">
                  <span className="w-3 h-3 rounded-full border-2 flex-shrink-0 mt-1.5" style={{ borderColor: tag.color, background: 'var(--cream)' }} />
                  {!last && <span className="w-px flex-1 my-1" style={{ background: 'var(--line-2)' }} />}
                </div>

                <div className={last ? 'pb-0' : 'pb-12'}>
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <time className="text-[12px] font-medium" style={{ color: 'var(--ink-3)', fontFamily: '"JetBrains Mono", monospace' }}>
                      {entry.date}
                    </time>
                    <span className="text-[10.5px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide" style={{ color: tag.color, background: tag.bg }}>
                      {tag.label}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl mb-3" style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 600, color: 'var(--ink)' }}>
                    {entry.title}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {entry.items.map(item => (
                      <li key={item} className="flex items-start gap-2.5 text-[14.5px] leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                        <span className="w-1 h-1 rounded-full flex-shrink-0 mt-2.5" style={{ background: 'var(--coral)' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

export default function Novidades() {
  return (
    <main>
      <Section className="!pt-40 !pb-4">
        <Container className="text-center">
          <Eyebrow className="mb-5 justify-center">Novidades</Eyebrow>
          <SectionTitle as="h1" className="mb-6">
            O produto não para de <Accent>evoluir.</Accent>
          </SectionTitle>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--ink-2)' }}>
            Acompanhe o que acabou de chegar na plataforma e o que está sendo construído agora.
          </p>
        </Container>
      </Section>

      <Changelog />
      <Roadmap />
      <CTASection />
    </main>
  );
}
