import { PageHeader } from "@/components/PageHeader";
import { Connections } from "@/components/Connections";
import { usePdfExport } from "@/hooks/usePdfExport";
import {
  Download,
  Eye,
  Rocket,
  Map,
  RefreshCw,
  ShieldAlert,
  Brain,
  Target,
  Users,
  AlertCircle,
  Lightbulb,
  CheckCircle2,
  Layers,
  Scale,
  BarChart3,
  TrendingUp,
  Search,
  FlaskConical,
  ShieldCheck,
  Zap,
  Bot,
  AlertTriangle,
  BookOpen,
} from "lucide-react";

/* ── 1.1 Visão de Produto ────────────────────────────── */

const descricaoProduto =
  "O IRIS é uma plataforma de inteligência de relacionamento que transforma dados dispersos de atendimento em inteligência estratégica para tomada de decisão. A solução consolida interações multicanal sob uma arquitetura estruturada de governança de dados, permitindo que informações antes fragmentadas se tornem insumo confiável para decisões executivas, especialmente relacionadas à retenção e investimento na base de clientes.";

const modeloImplantacao =
  "O produto nasce como plataforma enterprise implantada internamente, com arquitetura preparada para evolução futura em modelo SaaS escalável.";

const publicoPrimario =
  "CFO e diretoria financeira responsáveis por decisões de investimento, retenção e crescimento da base de clientes.";

const publicoSecundario =
  "Diretoria de Operações e Experiência do Cliente, além de equipes de atendimento que se beneficiam de histórico consolidado.";

const problema =
  "As organizações acumulam dados de relacionamento em múltiplos canais, porém esses dados permanecem fragmentados e desorganizados em razão da ausência de governança estruturada. Como consequência, decisões estratégicas são tomadas com base em informações incompletas, dificultando a identificação de risco de churn, oportunidades de retenção e alocação eficiente de recursos.";

const propostaValor =
  "O IRIS transforma dados dispersos de atendimento em inteligência estratégica confiável. Ao consolidar informações multicanal sob princípios de governança e segurança, a plataforma permite identificar onde investir para maximizar LTV, reduzir churn e otimizar custos operacionais.";

const diferencialCentral =
  "O diferencial central está na combinação entre inteligência analítica e governança estruturante como premissa.";

/* ── 1.2 Definição do MVP ────────────────────────────── */

const objetivoMvp =
  "Validar a capacidade do IRIS de consolidar dados multicanal sob governança estruturada e gerar inteligência estratégica suficiente para apoiar decisões de investimento voltadas ao aumento de LTV. O MVP não contempla modelos preditivos avançados. Ele estrutura a base de inteligência necessária para evoluções futuras.";

const hipoteseCritica =
  "Se consolidarmos 90% dos registros de dois canais prioritários sob um ID interno seguro e aplicarmos um indicador heurístico inicial de criticidade, o time conseguirá priorizar temas relevantes com maior velocidade e reduzir retrabalho operacional, além de gerar insumos objetivos para decisões financeiras relacionadas à retenção e investimento na base.";

const hipoteseNota =
  "O MVP existe para validar essa hipótese antes de qualquer evolução para modelos probabilísticos avançados.";

const funcionalidadesMvp = [
  "Geração de ID interno hash derivado de CPF",
  "Separação entre camada identificável e camada operacional",
  "Integração inicial de dois canais de atendimento",
  "Dossiê resumido por cliente com métricas consolidadas",
  "Painel executivo agregado por segmento",
  "Indicador inicial de risco baseado em regra heurística configurável",
];

const funcionalidadesNota =
  "Os critérios de aceitação detalhados para cada funcionalidade, bem como sua priorização e justificativas operacionais, encontram-se formalmente documentados no artefato prático \u201CDocumento de MVP\u201D, garantindo rastreabilidade entre visão estratégica e execução.";

const principiosPriorizacao = [
  { titulo: "Governança antes de inteligência avançada", desc: "Estruturar a base de dados com segurança e conformidade antes de aplicar modelos analíticos." },
  { titulo: "Consolidação antes de predição", desc: "Garantir dados confiáveis antes de implementar qualquer modelo preditivo." },
  { titulo: "Valor estratégico com complexidade controlada", desc: "A consolidação estruturada permite decisões mais confiáveis antes da adoção de modelos de machine learning." },
];

