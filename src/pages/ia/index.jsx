import { PageHeader } from "@/components/PageHeader";
import { Connections } from "@/components/Connections";
import { usePdfExport } from "@/hooks/usePdfExport";
import {
  Download,
  Brain,
  AlertTriangle,
  Zap,
  Bot,
  ShieldCheck,
  Scale,
  Eye,
  Users,
  RefreshCw,
  BarChart3,
} from "lucide-react";

/* ── Data ─────────────────────────────────────────────── */

const riscosIA = [
  {
    titulo: "Interpretação incorreta de sinais heurísticos",
    descricao: "Risco de decisões baseadas em evidências fracas.",
    icon: AlertTriangle,
    mitigacoes: [
      "Transparência das regras aplicadas",
      "Revisão periódica dos critérios",
      "Comunicação explícita do nível de confiança",
    ],
  },
  {
    titulo: "Evolução prematura para modelos probabilísticos",
    descricao: "Uso de machine learning antes da consolidação adequada da base.",
    icon: Zap,
    mitigacoes: [
      "Gate formal no Roadmap",
      "Revisão ética e regulatória prévia",
      "Validação executiva obrigatória",
    ],
  },
  {
    titulo: "Dependência excessiva da automatização",
    descricao: "Risco de transferência indevida de responsabilidade decisória para o sistema.",
    icon: Bot,
    mitigacoes: [
      "Política interna clara de uso",
      "Registro de decisões humanas",
      "Auditoria periódica de uso estratégico",
    ],
  },
];

const conformidade = [
  "Minimização de dados",
  "Finalidade específica",
  "Controle de acesso",
  "Rastreabilidade",
];

const governancaPreReq = [
  "Consolidação segura da base",
  "Auditoria de logs",
  "Separação entre dados identificáveis e analíticos",
];

const transparencia = [
  "Critério explícito",
  "Regra documentada",
  "Capacidade de revisão",
];

const impactos = [
  {
    titulo: "Mudança cultural",
    descricao: "Transição de decisões baseadas em percepção para decisões baseadas em evidência consolidada.",
    icon: Users,
  },
  {
    titulo: "Redefinição de papéis",
    descricao: "IA como ferramenta de apoio estratégico, não substituição operacional.",
    icon: RefreshCw,
  },
  {
    titulo: "Maturidade de dados",
    descricao: "A organização passa a tratar governança como ativo estratégico e não como obrigação técnica.",
    icon: BarChart3,
  },
];

/* ── Page ─────────────────────────────────────────────── */

