import { PageHeader } from "@/components/PageHeader";
import { Skeleton } from "@/components/Skeleton";
import { Connections } from "@/components/Connections";
import { usePdfExport } from "@/hooks/usePdfExport";

export default function MvpPage() {
  const { exportToPdf } = usePdfExport();

  return (
    <div>
      <PageHeader
        title="Definição do MVP"
        subtitle="Escopo funcional, priorização e critérios de aceitação"
        action={{ label: "Exportar PDF", variant: "teal" }}
        onAction={() => exportToPdf("mvp-content", "IRIS-MVP.pdf")}
      />
      <div id="mvp-content" data-export="pdf">
        <Skeleton rows={6} />
      </div>
      <Connections links={["/canvas", "/roadmap", "/riscos"]} />
    </div>
  );
}
