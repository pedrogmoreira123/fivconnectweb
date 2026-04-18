import { ArrowLeft } from 'lucide-react';
import { navigate } from '../hooks/useRoute';
import { useTheme } from '../hooks/useTheme';

function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className="mb-10 scroll-mt-8">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h2>
      <div className="text-gray-600 dark:text-gray-300 leading-relaxed space-y-3 text-sm">
        {children}
      </div>
    </div>
  );
}

export default function PrivacyPolicy() {
  const { theme } = useTheme();
  const logoSrc = theme === 'dark' ? '/logo-branca.png' : '/logo-preta.png';

  return (
    <div className="min-h-screen bg-cream-50 dark:bg-[hsl(25,8%,13%)] transition-colors duration-300">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-white/10 bg-cream-50/90 dark:bg-[hsl(25,8%,13%)]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
            <img src={logoSrc} alt="Fi.V Connect" className="h-7 w-auto" />
          </a>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
          >
            <ArrowLeft size={16} />
            Voltar ao site
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Title */}
        <div className="mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 text-xs font-semibold tracking-wider mb-4">
            LEGAL
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Política de Privacidade
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Última atualização: <strong>a preencher</strong>
          </p>
        </div>

        {/* Intro */}
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-10 text-sm">
          A Fi.V Soluções LTDA ("Fi.V Connect", "nós") respeita a privacidade dos seus usuários.
          Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos
          as informações pessoais fornecidas ao utilizar nossos serviços. Ao acessar ou usar o
          Fi.V Connect, você concorda com os termos desta política.
        </p>

        <Section title="1. Quem somos">
          <p>
            <strong className="text-gray-800 dark:text-gray-100">Razão social:</strong> Fi.V Soluções LTDA<br />
            <strong className="text-gray-800 dark:text-gray-100">CNPJ:</strong> [a preencher]<br />
            <strong className="text-gray-800 dark:text-gray-100">Endereço:</strong> [a preencher]<br />
            <strong className="text-gray-800 dark:text-gray-100">E-mail do DPO:</strong> contato@fivconnect.net
          </p>
        </Section>

        <Section title="2. Dados que coletamos">
          <p>Coletamos as seguintes categorias de dados pessoais:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong className="text-gray-800 dark:text-gray-100">Dados de cadastro:</strong> nome, e-mail, telefone, razão social e CNPJ.</li>
            <li><strong className="text-gray-800 dark:text-gray-100">Dados de uso:</strong> registros de acesso, funcionalidades utilizadas, logs de sistema e métricas de desempenho.</li>
            <li><strong className="text-gray-800 dark:text-gray-100">Dados de pagamento:</strong> gerenciados por nosso processador de pagamentos. Não armazenamos dados de cartão em nossos servidores.</li>
            <li><strong className="text-gray-800 dark:text-gray-100">Dados de comunicação:</strong> mensagens trocadas via WhatsApp gerenciadas pela plataforma, conforme autorizado pelo cliente.</li>
            <li><strong className="text-gray-800 dark:text-gray-100">Dados de dispositivo:</strong> endereço IP, tipo de navegador, sistema operacional e identificadores de dispositivo.</li>
          </ul>
        </Section>

        <Section title="3. Como usamos seus dados">
          <p>Utilizamos seus dados para:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Fornecer e operar os serviços contratados;</li>
            <li>Processar pagamentos e emitir cobranças;</li>
            <li>Enviar comunicações sobre o produto, atualizações e suporte técnico;</li>
            <li>Melhorar continuamente a plataforma com base nos padrões de uso;</li>
            <li>Cumprir obrigações legais e regulatórias;</li>
            <li>Prevenir fraudes e garantir a segurança da plataforma.</li>
          </ul>
        </Section>

        <Section title="4. Compartilhamento de dados">
          <p>
            Não vendemos seus dados pessoais. Podemos compartilhar informações com:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong className="text-gray-800 dark:text-gray-100">Prestadores de serviço:</strong> empresas que nos auxiliam na operação da plataforma (infraestrutura em nuvem, processamento de pagamentos, e-mail transacional), sempre sob acordos de confidencialidade;</li>
            <li><strong className="text-gray-800 dark:text-gray-100">Autoridades públicas:</strong> quando exigido por lei, regulamento ou ordem judicial;</li>
            <li><strong className="text-gray-800 dark:text-gray-100">Parceiros comerciais:</strong> somente com seu consentimento expresso.</li>
          </ul>
        </Section>

        <Section id="cookies" title="5. Cookies e tecnologias de rastreamento">
          <p>
            Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência na plataforma.
            Os cookies podem ser:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong className="text-gray-800 dark:text-gray-100">Essenciais:</strong> necessários para o funcionamento básico da plataforma (sessão, autenticação);</li>
            <li><strong className="text-gray-800 dark:text-gray-100">Analíticos:</strong> nos ajudam a entender como a plataforma é usada (Google Analytics, etc.);</li>
            <li><strong className="text-gray-800 dark:text-gray-100">Funcionais:</strong> lembram suas preferências (tema, idioma).</li>
          </ul>
          <p>
            Você pode desabilitar cookies nas configurações do seu navegador, mas isso pode afetar
            algumas funcionalidades da plataforma.
          </p>
        </Section>

        <Section title="6. Retenção de dados">
          <p>
            Mantemos seus dados pessoais enquanto sua conta estiver ativa. Após o cancelamento,
            os dados são retidos por até [a preencher] dias para fins de auditoria e cumprimento
            de obrigações legais, após os quais são excluídos ou anonimizados.
          </p>
        </Section>

        <Section title="7. Segurança">
          <p>
            Adotamos medidas técnicas e organizacionais para proteger seus dados, incluindo:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Criptografia AES-256 em repouso e TLS 1.2+ em trânsito;</li>
            <li>Controle de acesso baseado em perfis (RBAC);</li>
            <li>Monitoramento contínuo de infraestrutura 24h;</li>
            <li>Backups regulares com retenção segura.</li>
          </ul>
          <p>
            Em caso de incidente de segurança que possa afetar seus dados, notificaremos você e
            as autoridades competentes nos prazos legais.
          </p>
        </Section>

        <Section id="lgpd" title="8. Seus direitos (LGPD)">
          <p>
            Nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Confirmar a existência de tratamento de seus dados;</li>
            <li>Acessar os dados que temos sobre você;</li>
            <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
            <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários;</li>
            <li>Revogar o consentimento a qualquer momento;</li>
            <li>Solicitar a portabilidade dos seus dados;</li>
            <li>Se opor ao tratamento realizado em descumprimento à lei.</li>
          </ul>
          <p>
            Para exercer seus direitos, entre em contato pelo e-mail{' '}
            <a href="mailto:contato@fivconnect.net" className="text-orange-500 hover:underline">
              contato@fivconnect.net
            </a>
            . Responderemos em até 15 dias úteis.
          </p>
        </Section>

        <Section title="9. Alterações nesta política">
          <p>
            Podemos atualizar esta Política de Privacidade periodicamente. Quando o fizermos,
            notificaremos você por e-mail ou por aviso na plataforma com pelo menos 10 dias de
            antecedência. O uso continuado da plataforma após as alterações implica concordância
            com a nova política.
          </p>
        </Section>

        <Section title="10. Contato">
          <p>
            Dúvidas sobre esta política ou sobre o tratamento dos seus dados:
          </p>
          <p>
            <strong className="text-gray-800 dark:text-gray-100">E-mail:</strong>{' '}
            <a href="mailto:contato@fivconnect.net" className="text-orange-500 hover:underline">
              contato@fivconnect.net
            </a><br />
            <strong className="text-gray-800 dark:text-gray-100">WhatsApp:</strong>{' '}
            <a href="https://wa.me/5511944745067" className="text-orange-500 hover:underline">
              +55 11 94474-5067
            </a>
          </p>
        </Section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-white/10 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2026 Fi.V Connect — Fi.V Soluções LTDA. Todos os direitos reservados.
          </p>
          <button
            onClick={() => navigate('/')}
            className="text-xs text-orange-500 hover:underline font-medium"
          >
            Voltar ao site
          </button>
        </div>
      </footer>
    </div>
  );
}
