import { PageHeader } from "@/components/PageHeader";
import { Skeleton } from "@/components/Skeleton";
import { Connections } from "@/components/Connections";

export default function PitchPage() {
  return (
    <div>
      <PageHeader
        title="Vídeo Pitch"
        subtitle="Apresentação executiva do projeto IRIS — até 4 minutos"
        action={{ label: "Assistir Pitch", variant: "coral" }}
        onAction={() => {/* TODO: open YouTube link */}}
      />
      <div>
        <Skeleton rows={2} />
      </div>
      <Connections links={["/", "/canvas", "/roadmap"]} />
    </div>
  );
}
