import React from "react";
import { redirect } from "react-router";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Home from "@/pages/home";
import Chats from "@/pages/chats";
import Account from "@/pages/account";
import Login from "@/pages/login";
import { getCurrentUser } from "@/helpers/messagingAPI";

async function currentUserLoader() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    throw redirect("/login");
  }
  return { currentUser };
}

function Layout() {
  return (
    <>
      <Header/>
      <main>
        <Outlet />
      </main>
    </>
  );
}

const routes = [
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: currentUserLoader,
      },
      {
        path: "/chats/:chatID?",
        element: <Chats />,
        loader: currentUserLoader,
      },
      {
        path: "/account",
        element: <Account />,
        loader: currentUserLoader,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
];

export default routes;
