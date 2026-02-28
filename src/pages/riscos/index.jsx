import { PageHeader } from "@/components/PageHeader";
import { Skeleton } from "@/components/Skeleton";
import { Connections } from "@/components/Connections";
import { usePdfExport } from "@/hooks/usePdfExport";

export default function RiscosPage() {
  const { exportToPdf } = usePdfExport();

  return (
    <div>
      <PageHeader
        title="Matriz de Riscos"
        subtitle="7 riscos identificados com classificação de impacto, probabilidade e mitigação"
        action={{ label: "Exportar PDF", variant: "teal" }}
        onAction={() => exportToPdf("riscos-content", "IRIS-Matriz-Riscos.pdf")}
      />
      <div id="riscos-content" data-export="pdf">
        <Skeleton rows={7} />
      </div>
      <Connections links={["/mvp", "/ia", "/ciclo"]} />
    </div>
  );
}
