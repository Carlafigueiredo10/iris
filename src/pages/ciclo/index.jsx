import { PageHeader } from "@/components/PageHeader";
import { Connections } from "@/components/Connections";
import { usePdfExport } from "@/hooks/usePdfExport";
import {
  Download,
  Search,
  FlaskConical,
  BarChart3,
  ShieldCheck,
  Brain,
  ChevronRight,
} from "lucide-react";

/* ── Data ─────────────────────────────────────────────── */

const etapas = [
  {
    id: 1,
    titulo: "Descoberta Estratégica",
    icon: Search,
    color: "teal",
    conexao: "Conectada ao início da Fase 1 do Roadmap",
    objetivo: "Identificar problema de fragmentação e ausência de governança estruturada.",
    criterios: [
      "Definição clara do problema estratégico",
      "Validação executiva da proposta de valor",
    ],
    resultado: "Aprovação formal para desenvolvimento do MVP.",
  },
  {
    id: 2,
    titulo: "Validação de Viabilidade",
    icon: FlaskConical,
    color: "teal",
    conexao: "Conectada à Fase 1 — Fundação e MVP",
    objetivo: "Construir MVP com foco em governança e consolidação segura.",
    criterios: [
      "Implementação do ID interno seguro",
      "Consolidação mínima de dois canais prioritários",
    ],
    resultado: "Base operacional funcional e auditável.",
  },
  {
    id: 3,
    titulo: "Entrega Controlada",
    icon: BarChart3,
    color: "success",
    conexao: "Conectada à Fase 2 — Geração de Valor",
    objetivo: "Disponibilizar painel executivo e indicador heurístico inicial.",
    criterios: [
      "Uso recorrente do painel por diretoria",
      "Decisões estratégicas orientadas por dados consolidados",
    ],
    resultado: "Geração de valor incremental e redução de risco decisório.",
  },
  {
    id: 4,
    titulo: "Revisão Ética e Regulatória",
    icon: ShieldCheck,
    color: "amber",
    conexao: "Etapa formal antes de qualquer evolução probabilística",
    objetivo: "Garantir conformidade regulatória e maturidade de governança.",
    criterios: [
      "Auditoria de logs e controle de acesso",
      "Avaliação jurídica e validação executiva",
    ],
    resultado: "Autorização formal para evolução tecnológica.",
    nota: "Governança é pré-condição para IA",
  },
  {
    id: 5,
    titulo: "Evolução Escalonada",
    icon: Brain,
    color: "purple",
    conexao: "Conectada à Fase 3 — Escala e Preparação para IA Avançada",
    objetivo: "Expandir capacidades analíticas com base consolidada.",
    criterios: [
      "Modelagem de dados compatível com ML",
      "Aprovação executiva para implementação de modelos probabilísticos",
    ],
    resultado: "Escala segura da inteligência analítica.",
  },
];

const colorMap = {
  teal: {
    bg: "bg-teal",
    bgLight: "bg-teal/[0.04]",
    border: "border-teal/20",
    text: "text-teal",
    dot: "bg-teal",
    number: "bg-teal text-white",
  },
  success: {
    bg: "bg-success",
    bgLight: "bg-success/[0.04]",
    border: "border-success/20",
    text: "text-success",
    dot: "bg-success",
    number: "bg-success text-white",
  },
  amber: {
    bg: "bg-amber",
    bgLight: "bg-amber/[0.04]",
    border: "border-amber/20",
    text: "text-amber",
    dot: "bg-amber",
    number: "bg-amber text-white",
  },
  purple: {
    bg: "bg-purple-accent",
    bgLight: "bg-purple-accent/[0.04]",
    border: "border-purple-accent/20",
    text: "text-purple-accent",
    dot: "bg-purple-accent",
    number: "bg-purple-accent text-white",
  },
};

/* ── Page ─────────────────────────────────────────────── */

