import type { ReactNode } from 'react';
import {
  MessageSquare, Users, GitBranch, Bot, Ticket, BarChart3, Contact, Layers,
  Image, Mic, Pin, UserCheck, Tag, Zap, Clock, Shuffle, ArrowLeftRight,
  ListTree, HelpCircle, Webhook, Database, Brain, ShieldCheck, FileText,
  Mail, Globe, Timer, Star, Download, LayoutDashboard, Flame, Search,
  Building2, StickyNote, Smartphone, Bell, KeyRound, Lock, History,
} from 'lucide-react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Eyebrow from '../components/ui/Eyebrow';
import SectionTitle, { Accent } from '../components/ui/SectionTitle';
import FeatureCard from '../components/ui/FeatureCard';
import CTASection from '../components/CTASection';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Feature {
  icon: ReactNode;
  title: string;
  desc: string;
}

interface Module {
  id: string;
  icon: ReactNode;
  eyebrow: string;
  title: ReactNode;
  description: string;
  features: Feature[];
}

const MODULES: Module[] = [
  {
    id: 'conversas',
    icon: <MessageSquare size={20} />,
    eyebrow: 'Conversas',
    title: <>Uma inbox só, para a <Accent>equipe inteira.</Accent></>,
    description:
      'Todas as conversas de WhatsApp da empresa em um painel compartilhado, atualizado em tempo real. Cada atendente vê o que precisa — e o cliente nunca fica sem resposta.',
    features: [
      { icon: <MessageSquare size={18} />, title: 'Inbox em tempo real', desc: 'Conversas chegam e se atualizam instantaneamente para todos os atendentes conectados.' },
      { icon: <Image size={18} />, title: 'Todos os formatos', desc: 'Texto, imagem, áudio, vídeo e documentos — envie e receba qualquer tipo de mensagem.' },
      { icon: <Mic size={18} />, title: 'Áudio direto do chat', desc: 'Grave e envie mensagens de voz sem sair da plataforma.' },
      { icon: <UserCheck size={18} />, title: 'Assumir atendimento', desc: 'Qualquer atendente autorizado pode puxar uma conversa da fila para si, com um clique.' },
      { icon: <Pin size={18} />, title: 'Reações, fixar e encaminhar', desc: 'Reaja a mensagens, fixe conversas importantes e encaminhe mensagens entre contatos.' },
      { icon: <Users size={18} />, title: 'Grupos de WhatsApp', desc: 'Receba e gerencie grupos com visibilidade controlada por fila ou para toda a empresa.' },
      { icon: <Zap size={18} />, title: 'Respostas rápidas', desc: 'Atalhos para as mensagens que sua equipe mais repete no dia a dia.' },
      { icon: <Tag size={18} />, title: 'Etiquetas', desc: 'Classifique conversas com tags para organizar e filtrar o atendimento.' },
      { icon: <Clock size={18} />, title: 'Mensagens automáticas', desc: 'Saudação, ausência e avisos fora do horário — configurados por você.' },
    ],
  },
  {
    id: 'filas',
    icon: <Users size={20} />,
    eyebrow: 'Filas & Distribuição',
    title: <>Cada conversa no <Accent>setor certo.</Accent></>,
    description:
      'Organize o atendimento por área — Vendas, Suporte, Financeiro — e deixe a plataforma distribuir as conversas automaticamente entre os atendentes disponíveis.',
    features: [
      { icon: <ListTree size={18} />, title: 'Filas por setor', desc: 'Crie quantas filas o plano permitir, com cor e ordem de exibição próprias.' },
      { icon: <Shuffle size={18} />, title: 'Distribuição automática', desc: 'Round-robin ou por habilidade: a conversa vai para o atendente certo, sem disputa.' },
      { icon: <Clock size={18} />, title: 'Horário por fila', desc: 'Cada fila tem seu horário de funcionamento, com mensagens diferentes dentro e fora dele.' },
      { icon: <ArrowLeftRight size={18} />, title: 'Transferências', desc: 'Mova conversas entre filas e atendentes mantendo todo o histórico.' },
      { icon: <Bot size={18} />, title: 'I.A por fila', desc: 'Vincule um agente de I.A específico a cada fila, com conhecimento do setor.' },
    ],
  },
  {
    id: 'chatbot',
    icon: <GitBranch size={20} />,
    eyebrow: 'Chatbot · Flow Builder',
    title: <>Fluxos de atendimento <Accent>sem código.</Accent></>,
    description:
      'Desenhe o roteiro do seu atendimento em um editor visual: menus, perguntas, condições e automações — o robô resolve o repetitivo e entrega o resto para o humano certo.',
    features: [
      { icon: <GitBranch size={18} />, title: 'Editor visual', desc: 'Monte o fluxo arrastando nós e conexões — sem escrever uma linha de código.' },
      { icon: <HelpCircle size={18} />, title: 'Menus e perguntas', desc: 'Colete respostas do cliente e guie a conversa com opções e validações.' },
      { icon: <ListTree size={18} />, title: 'Condições e ramificações', desc: 'Caminhos diferentes conforme a resposta, o horário ou os dados do cliente.' },
      { icon: <ArrowLeftRight size={18} />, title: 'Transferência inteligente', desc: 'Envie a conversa para a fila ou atendente certo no ponto certo do fluxo.' },
      { icon: <Clock size={18} />, title: 'Horário comercial', desc: 'O fluxo se adapta automaticamente dentro e fora do expediente.' },
      { icon: <Webhook size={18} />, title: 'Webhooks e APIs', desc: 'Consulte e envie dados para sistemas externos no meio do fluxo.' },
      { icon: <Database size={18} />, title: 'Variáveis e coleta de dados', desc: 'Guarde respostas em variáveis e use em mensagens e integrações.' },
      { icon: <Brain size={18} />, title: 'Nós de I.A', desc: 'Classificação de intenção, extração de dados e guardrails dentro do fluxo.' },
      { icon: <Image size={18} />, title: 'Mídia no fluxo', desc: 'Envie imagens, áudios, vídeos e documentos como parte do roteiro.' },
    ],
  },
  {
    id: 'ia',
    icon: <Bot size={20} />,
    eyebrow: 'Agente de I.A',
    title: <>Atendimento que não <Accent>dorme.</Accent></>,
    description:
      'Um agente de inteligência artificial treinado com o conhecimento da sua empresa: responde clientes 24/7, lembra do contexto e passa o bastão para o humano com resumo pronto.',
    features: [
      { icon: <Bot size={18} />, title: 'Atendimento autônomo 24/7', desc: 'A I.A responde de madrugada, no fim de semana e nos picos — sem fila de espera.' },
      { icon: <Database size={18} />, title: 'Base de conhecimento', desc: 'Alimente a I.A com documentos e páginas do seu site — ela responde só o que você ensinou.' },
      { icon: <History size={18} />, title: 'Memória por cliente', desc: 'A I.A lembra de conversas anteriores e atende cada cliente com contexto.' },
      { icon: <UserCheck size={18} />, title: 'Handoff com resumo', desc: 'Quando o humano assume, recebe o resumo da conversa — sem pedir para o cliente repetir.' },
      { icon: <Brain size={18} />, title: 'Agentes especialistas', desc: 'Vários agentes com conhecimentos diferentes, com transferência inteligente entre eles.' },
      { icon: <Zap size={18} />, title: 'Sugestão de resposta', desc: 'A I.A sugere respostas para o atendente humano aprovar e enviar.' },
      { icon: <BarChart3 size={18} />, title: 'Controle de custo', desc: 'Escalonamento automático de modelo e relatório de custo de I.A por período.' },
    ],
  },
  {
    id: 'chamados',
    icon: <Ticket size={20} />,
    eyebrow: 'Chamados',
    title: <>Demandas com <Accent>protocolo e prazo.</Accent></>,
    description:
      'Quando a conversa vira uma demanda, ela vira um chamado: com número de protocolo, prioridade, responsável e prazo — e o cliente acompanha tudo por e-mail.',
    features: [
      { icon: <Ticket size={18} />, title: 'Protocolo por chamado', desc: 'Cada demanda ganha número único, rastreável do início à resolução.' },
      { icon: <Flame size={18} />, title: 'Prioridade e prazos', desc: 'Classifique por urgência, defina responsável e data limite.' },
      { icon: <History size={18} />, title: 'Linha do tempo', desc: 'Todas as interações do chamado registradas em ordem: comentários internos, respostas e eventos.' },
      { icon: <Mail size={18} />, title: 'E-mail bidirecional', desc: 'Respostas enviadas por e-mail chegam ao cliente; quando ele responde, entra direto na linha do tempo.' },
      { icon: <Globe size={18} />, title: 'Seu domínio de e-mail', desc: 'Os e-mails de chamado saem com o domínio da sua empresa.' },
      { icon: <MessageSquare size={18} />, title: 'Vínculo com conversas', desc: 'Abra chamados a partir de um atendimento no WhatsApp, mantendo a referência.' },
    ],
  },
  {
    id: 'relatorios',
    icon: <BarChart3 size={20} />,
    eyebrow: 'Relatórios & Métricas',
    title: <>Gestão com <Accent>números de verdade.</Accent></>,
    description:
      'Do tempo de primeira resposta à satisfação do cliente: dashboards em tempo real e relatórios exportáveis para gerir a operação com dados, não com achismo.',
    features: [
      { icon: <LayoutDashboard size={18} />, title: 'Dashboard em tempo real', desc: 'Conversas abertas, em espera e finalizadas, com visão do dia e do período.' },
      { icon: <Users size={18} />, title: 'Produtividade por atendente', desc: 'Volume, tempos e desempenho individual de cada pessoa do time.' },
      { icon: <ListTree size={18} />, title: 'Demanda por fila', desc: 'Quais setores mais recebem conversas e onde estão os gargalos.' },
      { icon: <Timer size={18} />, title: 'Tempos de resposta', desc: 'Primeira resposta e tempo de resolução calculados de verdade, por período.' },
      { icon: <Star size={18} />, title: 'Avaliações (CSAT)', desc: 'O cliente avalia o atendimento ao final; você acompanha a satisfação ao longo do tempo.' },
      { icon: <Bot size={18} />, title: 'Relatórios do agente de I.A', desc: 'Quanto a I.A resolveu sozinha, transferências e custo por período.' },
      { icon: <Download size={18} />, title: 'Exportação XLSX e PDF', desc: 'Leve qualquer relatório para fora da plataforma em um clique.' },
    ],
  },
  {
    id: 'crm',
    icon: <Contact size={20} />,
    eyebrow: 'CRM & Cadastros',
    title: <>Cada cliente com <Accent>história completa.</Accent></>,
    description:
      'Clientes e empresas organizados com os dados que o mercado brasileiro usa — e todo o histórico de atendimento a um clique de distância.',
    features: [
      { icon: <Contact size={18} />, title: 'Cadastro de clientes', desc: 'Contatos com dados, notas e histórico completo de conversas e chamados.' },
      { icon: <Building2 size={18} />, title: 'Empresas-cliente', desc: 'Razão social, CNPJ e responsável — clientes vinculados às suas empresas.' },
      { icon: <History size={18} />, title: 'Histórico unificado', desc: 'Tudo o que já aconteceu com aquele cliente, em uma linha do tempo só.' },
      { icon: <Search size={18} />, title: 'Busca e filtros', desc: 'Encontre qualquer cliente ou conversa por nome, telefone, tag ou período.' },
      { icon: <StickyNote size={18} />, title: 'Notas internas', desc: 'Registre observações que só a sua equipe vê.' },
    ],
  },
  {
    id: 'plataforma',
    icon: <Layers size={20} />,
    eyebrow: 'Plataforma & Integrações',
    title: <>Pronta para <Accent>crescer com você.</Accent></>,
    description:
      'Conexão oficial com a Meta, API aberta, segurança de ponta e acesso de qualquer dispositivo — a base técnica que uma operação séria exige.',
    features: [
      { icon: <ShieldCheck size={18} />, title: 'API Oficial da Meta', desc: 'Conecte via WhatsApp Business Platform com cadastro assistido em poucos cliques.' },
      { icon: <FileText size={18} />, title: 'Templates aprovados', desc: 'Crie e envie templates da Meta, com sugestão por I.A e controle da janela de 24h.' },
      { icon: <Smartphone size={18} />, title: 'Conexão via QR Code', desc: 'Alternativa rápida: escaneie e comece a atender em minutos.' },
      { icon: <Webhook size={18} />, title: 'API pública e webhooks', desc: 'Integre seus sistemas: envie mensagens, dispare fluxos e receba eventos.' },
      { icon: <Globe size={18} />, title: 'Funciona em tudo', desc: 'PWA no navegador: Windows, macOS, iOS e Android — sem instalar nada.' },
      { icon: <Bell size={18} />, title: 'Notificações push', desc: 'Sua equipe é avisada de novas conversas mesmo com a aba fechada.' },
      { icon: <KeyRound size={18} />, title: 'Permissões por papel', desc: 'Atendente, supervisor e administrador — cada um vê só o que deve.' },
      { icon: <Building2 size={18} />, title: 'Multiempresa', desc: 'Um mesmo usuário pode operar em mais de uma empresa, com dados isolados.' },
      { icon: <Lock size={18} />, title: 'Segurança e LGPD', desc: 'Criptografia AES-256, auditoria de ações e conformidade com a LGPD.' },
    ],
  },
];

