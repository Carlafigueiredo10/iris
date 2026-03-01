import { PageHeader } from "@/components/PageHeader";
import { Connections } from "@/components/Connections";
import { usePdfExport } from "@/hooks/usePdfExport";
import { Download, AlertTriangle } from "lucide-react";

/* ── Data ─────────────────────────────────────────────── */

const riscos = [
  {
    risco: "Uso inadequado de dados sensíveis",
    probabilidade: "Médio",
    impacto: "Alto",
    mitigacao: "Hash irreversível, segregação de camadas, revisão jurídica contínua",
    responsavel: "Líder de Governança",
  },
  {
    risco: "Não conformidade com LGPD",
    probabilidade: "Baixo",
    impacto: "Alto",
    mitigacao: "Avaliação jurídica prévia, registro de logs, controle de acesso por perfil",
    responsavel: "Jurídico + TI",
  },
  {
    risco: "Baixa qualidade ou inconsistência dos dados integrados",
    probabilidade: "Médio",
    impacto: "Alto",
    mitigacao: "Processo de deduplicação, validação automática e auditoria de base",
    responsavel: "Engenharia de Dados",
  },
  {
    risco: "Resistência organizacional ao uso do painel",
    probabilidade: "Médio",
    impacto: "Médio",
    mitigacao: "Treinamento executivo e definição clara de KPIs estratégicos",
    responsavel: "Product Owner",
  },
  {
    risco: "Interpretação incorreta do indicador heurístico",
    probabilidade: "Médio",
    impacto: "Médio",
    mitigacao: "Comunicação explícita de que IA é suporte à decisão e revisão periódica das regras",
    responsavel: "Product + Diretoria",
  },
  {
    risco: "Evolução prematura para modelo probabilístico sem base consolidada",
    probabilidade: "Baixo",
    impacto: "Alto",
    mitigacao: "Gate formal de consolidação e governança antes de ML",
    responsavel: "Comitê Executivo",
  },
  {
    risco: "Dependência excessiva de poucos canais integrados",
    probabilidade: "Médio",
    impacto: "Médio",
    mitigacao: "Roadmap progressivo de integração multicanal",
    responsavel: "Tecnologia",
  },
];

const severidadeMap = {
  Alto: { label: "Alto", bg: "bg-coral/10 text-coral", border: "border-l-coral" },
  Médio: { label: "Médio", bg: "bg-amber/10 text-amber", border: "border-l-amber" },
  Baixo: { label: "Baixo", bg: "bg-slate-light/15 text-slate", border: "border-l-slate-light" },
};

function getSeveridade(impacto, probabilidade) {
  if (impacto === "Alto") return "Alto";
  if (probabilidade === "Alto") return "Alto";
  if (impacto === "Médio" && probabilidade === "Médio") return "Médio";
  return "Baixo";
}

/* ── Badge ────────────────────────────────────────────── */

function SeverityBadge({ level }) {
  const s = severidadeMap[level];
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold ${s.bg}`}>
      {s.label}
    </span>
  );
}

/* ── Page ─────────────────────────────────────────────── */

export default function RiscosPage() {
  const { exportToPdf, isExporting } = usePdfExport();

  return (
    <div>
      <PageHeader
        title="Matriz de Riscos"
        subtitle="Riscos estratégicos priorizados com probabilidade, impacto e plano de mitigação"
        action={{
          label: "Baixar PDF – Matriz de Riscos IRIS",
          variant: "teal",
          icon: <Download size={16} />,
          disabled: isExporting,
          onClick: () => exportToPdf({ tipo: "riscos", filename: "IRIS-Matriz-Riscos.pdf" }),
        }}
      />

      <div className="space-y-6">
        {/* Risks table */}
        <div className="bg-white rounded-lg border border-slate-dark/[0.06] overflow-hidden">
          <div className="flex items-center gap-2 px-5 py-3 border-b border-slate-dark/[0.06] bg-ice/50">
            <AlertTriangle size={16} className="text-coral" />
            <h3 className="text-sm font-bold text-navy">
              7 Riscos Identificados
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-slate-dark/[0.06]">
                  <th className="text-left px-5 py-2.5 text-[10px] font-bold uppercase tracking-wider text-slate-light w-[22%]">Risco</th>
                  <th className="text-center px-3 py-2.5 text-[10px] font-bold uppercase tracking-wider text-slate-light w-[10%]">Probabilidade</th>
                  <th className="text-center px-3 py-2.5 text-[10px] font-bold uppercase tracking-wider text-slate-light w-[10%]">Impacto</th>
                  <th className="text-left px-3 py-2.5 text-[10px] font-bold uppercase tracking-wider text-slate-light w-[34%]">Plano de Mitigação</th>
                  <th className="text-left px-3 py-2.5 text-[10px] font-bold uppercase tracking-wider text-slate-light w-[14%]">Responsável</th>
                </tr>
              </thead>
              <tbody>
                {riscos.map((r, i) => {
                  const sev = getSeveridade(r.impacto, r.probabilidade);
                  return (
                    <tr
                      key={i}
                      className={`border-b border-slate-dark/[0.04] last:border-0 hover:bg-ice/30 transition-colors border-l-[3px] ${severidadeMap[sev].border}`}
                    >
                      <td className="px-5 py-3 font-medium text-slate-dark">{r.risco}</td>
                      <td className="px-3 py-3 text-center"><SeverityBadge level={r.probabilidade} /></td>
                      <td className="px-3 py-3 text-center"><SeverityBadge level={r.impacto} /></td>
                      <td className="px-3 py-3 text-slate">{r.mitigacao}</td>
                      <td className="px-3 py-3 text-slate font-medium">{r.responsavel}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Legenda */}
        <div className="flex flex-wrap gap-4 px-1">
          {Object.entries(severidadeMap).map(([key, val]) => (
            <div key={key} className="flex items-center gap-2">
              <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold ${val.bg}`}>{val.label}</span>
              <span className="text-[11px] text-slate-light">
                {key === "Alto" && "Risco crítico — ação imediata necessária"}
                {key === "Médio" && "Risco moderado — monitoramento ativo"}
                {key === "Baixo" && "Risco controlado — revisão periódica"}
              </span>
            </div>
          ))}
        </div>

        {/* Síntese Executiva */}
        <div className="bg-ice-warm rounded-lg p-4 border border-slate-dark/[0.04]">
          <p className="text-xs text-slate leading-relaxed text-center">
            O gerenciamento de riscos do IRIS está estruturado para proteger a organização em três
            dimensões: regulatória, técnica e estratégica. A evolução para modelos avançados de IA
            somente ocorrerá após consolidação segura da base e validação executiva.
          </p>
        </div>
      </div>

      <Connections links={["/mvp", "/ia", "/ciclo"]} />
    </div>
  );
}
