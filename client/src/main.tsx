import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

createRoot(document.getElementById("root")!).render(
  <div className="font-urbanist max-w-7xl mx-auto">
    <RouterProvider router={router} />,
  </div>
);
