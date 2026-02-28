import { PageHeader } from "@/components/PageHeader";
import { Connections } from "@/components/Connections";
import { navItems } from "@/config/navigation";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function DashboardPage() {
  const artifacts = navItems.filter((n) => n.path !== "/");

  return (
    <div>
      <PageHeader
        title="IRIS — Painel do Projeto"
        subtitle="Inteligência de Relacionamento Integrado Seguro. Navegue pelos artefatos do planejamento estratégico."
      />

      {/* Quick stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-lg border border-slate-dark/[0.06] p-5">
          <p className="text-xs font-semibold text-slate-light uppercase tracking-wider">Artefatos</p>
          <p className="text-3xl font-bold text-navy mt-1">{artifacts.length}</p>
        </div>
        <div className="bg-white rounded-lg border border-slate-dark/[0.06] p-5">
          <p className="text-xs font-semibold text-slate-light uppercase tracking-wider">Fases do Roadmap</p>
          <p className="text-3xl font-bold text-navy mt-1">3</p>
        </div>
        <div className="bg-white rounded-lg border border-slate-dark/[0.06] p-5">
          <p className="text-xs font-semibold text-slate-light uppercase tracking-wider">Riscos Mapeados</p>
          <p className="text-3xl font-bold text-navy mt-1">7</p>
        </div>
      </div>

      {/* Artifact grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {artifacts.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="group bg-white rounded-lg border border-slate-dark/[0.06] p-5 hover:border-teal/30 hover:shadow-sm transition-all duration-200"
          >
            <div className="flex items-start justify-between">
              <div className="w-9 h-9 rounded-lg bg-ice-warm flex items-center justify-center group-hover:bg-teal/10 transition-colors">
                <item.icon size={18} className="text-slate group-hover:text-teal transition-colors" />
              </div>
              <ArrowRight size={16} className="text-slate-light/40 group-hover:text-teal group-hover:translate-x-0.5 transition-all mt-1" />
            </div>
            <h3 className="font-semibold text-navy mt-3 text-sm">{item.label}</h3>
            <p className="text-xs text-slate-light mt-1 leading-relaxed">{item.subtitle}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
