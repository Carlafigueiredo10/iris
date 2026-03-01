import { PageHeader } from "@/components/PageHeader";
import { Connections } from "@/components/Connections";
import { usePdfExport } from "@/hooks/usePdfExport";
import {
  Download,
  Eye,
  AlertCircle,
  Lightbulb,
  FlaskConical,
  Map,
  ShieldAlert,
  Brain,
  Layers,
  Search,
  CheckCircle2,
  BookOpen,
} from "lucide-react";

/* ── Data ─────────────────────────────────────────────── */

const problemas = [
  "Dados multicanal fragmentados",
  "Decisões baseadas em consolidação manual",
  "Dificuldade de priorizar temas críticos",
  "Risco de churn não identificado com antecedência",
  "Alocação ineficiente de recursos",
];

const propostaPermite = [
  "Priorização baseada em evidência",
  "Redução do tempo de consolidação para decisão executiva",
  "Visão agregada por segmento",
  "Apoio à retenção e alocação eficiente de recursos",
];

const mvpCapacidades = [
  "Consolidação multicanal sob ID interno válido",
  "Geração de visão executiva agregada",
  "Indicador heurístico inicial de criticidade",
];

const hipoteseMvp =
  "Se consolidarmos 90% dos registros de dois canais prioritários sob um ID interno válido e aplicarmos um indicador heurístico inicial de criticidade, será possível reduzir o tempo de consolidação para decisão executiva e aumentar a precisão na priorização de temas com impacto financeiro.";

const fasesRoadmap = [
  {
    id: 1,
    titulo: "Fundação Segura e Inteligência Estruturada",
    desc: "Implantação de governança e consolidação multicanal.",
    criterio: "90% de consolidação sob ID interno válido e uso ativo do painel executivo.",
    color: "teal",
  },
  {
    id: 2,
    titulo: "Geração de Valor e Inteligência Estruturada",
    desc: "Evolução do indicador heurístico, segmentação orientada por evidência e métricas financeiras por segmento.",
    criterio: "Redução do tempo médio de consolidação para decisão executiva e evidência de impacto em retenção ou eficiência operacional.",
    color: "purple",
  },
  {
    id: 3,
    titulo: "Escala e Preparação para IA Avançada",
    desc: "Modelos probabilísticos supervisionados, arquitetura escalável e monitoramento contínuo de viés.",
    criterio: "A expansão para IA ocorre apenas após validação formal das fases anteriores.",
    color: "coral",
  },
];

const riscosPrincipais = [
  "Vazamento de dados identificáveis",
  "Baixa qualidade de dados",
  "Risco regulatório associado à LGPD",
  "Interpretação incorreta de indicadores",
  "Resistência organizacional",
  "Subestimação da complexidade técnica",
];

const mitigacoesIA = [
  "Explicabilidade obrigatória",
  "Monitoramento contínuo de viés",
  "Revisão ética formal",
  "Supervisão humana permanente",
];

const artefatos = [
  "Business Model Canvas",
  "Documento de MVP",
  "Roadmap estratégico",
  "Matriz de Riscos",
  "Gestão de IA e Revisão Regulatória",
];

const conclusaoParagrafos = [
  "O IRIS não nasce como ferramenta isolada, mas como infraestrutura estratégica de decisão financeira baseada em evidência.",
  "Ao consolidar governança, inteligência estruturada e responsabilidade ética, estabelece base sustentável para expansão analítica futura.",
  "Cada fase entrega valor incremental com risco controlado, assegurando evolução técnica consistente e institucionalmente sustentável.",
];

/* ── Helpers ──────────────────────────────────────────── */

const colorClasses = {
  teal: { dot: "bg-teal", text: "text-teal", border: "border-teal/20", number: "bg-teal text-white" },
  coral: { dot: "bg-coral", text: "text-coral", border: "border-coral/20", number: "bg-coral text-white" },
  purple: { dot: "bg-purple-accent", text: "text-purple-accent", border: "border-purple-accent/20", number: "bg-purple-accent text-white" },
  amber: { dot: "bg-amber", text: "text-amber", border: "border-amber/20", number: "bg-amber text-white" },
};

function SectionTitle({ icon, title, color = "teal" }) {
  const Icon = icon;
  const c = colorClasses[color];
  return (
    <div className="flex items-center gap-2 mb-4">
      <Icon size={16} className={c.text} />
      <h2 className="text-xs font-bold uppercase tracking-wider text-slate-dark">{title}</h2>
    </div>
  );
}

function Bullet({ children, color = "teal" }) {
  const c = colorClasses[color];
  return (
    <li className="flex items-start gap-2 text-xs text-slate leading-relaxed">
      <span className={`w-1.5 h-1.5 rounded-full ${c.dot} mt-1.5 flex-shrink-0`} />
      {children}
    </li>
  );
}

/* ── Page ─────────────────────────────────────────────── */

