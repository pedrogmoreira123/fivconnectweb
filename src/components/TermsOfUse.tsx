import { ArrowLeft } from 'lucide-react';
import { navigate } from '../hooks/useRoute';
import { useTheme } from '../hooks/useTheme';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h2>
      <div className="text-gray-600 dark:text-gray-300 leading-relaxed space-y-3 text-sm">
        {children}
      </div>
    </div>
  );
}

export default function TermsOfUse() {
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
            Termos de Uso
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Última atualização: <strong>a preencher</strong>
          </p>
        </div>

        {/* Intro */}
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-10 text-sm">
          Estes Termos de Uso ("Termos") regulam o acesso e uso da plataforma Fi.V Connect,
          operada pela Fi.V Soluções LTDA ("Fi.V Connect", "nós"). Ao criar uma conta ou utilizar
          nossos serviços, você ("Usuário") concorda integralmente com estes Termos. Caso não
          concorde, não utilize a plataforma.
        </p>

        <Section title="1. Aceitação dos Termos">
          <p>
            O uso da plataforma Fi.V Connect implica na aceitação plena e irrestrita destes Termos
            e da nossa Política de Privacidade. Reservamo-nos o direito de atualizar estes Termos
            a qualquer momento, notificando os usuários com antecedência mínima de 10 dias.
          </p>
        </Section>

        <Section title="2. Descrição dos Serviços">
          <p>
            O Fi.V Connect é uma plataforma SaaS (Software como Serviço) que oferece:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Gestão de atendimento via WhatsApp;</li>
            <li>Sistema de filas e tickets;</li>
            <li>Automação com chatbots e agentes de IA;</li>
            <li>Relatórios e métricas de atendimento;</li>
            <li>Gerenciamento de equipes e departamentos.</li>
          </ul>
          <p>
            Os serviços são prestados no modelo de assinatura mensal ou anual, conforme os planos
            disponíveis em nosso site.
          </p>
        </Section>

        <Section title="3. Cadastro e Conta">
          <p>
            Para utilizar o Fi.V Connect, é necessário criar uma conta com informações verdadeiras,
            completas e atualizadas. Você é responsável por:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Manter a confidencialidade de suas credenciais de acesso;</li>
            <li>Todas as atividades realizadas em sua conta;</li>
            <li>Notificar-nos imediatamente em caso de uso não autorizado.</li>
          </ul>
          <p>
            É proibido compartilhar credenciais entre usuários, salvo quando expressamente
            previsto no plano contratado.
          </p>
        </Section>

        <Section title="4. Período de Teste e Pagamento">
          <p>
            Todos os planos pagos incluem um período de teste gratuito de 7 (sete) dias, sem
            necessidade de cartão de crédito. Ao término do período de teste:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Sua conta será automaticamente convertida para o plano gratuito, salvo se você contratar um plano pago;</li>
            <li>O pagamento é processado no início de cada ciclo de cobrança;</li>
            <li>Os preços são exibidos em Reais (BRL) e estão sujeitos a alterações com aviso prévio.</li>
          </ul>
        </Section>

        <Section title="5. Cancelamento e Reembolso">
          <p>
            Você pode cancelar sua assinatura a qualquer momento diretamente pelo painel da
            plataforma, sem necessidade de contato com o suporte. O cancelamento:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Tem efeito ao término do período já pago;</li>
            <li>Não gera reembolso proporcional de valores já cobrados, salvo nos casos previstos na legislação brasileira;</li>
            <li>Mantém o acesso ativo até o fim do período contratado.</li>
          </ul>
          <p>
            Política de reembolso: [a preencher conforme decisão interna].
          </p>
        </Section>

        <Section title="6. Uso Aceitável">
          <p>É expressamente proibido utilizar o Fi.V Connect para:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Enviar spam, mensagens em massa não autorizadas ou conteúdo ilegal;</li>
            <li>Violar direitos de terceiros, incluindo privacidade e propriedade intelectual;</li>
            <li>Praticar qualquer ato que viole as políticas de uso do WhatsApp/Meta;</li>
            <li>Tentar comprometer a segurança, disponibilidade ou integridade da plataforma;</li>
            <li>Repassar acesso a terceiros sem autorização.</li>
          </ul>
          <p>
            O descumprimento dessas regras poderá resultar na suspensão ou cancelamento imediato
            da conta, sem direito a reembolso.
          </p>
        </Section>

        <Section title="7. Propriedade Intelectual">
          <p>
            Todos os direitos sobre a plataforma Fi.V Connect — incluindo código-fonte, design,
            marca, logotipo e conteúdo — pertencem exclusivamente à Fi.V Soluções LTDA. É
            proibida a reprodução, modificação, distribuição ou uso comercial sem autorização
            prévia e por escrito.
          </p>
          <p>
            Os dados gerados pelo uso da plataforma (conversas, relatórios, configurações)
            pertencem ao Usuário. A Fi.V Connect não reivindica propriedade sobre o conteúdo
            dos seus clientes.
          </p>
        </Section>

        <Section title="8. Disponibilidade e SLA">
          <p>
            Nos comprometemos a manter a plataforma disponível com o máximo de uptime possível.
            SLA (Acordo de Nível de Serviço): [a preencher — ex: 99,5% de disponibilidade mensal].
            Em caso de indisponibilidade, comunicaremos os usuários pelos canais oficiais.
          </p>
        </Section>

        <Section title="9. Limitação de Responsabilidade">
          <p>
            O Fi.V Connect é fornecido "no estado em que se encontra". Não nos responsabilizamos
            por danos indiretos, lucros cessantes ou perdas de dados decorrentes do uso ou
            impossibilidade de uso da plataforma, exceto nos casos previstos em lei.
          </p>
          <p>
            Nossa responsabilidade total está limitada ao valor pago pelo Usuário nos 3 meses
            anteriores ao evento que originou o dano.
          </p>
        </Section>

        <Section title="10. Legislação Aplicável e Foro">
          <p>
            Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito
            o foro da comarca de [a preencher — cidade/estado] para dirimir quaisquer
            controvérsias decorrentes destes Termos, com renúncia expressa a qualquer outro,
            por mais privilegiado que seja.
          </p>
        </Section>

        <Section title="11. Contato">
          <p>
            Dúvidas, reclamações ou solicitações relacionadas a estes Termos:
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
