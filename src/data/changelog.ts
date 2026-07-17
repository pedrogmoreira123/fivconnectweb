/**
 * Novidades do produto — para publicar uma nova entrada, basta adicionar
 * um item no topo de CHANGELOG (mais recente primeiro). A página /novidades
 * renderiza este arquivo automaticamente.
 */

export type ChangeTag = 'novo' | 'melhoria' | 'correcao';

export interface ChangelogEntry {
  /** Data de lançamento (exibida como está) */
  date: string;
  title: string;
  tag: ChangeTag;
  items: string[];
}

export interface RoadmapItem {
  title: string;
  status: 'desenvolvimento' | 'planejado';
  desc: string;
}

export const CHANGELOG: ChangelogEntry[] = [
  {
    date: '16 de julho de 2026',
    title: 'Grupos de WhatsApp',
    tag: 'novo',
    items: [
      'Receba e gerencie grupos de WhatsApp dentro da plataforma.',
      'Visibilidade controlada: grupo visível para toda a empresa ou apenas para uma fila.',
      'Histórico do grupo preservado mesmo após sair dele (modo somente leitura).',
    ],
  },
  {
    date: '10 de julho de 2026',
    title: 'Módulo de Chamados com e-mail integrado',
    tag: 'novo',
    items: [
      'Chamados com número de protocolo, prioridade, responsável e prazo.',
      'Linha do tempo completa: comentários internos, respostas e eventos do chamado.',
      'E-mail bidirecional: a resposta enviada chega ao cliente e, quando ele responde, entra direto na linha do tempo.',
      'Cada empresa pode conectar o próprio domínio de e-mail para os envios.',
    ],
  },
  {
    date: 'Julho de 2026',
    title: 'Melhoria nos servidores',
    tag: 'melhoria',
    items: [
      'Infraestrutura mais resiliente: instabilidades momentâneas não interrompem mais o atendimento.',
      'Horários unificados no fuso de Brasília em toda a plataforma.',
      'Mais estabilidade e desempenho no envio e recebimento de mensagens.',
    ],
  },
  {
    date: '11 de junho de 2026',
    title: 'API Oficial da Meta (WhatsApp Business Platform)',
    tag: 'novo',
    items: [
      'Conexão oficial via Meta Business Partner, com cadastro assistido em poucos cliques.',
      'Criação e envio de templates aprovados pela Meta, com sugestão de texto por I.A.',
      'Controle automático da janela de 24 horas para mensagens ativas.',
    ],
  },
];

export const ROADMAP: RoadmapItem[] = [
  {
    title: 'Modo Equipe: agentes de I.A especialistas',
    status: 'desenvolvimento',
    desc: 'Vários agentes de I.A trabalhando juntos, cada um especialista em um assunto, com transferência inteligente entre eles durante a conversa.',
  },
];
