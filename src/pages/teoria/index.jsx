import { PageHeader } from "@/components/PageHeader";
import { Skeleton } from "@/components/Skeleton";
import { Connections } from "@/components/Connections";
import { Download } from "lucide-react";

export default function TeoriaPage() {
  return (
    <div>
      <PageHeader
        title="Parte Teórica"
        subtitle="Documento teórico completo — Visão, MVP, Roadmap, Ciclo de Vida, Riscos e IA"
        action={{
          label: "Baixar PDF",
          variant: "coral",
          icon: <Download size={16} />,
          onClick: () => {/* TODO: download PDF file */},
        }}
      />
      <div>
        <Skeleton rows={8} />
      </div>
      <Connections links={["/canvas", "/mvp", "/roadmap", "/riscos"]} />
    </div>
  );
}
