
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import FinancialMap from "./pages/FinancialMap";
import MoodTracker from "./pages/MoodTracker";
import Challenges from "./pages/Challenges";
import Rankings from "./pages/Rankings";
import NegotiationBot from "./pages/NegotiationBot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="expenses" element={<Dashboard />} />
            <Route path="budget" element={<Dashboard />} />
            <Route path="financial-map" element={<FinancialMap />} />
            <Route path="mood-tracker" element={<MoodTracker />} />
            <Route path="challenges" element={<Challenges />} />
            <Route path="rankings" element={<Rankings />} />
            <Route path="negotiation-bot" element={<NegotiationBot />} />
            <Route path="reports" element={<Dashboard />} />
            <Route path="goals" element={<Dashboard />} />
            <Route path="calendar" element={<Dashboard />} />
            <Route path="social" element={<Dashboard />} />
            <Route path="settings" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
