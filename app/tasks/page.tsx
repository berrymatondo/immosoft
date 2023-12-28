"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Header from "../components/Header";
import Login from "../components/Login";

const TasksPage = () => {
  const { data: session, status } = useSession();

  return (
    <div>
      <Login session={session} />
      {!session ? <span>Not connected</span> : <span>TasksPage</span>}
    </div>
  );
};

export default TasksPage;

/* import React from "react";
import Login from "../components/Login";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

const TasksPage = async () => {
  const session = await getServerSession(authOptions);

  //console.log("SESSION: ", session);

  if (!session) return redirect("/login");

  return (
    <div>
      <Login session={session} />
      Tasks Page
    </div>
  );
};

export default TasksPage;
 */
