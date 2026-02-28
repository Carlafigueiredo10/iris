import { PageHeader } from "@/components/PageHeader";
import { Skeleton } from "@/components/Skeleton";
import { Connections } from "@/components/Connections";
import { usePdfExport } from "@/hooks/usePdfExport";

export default function RoadmapPage() {
  const { exportToPdf } = usePdfExport();

  return (
    <div>
      <PageHeader
        title="Roadmap do Produto"
        subtitle="Evolução planejada em 3 fases: fundação, inteligência e escalabilidade"
        action={{ label: "Exportar PDF", variant: "teal" }}
        onAction={() => exportToPdf("roadmap-content", "IRIS-Roadmap.pdf")}
      />
      <div id="roadmap-content" data-export="pdf">
        <Skeleton rows={4} />
      </div>
      <Connections links={["/mvp", "/ciclo", "/riscos"]} />
    </div>
  );
}
