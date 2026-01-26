import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "../routes";

const router = createBrowserRouter(routes);

document.addEventListener("turbo:load", () => {
  createRoot(document.body.appendChild(document.createElement("div"))).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
});
