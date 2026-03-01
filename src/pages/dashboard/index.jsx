import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

function Metric({ value, label }) {
  return (
    <div className="flex flex-col">
      <div className="text-3xl font-medium tracking-tight">{value}</div>
      <div className="mt-2 text-xs uppercase tracking-[0.24em] text-slate-500">
        {label}
      </div>
    </div>
  );
}

function PillarCard({ title, description, route, large = false, navigate }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.35, ease: EASE }}
      onClick={() => navigate(route)}
      className={`cursor-pointer border border-slate-900/10 bg-white rounded-2xl p-8 ${
        large ? "col-span-1 md:col-span-2" : ""
      }`}
    >
      <div className="text-sm uppercase tracking-[0.24em] text-slate-500">
        Pilar
      </div>

      <h2 className="mt-4 text-2xl font-medium tracking-tight">{title}</h2>

      <p className="mt-4 text-slate-600 leading-relaxed max-w-xl">
        {description}
      </p>

      <div className="mt-8 h-px w-full bg-slate-900/10" />

      <div className="mt-4 text-xs text-slate-500 uppercase tracking-[0.24em]">
        Explorar &rarr;
      </div>
    </motion.div>
  );
}

export default function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-10 py-16 text-slate-900">
      {/* Header Executivo */}
      <div className="mb-20">
        <div className="text-xs uppercase tracking-[0.28em] text-slate-500">
          Infraestrutura Estratégica
        </div>

        <h1 className="mt-4 text-4xl font-medium tracking-tight">
          Planning Console
        </h1>

        <p className="mt-6 text-slate-600 max-w-2xl leading-relaxed">
          Fundação segura e inteligência estruturada para decisões executivas.
          Consolidação antes de predição. Governança antes de automação.
        </p>

        <div className="mt-10 h-px w-full bg-slate-900/10" />
      </div>

      {/* Métricas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
        <Metric value="90%" label="Registros Consolidados" />
        <Metric value="2 / 2" label="Canais Integrados" />
        <Metric value="Estruturada" label="Governança" />
        <Metric value="Controlado" label="Risco Regulatório" />
      </div>

      {/* Pilares */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <PillarCard
          large
          title="Estratégia"
          description="Visão de produto, Canvas e fundamentos estruturais que sustentam a arquitetura do IRIS."
          route="/canvas"
          navigate={navigate}
        />

        <PillarCard
          title="Execução"
          description="Definição do MVP, critérios de aceitação e ciclo de vida planejado."
          route="/mvp"
          navigate={navigate}
        />

        <PillarCard
          title="Riscos & Conformidade"
          description="Matriz de riscos, mitigação estruturada e aderência regulatória."
          route="/riscos"
          navigate={navigate}
        />

        <PillarCard
          title="Evolução"
          description="Roadmap progressivo e estratégia de inteligência adaptativa supervisionada."
          route="/roadmap"
          navigate={navigate}
        />
      </div>

      {/* Rodapé estrutural */}
      <div className="mt-28">
        <div className="h-px w-full bg-slate-900/10" />
        <div className="mt-6 text-xs text-slate-500 uppercase tracking-[0.22em]">
          IRIS &bull; Infraestrutura de Inteligência Estruturada
        </div>
      </div>
    </div>
  );
}
