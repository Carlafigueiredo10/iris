/** Documento de MVP — dados puros (JS puro, zero React/JSX) */

export const meta = {
  tipo: "mvp",
  filename: "IRIS-MVP.pdf",
  title: "Documento de MVP",
  subtitle: "IRIS \u2014 Intelig\u00eancia de Relacionamento Integrado Seguro",
};

export const blocos = [
  {
    id: 1,
    titulo: "Governan\u00e7a de Dados",
    color: "teal",
    nota: "Governan\u00e7a \u00e9 pr\u00e9-condi\u00e7\u00e3o para qualquer evolu\u00e7\u00e3o em Intelig\u00eancia Artificial.",
    funcionalidades: [
      {
        nome: "Gera\u00e7\u00e3o de ID interno hash derivado de CPF",
        prioridade: "P1",
        tecnico: "Hash irrevers\u00edvel aplicado a 100% dos registros integrados",
        executivo: "Nenhum CPF exposto no ambiente operacional",
      },
      {
        nome: "Separa\u00e7\u00e3o entre camada identific\u00e1vel e camada anal\u00edtica",
        prioridade: "P1",
        tecnico: "Banco estruturado com tabelas segregadas e pol\u00edticas de acesso",
        executivo: "Aprova\u00e7\u00e3o formal da \u00e1rea jur\u00eddica e TI",
      },
      {
        nome: "Controle de acesso por perfil",
        prioridade: "P1",
        tecnico: "Perfis configurados com permiss\u00f5es distintas",
        executivo: "Diretoria acessa apenas dados agregados",
      },
      {
        nome: "Registro de logs e rastreabilidade",
        prioridade: "P2",
        tecnico: "Logs armazenados para todas as consultas estrat\u00e9gicas",
        executivo: "Auditoria poss\u00edvel de uso do sistema",
      },
    ],
  },
  {
    id: 2,
    titulo: "Consolida\u00e7\u00e3o Multicanal",
    color: "teal",
    funcionalidades: [
      {
        nome: "Integra\u00e7\u00e3o de dois canais priorit\u00e1rios",
        prioridade: "P1",
        tecnico: "Conectores implementados e testados",
        executivo: "Dados consolidados vis\u00edveis no painel",
      },
      {
        nome: "Consolida\u00e7\u00e3o sob ID interno v\u00e1lido",
        prioridade: "P1",
        tecnico: "90% dos registros dos dois canais integrados consolidados sob ID interno v\u00e1lido",
        executivo: "Diretoria utiliza vis\u00e3o unificada em reuni\u00f5es estrat\u00e9gicas",
      },
      {
        nome: "Tratamento de duplicidades",
        prioridade: "P2",
        tecnico: "Algoritmo de deduplica\u00e7\u00e3o implementado",
        executivo: "Redu\u00e7\u00e3o percept\u00edvel de inconsist\u00eancias",
      },
    ],
  },
  {
    id: 3,
    titulo: "Intelig\u00eancia Inicial",
    color: "purple",
    nota: "IA aqui atua como suporte \u00e0 decis\u00e3o, n\u00e3o substitui\u00e7\u00e3o da decis\u00e3o humana.",
    funcionalidades: [
      {
        nome: "Indicador heur\u00edstico inicial de risco",
        prioridade: "P1",
        tecnico: "Regra configur\u00e1vel aplicada sobre base consolidada",
        executivo: "Sinal de risco utilizado como apoio \u00e0 prioriza\u00e7\u00e3o",
      },
      {
        nome: "Classifica\u00e7\u00e3o de n\u00edvel de criticidade",
        prioridade: "P2",
        tecnico: "Segmenta\u00e7\u00e3o autom\u00e1tica baseada em crit\u00e9rios definidos",
        executivo: "Diretoria identifica segmentos priorit\u00e1rios",
      },
      {
        nome: "Base estruturada para evolu\u00e7\u00e3o probabil\u00edstica",
        prioridade: "P3",
        tecnico: "Modelagem de dados compat\u00edvel com ML futuro",
        executivo: "Aprova\u00e7\u00e3o executiva para avan\u00e7ar para Fase 2",
      },
    ],
  },
  {
    id: 4,
    titulo: "Visualiza\u00e7\u00e3o Estrat\u00e9gica",
    color: "amber",
    funcionalidades: [
      {
        nome: "Dossi\u00ea resumido por cliente",
        prioridade: "P1",
        tecnico: "P\u00e1gina individual consolidada com hist\u00f3rico integrado",
        executivo: "Atendimento reduz retrabalho",
      },
      {
        nome: "Painel executivo agregado por segmento",
        prioridade: "P1",
        tecnico: "Dashboard funcional com filtros por segmento",
        executivo: "Uso ativo do painel por diretoria",
      },
      {
        nome: "Indicadores definidos pelo gestor",
        prioridade: "P2",
        tecnico: "Configura\u00e7\u00e3o din\u00e2mica de KPIs",
        executivo: "KPIs utilizados em decis\u00f5es reais",
      },
    ],
  },
];

export const prioridadeInfo = {
  P1: { label: "P1", tooltip: "Essencial para valida\u00e7\u00e3o do MVP" },
  P2: { label: "P2", tooltip: "Complementar para fortalecimento estrat\u00e9gico" },
  P3: { label: "P3", tooltip: "Preparat\u00f3rio para evolu\u00e7\u00e3o futura" },
};
