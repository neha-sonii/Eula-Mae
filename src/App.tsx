import { Switch, Route, Router as WouterRouter} from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Suspense, lazy as ReactLazy } from "react";
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
        <Router />
      </WouterRouter>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;