import { PageHeader } from "@/components/PageHeader";
import { Connections } from "@/components/Connections";
import { usePdfExport } from "@/hooks/usePdfExport";
import { Download, Lock, Brain, Target, TrendingUp, CheckCircle2 } from "lucide-react";

/* ── Data ─────────────────────────────────────────────── */

const quarters = ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6"];

const fases = [
  {
    id: 1,
    titulo: "Fundação e MVP",
    periodo: "Q1–Q2",
    startCol: 1,
    spanCols: 2,
    color: "teal",
    objetivo: "Criar base consolidada, segura e auditável para decisões executivas.",
    entregaveis: [
      "Implementação da governança de dados e ID interno seguro",
      "Consolidação de dois canais prioritários",
      "Dossiê resumido por cliente",
      "Painel executivo agregado por segmento",
    ],
    valor: "Criar base consolidada, segura e auditável para decisões executivas.",
  },
  {
    id: 2,
    titulo: "Geração de Valor",
    periodo: "Q3–Q5",
    startCol: 3,
    spanCols: 3,
    color: "success",
    objetivo: "Reduzir churn por meio de priorização orientada por dados e melhorar eficiência operacional.",
    entregaveis: [
      "Indicador heurístico inicial de risco",
      "Classificação de criticidade por segmento",
      "Ampliação gradual de integrações",
      "Uso recorrente do painel em decisões estratégicas",
    ],
    indicador: "Decisões de investimento baseadas em segmentos críticos.",
    valor: "Reduzir churn por meio de priorização orientada por dados e melhorar eficiência operacional.",
  },
  {
    id: 3,
    titulo: "Escala e Preparação para IA Avançada",
    periodo: "Q6",
    startCol: 6,
    spanCols: 1,
    color: "purple",
    objetivo: "Autorizar evolução para modelos probabilísticos apenas com base consolidada e risco controlado.",
    entregaveis: [
      "Base modelada para evolução probabilística",
      "Auditoria consolidada de governança",
      "Avaliação executiva de maturidade de dados",
    ],
    valor: "Autorizar evolução para modelos probabilísticos apenas com base consolidada e risco controlado.",
  },
];

const gates = [
  {
    id: 1,
    titulo: "Gate 1 — Base Consolidada e Validada",
    criterio: "90% dos registros dos dois canais integrados consolidados sob ID interno válido + validação jurídica.",
    posicao: "Final de Q2",
    icon: Lock,
    color: "amber",
  },
  {
    id: 2,
    titulo: "Gate 2 — Autorização Executiva para IA Avançada",
    criterio: "Aprovação formal após consolidação de governança e validação de impacto estratégico.",
    posicao: "Final de Q6",
    icon: Brain,
    color: "purple",
  },
];

const barColors = {
  teal: "bg-teal",
  success: "bg-success",
  purple: "bg-purple-accent",
};

const dotColors = {
  teal: "bg-teal",
  success: "bg-success",
  purple: "bg-purple-accent",
};

const borderColors = {
  teal: "border-teal/20",
  success: "border-success/20",
  purple: "border-purple-accent/20",
};

const textColors = {
  teal: "text-teal",
  success: "text-success",
  purple: "text-purple-accent",
};

/* ── Page ─────────────────────────────────────────────── */

