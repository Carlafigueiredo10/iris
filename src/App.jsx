import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "@/components/AppLayout";
import LandingPage from "@/pages/landing";
import DashboardPage from "@/pages/dashboard";
import CanvasPage from "@/pages/canvas";
import MvpPage from "@/pages/mvp";
import RoadmapPage from "@/pages/roadmap";
import RiscosPage from "@/pages/riscos";
import CicloPage from "@/pages/ciclo";
import IaPage from "@/pages/ia";
import TeoriaPage from "@/pages/teoria";
import ReadmePage from "@/pages/readme";
import PitchPage from "@/pages/pitch";
import NotFoundPage from "@/pages/not-found";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<AppLayout />}>
          <Route path="painel" element={<DashboardPage />} />
          <Route path="canvas" element={<CanvasPage />} />
          <Route path="mvp" element={<MvpPage />} />
          <Route path="roadmap" element={<RoadmapPage />} />
          <Route path="riscos" element={<RiscosPage />} />
          <Route path="ciclo" element={<CicloPage />} />
          <Route path="ia" element={<IaPage />} />
          <Route path="teoria" element={<TeoriaPage />} />
          <Route path="readme" element={<ReadmePage />} />
          <Route path="pitch" element={<PitchPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
