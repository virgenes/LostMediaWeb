import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useDeviceDetect } from "@/hooks/useDeviceDetect";
import { useGameTheme } from "@/hooks/useGameTheme";
import CRTOverlay from "@/components/CRTOverlay";
import HappyModOverlay from "@/components/HappyModOverlay";
import DesktopLayout from "@/layouts/DesktopLayout";
import MobileLayout from "@/layouts/MobileLayout";
import HomePage from "@/pages/HomePage";
import JuegosPage from "@/pages/JuegosPage";
import GameDetailPage from "@/pages/GameDetailPage";
import NoticiasPage from "@/pages/NoticiasPage";
import ArtePage from "@/pages/ArtePage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const { isMobile } = useDeviceDetect();
  const theme = useGameTheme();
  const Layout = isMobile ? MobileLayout : DesktopLayout;

  return (
    <>
      <CRTOverlay />
      {theme === "happymod" && <HappyModOverlay />}
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/juegos" element={<JuegosPage />} />
          <Route path="/juegos/:gameId" element={<GameDetailPage />} />
          <Route path="/noticias" element={<NoticiasPage />} />
          <Route path="/arte" element={<ArtePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HashRouter>
        <AppContent />
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