export default function RoadmapPage() {
  const { exportToPdf, isExporting } = usePdfExport();

  return (
    <div>
      <PageHeader
        title="Roadmap Estratégico — 18 Meses"
        subtitle="Evolução estruturada da governança para inteligência avançada"
        action={{
          label: "Exportar PDF",
          variant: "teal",
          icon: <Download size={16} />,
          disabled: isExporting,
          onClick: () => exportToPdf({ tipo: "roadmap", filename: "IRIS-Roadmap.pdf" }),
        }}
      />

      <div className="space-y-6">
        {/* Gantt timeline */}
        <div className="bg-white rounded-lg border border-slate-dark/[0.06] p-5 overflow-x-auto">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-dark mb-4">
            Timeline — Gantt Simplificado
          </h3>

          {/* Quarter headers */}
          <div className="grid grid-cols-6 gap-1 mb-3 min-w-[480px]">
            {quarters.map((q) => (
              <div key={q} className="text-center text-[11px] font-semibold text-slate-light uppercase tracking-wider">
                {q}
              </div>
            ))}
          </div>

          {/* Phase bars + Gate markers */}
          <div className="space-y-2 min-w-[480px]">
            {/* Phase 1 */}
            <div
              className="grid grid-cols-6 gap-1 items-center cursor-pointer"
              onClick={() => document.getElementById("fase-1")?.scrollIntoView({ behavior: "smooth", block: "center" })}
            >
              {Array.from({ length: 6 }).map((_, i) => {
                const f = fases[0];
                const col = i + 1;
                const isInRange = col >= f.startCol && col < f.startCol + f.spanCols;
                const isFirst = col === f.startCol;
                const isLast = col === f.startCol + f.spanCols - 1;
                if (!isInRange) return <div key={i} />;
                return (
                  <div
                    key={i}
                    className={`h-9 ${barColors[f.color]} flex items-center hover:opacity-85 transition-opacity ${
                      isFirst ? "rounded-l-lg pl-3" : ""
                    } ${isLast ? "rounded-r-lg" : ""}`}
                  >
                    {isFirst && (
                      <span className="text-white text-[11px] font-semibold whitespace-nowrap">
                        Fase {f.id} — {f.periodo}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Gate 1 marker */}
            <div
              className="grid grid-cols-6 gap-1 items-center cursor-pointer"
              onClick={() => document.getElementById("gate-1")?.scrollIntoView({ behavior: "smooth", block: "center" })}
            >
              <div />
              <div className="flex justify-end">
                <div className="w-0.5 h-5 bg-amber" />
              </div>
              <div className="flex justify-start">
                <div className="flex items-center gap-1.5 bg-amber/10 border border-amber/30 rounded-md px-2 py-1 hover:bg-amber/20 transition-colors">
                  <Lock size={11} className="text-amber" />
                  <span className="text-[10px] font-bold text-amber whitespace-nowrap">GATE 1</span>
                </div>
              </div>
              <div />
              <div />
              <div />
            </div>

            {/* Phase 2 */}
            <div
              className="grid grid-cols-6 gap-1 items-center cursor-pointer"
              onClick={() => document.getElementById("fase-2")?.scrollIntoView({ behavior: "smooth", block: "center" })}
            >
              {Array.from({ length: 6 }).map((_, i) => {
                const f = fases[1];
                const col = i + 1;
                const isInRange = col >= f.startCol && col < f.startCol + f.spanCols;
                const isFirst = col === f.startCol;
                const isLast = col === f.startCol + f.spanCols - 1;
                if (!isInRange) return <div key={i} />;
                return (
                  <div
                    key={i}
                    className={`h-9 ${barColors[f.color]} flex items-center hover:opacity-85 transition-opacity ${
                      isFirst ? "rounded-l-lg pl-3" : ""
                    } ${isLast ? "rounded-r-lg" : ""}`}
                  >
                    {isFirst && (
                      <span className="text-white text-[11px] font-semibold whitespace-nowrap">
                        Fase {f.id} — {f.periodo}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Phase 3 */}
            <div
              className="grid grid-cols-6 gap-1 items-center cursor-pointer"
              onClick={() => document.getElementById("fase-3")?.scrollIntoView({ behavior: "smooth", block: "center" })}
            >
              {Array.from({ length: 6 }).map((_, i) => {
                const f = fases[2];
                const col = i + 1;
                const isInRange = col >= f.startCol && col < f.startCol + f.spanCols;
                const isFirst = col === f.startCol;
                const isLast = col === f.startCol + f.spanCols - 1;
                if (!isInRange) return <div key={i} />;
                return (
                  <div
                    key={i}
                    className={`h-9 ${barColors[f.color]} flex items-center hover:opacity-85 transition-opacity ${
                      isFirst ? "rounded-l-lg pl-3" : ""
                    } ${isLast ? "rounded-r-lg" : ""}`}
                  >
                    {isFirst && (
                      <span className="text-white text-[11px] font-semibold whitespace-nowrap">
                        Fase {f.id} — {f.periodo}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Gate 2 marker */}
            <div
              className="grid grid-cols-6 gap-1 items-center cursor-pointer"
              onClick={() => document.getElementById("gate-2")?.scrollIntoView({ behavior: "smooth", block: "center" })}
            >
              <div />
              <div />
              <div />
              <div />
              <div />
              <div className="flex justify-center">
                <div className="flex items-center gap-1.5 bg-purple-accent/10 border border-purple-accent/30 rounded-md px-2 py-1 hover:bg-purple-accent/20 transition-colors">
                  <Brain size={11} className="text-purple-accent" />
                  <span className="text-[10px] font-bold text-purple-accent whitespace-nowrap">GATE 2</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Phase details + Valor Executivo sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Phase detail cards + Gates — 3 cols */}
          <div className="lg:col-span-3 space-y-4">
            {/* Phase 1 */}
            <div id="fase-1" className={`bg-white rounded-lg border ${borderColors[fases[0].color]} p-5`}>
              <div className="flex items-center gap-2 mb-1">
                <span className={`w-2.5 h-2.5 rounded-full ${dotColors[fases[0].color]}`} />
                <h3 className="text-sm font-bold text-navy">
                  Fase {fases[0].id} — {fases[0].titulo}
                </h3>
                <span className="text-[10px] font-mono text-slate-light ml-auto">{fases[0].periodo}</span>
              </div>
              <div className="ml-[18px]">
                <div className="flex items-center gap-1.5 mb-3">
                  <Target size={12} className={textColors[fases[0].color]} />
                  <p className="text-xs text-slate font-medium">{fases[0].objetivo}</p>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-light mb-2">Entregáveis Principais</p>
                <ul className="space-y-1.5">
                  {fases[0].entregaveis.map((e, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-xs text-slate leading-relaxed">
                      <span className={`w-1 h-1 rounded-full ${dotColors[fases[0].color]} mt-1.5 flex-shrink-0`} />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Gate 1 */}
            <div id="gate-1" className="bg-amber/[0.04] rounded-lg border border-amber/20 p-5">
              <div className="flex items-center gap-2 mb-1">
                <Lock size={16} className="text-amber" />
                <h3 className="text-sm font-bold text-navy">{gates[0].titulo}</h3>
                <span className="text-[10px] font-mono text-slate-light ml-auto">{gates[0].posicao}</span>
              </div>
              <div className="flex items-start gap-1.5 ml-[24px]">
                <CheckCircle2 size={12} className="text-amber mt-0.5 flex-shrink-0" />
                <p className="text-xs text-slate leading-relaxed">{gates[0].criterio}</p>
              </div>
            </div>

            {/* Phase 2 */}
            <div id="fase-2" className={`bg-white rounded-lg border ${borderColors[fases[1].color]} p-5`}>
              <div className="flex items-center gap-2 mb-1">
                <span className={`w-2.5 h-2.5 rounded-full ${dotColors[fases[1].color]}`} />
                <h3 className="text-sm font-bold text-navy">
                  Fase {fases[1].id} — {fases[1].titulo}
                </h3>
                <span className="text-[10px] font-mono text-slate-light ml-auto">{fases[1].periodo}</span>
              </div>
              <div className="ml-[18px]">
                <div className="flex items-center gap-1.5 mb-3">
                  <Target size={12} className={textColors[fases[1].color]} />
                  <p className="text-xs text-slate font-medium">{fases[1].objetivo}</p>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-light mb-2">Entregáveis Principais</p>
                <ul className="space-y-1.5 mb-3">
                  {fases[1].entregaveis.map((e, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-xs text-slate leading-relaxed">
                      <span className={`w-1 h-1 rounded-full ${dotColors[fases[1].color]} mt-1.5 flex-shrink-0`} />
                      {e}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-1.5 bg-success/[0.06] rounded-md px-3 py-2">
                  <TrendingUp size={12} className="text-success flex-shrink-0" />
                  <p className="text-[11px] text-slate">
                    <span className="font-semibold text-success">Indicador esperado:</span>{" "}
                    {fases[1].indicador}
                  </p>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div id="fase-3" className={`bg-white rounded-lg border ${borderColors[fases[2].color]} p-5`}>
              <div className="flex items-center gap-2 mb-1">
                <span className={`w-2.5 h-2.5 rounded-full ${dotColors[fases[2].color]}`} />
                <h3 className="text-sm font-bold text-navy">
                  Fase {fases[2].id} — {fases[2].titulo}
                </h3>
                <span className="text-[10px] font-mono text-slate-light ml-auto">{fases[2].periodo}</span>
              </div>
              <div className="ml-[18px]">
                <div className="flex items-center gap-1.5 mb-3">
                  <Target size={12} className={textColors[fases[2].color]} />
                  <p className="text-xs text-slate font-medium">{fases[2].objetivo}</p>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-light mb-2">Entregáveis Principais</p>
                <ul className="space-y-1.5">
                  {fases[2].entregaveis.map((e, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-xs text-slate leading-relaxed">
                      <span className={`w-1 h-1 rounded-full ${dotColors[fases[2].color]} mt-1.5 flex-shrink-0`} />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Gate 2 */}
            <div id="gate-2" className="bg-purple-accent/[0.04] rounded-lg border border-purple-accent/20 p-5">
              <div className="flex items-center gap-2 mb-1">
                <Brain size={16} className="text-purple-accent" />
                <h3 className="text-sm font-bold text-navy">{gates[1].titulo}</h3>
                <span className="text-[10px] font-mono text-slate-light ml-auto">{gates[1].posicao}</span>
              </div>
              <div className="flex items-start gap-1.5 ml-[24px]">
                <CheckCircle2 size={12} className="text-purple-accent mt-0.5 flex-shrink-0" />
                <p className="text-xs text-slate leading-relaxed">{gates[1].criterio}</p>
              </div>
            </div>
          </div>

          {/* Valor Executivo sidebar — 1 col */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg border border-slate-dark/[0.06] p-4 sticky top-6">
              <h3 className="text-[10px] font-bold uppercase tracking-wider text-slate-dark mb-4">
                Valor Executivo por Fase
              </h3>
              {fases.map((f) => (
                <div key={f.id} className="mb-4 last:mb-0">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className={`w-2 h-2 rounded-full ${dotColors[f.color]}`} />
                    <span className="text-[10px] font-bold text-slate-dark">Fase {f.id}</span>
                  </div>
                  <p className="text-[11px] text-slate leading-relaxed ml-[14px]">{f.valor}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-ice-warm rounded-lg p-4 border border-slate-dark/[0.04]">
          <p className="text-xs text-slate leading-relaxed text-center">
            O Roadmap foi estruturado para entregar valor incremental com risco controlado,
            garantindo que a evolução para inteligência avançada ocorra apenas sobre uma base
            segura e validada.
          </p>
        </div>
      </div>

      <Connections links={["/mvp", "/ciclo", "/riscos"]} />
    </div>
  );
}
