import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DoctorGPT from "./pages/DoctorGPT";
import Library from "./pages/Library";
import SearchPage from "./pages/SearchPage";
import { ToolPage, LearnPage } from "./pages/ContentPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/doctor-gpt" element={<DoctorGPT />} />
          <Route path="/library" element={<Library />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/tools/:slug" element={<ToolPage />} />
          <Route path="/learn/:slug" element={<LearnPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
