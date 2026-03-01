import { PageHeader } from "@/components/PageHeader";
import { Connections } from "@/components/Connections";
import { usePdfExport } from "@/hooks/usePdfExport";
import {
  Download,
  Users,
  AlertCircle,
  Lightbulb,
  Zap,
  Route,
  MessageSquare,
  DollarSign,
  Layers,
  TrendingUp,
  Star,
} from "lucide-react";

/* ── Data ─────────────────────────────────────────────── */

const segmentosClientes = [
  "CFO e diretoria financeira interessados em aumento de LTV, redução de churn e eficiência operacional baseada em dados",
  "Diretoria de Operações e Experiência do Cliente",
  "Equipes de atendimento que se beneficiam de histórico integrado",
];

const problema =
  "As organizações acumulam dados de relacionamento em múltiplos canais, porém esses dados permanecem fragmentados e desorganizados devido à ausência de governança estruturada. Como consequência, decisões de investimento em retenção e expansão são tomadas com base em informações incompletas, gerando perda de receita potencial, aumento de churn e ineficiência operacional.";

const proposta =
  "IRIS transforma dados dispersos de atendimento em inteligência estratégica para tomada de decisão. A plataforma consolida interações multicanal sob governança estruturada, permitindo identificar onde investir para maximizar LTV, reduzir churn e otimizar custos operacionais.";

const solucao = [
  "Identificação segura via hash interno derivado de CPF",
  "Separação entre dados identificáveis e operacionais",
  "Consolidação de pelo menos dois canais",
  "Dossiê resumido por cliente",
  "Painel executivo agregado por segmento",
  "Indicadores estratégicos definidos pelo gestor",
  "Sinal inicial de risco baseado em regras",
];

const canais = [
  "Dashboard interno corporativo",
  "Integração futura com ferramentas de BI",
  "Arquitetura preparada para modelo SaaS enterprise",
];

const relacionamento = [
  "Plataforma orientada a dados e governança",
  "Transparência e rastreabilidade de indicadores",
  "Conformidade como premissa (LGPD)",
  "Base para evolução com módulos avançados de IA",
];

const fontes = [
  "Modelo inicial: implantação interna para validação de valor",
  "Modelo futuro: SaaS enterprise com cobrança por volume de clientes ativos ou por módulo de inteligência analítica",
];

const custos = [
  "Integração de dados multicanal",
  "Infraestrutura de armazenamento seguro",
  "Desenvolvimento do dashboard executivo",
  "Implementação de governança de dados",
  "Evolução futura com módulos de IA",
];

const metricas = [
  "90% dos registros dos dois canais integrados consolidados sob ID interno válido",
  "Redução no tempo de consolidação para decisão estratégica",
  "Identificação antecipada de padrões de insatisfação",
  "Uso ativo do painel por gestores estratégicos",
];

const diferencial = [
  "Governança como pilar estruturante",
  "Inteligência baseada em evidências observadas",
  "Arquitetura evolutiva preparada para IA avançada",
  "Foco em decisão financeira e não apenas operacional",
];

/* ── Block component ──────────────────────────────────── */