export default function IaPage() {
  const { exportToPdf, isExporting } = usePdfExport();

  return (
    <div>
      <PageHeader
        title="Gestão de Produtos e Inteligência Artificial"
        subtitle="Estrutura ética, regulatória e organizacional para evolução segura da inteligência analítica"
        action={{
          label: "Baixar PDF – Gestão de Produtos e IA",
          variant: "teal",
          icon: <Download size={16} />,
          disabled: isExporting,
          onClick: () => exportToPdf({ tipo: "ia", filename: "IRIS-Gestao-IA.pdf" }),
        }}
      />

      <div className="space-y-6">
        {/* Declaração de Princípio */}
        <div className="rounded-lg border-2 border-teal/30 bg-teal/[0.04] p-6">
          <div className="flex items-start gap-3">
            <Brain size={22} className="text-teal flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-navy mb-2">
                &ldquo;O IRIS adota o princípio de IA como suporte à decisão e não como substituição da decisão humana.&rdquo;
              </p>
              <p className="text-xs text-slate leading-relaxed">
                A inteligência analítica da plataforma é desenhada para ampliar a capacidade estratégica
                da diretoria, mantendo responsabilidade decisória humana e governança como núcleo estruturante.
              </p>
            </div>
          </div>
        </div>

        {/* BLOCO 1 — Riscos Específicos do Uso de IA */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle size={16} className="text-coral" />
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-dark">
              Riscos Específicos do Uso de IA
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {riscosIA.map((risco, idx) => {
              const Icon = risco.icon;
              return (
                <div key={idx} className="bg-white rounded-lg border border-coral/20 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon size={14} className="text-coral flex-shrink-0" />
                    <h3 className="text-xs font-bold text-navy leading-tight">{risco.titulo}</h3>
                  </div>
                  <p className="text-[11px] text-slate-light mb-3">{risco.descricao}</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-light mb-1.5">Mitigação</p>
                  <ul className="space-y-1.5">
                    {risco.mitigacoes.map((m, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-xs text-slate leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-coral mt-1.5 flex-shrink-0" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* BLOCO 2 — Ética, Segurança e Confiabilidade */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck size={16} className="text-teal" />
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-dark">
              Ética, Segurança e Confiabilidade
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Conformidade Regulatória */}
            <div className="bg-white rounded-lg border border-teal/20 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Scale size={14} className="text-teal flex-shrink-0" />
                <h3 className="text-xs font-bold text-navy">Conformidade Regulatória</h3>
              </div>
              <p className="text-[11px] text-slate-light mb-3">
                O IRIS opera em conformidade com princípios da LGPD, especialmente:
              </p>
              <ul className="space-y-1.5">
                {conformidade.map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-xs text-slate leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-teal mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Governança como pré-condição */}
            <div className="bg-white rounded-lg border border-teal/20 p-4">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck size={14} className="text-teal flex-shrink-0" />
                <h3 className="text-xs font-bold text-navy">Governança como pré-condição para IA</h3>
              </div>
              <p className="text-[11px] text-slate-light mb-3">
                A evolução tecnológica somente ocorre após validação de:
              </p>
              <ul className="space-y-1.5">
                {governancaPreReq.map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-xs text-slate leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-teal mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Transparência e explicabilidade */}
            <div className="bg-white rounded-lg border border-teal/20 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Eye size={14} className="text-teal flex-shrink-0" />
                <h3 className="text-xs font-bold text-navy">Transparência e explicabilidade</h3>
              </div>
              <p className="text-[11px] text-slate-light mb-3">
                Indicadores heurísticos devem possuir:
              </p>
              <ul className="space-y-1.5">
                {transparencia.map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-xs text-slate leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-teal mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* BLOCO 3 — Impactos Organizacionais */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Users size={16} className="text-purple-accent" />
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-dark">
              Impactos Organizacionais
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {impactos.map((imp, idx) => {
              const Icon = imp.icon;
              return (
                <div key={idx} className="bg-white rounded-lg border border-purple-accent/20 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-md bg-purple-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-[10px] font-bold text-purple-accent">{idx + 1}</span>
                    </div>
                    <h3 className="text-xs font-bold text-navy">{imp.titulo}</h3>
                  </div>
                  <p className="text-xs text-slate leading-relaxed ml-[32px]">{imp.descricao}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Conexão com Roadmap */}
        <div className="bg-white rounded-lg border border-slate-dark/[0.06] p-4">
          <p className="text-xs text-slate leading-relaxed text-center">
            A evolução da inteligência analítica no IRIS está condicionada aos Gates formais
            definidos no Roadmap estratégico de 18 meses. Isso garante coerência entre produto,
            governança e impacto organizacional.
          </p>
        </div>

        {/* Mensagem Final */}
        <div className="bg-ice-warm rounded-lg p-4 border border-slate-dark/[0.04]">
          <p className="text-xs text-slate leading-relaxed text-center">
            O IRIS estrutura sua evolução tecnológica sobre governança, ética e responsabilidade
            estratégica, garantindo que a inteligência artificial seja implementada de forma segura,
            confiável e alinhada aos objetivos organizacionais.
          </p>
        </div>
      </div>

      <Connections links={["/riscos", "/ciclo", "/roadmap"]} />
    </div>
  );
}
