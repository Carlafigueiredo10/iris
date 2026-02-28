import { PageHeader } from "@/components/PageHeader";
import { Skeleton } from "@/components/Skeleton";
import { Connections } from "@/components/Connections";
import { usePdfExport } from "@/hooks/usePdfExport";

export default function CicloPage() {
  const { exportToPdf } = usePdfExport();

  return (
    <div>
      <PageHeader
        title="Ciclo de Vida da Aplicação"
        subtitle="5 fases com critérios de avanço: descoberta, validação, entrega, revisão ética e evolução"
        action={{ label: "Exportar PDF", variant: "teal" }}
        onAction={() => exportToPdf("ciclo-content", "IRIS-Ciclo-Vida.pdf")}
      />
      <div id="ciclo-content" data-export="pdf">
        <Skeleton rows={5} />
      </div>
      <Connections links={["/roadmap", "/riscos", "/ia"]} />
    </div>
  );
}
