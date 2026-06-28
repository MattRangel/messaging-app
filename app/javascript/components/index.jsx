import { StrictMode } from "react";
import { CurrentUserProvider } from "@/helpers/CurrentUserContext";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "@/routes/";
import "./global.css";
import Header from "@/components/Header";

const router = createBrowserRouter(routes);

document.addEventListener("turbo:load", () => {
  createRoot(document.body).render(
    <StrictMode>
      <CurrentUserProvider>
        <Header />
        <main>
          <RouterProvider router={router} />
        </main>
      </CurrentUserProvider>
    </StrictMode>
  );
});
