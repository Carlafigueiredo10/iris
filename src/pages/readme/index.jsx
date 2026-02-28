import { PageHeader } from "@/components/PageHeader";
import { Skeleton } from "@/components/Skeleton";
import { Connections } from "@/components/Connections";

export default function ReadmePage() {
  return (
    <div>
      <PageHeader
        title="README"
        subtitle="Lógica do planejamento e como interpretar os artefatos do projeto IRIS"
      />
      <div>
        <Skeleton rows={6} />
      </div>
      <Connections links={["/", "/canvas", "/teoria"]} />
    </div>
  );
}