/* ── 1.3 Roadmap do Produto ──────────────────────────── */

const fases = [
  {
    id: 1,
    titulo: "Fundação Segura e Inteligência Estruturada",
    color: "teal",
    objetivo: "Estruturar governança e consolidar dados multicanal.",
    entregaveis: [
      "ID interno seguro",
      "Integração de dois canais",
      "Dossiê resumido",
      "Painel executivo",
      "Indicador heurístico",
      "Política formal de governança",
    ],
    criterios: [
      "90% dos registros dos dois canais integrados consolidados sob ID interno válido",
      "Uso ativo do painel pela diretoria",
      "Qualidade mínima de dados validada",
    ],
    nota: "A representação visual do roadmap, com fases, objetivos e marcos temporais, está apresentada no artefato prático correspondente.",
  },
  {
    id: 2,
    titulo: "Geração de Valor e Inteligência Estruturada",
    color: "purple",
    objetivo: "Gerar valor estratégico a partir da consolidação estruturada, utilizando inteligência baseada em regras heurísticas e segmentação orientada por dados.",
    entregaveis: [
      "Evolução do indicador heurístico",
      "Segmentação comportamental baseada em evidência observada",
      "Métricas financeiras por segmento",
      "Expansão para novos canais",
    ],
    criterios: [],
    indicador: "O sucesso da Fase 2 será avaliado não apenas pelo uso recorrente do painel, mas também pela evidência de impacto mensurável na priorização de ações, como redução do tempo médio de consolidação de informações para decisão executiva e melhoria nos indicadores de retenção ou eficiência operacional definidos pela diretoria.",
  },
  {
    id: 3,
    titulo: "Inteligência Adaptativa e Escalabilidade",
    color: "coral",
    objetivo: "Evoluir a plataforma para modelos probabilísticos avançados e arquitetura escalável.",
    entregaveis: [
      "Machine learning supervisionado",
      "Motor de recomendação",
      "Arquitetura SaaS",
      "Monitoramento contínuo de viés",
    ],
    criterios: [],
  },
];

/* ── 1.4 Ciclo de Vida ───────────────────────────────── */

const cicloEtapas = [
  {
    id: 1,
    titulo: "Descoberta",
    color: "teal",
    desc: "Mapeamento de canais, stakeholders e viabilidade técnica.",
    criterio: "Aprovação executiva do MVP.",
  },
  {
    id: 2,
    titulo: "Validação",
    color: "teal",
    desc: "Implementação do MVP funcional.",
    criterio: "Uso ativo e validação de utilidade estratégica.",
  },
  {
    id: 3,
    titulo: "Entrega",
    color: "success",
    desc: "Institucionalização da plataforma e formalização de governança.",
    criterio: "Evidência de apoio à decisão financeira.",
  },
  {
    id: 4,
    titulo: "Revisão Ética e Regulatória",
    color: "amber",
    desc: "Avaliação formal de conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD), análise de risco de viés algorítmico e validação jurídica antes da expansão para IA avançada.",
    criterio: "Parecer jurídico favorável e definição clara de limites éticos.",
  },
  {
    id: 5,
    titulo: "Evolução",
    color: "purple",
    desc: "Implementação de modelos probabilísticos e expansão estratégica.",
    criterio: null,
  },
];

/* ── 1.5 Gerenciamento de Riscos ─────────────────────── */

const riscosOperacionais = [
  "Risco de vazamento de dados identificáveis",
  "Risco de baixa qualidade de dados",
  "Risco regulatório associado à LGPD",
  "Risco de interpretação incorreta de indicadores",
  "Risco de resistência organizacional",
  "Risco de subestimação da complexidade técnica",
];

const riscosNota =
  "A classificação detalhada de probabilidade e impacto de cada risco, bem como os responsáveis e planos de mitigação, encontra-se formalmente registrada na Matriz de Riscos apresentada na Parte Prática.";

const estrategiasMitigacao = [
  "Separação de camadas de dados",
  "Controle de acesso e logs",
  "Criptografia",
  "Política formal de governança",
  "Revisão jurídica prévia à expansão de IA",
];