export default function ReadmePage() {
  const { exportToPdf, isExporting } = usePdfExport();

  return (
    <div>
      <PageHeader
        title="README"
        subtitle="Lógica do planejamento e como interpretar os artefatos do projeto IRIS"
        action={{
          label: "Baixar PDF — README",
          variant: "teal",
          icon: <Download size={16} />,
          disabled: isExporting,
          onClick: () => exportToPdf({ tipo: "readme", filename: "IRIS-README.pdf" }),
        }}
      />

      <div className="space-y-8">
        {/* ── Título + Visão ───────────────────────────── */}
        <section>
          <div className="text-center mb-6">
            <h1 className="text-lg font-bold text-navy mb-1">IRIS</h1>
            <p className="text-xs text-slate-light">Inteligência de Relacionamento Integrado Seguro</p>
          </div>

          <SectionTitle icon={Eye} title="Visão do Projeto" color="teal" />

          <div className="rounded-lg border-2 border-teal/30 bg-teal/[0.04] p-5 space-y-3">
            <p className="text-xs text-slate leading-relaxed">
              O IRIS é uma plataforma de inteligência de relacionamento que transforma dados dispersos
              de atendimento em infraestrutura estratégica de decisão financeira baseada em evidência.
            </p>
            <p className="text-xs text-slate leading-relaxed">
              Organizações acumulam interações em múltiplos canais, mas enfrentam fragmentação,
              consolidação manual e baixa rastreabilidade.
            </p>
            <p className="text-xs text-slate leading-relaxed">
              O IRIS resolve esse cenário ao estruturar governança como núcleo, consolidação como
              fundamento e inteligência artificial como evolução progressiva e supervisionada.
            </p>
            <p className="text-xs font-semibold text-navy">
              A evolução não é tecnológica por impulso, mas estratégica por validação.
            </p>
          </div>
        </section>

        {/* ── Problema ─────────────────────────────────── */}
        <section>
          <SectionTitle icon={AlertCircle} title="Problema" color="coral" />
          <div className="bg-white rounded-lg border border-coral/20 p-5">
            <ul className="space-y-2">
              {problemas.map((p, i) => <Bullet key={i} color="coral">{p}</Bullet>)}
            </ul>
          </div>
        </section>

        {/* ── Proposta de Valor ────────────────────────── */}
        <section>
          <SectionTitle icon={Lightbulb} title="Proposta de Valor" color="teal" />

          <div className="space-y-4">
            <div className="bg-white rounded-lg border border-teal/20 p-5">
              <p className="text-xs text-slate leading-relaxed mb-3">
                O IRIS consolida interações multicanal sob um ID interno válido, separando camada
                identificável de camada operacional e garantindo conformidade regulatória.
              </p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-light mb-2">
                A partir dessa base estruturada, permite:
              </p>
              <ul className="space-y-2">
                {propostaPermite.map((p, i) => <Bullet key={i} color="teal">{p}</Bullet>)}
              </ul>
            </div>

            <div className="rounded-lg bg-ice-warm p-4 border border-slate-dark/[0.04]">
              <p className="text-xs text-slate leading-relaxed text-center">
                Não é apenas visualização de dados.{" "}
                <span className="font-semibold text-navy">É direcionamento acionável.</span>
              </p>
            </div>
          </div>
        </section>

        {/* ── MVP ──────────────────────────────────────── */}
        <section>
          <SectionTitle icon={FlaskConical} title="MVP — Experimento Estratégico" color="coral" />

          <div className="space-y-4">
            <div className="bg-white rounded-lg border border-coral/20 p-5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-light mb-3">
                O MVP foi definido para validar três capacidades centrais:
              </p>
              <ul className="space-y-2">
                {mvpCapacidades.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate leading-relaxed">
                    <div className="w-5 h-5 rounded-md bg-coral/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[10px] font-bold text-coral">{i + 1}</span>
                    </div>
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Hipótese */}
            <div className="rounded-lg border-2 border-coral/30 bg-coral/[0.04] p-5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-light mb-2">
                Hipótese do MVP
              </p>
              <p className="text-xs text-slate leading-relaxed">{hipoteseMvp}</p>
            </div>

            {/* Métrica */}
            <div className="flex items-start gap-2 bg-white rounded-lg border border-teal/20 p-4">
              <CheckCircle2 size={14} className="text-teal flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-light mb-1">
                  Métrica Principal
                </p>
                <p className="text-xs text-slate leading-relaxed">
                  90% dos registros dos dois canais integrados consolidados sob ID interno válido.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Roadmap ──────────────────────────────────── */}
        <section>
          <SectionTitle icon={Map} title="Roadmap Estratégico (18 meses)" color="purple" />

          <div className="space-y-3">
            {fasesRoadmap.map((fase) => {
              const c = colorClasses[fase.color];
              return (
                <div key={fase.id} className={`bg-white rounded-lg border ${c.border} p-5`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-7 h-7 rounded-lg ${c.number} flex items-center justify-center font-bold text-xs flex-shrink-0`}>
                      {fase.id}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-light">Fase {fase.id}</p>
                      <h3 className="text-xs font-bold text-navy">{fase.titulo}</h3>
                    </div>
                  </div>
                  <p className="text-xs text-slate leading-relaxed ml-[40px] mb-2">{fase.desc}</p>
                  <div className="flex items-start gap-1.5 ml-[40px]">
                    <CheckCircle2 size={10} className={`${c.text} mt-0.5 flex-shrink-0`} />
                    <p className="text-xs text-slate leading-relaxed">
                      <span className="font-semibold text-slate-dark">Critério:</span>{" "}
                      {fase.criterio}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="rounded-lg bg-ice-warm p-4 border border-slate-dark/[0.04]">
              <p className="text-xs text-slate leading-relaxed text-center">
                A evolução é progressiva, controlada e orientada por evidência validada.
              </p>
            </div>
          </div>
        </section>

        {/* ── Gestão de Riscos ─────────────────────────── */}
        <section>
          <SectionTitle icon={ShieldAlert} title="Gestão de Riscos" color="coral" />

          <div className="bg-white rounded-lg border border-coral/20 p-5">
            <p className="text-xs text-slate leading-relaxed mb-3">
              O gerenciamento de riscos é componente central do IRIS.
            </p>
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-light mb-2">
              Principais riscos:
            </p>
            <ul className="space-y-2 mb-4">
              {riscosPrincipais.map((r, i) => <Bullet key={i} color="coral">{r}</Bullet>)}
            </ul>
            <div className="pt-3 border-t border-slate-dark/[0.06]">
              <p className="text-xs font-semibold text-navy">
                A governança não é acessória. É estrutural.
              </p>
              <p className="text-xs text-slate leading-relaxed">
                Ela precede qualquer avanço analítico.
              </p>
            </div>
          </div>
        </section>

        {/* ── IA e Responsabilidade ────────────────────── */}
        <section>
          <SectionTitle icon={Brain} title="Inteligência Artificial e Responsabilidade" color="teal" />

          <div className="space-y-4">
            <div className="bg-white rounded-lg border border-teal/20 p-5">
              <p className="text-xs text-slate leading-relaxed mb-2">
                A IA no IRIS segue abordagem progressiva.
              </p>
              <p className="text-xs text-slate leading-relaxed">
                Primeiro consolidação estruturada e heurística.{" "}
                Depois, modelos probabilísticos supervisionados.
              </p>
            </div>

            {/* Princípio */}
            <div className="rounded-lg border-2 border-teal/30 bg-teal/[0.04] p-5">
              <div className="flex items-start gap-3">
                <Brain size={18} className="text-teal flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-light mb-1">
                    Princípio Estruturante
                  </p>
                  <p className="text-sm font-bold text-navy">
                    &ldquo;A IA atua como suporte à decisão e nunca como substituição da decisão humana.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Mitigações */}
            <div className="bg-white rounded-lg border border-teal/20 p-5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-light mb-2">
                Mitigações:
              </p>
              <ul className="space-y-2">
                {mitigacoesIA.map((m, i) => <Bullet key={i} color="teal">{m}</Bullet>)}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Arquitetura Conceitual ───────────────────── */}
        <section>
          <SectionTitle icon={Layers} title="Arquitetura Conceitual" color="purple" />

          <div className="bg-white rounded-lg border border-purple-accent/20 p-5">
            {/* Flow diagram */}
            <div className="flex items-center justify-center gap-2 flex-wrap mb-4">
              {["Governança", "Consolidação", "Geração de Valor", "Escala e IA Avançada"].map((step, i, arr) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-xs font-bold text-navy bg-purple-accent/10 px-3 py-1.5 rounded-md">
                    {step}
                  </span>
                  {i < arr.length - 1 && <span className="text-slate-light text-xs">→</span>}
                </div>
              ))}
            </div>
            <p className="text-xs text-slate leading-relaxed text-center">
              Cada fase possui critérios formais de avanço.
            </p>
          </div>
        </section>

        {/* ── Coerência entre Artefatos ────────────────── */}
        <section>
          <SectionTitle icon={Search} title="Coerência entre Artefatos" color="teal" />

          <div className="bg-white rounded-lg border border-teal/20 p-5">
            <p className="text-xs text-slate leading-relaxed mb-3">
              O projeto é sustentado por artefatos interdependentes:
            </p>
            <ul className="space-y-2 mb-3">
              {artefatos.map((a, i) => <Bullet key={i} color="teal">{a}</Bullet>)}
            </ul>
            <p className="text-[11px] text-slate-light leading-relaxed pt-3 border-t border-slate-dark/[0.06]">
              Essa integração garante rastreabilidade entre visão estratégica e execução operacional.
            </p>
          </div>
        </section>

        {/* ── Conclusão ────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <BookOpen size={16} className="text-navy" />
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-dark">Conclusão</h2>
          </div>

          <div className="rounded-lg border-2 border-slate-dark/10 bg-ice p-6 space-y-3">
            {conclusaoParagrafos.map((p, i) => (
              <p key={i} className="text-xs text-slate leading-relaxed">{p}</p>
            ))}
          </div>
        </section>
      </div>

      <Connections links={["/teoria", "/canvas", "/mvp", "/roadmap", "/riscos", "/ia"]} />
    </div>
  );
}
