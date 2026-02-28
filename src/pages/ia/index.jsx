import { PageHeader } from "@/components/PageHeader";
import { Skeleton } from "@/components/Skeleton";
import { Connections } from "@/components/Connections";
import { usePdfExport } from "@/hooks/usePdfExport";

export default function IaPage() {
  const { exportToPdf } = usePdfExport();

  return (
    <div>
      <PageHeader
        title="Gestão de Produtos e IA"
        subtitle="Riscos específicos de IA, considerações éticas e impactos organizacionais"
        action={{ label: "Exportar PDF", variant: "teal" }}
        onAction={() => exportToPdf("ia-content", "IRIS-Gestao-IA.pdf")}
      />
      <div id="ia-content" data-export="pdf">
        <Skeleton rows={5} />
      </div>
      <Connections links={["/riscos", "/ciclo", "/roadmap"]} />
    </div>
  );
}
