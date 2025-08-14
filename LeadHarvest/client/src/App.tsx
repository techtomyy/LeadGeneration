import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import Home from "@/pages/home";
import Dashboard from "@/pages/dashboard";
import LeadFinder from "@/pages/lead-finder";
import Billing from "@/pages/billing";
import NotFound from "@/pages/not-found";

function Router() {
  const [location] = useLocation();
  const isHomePage = location === "/";
  
  return (
    <div className="min-h-screen flex bg-slate-50">
      <Sidebar />
      <main className="flex-1">
        {!isHomePage && <Header />}
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/leads" component={LeadFinder} />
          <Route path="/billing" component={Billing} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
