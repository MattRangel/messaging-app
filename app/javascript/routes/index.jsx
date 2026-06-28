import React from "react";
import { redirect } from "react-router";
import Home from "@/pages/home";
import Chats from "@/pages/chats";
import Login from "@/pages/login";
import { getCurrentUser } from "@/helpers/messagingAPI";

async function requireLogin() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    throw redirect("/login");
  }
}

const routes = [
  {
    index: true,
    element: <Home />,
    middleware: [requireLogin],
  },
  {
    path: "/chats/:chatID?",
    element: <Chats />,
    middleware: [requireLogin],
  },
  {
    path: "login",
    element: <Login />,
  },
];

export default routes;
