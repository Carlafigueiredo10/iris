import { PageHeader } from "@/components/PageHeader";
import { Connections } from "@/components/Connections";
import { usePdfExport } from "@/hooks/usePdfExport";
import { Download, Shield, Merge, Brain, BarChart3 } from "lucide-react";

/* ── Data ─────────────────────────────────────────────── */

const blocos = [
  {
    id: 1,
    titulo: "Governança de Dados",
    icon: Shield,
    color: "teal",
    nota: "Governança é pré-condição para qualquer evolução em Inteligência Artificial.",
    funcionalidades: [
      {
        nome: "Geração de ID interno hash derivado de CPF",
        prioridade: "P1",
        tecnico: "Hash irreversível aplicado a 100% dos registros integrados",
        executivo: "Nenhum CPF exposto no ambiente operacional",
      },
      {
        nome: "Separação entre camada identificável e camada analítica",
        prioridade: "P1",
        tecnico: "Banco estruturado com tabelas segregadas e políticas de acesso",
        executivo: "Aprovação formal da área jurídica e TI",
      },
      {
        nome: "Controle de acesso por perfil",
        prioridade: "P1",
        tecnico: "Perfis configurados com permissões distintas",
        executivo: "Diretoria acessa apenas dados agregados",
      },
      {
        nome: "Registro de logs e rastreabilidade",
        prioridade: "P2",
        tecnico: "Logs armazenados para todas as consultas estratégicas",
        executivo: "Auditoria possível de uso do sistema",
      },
    ],
  },
  {
    id: 2,
    titulo: "Consolidação Multicanal",
    icon: Merge,
    color: "teal",
    funcionalidades: [
      {
        nome: "Integração de dois canais prioritários",
        prioridade: "P1",
        tecnico: "Conectores implementados e testados",
        executivo: "Dados consolidados visíveis no painel",
      },
      {
        nome: "Consolidação sob ID interno válido",
        prioridade: "P1",
        tecnico: "90% dos registros dos dois canais integrados consolidados sob ID interno válido",
        executivo: "Diretoria utiliza visão unificada em reuniões estratégicas",
      },
      {
        nome: "Tratamento de duplicidades",
        prioridade: "P2",
        tecnico: "Algoritmo de deduplicação implementado",
        executivo: "Redução perceptível de inconsistências",
      },
    ],
  },
  {
    id: 3,
    titulo: "Inteligência Inicial",
    icon: Brain,
    color: "purple",
    nota: "IA aqui atua como suporte à decisão, não substituição da decisão humana.",
    funcionalidades: [
      {
        nome: "Indicador heurístico inicial de risco",
        prioridade: "P1",
        tecnico: "Regra configurável aplicada sobre base consolidada",
        executivo: "Sinal de risco utilizado como apoio à priorização",
      },
      {
        nome: "Classificação de nível de criticidade",
        prioridade: "P2",
        tecnico: "Segmentação automática baseada em critérios definidos",
        executivo: "Diretoria identifica segmentos prioritários",
      },
      {
        nome: "Base estruturada para evolução probabilística",
        prioridade: "P3",
        tecnico: "Modelagem de dados compatível com ML futuro",
        executivo: "Aprovação executiva para avançar para Fase 2",
      },
    ],
  },
  {
    id: 4,
    titulo: "Visualização Estratégica",
    icon: BarChart3,
    color: "amber",
    funcionalidades: [
      {
        nome: "Dossiê resumido por cliente",
        prioridade: "P1",
        tecnico: "Página individual consolidada com histórico integrado",
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
        tecnico: "Configuração dinâmica de KPIs",
        executivo: "KPIs utilizados em decisões reais",
      },
    ],
  },
];

const prioridadeMap = {
  P1: { label: "P1", bg: "bg-teal/10 text-teal", tooltip: "Essencial para validação do MVP" },
  P2: { label: "P2", bg: "bg-amber/10 text-amber", tooltip: "Complementar para fortalecimento estratégico" },
  P3: { label: "P3", bg: "bg-slate-light/15 text-slate", tooltip: "Preparatório para evolução futura" },
};

