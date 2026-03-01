import { PageHeader } from "@/components/PageHeader";
import { Connections } from "@/components/Connections";
import { ExternalLink, Video, Play } from "lucide-react";

const VIDEO_URL = "https://drive.google.com/file/d/1EbwX5x_L7xE733Q2pS8ERj_CXpAdtHcT/view?usp=sharing";

export default function PitchPage() {
  return (
    <div>
      <PageHeader
        title="Vídeo Pitch"
        subtitle="Apresentação executiva do projeto IRIS — até 4 minutos"
        action={{
          label: "Assistir Pitch",
          variant: "coral",
          icon: <ExternalLink size={16} />,
          onClick: () => window.open(VIDEO_URL, "_blank"),
        }}
      />

      <div className="space-y-6">
        {/* Video card */}
        <div className="bg-white rounded-lg border border-coral/20 overflow-hidden">
          <div className="bg-coral/[0.04] p-8 flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-coral/10 flex items-center justify-center">
              <Play size={28} className="text-coral ml-1" />
            </div>
            <div className="text-center">
              <h2 className="text-sm font-bold text-navy mb-1">Pitch Executivo — IRIS</h2>
              <p className="text-xs text-slate-light">Inteligência de Relacionamento Integrado Seguro</p>
            </div>
            <a
              href={VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-coral text-white text-xs font-bold px-5 py-2.5 rounded-lg hover:bg-coral/90 transition-colors"
            >
              <Video size={14} />
              Assistir Vídeo
              <ExternalLink size={12} />
            </a>
          </div>

          <div className="p-5 space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-md bg-coral/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[10px] font-bold text-coral">1</span>
              </div>
              <div>
                <p className="text-xs font-bold text-navy">Problema e contexto</p>
                <p className="text-[11px] text-slate-light">Fragmentação de dados multicanal e ausência de governança estruturada</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-md bg-coral/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[10px] font-bold text-coral">2</span>
              </div>
              <div>
                <p className="text-xs font-bold text-navy">Proposta de valor</p>
                <p className="text-[11px] text-slate-light">Consolidação sob governança para decisão financeira baseada em evidência</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-md bg-coral/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[10px] font-bold text-coral">3</span>
              </div>
              <div>
                <p className="text-xs font-bold text-navy">MVP e roadmap</p>
                <p className="text-[11px] text-slate-light">Evolução progressiva com governança como pré-condição para IA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="bg-ice-warm rounded-lg p-4 border border-slate-dark/[0.04]">
          <p className="text-xs text-slate leading-relaxed text-center">
            O vídeo pitch complementa a documentação teórica e os artefatos práticos,
            oferecendo uma visão consolidada do projeto IRIS em formato executivo.
          </p>
        </div>
      </div>

      <Connections links={["/teoria", "/canvas", "/roadmap", "/readme"]} />
    </div>
  );
}
