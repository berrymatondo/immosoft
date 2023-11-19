"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import Login from "../components/Login";

const DashLog = () => {
  const { data: session, status } = useSession();

  return (
    <div>
      <Login session={session} />
      {!session ? <span>Not connected</span> : <span>Dashboard Page</span>}
    </div>
  );
};

export default DashLog;