const iconColorMap = {
  teal: "text-teal",
  purple: "text-purple-accent",
  amber: "text-amber",
};

const borderMap = {
  teal: "border-teal/20",
  purple: "border-purple-accent/20",
  amber: "border-amber/20",
};

/* ── Priority badge ───────────────────────────────────── */

function PriorityBadge({ level }) {
  const p = prioridadeMap[level];
  return (
    <span className={`relative group inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold ${p.bg}`}>
      {p.label}
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-1 rounded bg-navy text-white text-[10px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
        {p.tooltip}
      </span>
    </span>
  );
}

/* ── Page ─────────────────────────────────────────────── */

export default function MvpPage() {
  const { exportToPdf, isExporting } = usePdfExport();

  return (
    <div>
      <PageHeader
        title="Documento de MVP"
        subtitle="Funcionalidades priorizadas com critérios técnicos e executivos de validação"
        action={{
          label: "Exportar PDF",
          variant: "teal",
          icon: <Download size={16} />,
          disabled: isExporting,
          onClick: () => exportToPdf({ tipo: "mvp", filename: "IRIS-MVP.pdf" }),
        }}
      />

      <div className="space-y-6">
        {blocos.map((bloco) => {
          const Icon = bloco.icon;
          return (
            <div key={bloco.id} className={`bg-white rounded-lg border ${borderMap[bloco.color]} overflow-hidden`}>
              {/* Block header */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-slate-dark/[0.06] bg-ice/50">
                <Icon size={16} className={iconColorMap[bloco.color]} />
                <h3 className="text-sm font-bold text-navy">
                  Bloco {bloco.id} — {bloco.titulo}
                </h3>
              </div>

              {/* Nota contextual */}
              {bloco.nota && (
                <div className="px-5 pt-3">
                  <p className="text-[11px] text-slate-light italic">{bloco.nota}</p>
                </div>
              )}

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-slate-dark/[0.06]">
                      <th className="text-left px-5 py-2.5 text-[10px] font-bold uppercase tracking-wider text-slate-light w-[30%]">Funcionalidade</th>
                      <th className="text-center px-3 py-2.5 text-[10px] font-bold uppercase tracking-wider text-slate-light w-[8%]">Prio</th>
                      <th className="text-left px-3 py-2.5 text-[10px] font-bold uppercase tracking-wider text-slate-light w-[31%]">Critério Técnico</th>
                      <th className="text-left px-3 py-2.5 text-[10px] font-bold uppercase tracking-wider text-slate-light w-[31%]">Critério Executivo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bloco.funcionalidades.map((f, i) => (
                      <tr key={i} className="border-b border-slate-dark/[0.04] last:border-0 hover:bg-ice/30 transition-colors">
                        <td className="px-5 py-3 font-medium text-slate-dark">{f.nome}</td>
                        <td className="px-3 py-3 text-center"><PriorityBadge level={f.prioridade} /></td>
                        <td className="px-3 py-3 text-slate">{f.tecnico}</td>
                        <td className="px-3 py-3 text-slate">{f.executivo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}

        {/* Legenda de prioridades */}
        <div className="flex flex-wrap gap-4 px-1">
          {Object.entries(prioridadeMap).map(([key, val]) => (
            <div key={key} className="flex items-center gap-2">
              <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold ${val.bg}`}>{val.label}</span>
              <span className="text-[11px] text-slate-light">{val.tooltip}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="bg-ice-warm rounded-lg p-4 border border-slate-dark/[0.04]">
          <p className="text-xs text-slate leading-relaxed text-center">
            O MVP do IRIS foi estruturado para garantir governança, consolidação e geração de valor
            estratégico antes da evolução para modelos probabilísticos avançados. A inteligência é
            construída sobre base segura e rastreável.
          </p>
        </div>
      </div>

      <Connections links={["/canvas", "/roadmap", "/riscos"]} />
    </div>
  );
}
