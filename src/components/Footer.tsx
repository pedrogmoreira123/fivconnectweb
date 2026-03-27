import { Globe, Link2, ExternalLink, Code2 } from 'lucide-react';

const footerLinks = {
  Produto: [
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Funcionalidades', href: '#funcionalidades' },
    { label: 'Planos e Preços', href: '#planos' },
    { label: 'FAQ', href: '#faq' },
  ],
  Empresa: [
    { label: 'Sobre Nós', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Carreiras', href: '#' },
    { label: 'Contato', href: 'mailto:contato@fivconnect.net' },
  ],
  Legal: [
    { label: 'Política de Privacidade', href: '#' },
    { label: 'Termos de Uso', href: '#' },
    { label: 'Cookies', href: '#' },
    { label: 'LGPD', href: '#' },
  ],
};

const socials = [
  { icon: Globe, label: 'Instagram', href: '#' },
  { icon: Link2, label: 'LinkedIn', href: '#' },
  { icon: ExternalLink, label: 'Twitter / X', href: '#' },
  { icon: Code2, label: 'GitHub', href: '#' },
];

export default function Footer() {

  return (
    <footer className="bg-gray-900 dark:bg-[hsl(240,11%,13%)] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo-branca.png"
                alt="FivConnect"
                className="h-7 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Atendimento via WhatsApp inteligente para PMEs. Simplifique, automatize e cresça.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-gray-800 dark:bg-white/10 flex items-center justify-center hover:bg-gray-700 dark:hover:bg-white/20 transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white text-sm font-semibold mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 dark:border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            © {new Date().getFullYear()} FivConnect. Todos os direitos reservados.
          </p>
          <p className="text-xs">
            Feito com ♥ no Brasil · Powered by{' '}
            <span className="text-orange-400">Fi.V Soluções LTDA.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
