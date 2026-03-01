/** Business Model Canvas — dados puros (JS puro, zero React/JSX) */

export const meta = {
  tipo: "canvas",
  filename: "IRIS-Canvas.pdf",
  title: "Business Model Canvas",
  subtitle: "IRIS \u2014 Intelig\u00eancia de Relacionamento Integrado Seguro",
};

export const segmentosClientes = [
  "CFO e diretoria financeira interessados em aumento de LTV, redu\u00e7\u00e3o de churn e efici\u00eancia operacional baseada em dados",
  "Diretoria de Opera\u00e7\u00f5es e Experi\u00eancia do Cliente",
  "Equipes de atendimento que se beneficiam de hist\u00f3rico integrado",
];

export const problema =
  "As organiza\u00e7\u00f5es acumulam dados de relacionamento em m\u00faltiplos canais, por\u00e9m esses dados permanecem fragmentados e desorganizados devido \u00e0 aus\u00eancia de governan\u00e7a estruturada. Como consequ\u00eancia, decis\u00f5es de investimento em reten\u00e7\u00e3o e expans\u00e3o s\u00e3o tomadas com base em informa\u00e7\u00f5es incompletas, gerando perda de receita potencial, aumento de churn e inefici\u00eancia operacional.";

export const proposta =
  "IRIS transforma dados dispersos de atendimento em intelig\u00eancia estrat\u00e9gica para tomada de decis\u00e3o. A plataforma consolida intera\u00e7\u00f5es multicanal sob governan\u00e7a estruturada, permitindo identificar onde investir para maximizar LTV, reduzir churn e otimizar custos operacionais.";

export const solucao = [
  "Identifica\u00e7\u00e3o segura via hash interno derivado de CPF",
  "Separa\u00e7\u00e3o entre dados identific\u00e1veis e operacionais",
  "Consolida\u00e7\u00e3o de pelo menos dois canais",
  "Dossi\u00ea resumido por cliente",
  "Painel executivo agregado por segmento",
  "Indicadores estrat\u00e9gicos definidos pelo gestor",
  "Sinal inicial de risco baseado em regras",
];

export const canais = [
  "Dashboard interno corporativo",
  "Integra\u00e7\u00e3o futura com ferramentas de BI",
  "Arquitetura preparada para modelo SaaS enterprise",
];

export const relacionamento = [
  "Plataforma orientada a dados e governan\u00e7a",
  "Transpar\u00eancia e rastreabilidade de indicadores",
  "Conformidade como premissa (LGPD)",
  "Base para evolu\u00e7\u00e3o com m\u00f3dulos avan\u00e7ados de IA",
];

export const fontes = [
  "Modelo inicial: implanta\u00e7\u00e3o interna para valida\u00e7\u00e3o de valor",
  "Modelo futuro: SaaS enterprise com cobran\u00e7a por volume de clientes ativos ou por m\u00f3dulo de intelig\u00eancia anal\u00edtica",
];

export const custos = [
  "Integra\u00e7\u00e3o de dados multicanal",
  "Infraestrutura de armazenamento seguro",
  "Desenvolvimento do dashboard executivo",
  "Implementa\u00e7\u00e3o de governan\u00e7a de dados",
  "Evolu\u00e7\u00e3o futura com m\u00f3dulos de IA",
];

export const metricas = [
  "90% dos registros dos dois canais integrados consolidados sob ID interno v\u00e1lido",
  "Redu\u00e7\u00e3o no tempo de consolida\u00e7\u00e3o para decis\u00e3o estrat\u00e9gica",
  "Identifica\u00e7\u00e3o antecipada de padr\u00f5es de insatisfa\u00e7\u00e3o",
  "Uso ativo do painel por gestores estrat\u00e9gicos",
];

export const diferencial = [
  "Governan\u00e7a como pilar estruturante",
  "Intelig\u00eancia baseada em evid\u00eancias observadas",
  "Arquitetura evolutiva preparada para IA avan\u00e7ada",
  "Foco em decis\u00e3o financeira e n\u00e3o apenas operacional",
];

/** Estrutura de blocos para renderizacao do Canvas PDF */
export const blocks = [
  { title: "Proposta de Valor", content: proposta, color: "teal", type: "highlight" },
  { title: "Segmentos de Clientes", content: segmentosClientes, color: "purple" },
  { title: "Problema", content: problema, color: "coral" },
  { title: "Solu\u00e7\u00e3o \u2014 MVP", content: solucao, color: "teal" },
  { title: "Canais", content: canais, color: "teal" },
  { title: "Relacionamento com Clientes", content: relacionamento, color: "teal" },
  { title: "Diferencial Estrat\u00e9gico", content: diferencial, color: "purple" },
  { title: "Fontes de Receita", content: fontes, color: "amber" },
  { title: "Estrutura de Custos", content: custos, color: "amber" },
];
