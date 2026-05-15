import React from "react";
import { redirect } from "react-router";
import Home from "@/pages/home";
import Login from "@/pages/login";
import { getCurrentUser } from "@/helpers/messagingAPI";

const routes = [
  {
    index: true,
    loader: async () => {
      let currentUser = await getCurrentUser();
      if (!currentUser) {
        return redirect("/login");
      }
      return { currentUser }
    },
    element: <Home />,
  },
  {
    path: "login",
    element: <Login />,
  },
]

export default routes;
