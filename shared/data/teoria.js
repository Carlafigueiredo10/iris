/** Parte Te\u00f3rica \u2014 dados puros (JS puro, zero React/JSX) */

export const meta = {
  tipo: "teoria",
  filename: "IRIS-Parte-Teorica.pdf",
  title: "Parte Te\u00f3rica",
  subtitle: "IRIS \u2014 Intelig\u00eancia de Relacionamento Integrado Seguro",
};

/* \u2500\u2500 1.1 Vis\u00e3o de Produto \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

export const descricaoProduto =
  "O IRIS \u00e9 uma plataforma de intelig\u00eancia de relacionamento que transforma dados dispersos " +
  "de atendimento em intelig\u00eancia estrat\u00e9gica para tomada de decis\u00e3o. A solu\u00e7\u00e3o consolida " +
  "intera\u00e7\u00f5es multicanal sob uma arquitetura estruturada de governan\u00e7a de dados, permitindo " +
  "que informa\u00e7\u00f5es antes fragmentadas se tornem insumo confi\u00e1vel para decis\u00f5es executivas, " +
  "especialmente relacionadas \u00e0 reten\u00e7\u00e3o e investimento na base de clientes.";

export const modeloImplantacao =
  "O produto nasce como plataforma enterprise implantada internamente, com arquitetura " +
  "preparada para evolu\u00e7\u00e3o futura em modelo SaaS escal\u00e1vel.";

export const publicoPrimario =
  "CFO e diretoria financeira respons\u00e1veis por decis\u00f5es de investimento, reten\u00e7\u00e3o e " +
  "crescimento da base de clientes.";

export const publicoSecundario =
  "Diretoria de Opera\u00e7\u00f5es e Experi\u00eancia do Cliente, al\u00e9m de equipes de atendimento " +
  "que se beneficiam de hist\u00f3rico consolidado.";

export const problemaVisao =
  "As organiza\u00e7\u00f5es acumulam dados de relacionamento em m\u00faltiplos canais, por\u00e9m esses " +
  "dados permanecem fragmentados e desorganizados em raz\u00e3o da aus\u00eancia de governan\u00e7a " +
  "estruturada. Como consequ\u00eancia, decis\u00f5es estrat\u00e9gicas s\u00e3o tomadas com base em " +
  "informa\u00e7\u00f5es incompletas, dificultando a identifica\u00e7\u00e3o de risco de churn, oportunidades " +
  "de reten\u00e7\u00e3o e aloca\u00e7\u00e3o eficiente de recursos.";

export const propostaValor =
  "O IRIS transforma dados dispersos de atendimento em intelig\u00eancia estrat\u00e9gica confi\u00e1vel. " +
  "Ao consolidar informa\u00e7\u00f5es multicanal sob princ\u00edpios de governan\u00e7a e seguran\u00e7a, a " +
  "plataforma permite identificar onde investir para maximizar LTV, reduzir churn e " +
  "otimizar custos operacionais.";

export const diferencialCentral =
  "O diferencial central est\u00e1 na combina\u00e7\u00e3o entre intelig\u00eancia anal\u00edtica e governan\u00e7a " +
  "estruturante como premissa.";

/* \u2500\u2500 1.2 Defini\u00e7\u00e3o do MVP \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

export const objetivoMvp =
  "Validar a capacidade do IRIS de consolidar dados multicanal sob governan\u00e7a estruturada " +
  "e gerar intelig\u00eancia estrat\u00e9gica suficiente para apoiar decis\u00f5es de investimento voltadas " +
  "ao aumento de LTV. O MVP n\u00e3o contempla modelos preditivos avan\u00e7ados. Ele estrutura a " +
  "base de intelig\u00eancia necess\u00e1ria para evolu\u00e7\u00f5es futuras.";

export const hipoteseCritica =
  "Se consolidarmos 90% dos registros de dois canais priorit\u00e1rios sob um ID interno seguro " +
  "e aplicarmos um indicador heur\u00edstico inicial de criticidade, o time conseguir\u00e1 priorizar " +
  "temas relevantes com maior velocidade e reduzir retrabalho operacional, al\u00e9m de gerar " +
  "insumos objetivos para decis\u00f5es financeiras relacionadas \u00e0 reten\u00e7\u00e3o e investimento na base.";

export const hipoteseNota =
  "O MVP existe para validar essa hip\u00f3tese antes de qualquer evolu\u00e7\u00e3o para modelos " +
  "probabil\u00edsticos avan\u00e7ados.";

export const funcionalidadesMvp = [
  "Gera\u00e7\u00e3o de ID interno hash derivado de CPF",
  "Separa\u00e7\u00e3o entre camada identific\u00e1vel e camada operacional",
  "Integra\u00e7\u00e3o inicial de dois canais de atendimento",
  "Dossi\u00ea resumido por cliente com m\u00e9tricas consolidadas",
  "Painel executivo agregado por segmento",
  "Indicador inicial de risco baseado em regra heur\u00edstica configur\u00e1vel",
];

export const funcionalidadesNota =
  "Os crit\u00e9rios de aceita\u00e7\u00e3o detalhados para cada funcionalidade, bem como sua prioriza\u00e7\u00e3o " +
  "e justificativas operacionais, encontram-se formalmente documentados no artefato pr\u00e1tico " +
  "\u201CDocumento de MVP\u201D, garantindo rastreabilidade entre vis\u00e3o estrat\u00e9gica e execu\u00e7\u00e3o.";

export const principiosPriorizacao = [
  {
    titulo: "Governan\u00e7a antes de intelig\u00eancia avan\u00e7ada",
    desc: "Estruturar a base de dados com seguran\u00e7a e conformidade antes de aplicar modelos anal\u00edticos.",
  },
  {
    titulo: "Consolida\u00e7\u00e3o antes de predi\u00e7\u00e3o",
    desc: "Garantir dados confi\u00e1veis antes de implementar qualquer modelo preditivo.",
  },
  {
    titulo: "Valor estrat\u00e9gico com complexidade controlada",
    desc: "A consolida\u00e7\u00e3o estruturada permite decis\u00f5es mais confi\u00e1veis antes da ado\u00e7\u00e3o de modelos de machine learning.",
  },
];

/* \u2500\u2500 1.3 Roadmap do Produto \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

export const fasesRoadmap = [
  {
    id: 1,
    titulo: "Funda\u00e7\u00e3o Segura e Intelig\u00eancia Estruturada",
    color: "teal",
    objetivo: "Estruturar governan\u00e7a e consolidar dados multicanal.",
    entregaveis: [
      "ID interno seguro",
      "Integra\u00e7\u00e3o de dois canais",
      "Dossi\u00ea resumido",
      "Painel executivo",
      "Indicador heur\u00edstico",
      "Pol\u00edtica formal de governan\u00e7a",
    ],
    criterios: [
      "90% dos registros dos dois canais integrados consolidados sob ID interno v\u00e1lido",
      "Uso ativo do painel pela diretoria",
      "Qualidade m\u00ednima de dados validada",
    ],
    nota: "A representa\u00e7\u00e3o visual do roadmap, com fases, objetivos e marcos temporais, " +
      "est\u00e1 apresentada no artefato pr\u00e1tico correspondente.",
  },
  {
    id: 2,
    titulo: "Gera\u00e7\u00e3o de Valor e Intelig\u00eancia Estruturada",
    color: "purple",
    objetivo:
      "Gerar valor estrat\u00e9gico a partir da consolida\u00e7\u00e3o estruturada, utilizando " +
      "intelig\u00eancia baseada em regras heur\u00edsticas e segmenta\u00e7\u00e3o orientada por dados.",
    entregaveis: [
      "Evolu\u00e7\u00e3o do indicador heur\u00edstico",
      "Segmenta\u00e7\u00e3o comportamental baseada em evid\u00eancia observada",
      "M\u00e9tricas financeiras por segmento",
      "Expans\u00e3o para novos canais",
    ],
    criterios: [],
    indicador:
      "O sucesso da Fase 2 ser\u00e1 avaliado n\u00e3o apenas pelo uso recorrente do painel, " +
      "mas tamb\u00e9m pela evid\u00eancia de impacto mensur\u00e1vel na prioriza\u00e7\u00e3o de a\u00e7\u00f5es, como " +
      "redu\u00e7\u00e3o do tempo m\u00e9dio de consolida\u00e7\u00e3o de informa\u00e7\u00f5es para decis\u00e3o executiva " +
      "e melhoria nos indicadores de reten\u00e7\u00e3o ou efici\u00eancia operacional definidos pela diretoria.",
  },
  {
    id: 3,
    titulo: "Intelig\u00eancia Adaptativa e Escalabilidade",
    color: "coral",
    objetivo:
      "Evoluir a plataforma para modelos probabil\u00edsticos avan\u00e7ados e arquitetura escal\u00e1vel.",
    entregaveis: [
      "Machine learning supervisionado",
      "Motor de recomenda\u00e7\u00e3o",
      "Arquitetura SaaS",
      "Monitoramento cont\u00ednuo de vi\u00e9s",
    ],
    criterios: [],
  },
];

/* \u2500\u2500 1.4 Ciclo de Vida \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

export const cicloEtapas = [
  {
    id: 1,
    titulo: "Descoberta",
    color: "teal",
    desc: "Mapeamento de canais, stakeholders e viabilidade t\u00e9cnica.",
    criterio: "Aprova\u00e7\u00e3o executiva do MVP.",
  },
  {
    id: 2,
    titulo: "Valida\u00e7\u00e3o",
    color: "teal",
    desc: "Implementa\u00e7\u00e3o do MVP funcional.",
    criterio: "Uso ativo e valida\u00e7\u00e3o de utilidade estrat\u00e9gica.",
  },
  {
    id: 3,
    titulo: "Entrega",
    color: "success",
    desc: "Institucionaliza\u00e7\u00e3o da plataforma e formaliza\u00e7\u00e3o de governan\u00e7a.",
    criterio: "Evid\u00eancia de apoio \u00e0 decis\u00e3o financeira.",
  },
  {
    id: 4,
    titulo: "Revis\u00e3o \u00c9tica e Regulat\u00f3ria",
    color: "amber",
    desc: "Avalia\u00e7\u00e3o formal de conformidade com a Lei Geral de Prote\u00e7\u00e3o de Dados " +
      "(Lei n\u00ba 13.709/2018 \u2014 LGPD), an\u00e1lise de risco de vi\u00e9s algor\u00edtmico e valida\u00e7\u00e3o " +
      "jur\u00eddica antes da expans\u00e3o para IA avan\u00e7ada.",
    criterio: "Parecer jur\u00eddico favor\u00e1vel e defini\u00e7\u00e3o clara de limites \u00e9ticos.",
  },
  {
    id: 5,
    titulo: "Evolu\u00e7\u00e3o",
    color: "purple",
    desc: "Implementa\u00e7\u00e3o de modelos probabil\u00edsticos e expans\u00e3o estrat\u00e9gica.",
    criterio: null,
  },
];

/* \u2500\u2500 1.5 Gerenciamento de Riscos \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

export const riscosOperacionais = [
  "Risco de vazamento de dados identific\u00e1veis",
  "Risco de baixa qualidade de dados",
  "Risco regulat\u00f3rio associado \u00e0 LGPD",
  "Risco de interpreta\u00e7\u00e3o incorreta de indicadores",
  "Risco de resist\u00eancia organizacional",
  "Risco de subestima\u00e7\u00e3o da complexidade t\u00e9cnica",
];

export const riscosNota =
  "A classifica\u00e7\u00e3o detalhada de probabilidade e impacto de cada risco, bem como os " +
  "respons\u00e1veis e planos de mitiga\u00e7\u00e3o, encontra-se formalmente registrada na Matriz " +
  "de Riscos apresentada na Parte Pr\u00e1tica.";

export const estrategiasMitigacao = [
  "Separa\u00e7\u00e3o de camadas de dados",
  "Controle de acesso e logs",
  "Criptografia",
  "Pol\u00edtica formal de governan\u00e7a",
  "Revis\u00e3o jur\u00eddica pr\u00e9via \u00e0 expans\u00e3o de IA",
];

export const principiosLgpd =
  "O IRIS observa os princ\u00edpios da LGPD, especialmente finalidade, necessidade, " +
  "minimiza\u00e7\u00e3o e seguran\u00e7a da informa\u00e7\u00e3o.";

/* \u2500\u2500 1.6 Gest\u00e3o de Produtos e IA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

export const iaAbordagem =
  "O IRIS adota abordagem progressiva no uso de IA. A intelig\u00eancia inicial \u00e9 baseada em " +
  "consolida\u00e7\u00e3o estruturada e regras heur\u00edsticas. A evolu\u00e7\u00e3o para modelos de machine " +
  "learning ocorre apenas ap\u00f3s valida\u00e7\u00e3o de governan\u00e7a, qualidade de dados e conformidade " +
  "regulat\u00f3ria.";

export const iaPrincipio =
  "A IA no IRIS atua como suporte \u00e0 decis\u00e3o e n\u00e3o como substitui\u00e7\u00e3o da decis\u00e3o humana.";

export const riscosIA = [
  "Vi\u00e9s algor\u00edtmico",
  "Interpreta\u00e7\u00e3o determin\u00edstica indevida",
  "Perfilamento sens\u00edvel",
  "Depend\u00eancia excessiva de automa\u00e7\u00e3o",
];

export const mitigacoesIA = [
  "Explicabilidade obrigat\u00f3ria",
  "Monitoramento cont\u00ednuo de vi\u00e9s",
  "Revis\u00e3o \u00e9tica formal",
  "Supervis\u00e3o humana permanente",
];

/* \u2500\u2500 Conclus\u00e3o \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

export const conclusao = [
  "O IRIS estrutura dados dispersos sob governan\u00e7a e transforma relacionamento em " +
    "intelig\u00eancia estrat\u00e9gica para decis\u00e3o financeira.",
  "A abordagem progressiva adotada garante que cada fase do roadmap entregue valor " +
    "incremental com risco controlado, permitindo evolu\u00e7\u00e3o sustent\u00e1vel da plataforma.",
  "Ao consolidar governan\u00e7a, intelig\u00eancia e responsabilidade \u00e9tica, o IRIS estabelece " +
    "as bases para decis\u00f5es executivas mais precisas e para expans\u00e3o futura com uso " +
    "seguro e estrat\u00e9gico de intelig\u00eancia artificial.",
];
