"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Header from "../components/Header";
import Login from "../components/Login";

const ClientsPage = () => {
  const { data: session, status } = useSession();

  return (
    <div>
      <Login session={session} />
      ClientsPage
    </div>
  );
};

export default ClientsPage;
