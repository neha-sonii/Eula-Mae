import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

import { LazyMotion, domAnimation } from "framer-motion";

const root = createRoot(document.getElementById("root")!);

const render = () => {
  root.render(
    <LazyMotion features={domAnimation}>
        <App />
    </LazyMotion>
  );
};

render();

window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    render();
  }
});