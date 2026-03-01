/** Matriz de Riscos — dados puros (JS puro, zero React/JSX) */

export const meta = {
  tipo: "riscos",
  filename: "IRIS-Matriz-Riscos.pdf",
  title: "Matriz de Riscos",
  subtitle: "IRIS \u2014 Intelig\u00eancia de Relacionamento Integrado Seguro",
};

export const riscos = [
  {
    risco: "Uso inadequado de dados sens\u00edveis",
    probabilidade: "M\u00e9dio",
    impacto: "Alto",
    mitigacao: "Hash irrevers\u00edvel, segrega\u00e7\u00e3o de camadas, revis\u00e3o jur\u00eddica cont\u00ednua",
    responsavel: "L\u00edder de Governan\u00e7a",
  },
  {
    risco: "N\u00e3o conformidade com LGPD",
    probabilidade: "Baixo",
    impacto: "Alto",
    mitigacao: "Avalia\u00e7\u00e3o jur\u00eddica pr\u00e9via, registro de logs, controle de acesso por perfil",
    responsavel: "Jur\u00eddico + TI",
  },
  {
    risco: "Baixa qualidade ou inconsist\u00eancia dos dados integrados",
    probabilidade: "M\u00e9dio",
    impacto: "Alto",
    mitigacao: "Processo de deduplica\u00e7\u00e3o, valida\u00e7\u00e3o autom\u00e1tica e auditoria de base",
    responsavel: "Engenharia de Dados",
  },
  {
    risco: "Resist\u00eancia organizacional ao uso do painel",
    probabilidade: "M\u00e9dio",
    impacto: "M\u00e9dio",
    mitigacao: "Treinamento executivo e defini\u00e7\u00e3o clara de KPIs estrat\u00e9gicos",
    responsavel: "Product Owner",
  },
  {
    risco: "Interpreta\u00e7\u00e3o incorreta do indicador heur\u00edstico",
    probabilidade: "M\u00e9dio",
    impacto: "M\u00e9dio",
    mitigacao: "Comunica\u00e7\u00e3o expl\u00edcita de que IA \u00e9 suporte \u00e0 decis\u00e3o e revis\u00e3o peri\u00f3dica das regras",
    responsavel: "Product + Diretoria",
  },
  {
    risco: "Evolu\u00e7\u00e3o prematura para modelo probabil\u00edstico sem base consolidada",
    probabilidade: "Baixo",
    impacto: "Alto",
    mitigacao: "Gate formal de consolida\u00e7\u00e3o e governan\u00e7a antes de ML",
    responsavel: "Comit\u00ea Executivo",
  },
  {
    risco: "Depend\u00eancia excessiva de poucos canais integrados",
    probabilidade: "M\u00e9dio",
    impacto: "M\u00e9dio",
    mitigacao: "Roadmap progressivo de integra\u00e7\u00e3o multicanal",
    responsavel: "Tecnologia",
  },
];

export function getSeveridade(impacto, probabilidade) {
  if (impacto === "Alto") return "Alto";
  if (probabilidade === "Alto") return "Alto";
  if (impacto === "M\u00e9dio" && probabilidade === "M\u00e9dio") return "M\u00e9dio";
  return "Baixo";
}

export const severidadeColors = {
  Alto: { bg: "#FF6B6B", text: "#FFFFFF", border: "#FF6B6B" },
  "M\u00e9dio": { bg: "#FFC107", text: "#FFFFFF", border: "#FFC107" },
  Baixo: { bg: "#868E96", text: "#FFFFFF", border: "#868E96" },
};

export const legendaItems = [
  { level: "Alto", desc: "Risco cr\u00edtico \u2014 a\u00e7\u00e3o imediata necess\u00e1ria" },
  { level: "M\u00e9dio", desc: "Risco moderado \u2014 monitoramento ativo" },
  { level: "Baixo", desc: "Risco controlado \u2014 revis\u00e3o peri\u00f3dica" },
];