const principiosLgpd =
  "O IRIS observa os princípios da LGPD, especialmente finalidade, necessidade, minimização e segurança da informação.";

/* ── 1.6 Gestão de Produtos e IA ─────────────────────── */

const iaAbordagem =
  "O IRIS adota abordagem progressiva no uso de IA. A inteligência inicial é baseada em consolidação estruturada e regras heurísticas. A evolução para modelos de machine learning ocorre apenas após validação de governança, qualidade de dados e conformidade regulatória.";

const iaPrincipio =
  "A IA no IRIS atua como suporte à decisão e não como substituição da decisão humana.";

const riscosIA = [
  "Viés algorítmico",
  "Interpretação determinística indevida",
  "Perfilamento sensível",
  "Dependência excessiva de automação",
];

const mitigacoesIA = [
  "Explicabilidade obrigatória",
  "Monitoramento contínuo de viés",
  "Revisão ética formal",
  "Supervisão humana permanente",
];

/* ── Conclusão ────────────────────────────────────────── */

const conclusao = [
  "O IRIS estrutura dados dispersos sob governança e transforma relacionamento em inteligência estratégica para decisão financeira.",
  "A abordagem progressiva adotada garante que cada fase do roadmap entregue valor incremental com risco controlado, permitindo evolução sustentável da plataforma.",
  "Ao consolidar governança, inteligência e responsabilidade ética, o IRIS estabelece as bases para decisões executivas mais precisas e para expansão futura com uso seguro e estratégico de inteligência artificial.",
];

/* ── Helpers ──────────────────────────────────────────── */

const colorClasses = {
  teal: { bg: "bg-teal", bgLight: "bg-teal/[0.04]", border: "border-teal/20", border2: "border-teal/30", text: "text-teal", dot: "bg-teal", number: "bg-teal text-white" },
  coral: { bg: "bg-coral", bgLight: "bg-coral/[0.04]", border: "border-coral/20", border2: "border-coral/30", text: "text-coral", dot: "bg-coral", number: "bg-coral text-white" },
  purple: { bg: "bg-purple-accent", bgLight: "bg-purple-accent/[0.04]", border: "border-purple-accent/20", border2: "border-purple-accent/30", text: "text-purple-accent", dot: "bg-purple-accent", number: "bg-purple-accent text-white" },
  amber: { bg: "bg-amber", bgLight: "bg-amber/[0.04]", border: "border-amber/20", border2: "border-amber/30", text: "text-amber", dot: "bg-amber", number: "bg-amber text-white" },
  success: { bg: "bg-success", bgLight: "bg-success/[0.04]", border: "border-success/20", border2: "border-success/30", text: "text-success", dot: "bg-success", number: "bg-success text-white" },
};

function SectionHeader({ icon, title, color = "teal" }) {
  const Icon = icon;
  const c = colorClasses[color];
  return (
    <div className="flex items-center gap-2 mb-4">
      <Icon size={16} className={c.text} />
      <h2 className="text-xs font-bold uppercase tracking-wider text-slate-dark">{title}</h2>
    </div>
  );
}

function BulletList({ items, color = "teal" }) {
  const c = colorClasses[color];
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-xs text-slate leading-relaxed">
          <span className={`w-1.5 h-1.5 rounded-full ${c.dot} mt-1.5 flex-shrink-0`} />
          {item}
        </li>
      ))}
    </ul>
  );
}

