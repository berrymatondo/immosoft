"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Header from "../components/Header";
import Login from "../components/Login";

const DashboardPage = () => {
  const { data: session, status } = useSession();

  return (
    <div>
      <Login session={session} />
      {!session ? <span>Not connected</span> : <span>DashboardPage</span>}
    </div>
  );
};

export default DashboardPage;