function CanvasBlock({ title, icon, content, color = "teal" }) {
  const bgMap = {
    teal: "border-teal/20 bg-teal/[0.03]",
    purple: "border-purple-accent/20 bg-purple-accent/[0.03]",
    coral: "border-coral/20 bg-coral/[0.03]",
    amber: "border-amber/20 bg-amber/[0.03]",
  };
  const dotMap = {
    teal: "bg-teal",
    purple: "bg-purple-accent",
    coral: "bg-coral",
    amber: "bg-amber",
  };
  const iconMap = {
    teal: "text-teal",
    purple: "text-purple-accent",
    coral: "text-coral",
    amber: "text-amber",
  };

  const isList = Array.isArray(content);

  return (
    <div className={`rounded-lg border p-4 ${bgMap[color]} h-full`}>
      <div className="flex items-center gap-2 mb-3">
        {icon && <span className={`${iconMap[color]} flex-shrink-0`}>{icon}</span>}
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-dark">
          {title}
        </h3>
      </div>
      {isList ? (
        <ul className="space-y-2">
          {content.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-slate leading-relaxed">
              <span className={`w-1.5 h-1.5 rounded-full ${dotMap[color]} mt-1.5 flex-shrink-0`} />
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-xs text-slate leading-relaxed">{content}</p>
      )}
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────── */

export default function CanvasPage() {
  const { exportToPdf, isExporting } = usePdfExport();

  return (
    <div>
      <PageHeader
        title="Business Model Canvas"
        subtitle="Visão estruturada do modelo de negócio do IRIS"
        action={{
          label: "Exportar PDF",
          variant: "teal",
          icon: <Download size={16} />,
          disabled: isExporting,
          onClick: () => exportToPdf({ tipo: "canvas", filename: "IRIS-Canvas.pdf" }),
        }}
      />

      <div className="space-y-5">
        {/* Proposta de Valor — destaque */}
        <div className="rounded-lg border-2 border-teal/30 bg-teal/[0.04] p-6">
          <div className="flex items-start gap-3">
            <Lightbulb size={22} className="text-teal flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="text-sm font-bold text-navy mb-2">Proposta de Valor</h2>
              <p className="text-xs text-slate leading-relaxed">{proposta}</p>
            </div>
          </div>
        </div>

        {/* Row 1 — 3 columns: Segmentos / Problema / Solução MVP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CanvasBlock
            title="Segmentos de Clientes"
            icon={<Users size={16} />}
            content={segmentosClientes}
            color="purple"
          />
          <CanvasBlock
            title="Problema"
            icon={<AlertCircle size={16} />}
            content={problema}
            color="coral"
          />
          <CanvasBlock
            title="Solução — MVP"
            icon={<Zap size={16} />}
            content={solucao}
            color="teal"
          />
        </div>

        {/* Row 2 — 3 columns: Canais / Relacionamento / Diferencial */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CanvasBlock
            title="Canais"
            icon={<Route size={16} />}
            content={canais}
            color="teal"
          />
          <CanvasBlock
            title="Relacionamento com Clientes"
            icon={<MessageSquare size={16} />}
            content={relacionamento}
            color="teal"
          />
          <CanvasBlock
            title="Diferencial Estratégico"
            icon={<Star size={16} />}
            content={diferencial}
            color="purple"
          />
        </div>

        {/* Row 3 — Receita & Custos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CanvasBlock
            title="Fontes de Receita"
            icon={<DollarSign size={16} />}
            content={fontes}
            color="amber"
          />
          <CanvasBlock
            title="Estrutura de Custos"
            icon={<Layers size={16} />}
            content={custos}
            color="amber"
          />
        </div>

        {/* Métricas-Chave */}
        <div className="bg-white rounded-lg border border-slate-dark/[0.06] p-5">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp size={16} className="text-teal" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-dark">
              Métricas-Chave
            </h3>
          </div>
          <p className="text-[10px] text-slate-light mb-3">
            Objetivo Estratégico: Aumentar LTV por meio de decisões baseadas em inteligência consolidada
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {metricas.map((m, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate leading-relaxed">
                <span className="w-5 h-5 rounded-md bg-teal/10 text-teal font-bold text-[10px] flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                {m}
              </div>
            ))}
          </div>
        </div>

        {/* Footer — referência cruzada */}
        <div className="bg-ice-warm rounded-lg p-4 border border-slate-dark/[0.04]">
          <p className="text-xs text-slate leading-relaxed text-center">
            Este Canvas se integra ao Documento de MVP e à Matriz de Riscos,
            garantindo rastreabilidade entre visão estratégica e execução operacional.
          </p>
        </div>
      </div>

      <Connections links={["/mvp", "/roadmap", "/teoria"]} />
    </div>
  );
}
