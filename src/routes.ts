export interface RouteMeta {
  title: string;
  description: string;
}

export const ROUTE_META: Record<string, RouteMeta> = {
  '/': {
    title: 'Fi.V Connect — Atendimento profissional no WhatsApp para sua equipe',
    description:
      'Um número de WhatsApp, toda a sua equipe: filas com distribuição automática, chatbot visual, agente de I.A e relatórios completos. Teste grátis por 7 dias.',
  },
  '/funcionalidades': {
    title: 'Funcionalidades — Fi.V Connect',
    description:
      'Conheça em detalhe todos os módulos do Fi.V Connect: conversas, filas, chatbot visual, agente de I.A, chamados, relatórios, CRM e integrações.',
  },
  '/planos': {
    title: 'Planos e preços — Fi.V Connect',
    description:
      'Planos para cada fase da sua operação de atendimento no WhatsApp. Comece grátis por 7 dias, sem cartão de crédito.',
  },
  '/novidades': {
    title: 'Novidades — Fi.V Connect',
    description:
      'Acompanhe as novas funcionalidades do Fi.V Connect: o que acabou de chegar e o que vem por aí.',
  },
  '/sobre': {
    title: 'Sobre a Fi.V Connect',
    description:
      'Conheça a empresa por trás da plataforma de atendimento via WhatsApp para PMEs brasileiras.',
  },
  '/contato': {
    title: 'Contato — Fi.V Connect',
    description: 'Fale com a equipe do Fi.V Connect: agende uma demonstração ou tire suas dúvidas.',
  },
  '/politica-de-privacidade': {
    title: 'Política de Privacidade — Fi.V Connect',
    description: 'Como o Fi.V Connect coleta, usa e protege os seus dados pessoais.',
  },
  '/termos-de-uso': {
    title: 'Termos de Uso — Fi.V Connect',
    description: 'Condições de uso da plataforma Fi.V Connect.',
  },
  '/lgpd': {
    title: 'LGPD — Fi.V Connect',
    description: 'Compromissos do Fi.V Connect com a Lei Geral de Proteção de Dados.',
  },
};
