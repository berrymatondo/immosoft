"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { FaHouseDamage } from "react-icons/fa";

const Sidebar = () => {
  const { data: session, status } = useSession();
  const val: any = session?.user;

  return (
    <div className="max-md:hidden flex flex-col items-center gap-4   text-xl mt-2">
      <div>
        <div className=" flex justify-center text-6xl">
          <span className="text-blue-400">
            <FaHouseDamage />
          </span>
        </div>
        <div className="text-2xl">ImmoSoft</div>
      </div>
      <nav className="flex flex-col items-center gap-2">
        <Link
          className="bg-slate-200 w-full mr-1 text-center p-2 rounded-lg"
          href="/dashboard"
        >
          Dashboard
        </Link>
        <Link
          className="bg-slate-200 w-full mr-1 text-center p-2 rounded-lg"
          href="/clients"
        >
          Clients
        </Link>
        <Link
          className="bg-slate-200 w-full mr-1 text-center p-2 rounded-lg"
          href="/immos"
        >
          Immobiliers
        </Link>
        <Link
          className="bg-slate-200 w-full mr-1 text-center p-2 rounded-lg"
          href="/assus"
        >
          Assurances
        </Link>
        <Link
          className="bg-slate-200 w-full mr-1 text-center p-2 rounded-lg"
          href="/tasks"
        >
          Tâches
        </Link>
        {val?.role === "ADMIN" && (
          <Link
            className="bg-red-200 w-full mr-1 text-center p-2 rounded-lg"
            href="/register"
          >
            Utilisateurs
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
