import { ArrowLeft } from 'lucide-react';
import { navigate } from '../hooks/useRoute';
import { useTheme } from '../hooks/useTheme';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--ink)' }}>{title}</h2>
      <div className="space-y-3 text-sm leading-relaxed" style={{ color: 'var(--ink-2)' }}>
        {children}
      </div>
    </div>
  );
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-xl border my-4" style={{ borderColor: 'var(--line-2)' }}>
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr style={{ background: 'var(--cream-2)' }}>
            {headers.map(h => (
              <th key={h} className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wide" style={{ color: 'var(--ink-3)', borderBottom: '1px solid var(--line-2)' }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? 'transparent' : 'var(--cream-2)' }}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 align-top" style={{ color: 'var(--ink-2)', borderBottom: i < rows.length - 1 ? '1px solid var(--line)' : 'none' }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mr-1 mb-1"
      style={{ background: 'var(--coral-soft)', color: 'var(--coral)' }}
    >
      {children}
    </span>
  );
}

export default function LGPD() {
  const { theme } = useTheme();
  const logoSrc = theme === 'dark' ? '/logo-branca.svg' : '/logo-preta.svg';

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ background: 'var(--cream)', color: 'var(--ink)' }}>
      {/* Header */}
      <header
        className="border-b sticky top-0 z-50 backdrop-blur-md"
        style={{ backgroundColor: 'color-mix(in srgb, var(--cream) 90%, transparent)', borderColor: 'var(--line)' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
            <img src={logoSrc} alt="Fi.V Connect" className="h-10 w-auto" />
          </a>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
            style={{ color: 'var(--ink-2)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--coral)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-2)')}
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
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider mb-4"
            style={{ background: 'var(--coral-soft)', color: 'var(--coral)' }}
          >
            COMPLIANCE · LEI 13.709/2018
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'var(--ink)' }}>
            Política de Adequação à LGPD
          </h1>
          <p className="text-sm" style={{ color: 'var(--ink-3)' }}>
            Última atualização: <strong>Maio de 2026</strong> · Vigência: Lei Federal nº 13.709/2018
          </p>
        </div>

        {/* Intro */}
        <p className="text-sm leading-relaxed mb-10" style={{ color: 'var(--ink-2)' }}>
          A <strong>Fi.V Connect LTDA</strong> ("Fi.V Connect", "nós", "Controlador") está comprometida com a proteção dos dados pessoais tratados por meio da plataforma Fi.V Connect, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD — Lei Federal nº 13.709/2018) e com as diretrizes da Autoridade Nacional de Proteção de Dados (ANPD). Este documento descreve as práticas de tratamento de dados adotadas pela plataforma, os direitos dos titulares e os canais de exercício desses direitos.
        </p>

        <Section title="1. Identificação do Controlador e do Encarregado">
          <p><strong>Controlador:</strong> Fi.V Connect LTDA · CNPJ: 66.624.400/0001-86</p>
          <p><strong>Endereço:</strong> [endereço completo]</p>
          <p><strong>Encarregado (DPO):</strong> [nome do encarregado] · <a href="mailto:dpo@fivconnect.net" style={{ color: 'var(--coral)' }}>dpo@fivconnect.net</a></p>
          <p className="text-xs mt-2" style={{ color: 'var(--ink-3)' }}>
            O encarregado é o canal oficial para solicitações de titulares e comunicação com a ANPD.
          </p>
        </Section>

        <Section title="2. Natureza da Plataforma e Papel dos Agentes">
          <p>
            O Fi.V Connect é uma plataforma SaaS de gestão de atendimento via WhatsApp. Na operação da plataforma coexistem dois papéis distintos perante a LGPD:
          </p>
          <div className="rounded-xl border p-4 my-4 space-y-3" style={{ borderColor: 'var(--line-2)', background: 'var(--cream-2)' }}>
            <div>
              <p className="font-semibold text-sm mb-1" style={{ color: 'var(--ink)' }}>Fi.V Connect LTDA — Controlador</p>
              <p>Determina a finalidade e os meios do tratamento dos dados dos usuários operadores (colaboradores e administradores das empresas clientes).</p>
            </div>
            <div style={{ borderTop: '1px solid var(--line)', paddingTop: '12px' }}>
              <p className="font-semibold text-sm mb-1" style={{ color: 'var(--ink)' }}>Empresas Clientes — Controladoras independentes dos dados dos consumidores finais</p>
              <p>Cada empresa que contrata o Fi.V Connect é controladora dos dados pessoais dos seus próprios clientes (consumidores finais que interagem via WhatsApp). O Fi.V Connect atua como <strong>Operador</strong> nessa relação, tratando esses dados exclusivamente conforme instruções do contratante e nos limites do contrato de serviço.</p>
            </div>
          </div>
        </Section>

        <Section title="3. Dados Pessoais Tratados">
          <p className="mb-2">A plataforma trata duas categorias de titulares:</p>

          <p className="font-semibold mt-4 mb-2" style={{ color: 'var(--ink)' }}>3.1 Dados dos Operadores (colaboradores das empresas clientes)</p>
          <Table
            headers={['Dado', 'Finalidade', 'Base Legal (LGPD)']}
            rows={[
              ['Nome completo', 'Identificação na plataforma, atribuição de atendimentos', 'Execução de contrato (art. 7º, V)'],
              ['Endereço de e-mail', 'Acesso à conta, notificações, convites de primeiro acesso', 'Execução de contrato (art. 7º, V)'],
              ['Número de telefone', 'Contato de suporte, verificação', 'Legítimo interesse (art. 7º, IX)'],
              ['Senha (hash bcrypt)', 'Autenticação segura', 'Execução de contrato (art. 7º, V)'],
              ['Logs de acesso e auditoria', 'Segurança, rastreabilidade de ações na plataforma', 'Cumprimento de obrigação legal (art. 7º, II)'],
              ['Status online / última atividade', 'Gestão de disponibilidade da equipe de atendimento', 'Execução de contrato (art. 7º, V)'],
              ['Dados de faturamento (via Asaas)', 'Cobrança pelo serviço contratado', 'Execução de contrato (art. 7º, V)'],
            ]}
          />

          <p className="font-semibold mt-6 mb-2" style={{ color: 'var(--ink)' }}>3.2 Dados dos Consumidores Finais (clientes das empresas contratantes)</p>
          <p className="mb-2">Tratados pelo Fi.V Connect na qualidade de <strong>Operador</strong>, sob instrução das empresas contratantes:</p>
          <Table
            headers={['Dado', 'Origem', 'Finalidade']}
            rows={[
              ['Nome e número de telefone (WhatsApp)', 'API WhatsApp via Whapi.Cloud', 'Identificação do contato, abertura de conversa'],
              ['Conteúdo de mensagens de texto', 'Conversas via WhatsApp', 'Atendimento, histórico, resposta por agentes e IA'],
              ['Arquivos de mídia (imagens, vídeos, documentos, áudio)', 'Conversas via WhatsApp', 'Atendimento e análise de conteúdo pelo agente de IA'],
              ['Transcrições de áudio (via Whisper/OpenAI)', 'Mensagens de voz recebidas', 'Transformação em texto para leitura pelos atendentes'],
              ['Metadados de conversa (horário, status, fila, tags)', 'Plataforma interna', 'Gestão de filas, relatórios, SLA'],
              ['Feedbacks e avaliações de atendimento', 'Encerramento de conversa', 'Melhoria de qualidade do atendimento'],
            ]}
          />
          <p className="text-xs mt-2" style={{ color: 'var(--ink-3)' }}>
            A Fi.V Connect não utiliza os dados dos consumidores finais para finalidades próprias. Esses dados pertencem às empresas contratantes.
          </p>
        </Section>

        <Section title="4. Bases Legais Utilizadas">
          <p>O tratamento de dados pela Fi.V Connect fundamenta-se nas seguintes hipóteses do art. 7º da LGPD:</p>
          <div className="mt-3 space-y-2">
            {[
              { base: 'Execução de contrato (art. 7º, V)', uso: 'Prestação do serviço SaaS aos clientes contratantes e seus colaboradores' },
              { base: 'Legítimo interesse (art. 7º, IX)', uso: 'Segurança da plataforma, prevenção de fraudes, melhoria do serviço, notificações operacionais' },
              { base: 'Cumprimento de obrigação legal (art. 7º, II)', uso: 'Retenção de logs de auditoria, dados fiscais e obrigações tributárias' },
              { base: 'Consentimento (art. 7º, I)', uso: 'Comunicações de marketing e materiais promocionais (quando aplicável)' },
            ].map(item => (
              <div key={item.base} className="flex gap-3 items-start rounded-lg p-3" style={{ background: 'var(--cream-2)' }}>
                <Badge>{item.base.split('(')[0].trim()}</Badge>
                <p className="text-sm flex-1">{item.uso}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="5. Compartilhamento de Dados com Terceiros">
          <p>A Fi.V Connect compartilha dados pessoais apenas com parceiros estritamente necessários à prestação do serviço, sempre por meio de contratos que impõem obrigações de proteção equivalentes:</p>
          <Table
            headers={['Parceiro', 'Dados compartilhados', 'Finalidade']}
            rows={[
              ['Whapi.Cloud (API WhatsApp)', 'Número de telefone, mensagens, mídia', 'Envio e recebimento de mensagens via WhatsApp Business API'],
              ['OpenAI (Whisper)', 'Áudios de mensagens', 'Transcrição de mensagens de voz em texto'],
              ['Anthropic (Claude API)', 'Conteúdo de conversas (quando IA ativada)', 'Processamento pelo agente de atendimento inteligente'],
              ['Asaas', 'Nome, e-mail, CPF/CNPJ da empresa contratante', 'Gateway de pagamento e gestão de assinaturas'],
              ['Resend', 'Endereço de e-mail do destinatário', 'Envio de e-mails transacionais (convites, senhas, notificações)'],
            ]}
          />
          <p>Não realizamos venda, aluguel ou cessão de dados pessoais a terceiros para fins publicitários.</p>
        </Section>

        <Section title="6. Retenção e Exclusão de Dados">
          <Table
            headers={['Categoria de dado', 'Período de retenção']}
            rows={[
              ['Dados de conta (operadores)', 'Enquanto a conta estiver ativa + 5 anos após encerramento do contrato'],
              ['Mensagens e histórico de conversas', 'Enquanto a empresa contratante mantiver o serviço ativo'],
              ['Arquivos de mídia', 'Enquanto a empresa contratante mantiver o serviço ativo'],
              ['Logs de auditoria e acesso', '5 anos (cumprimento de obrigação legal)'],
              ['Dados de faturamento e notas fiscais', '10 anos (obrigação tributária — art. 195 do CTN)'],
              ['Tokens de sessão', '30 dias de inatividade ou ao logout'],
            ]}
          />
          <p>Após os prazos acima, os dados são eliminados de forma segura. Empresas contratantes podem solicitar a eliminação antecipada dos dados dos seus consumidores finais via canal de suporte.</p>
        </Section>

        <Section title="7. Segurança dos Dados">
          <p>Adotamos medidas técnicas e organizacionais adequadas para proteger os dados pessoais contra acesso não autorizado, perda, alteração ou divulgação indevida:</p>
          <div className="grid sm:grid-cols-2 gap-3 mt-3">
            {[
              { icon: '🔐', title: 'Autenticação segura', desc: 'Senhas armazenadas com hash bcrypt. Tokens JWT com expiração. Sessões invalidadas no logout.' },
              { icon: '🔒', title: 'Transporte criptografado', desc: 'Toda comunicação via HTTPS/TLS. WebSocket seguro (WSS). Certificados gerenciados.' },
              { icon: '🛡️', title: 'Controle de acesso', desc: 'Isolamento por empresa (multi-tenant). Papéis de acesso (admin, agente, supervisor). Logs de auditoria completos.' },
              { icon: '💾', title: 'Banco de dados', desc: 'PostgreSQL com acesso restrito por credenciais. Backups regulares. Servidor dedicado em ambiente controlado.' },
              { icon: '🔑', title: 'Dados sensíveis', desc: 'Chaves de API de terceiros armazenadas em variáveis de ambiente. Tokens de recuperação com hash e expiração.' },
              { icon: '📋', title: 'Auditoria', desc: 'Registro de todas as ações administrativas. Monitoramento de tentativas de acesso suspeitas.' },
            ].map(item => (
              <div key={item.title} className="rounded-xl p-4 border" style={{ background: 'var(--cream-2)', borderColor: 'var(--line)' }}>
                <p className="font-semibold text-sm mb-1" style={{ color: 'var(--ink)' }}>{item.icon} {item.title}</p>
                <p className="text-xs" style={{ color: 'var(--ink-3)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="8. Transferência Internacional de Dados">
          <p>
            Alguns de nossos parceiros tecnológicos (OpenAI, Anthropic) processam dados em servidores localizados nos Estados Unidos. Essas transferências ocorrem com base no <strong>legítimo interesse</strong> e nas <strong>cláusulas contratuais padrão</strong> adotadas por esses fornecedores, que aderem a frameworks internacionais de proteção de dados (como o GDPR europeu e padrões equivalentes).
          </p>
          <p>
            Sempre que possível, minimizamos os dados enviados a terceiros internacionais, transmitindo apenas o conteúdo estritamente necessário para a funcionalidade solicitada.
          </p>
        </Section>

        <Section title="9. Direitos dos Titulares">
          <p>Conforme os arts. 17 a 22 da LGPD, os titulares de dados pessoais têm os seguintes direitos, exercíveis mediante solicitação ao encarregado:</p>
          <Table
            headers={['Direito', 'Descrição']}
            rows={[
              ['Confirmação e acesso (art. 18, I e II)', 'Confirmar a existência de tratamento e acessar os dados pessoais tratados'],
              ['Correção (art. 18, III)', 'Corrigir dados incompletos, inexatos ou desatualizados'],
              ['Anonimização, bloqueio ou eliminação (art. 18, IV)', 'Solicitar anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade'],
              ['Portabilidade (art. 18, V)', 'Receber os dados em formato estruturado para transferência a outro fornecedor'],
              ['Eliminação (art. 18, VI)', 'Solicitar a eliminação dos dados tratados com base no consentimento'],
              ['Informação sobre compartilhamento (art. 18, VII)', 'Obter informações sobre com quem os dados foram compartilhados'],
              ['Revogação do consentimento (art. 18, IX)', 'Revogar o consentimento dado para finalidades específicas'],
              ['Oposição (art. 18, § 2º)', 'Opor-se a tratamento realizado com base em legítimo interesse'],
            ]}
          />
          <div className="rounded-xl p-4 mt-2" style={{ background: 'var(--coral-soft)', border: '1px solid rgba(255,122,89,0.2)' }}>
            <p className="text-sm font-semibold mb-1" style={{ color: 'var(--coral)' }}>Como exercer seus direitos</p>
            <p className="text-sm" style={{ color: 'var(--ink-2)' }}>
              Envie sua solicitação para <a href="mailto:dpo@fivconnect.net" style={{ color: 'var(--coral)', fontWeight: 600 }}>dpo@fivconnect.net</a> com o assunto <em>"Direitos LGPD"</em>. Responderemos em até <strong>15 dias corridos</strong>, conforme prazo legal. Pode ser necessário verificar sua identidade antes do atendimento.
            </p>
          </div>
        </Section>

        <Section title="10. Cookies e Rastreamento">
          <p>O site institucional (fivconnect.net) utiliza cookies para:</p>
          <div className="space-y-2 mt-2">
            {[
              { tipo: 'Essenciais', desc: 'Necessários para o funcionamento básico do site. Não podem ser recusados.' },
              { tipo: 'Analíticos', desc: 'Contagem de visitas e comportamento agregado (sem identificação individual), mediante consentimento.' },
            ].map(c => (
              <div key={c.tipo} className="flex gap-3 items-start">
                <Badge>{c.tipo}</Badge>
                <p className="text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-3">A plataforma (app.fivconnect.net) utiliza cookies de sessão estritamente necessários para manter a autenticação do usuário. Nenhum cookie de rastreamento publicitário é utilizado na plataforma.</p>
        </Section>

        <Section title="11. Incidentes de Segurança">
          <p>
            Em caso de incidente de segurança que possa acarretar risco ou dano relevante aos titulares, a Fi.V Connect notificará:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>A <strong>ANPD</strong>, em prazo razoável conforme regulamentação vigente;</li>
            <li>Os <strong>titulares afetados</strong>, quando o incidente envolver dados que possam afetar seus interesses;</li>
            <li>As <strong>empresas contratantes</strong>, quando os dados afetados forem de seus consumidores finais.</li>
          </ul>
          <p className="mt-3">Para reportar vulnerabilidades ou suspeitas de incidentes: <a href="mailto:seguranca@fivconnect.net" style={{ color: 'var(--coral)' }}>seguranca@fivconnect.net</a></p>
        </Section>

        <Section title="12. Menores de Idade">
          <p>
            O Fi.V Connect é uma plataforma destinada exclusivamente a pessoas jurídicas e seus representantes. Não coletamos intencionalmente dados de menores de 18 anos. Caso identificado, os dados serão eliminados imediatamente.
          </p>
          <p>
            As empresas contratantes são responsáveis por garantir que o atendimento prestado por meio da plataforma a menores de 18 anos esteja em conformidade com os arts. 14 e 15 da LGPD.
          </p>
        </Section>

        <Section title="13. Atualizações desta Política">
          <p>
            Esta política pode ser atualizada periodicamente para refletir mudanças na legislação, nas práticas de tratamento ou nos serviços oferecidos. Alterações relevantes serão comunicadas por e-mail aos usuários cadastrados e publicadas nesta página com a data de vigência da nova versão.
          </p>
          <p>O uso continuado da plataforma após a publicação de alterações implica a aceitação dos novos termos.</p>
        </Section>

        {/* Contact box */}
        <div
          className="rounded-2xl p-8 mt-12 text-center"
          style={{ background: 'var(--graphite)', color: '#F5EFE4' }}
        >
          <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
            Dúvidas sobre privacidade e LGPD?
          </h3>
          <p className="text-sm mb-6" style={{ color: 'rgba(245,239,228,0.6)' }}>
            Entre em contato com nosso Encarregado de Dados (DPO).
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:dpo@fivconnect.net"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
              style={{ background: 'var(--coral)', color: '#fff' }}
            >
              dpo@fivconnect.net
            </a>
            <a
              href="mailto:contato@fivconnect.net"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm transition-all border"
              style={{ borderColor: 'rgba(245,239,228,0.2)', color: 'rgba(245,239,228,0.7)' }}
            >
              contato@fivconnect.net
            </a>
          </div>
        </div>

        <p className="text-xs text-center mt-8" style={{ color: 'var(--ink-3)' }}>
          Fi.V Connect LTDA · CNPJ: 66.624.400/0001-86 · Documento válido em todo território nacional
        </p>
      </main>
    </div>
  );
}
