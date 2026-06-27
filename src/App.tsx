import { Switch, Route, Router as WouterRouter} from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Suspense, lazy as ReactLazy } from "react";
import { Analytics } from "@vercel/analytics/react";
import { useLocation } from "wouter";
import { useEffect } from "react";

function AnalyticsTracker() {
  const [location] = useLocation();
  
  useEffect(() => {
    // Track page views when location changes
    if (typeof window !== 'undefined' && (window as any).va) {
      (window as any).va('pageview');
    }
  }, [location]);
  
  return null;
}
const NotFound = ReactLazy(() => import("@/pages/not-found"));
const Home = ReactLazy(() => import("@/pages/Home"));
const Menu = ReactLazy(() => import("@/pages/Menu"));

function Router() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F5EFE0] flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-[#C8392B] border-t-transparent rounded-full animate-spin"></div>
    </div>}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/menu" component={Menu} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <TooltipProvider>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <AnalyticsTracker />
        <Router />
      </WouterRouter>
      <Toaster />
      <Analytics />
    </TooltipProvider>
  );
}

export default App;