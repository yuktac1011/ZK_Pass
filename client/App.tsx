import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MainLayout } from "./components/MainLayout";
import Index from "./pages/Index";
import Credentials from "./pages/Credentials";
import IssueCredential from "./pages/IssueCredential";
import IssueCredentialStep2 from "./pages/IssueCredentialStep2";
import Schemas from "./pages/Schemas";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Wrap all pages that need the new layout */}
          <Route path="/" element={<MainLayout><Index /></MainLayout>} />
          <Route path="/credentials" element={<MainLayout><Credentials /></MainLayout>} />
          <Route path="/credentials/issue" element={<MainLayout><IssueCredential /></MainLayout>} />
          <Route path="/credentials/issue/step2" element={<MainLayout><IssueCredentialStep2 /></MainLayout>} />
          <Route path="/schemas" element={<MainLayout><Schemas /></MainLayout>} />
          <Route path="/templates" element={<MainLayout><Schemas /></MainLayout>} />

          {/* Add future routes that need the layout here, e.g., /revocations, /settings */}

          {/* This catch-all route remains outside the layout */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);