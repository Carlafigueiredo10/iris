import { PageHeader } from "@/components/PageHeader";
import { Skeleton } from "@/components/Skeleton";
import { Connections } from "@/components/Connections";
import { usePdfExport } from "@/hooks/usePdfExport";

export default function CanvasPage() {
  const { exportToPdf } = usePdfExport();

  return (
    <div>
      <PageHeader
        title="Business Model Canvas"
        subtitle="Visão estruturada do modelo de negócio do IRIS"
        action={{ label: "Exportar PDF", variant: "teal" }}
        onAction={() => exportToPdf("canvas-content", "IRIS-Canvas.pdf")}
      />
      <div id="canvas-content" data-export="pdf">
        <Skeleton rows={5} />
      </div>
      <Connections links={["/mvp", "/roadmap", "/teoria"]} />
    </div>
  );
}