export default function CicloPage() {
  const { exportToPdf, isExporting } = usePdfExport();

  return (
    <div>
      <PageHeader
        title="Ciclo de Vida da Aplicação"
        subtitle="Estrutura evolutiva orientada por governança, validação estratégica e controle de risco"
        action={{
          label: "Baixar PDF – Ciclo de Vida IRIS",
          variant: "teal",
          icon: <Download size={16} />,
          disabled: isExporting,
          onClick: () => exportToPdf({ tipo: "ciclo", filename: "IRIS-Ciclo-Vida.pdf" }),
        }}
      />

      <div className="space-y-6">
        {/* Timeline horizontal */}
        <div className="bg-white rounded-lg border border-slate-dark/[0.06] p-5 overflow-x-auto">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-dark mb-5">
            Ciclo de Vida — Visão Geral
          </h3>

          <div className="flex items-center justify-between min-w-[600px]">
            {etapas.map((etapa, idx) => {
              const c = colorMap[etapa.color];
              return (
                <div key={etapa.id} className="flex items-center">
                  <button
                    type="button"
                    onClick={() =>
                      document.getElementById(`etapa-${etapa.id}`)?.scrollIntoView({ behavior: "smooth", block: "center" })
                    }
                    className="flex flex-col items-center gap-2 group cursor-pointer"
                  >
                    <div className={`w-10 h-10 rounded-full ${c.number} flex items-center justify-center font-bold text-sm shadow-sm group-hover:scale-110 transition-transform`}>
                      {etapa.id}
                    </div>
                    <span className="text-[10px] font-semibold text-slate-dark text-center max-w-[100px] leading-tight group-hover:text-navy transition-colors">
                      {etapa.titulo}
                    </span>
                  </button>
                  {idx < etapas.length - 1 && (
                    <ChevronRight size={16} className="text-slate-light/50 mx-2 flex-shrink-0" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Etapa detail cards */}
        <div className="space-y-4">
          {etapas.map((etapa) => {
            const c = colorMap[etapa.color];
            const Icon = etapa.icon;
            return (
              <div
                key={etapa.id}
                id={`etapa-${etapa.id}`}
                className={`bg-white rounded-lg border ${c.border} p-5`}
              >
                <div className="flex items-center gap-3 mb-1">
                  <div className={`w-7 h-7 rounded-lg ${c.number} flex items-center justify-center font-bold text-xs flex-shrink-0`}>
                    {etapa.id}
                  </div>
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <Icon size={16} className={c.text} />
                    <h3 className="text-sm font-bold text-navy truncate">{etapa.titulo}</h3>
                  </div>
                  <span className="text-[10px] text-slate-light font-mono whitespace-nowrap ml-auto">{etapa.conexao}</span>
                </div>

                {etapa.nota && (
                  <div className={`ml-[40px] mt-2 mb-3 inline-flex items-center gap-1.5 ${c.bgLight} border ${c.border} rounded-md px-2.5 py-1`}>
                    <ShieldCheck size={11} className={c.text} />
                    <span className={`text-[10px] font-semibold ${c.text}`}>{etapa.nota}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ml-[40px] mt-3">
                  {/* Objetivo */}
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-light mb-1.5">Objetivo</p>
                    <p className="text-xs text-slate leading-relaxed">{etapa.objetivo}</p>
                  </div>

                  {/* Critérios de Avanço */}
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-light mb-1.5">Critérios de Avanço</p>
                    <ul className="space-y-1.5">
                      {etapa.criterios.map((cr, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-xs text-slate leading-relaxed">
                          <span className={`w-1 h-1 rounded-full ${c.dot} mt-1.5 flex-shrink-0`} />
                          {cr}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Resultado Esperado */}
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-light mb-1.5">Resultado Esperado</p>
                    <p className="text-xs text-slate leading-relaxed">{etapa.resultado}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer — conexão com Roadmap */}
        <div className="bg-ice-warm rounded-lg p-4 border border-slate-dark/[0.04]">
          <p className="text-xs text-slate leading-relaxed text-center">
            O ciclo de vida do IRIS está alinhado ao Roadmap estratégico de 18 meses,
            garantindo coerência entre evolução técnica, geração de valor e controle de risco.
          </p>
        </div>
      </div>

      <Connections links={["/roadmap", "/riscos", "/ia"]} />
    </div>
  );
}