function SectionNumber({ number, color = "teal" }) {
  const c = colorClasses[color];
  return (
    <div className={`w-7 h-7 rounded-lg ${c.number} flex items-center justify-center font-bold text-xs flex-shrink-0`}>
      {number}
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────── */

export default function TeoriaPage() {
  const { exportToPdf, isExporting } = usePdfExport();

  return (
    <div>
      <PageHeader
        title="Parte Teórica"
        subtitle="IRIS — Inteligência de Relacionamento Integrado Seguro"
        action={{
          label: "Baixar PDF — Parte Teórica",
          variant: "teal",
          icon: <Download size={16} />,
          disabled: isExporting,
          onClick: () => exportToPdf({ tipo: "teoria", filename: "IRIS-Parte-Teorica.pdf" }),
        }}
      />

      <div className="space-y-8">
        {/* ═══════════════════════════════════════════════ */}
        {/* 1.1 VISÃO DE PRODUTO                           */}
        {/* ═══════════════════════════════════════════════ */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <SectionNumber number="1.1" color="teal" />
            <h2 className="text-sm font-bold text-navy">Visão de Produto</h2>
          </div>

          {/* Descrição do Produto */}
          <div className="space-y-5">
            <div>
              <SectionHeader icon={Eye} title="Descrição do Produto Digital" color="teal" />
              <div className="rounded-lg border-2 border-teal/30 bg-teal/[0.04] p-5">
                <p className="text-xs text-slate leading-relaxed mb-3">{descricaoProduto}</p>
                <p className="text-xs text-slate leading-relaxed">{modeloImplantacao}</p>
              </div>
            </div>

            {/* Público-Alvo e Problema */}
            <div>
              <SectionHeader icon={Users} title="Público-Alvo e Problema Atendido" color="purple" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg border border-purple-accent/20 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Target size={14} className="text-purple-accent flex-shrink-0" />
                    <h3 className="text-xs font-bold text-navy">Público Primário</h3>
                  </div>
                  <p className="text-xs text-slate leading-relaxed">{publicoPrimario}</p>
                </div>

                <div className="bg-white rounded-lg border border-purple-accent/20 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users size={14} className="text-purple-accent flex-shrink-0" />
                    <h3 className="text-xs font-bold text-navy">Público Secundário</h3>
                  </div>
                  <p className="text-xs text-slate leading-relaxed">{publicoSecundario}</p>
                </div>

                <div className="bg-white rounded-lg border border-coral/20 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle size={14} className="text-coral flex-shrink-0" />
                    <h3 className="text-xs font-bold text-navy">Problema</h3>
                  </div>
                  <p className="text-xs text-slate leading-relaxed">{problema}</p>
                </div>
              </div>
            </div>

            {/* Proposta de Valor */}
            <div>
              <SectionHeader icon={Lightbulb} title="Proposta de Valor" color="teal" />
              <div className="rounded-lg border-2 border-teal/30 bg-teal/[0.04] p-5">
                <div className="flex items-start gap-3">
                  <Lightbulb size={20} className="text-teal flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate leading-relaxed mb-2">{propostaValor}</p>
                    <p className="text-xs font-semibold text-navy">{diferencialCentral}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════ */}
        {/* 1.2 DEFINIÇÃO DO MVP                           */}
        {/* ═══════════════════════════════════════════════ */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <SectionNumber number="1.2" color="coral" />
            <h2 className="text-sm font-bold text-navy">Definição do MVP</h2>
          </div>

          <div className="space-y-5">
            {/* Objetivo do MVP */}
            <div>
              <SectionHeader icon={Rocket} title="Objetivo do MVP" color="coral" />
              <div className="bg-white rounded-lg border border-coral/20 p-5">
                <p className="text-xs text-slate leading-relaxed">{objetivoMvp}</p>
              </div>
            </div>

            {/* Hipótese Crítica */}
            <div>
              <SectionHeader icon={Target} title="Hipótese Crítica do MVP" color="coral" />
              <div className="rounded-lg border-2 border-coral/30 bg-coral/[0.04] p-5">
                <p className="text-sm font-bold text-navy mb-2 leading-relaxed">
                  &ldquo;{hipoteseCritica}&rdquo;
                </p>
                <p className="text-xs text-slate leading-relaxed">{hipoteseNota}</p>
              </div>
            </div>

            {/* Funcionalidades Essenciais */}
            <div>
              <SectionHeader icon={Layers} title="Funcionalidades Essenciais" color="teal" />
              <div className="bg-white rounded-lg border border-teal/20 p-5">
                <BulletList items={funcionalidadesMvp} color="teal" />
                <p className="text-[11px] text-slate-light leading-relaxed mt-4 pt-3 border-t border-slate-dark/[0.06]">
                  {funcionalidadesNota}
                </p>
              </div>
            </div>

            {/* Justificativa de Priorização */}
            <div>
              <SectionHeader icon={BarChart3} title="Justificativa de Priorização" color="purple" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {principiosPriorizacao.map((p, i) => (
                  <div key={i} className="bg-white rounded-lg border border-purple-accent/20 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-5 h-5 rounded-md bg-purple-accent/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-[10px] font-bold text-purple-accent">{i + 1}</span>
                      </div>
                      <h3 className="text-xs font-bold text-navy leading-tight">{p.titulo}</h3>
                    </div>
                    <p className="text-xs text-slate leading-relaxed ml-[28px]">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════ */}
        {/* 1.3 ROADMAP DO PRODUTO                         */}
        {/* ═══════════════════════════════════════════════ */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <SectionNumber number="1.3" color="purple" />
            <h2 className="text-sm font-bold text-navy">Roadmap do Produto</h2>
          </div>

          <div className="space-y-4">
            {fases.map((fase) => {
              const c = colorClasses[fase.color];
              return (
                <div key={fase.id} className={`bg-white rounded-lg border ${c.border} p-5`}>
                  <div className="flex items-center gap-3 mb-4">
                    <SectionNumber number={fase.id} color={fase.color} />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-light">Fase {fase.id}</p>
                      <h3 className="text-sm font-bold text-navy">{fase.titulo}</h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ml-[40px]">
                    {/* Objetivo */}
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-light mb-1.5">Objetivo</p>
                      <p className="text-xs text-slate leading-relaxed">{fase.objetivo}</p>
                    </div>

                    {/* Entregáveis */}
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-light mb-1.5">Entregáveis</p>
                      <ul className="space-y-1.5">
                        {fase.entregaveis.map((e, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-xs text-slate leading-relaxed">
                            <span className={`w-1 h-1 rounded-full ${c.dot} mt-1.5 flex-shrink-0`} />
                            {e}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Critérios / Indicador */}
                    <div>
                      {fase.criterios.length > 0 && (
                        <>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-light mb-1.5">Critério de Avanço</p>
                          <ul className="space-y-1.5">
                            {fase.criterios.map((cr, i) => (
                              <li key={i} className="flex items-start gap-1.5 text-xs text-slate leading-relaxed">
                                <CheckCircle2 size={10} className={`${c.text} mt-0.5 flex-shrink-0`} />
                                {cr}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                      {fase.indicador && (
                        <>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-light mb-1.5">Indicador Estratégico</p>
                          <p className="text-xs text-slate leading-relaxed">{fase.indicador}</p>
                        </>
                      )}
                    </div>
                  </div>

                  {fase.nota && (
                    <p className="text-[11px] text-slate-light leading-relaxed mt-4 ml-[40px] pt-3 border-t border-slate-dark/[0.06]">
                      {fase.nota}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════ */}
        {/* 1.4 CICLO DE VIDA DA APLICAÇÃO                 */}
        {/* ═══════════════════════════════════════════════ */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <SectionNumber number="1.4" color="amber" />
            <h2 className="text-sm font-bold text-navy">Ciclo de Vida da Aplicação</h2>
          </div>

          <p className="text-xs text-slate leading-relaxed mb-5">
            Modelo híbrido com governança progressiva.
          </p>

          {/* Timeline horizontal */}
          <div className="bg-white rounded-lg border border-slate-dark/[0.06] p-5 overflow-x-auto mb-5">
            <div className="flex items-center justify-between min-w-[500px]">
              {cicloEtapas.map((etapa, idx) => {
                const c = colorClasses[etapa.color];
                return (
                  <div key={etapa.id} className="flex items-center">
                    <div className="flex flex-col items-center gap-2">
                      <div className={`w-9 h-9 rounded-full ${c.number} flex items-center justify-center font-bold text-sm shadow-sm`}>
                        {etapa.id}
                      </div>
                      <span className="text-[10px] font-semibold text-slate-dark text-center max-w-[90px] leading-tight">
                        {etapa.titulo}
                      </span>
                    </div>
                    {idx < cicloEtapas.length - 1 && (
                      <div className="w-6 h-px bg-slate-light/40 mx-1 flex-shrink-0" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Etapa cards */}
          <div className="space-y-3">
            {cicloEtapas.map((etapa) => {
              const c = colorClasses[etapa.color];
              return (
                <div key={etapa.id} className={`bg-white rounded-lg border ${c.border} p-4`}>
                  <div className="flex items-center gap-3 mb-2">
                    <SectionNumber number={etapa.id} color={etapa.color} />
                    <h3 className="text-xs font-bold text-navy">{etapa.titulo}</h3>
                  </div>
                  <div className="ml-[40px]">
                    <p className="text-xs text-slate leading-relaxed">{etapa.desc}</p>
                    {etapa.criterio && (
                      <div className="flex items-start gap-1.5 mt-2">
                        <CheckCircle2 size={10} className={`${c.text} mt-0.5 flex-shrink-0`} />
                        <p className="text-xs text-slate leading-relaxed">
                          <span className="font-semibold text-slate-dark">Critério de avanço:</span>{" "}
                          {etapa.criterio}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════ */}
        {/* 1.5 GERENCIAMENTO DE RISCOS                    */}
        {/* ═══════════════════════════════════════════════ */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <SectionNumber number="1.5" color="coral" />
            <h2 className="text-sm font-bold text-navy">Gerenciamento de Riscos</h2>
          </div>

          <p className="text-xs text-slate leading-relaxed mb-5">
            O gerenciamento de riscos no IRIS é estruturado como componente central do produto.
          </p>

          <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Riscos Identificados */}
              <div className="bg-white rounded-lg border border-coral/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldAlert size={14} className="text-coral flex-shrink-0" />
                  <h3 className="text-xs font-bold text-navy">Riscos Operacionais Identificados</h3>
                </div>
                <BulletList items={riscosOperacionais} color="coral" />
                <p className="text-[11px] text-slate-light leading-relaxed mt-4 pt-3 border-t border-slate-dark/[0.06]">
                  {riscosNota}
                </p>
              </div>

              {/* Estratégias de Mitigação */}
              <div className="bg-white rounded-lg border border-teal/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck size={14} className="text-teal flex-shrink-0" />
                  <h3 className="text-xs font-bold text-navy">Estratégias de Mitigação</h3>
                </div>
                <BulletList items={estrategiasMitigacao} color="teal" />
                <div className="mt-4 pt-3 border-t border-slate-dark/[0.06]">
                  <div className="flex items-start gap-2">
                    <Scale size={12} className="text-teal flex-shrink-0 mt-0.5" />
                    <p className="text-[11px] text-slate leading-relaxed">{principiosLgpd}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════ */}
        {/* 1.6 GESTÃO DE PRODUTOS E IA                    */}
        {/* ═══════════════════════════════════════════════ */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <SectionNumber number="1.6" color="teal" />
            <h2 className="text-sm font-bold text-navy">Gestão de Produtos e Inteligência Artificial</h2>
          </div>

          <div className="space-y-5">
            {/* Abordagem */}
            <div className="bg-white rounded-lg border border-teal/20 p-5">
              <p className="text-xs text-slate leading-relaxed">{iaAbordagem}</p>
            </div>

            {/* Princípio central */}
            <div className="rounded-lg border-2 border-teal/30 bg-teal/[0.04] p-5">
              <div className="flex items-start gap-3">
                <Brain size={20} className="text-teal flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-light mb-1">Princípio Central</p>
                  <p className="text-sm font-bold text-navy">&ldquo;{iaPrincipio}&rdquo;</p>
                </div>
              </div>
            </div>

            {/* Riscos + Mitigação */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg border border-coral/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle size={14} className="text-coral flex-shrink-0" />
                  <h3 className="text-xs font-bold text-navy">Riscos Específicos da IA</h3>
                </div>
                <BulletList items={riscosIA} color="coral" />
              </div>

              <div className="bg-white rounded-lg border border-teal/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck size={14} className="text-teal flex-shrink-0" />
                  <h3 className="text-xs font-bold text-navy">Mitigação</h3>
                </div>
                <BulletList items={mitigacoesIA} color="teal" />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════ */}
        {/* CONCLUSÃO                                      */}
        {/* ═══════════════════════════════════════════════ */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <BookOpen size={18} className="text-navy" />
            <h2 className="text-sm font-bold text-navy">Conclusão</h2>
          </div>

          <div className="rounded-lg border-2 border-slate-dark/10 bg-ice p-6">
            <div className="space-y-3">
              {conclusao.map((p, i) => (
                <p key={i} className="text-xs text-slate leading-relaxed">{p}</p>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Connections links={["/canvas", "/mvp", "/roadmap", "/riscos", "/ciclo", "/ia"]} />
    </div>
  );
}
