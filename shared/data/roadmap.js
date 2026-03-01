/** Roadmap Estrategico — dados puros (JS puro, zero React/JSX) */

export const meta = {
  tipo: "roadmap",
  filename: "IRIS-Roadmap.pdf",
  title: "Roadmap Estrat\u00e9gico \u2014 18 Meses",
  subtitle: "IRIS \u2014 Intelig\u00eancia de Relacionamento Integrado Seguro",
};

export const quarters = ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6"];

export const fases = [
  {
    id: 1,
    titulo: "Funda\u00e7\u00e3o e MVP",
    periodo: "Q1\u2013Q2",
    startCol: 1,
    spanCols: 2,
    color: "teal",
    objetivo: "Criar base consolidada, segura e audit\u00e1vel para decis\u00f5es executivas.",
    entregaveis: [
      "Implementa\u00e7\u00e3o da governan\u00e7a de dados e ID interno seguro",
      "Consolida\u00e7\u00e3o de dois canais priorit\u00e1rios",
      "Dossi\u00ea resumido por cliente",
      "Painel executivo agregado por segmento",
    ],
    valor: "Criar base consolidada, segura e audit\u00e1vel para decis\u00f5es executivas.",
  },
  {
    id: 2,
    titulo: "Gera\u00e7\u00e3o de Valor",
    periodo: "Q3\u2013Q5",
    startCol: 3,
    spanCols: 3,
    color: "success",
    objetivo: "Reduzir churn por meio de prioriza\u00e7\u00e3o orientada por dados e melhorar efici\u00eancia operacional.",
    entregaveis: [
      "Indicador heur\u00edstico inicial de risco",
      "Classifica\u00e7\u00e3o de criticidade por segmento",
      "Amplia\u00e7\u00e3o gradual de integra\u00e7\u00f5es",
      "Uso recorrente do painel em decis\u00f5es estrat\u00e9gicas",
    ],
    indicador: "Decis\u00f5es de investimento baseadas em segmentos cr\u00edticos.",
    valor: "Reduzir churn por meio de prioriza\u00e7\u00e3o orientada por dados e melhorar efici\u00eancia operacional.",
  },
  {
    id: 3,
    titulo: "Escala e Prepara\u00e7\u00e3o para IA Avan\u00e7ada",
    periodo: "Q6",
    startCol: 6,
    spanCols: 1,
    color: "purple",
    objetivo: "Autorizar evolu\u00e7\u00e3o para modelos probabil\u00edsticos apenas com base consolidada e risco controlado.",
    entregaveis: [
      "Base modelada para evolu\u00e7\u00e3o probabil\u00edstica",
      "Auditoria consolidada de governan\u00e7a",
      "Avalia\u00e7\u00e3o executiva de maturidade de dados",
    ],
    valor: "Autorizar evolu\u00e7\u00e3o para modelos probabil\u00edsticos apenas com base consolidada e risco controlado.",
  },
];

export const gates = [
  {
    id: 1,
    titulo: "Gate 1 \u2014 Base Consolidada e Validada",
    criterio: "90% dos registros dos dois canais integrados consolidados sob ID interno v\u00e1lido + valida\u00e7\u00e3o jur\u00eddica.",
    posicao: "Final de Q2",
    color: "amber",
  },
  {
    id: 2,
    titulo: "Gate 2 \u2014 Autoriza\u00e7\u00e3o Executiva para IA Avan\u00e7ada",
    criterio: "Aprova\u00e7\u00e3o formal ap\u00f3s consolida\u00e7\u00e3o de governan\u00e7a e valida\u00e7\u00e3o de impacto estrat\u00e9gico.",
    posicao: "Final de Q6",
    color: "purple",
  },
];