function ModuleSection({ module, index }: { module: Module; index: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <Section id={module.id} tone={index % 2 === 0 ? 'cream' : 'cream-2'} compact className="scroll-mt-28">
      <Container innerRef={ref}>
        <div className={`max-w-2xl mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span
            className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
            style={{ background: 'var(--coral-soft)', color: 'var(--coral)' }}
            aria-hidden="true"
          >
            {module.icon}
          </span>
          <Eyebrow className="mb-4">{module.eyebrow}</Eyebrow>
          <SectionTitle className="mb-5 !text-3xl sm:!text-4xl">{module.title}</SectionTitle>
          <p className="text-[17px] leading-relaxed" style={{ color: 'var(--ink-2)' }}>{module.description}</p>
        </div>
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {module.features.map(f => (
            <FeatureCard key={f.title} icon={f.icon} title={f.title}>
              {f.desc}
            </FeatureCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default function Funcionalidades() {
  return (
    <main>
      {/* Hero da página */}
      <Section className="!pt-40 !pb-16">
        <Container className="text-center">
          <Eyebrow className="mb-5 justify-center">Funcionalidades</Eyebrow>
          <SectionTitle as="h1" className="mb-6">
            Tudo que a plataforma entrega,<br className="hidden sm:block" /> <Accent>módulo por módulo.</Accent>
          </SectionTitle>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--ink-2)' }}>
            O resumo você viu na página inicial. Aqui está o detalhe: cada recurso do Fi.V Connect,
            organizado pelos oito módulos da plataforma.
          </p>
        </Container>
      </Section>

      {/* Índice de módulos (sticky) */}
      <nav
        aria-label="Módulos"
        className="sticky top-[65px] z-40 border-y backdrop-blur-md"
        style={{
          background: 'color-mix(in srgb, var(--cream) 88%, transparent)',
          borderColor: 'var(--line)',
        }}
      >
        <Container>
          <div className="flex gap-2 py-3 overflow-x-auto no-scrollbar md:flex-wrap md:justify-center">
            {MODULES.map(m => (
              <a
                key={m.id}
                href={`#${m.id}`}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[13px] font-semibold whitespace-nowrap border transition-colors hover:border-transparent"
                style={{ color: 'var(--ink-2)', borderColor: 'var(--line-2)' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--coral-soft)'; e.currentTarget.style.color = 'var(--coral-700)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink-2)'; }}
              >
                {m.eyebrow}
              </a>
            ))}
          </div>
        </Container>
      </nav>

      {MODULES.map((m, i) => (
        <ModuleSection key={m.id} module={m} index={i} />
      ))}

      <CTASection />
    </main>
  );
}
