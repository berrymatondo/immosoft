"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { FaHouseDamage, FaBuilding, FaTasks } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { GiPayMoney } from "react-icons/gi";

const Sidebar = () => {
  const { data: session, status } = useSession();
  const val: any = session?.user;

  return (
    <div className="max-md:hidden flex flex-col items-center gap-4   text-xl mt-2">
      <div>
        <div className=" flex justify-center text-6xl">
          <span className="text-secondary">
            <FaHouseDamage />
          </span>
        </div>
        <div className="text-4xl">
          <span className="uppercase font-bold">Immo</span>
          <span className="text-green-700 font-semibold text-sm">Soft</span>
        </div>
      </div>
      <nav className="flex flex-col items-center gap-2">
        <Link
          className="bg-slate-200 w-full mr-1 text-center p-2 rounded-lg hover:text-secondary"
          href="/dashboard"
        >
          <p className="flex items-center gap-1">
            <span className="text-2xl text-green-600 font-semibold">
              <MdDashboard />
            </span>
            Dashboard
          </p>
        </Link>
        <Link
          className="bg-slate-200 w-full mr-1 text-center p-2 rounded-lg hover:text-secondary"
          href="/clients"
        >
          <p className="flex items-center gap-1">
            <span className="text-2xl text-blue-600 font-semibold">
              <FaPeopleGroup />
            </span>
            Clients
          </p>
        </Link>
        <Link
          className="bg-slate-200 w-full mr-1 text-center p-2 rounded-lg hover:text-secondary"
          href="/immos"
        >
          <p className="flex items-center gap-1">
            <span className="text-2xl text-red-600 font-semibold">
              <FaBuilding />
            </span>
            Immobiliers
          </p>
        </Link>
        <Link
          className="bg-slate-200 w-full mr-1 text-center p-2 rounded-lg hover:text-secondary"
          href="/assus"
        >
          <p className="flex items-center gap-1">
            <span className="text-2xl text-orange-600 font-semibold">
              <GiPayMoney />
            </span>
            Assurances
          </p>
        </Link>
        <Link
          className="bg-slate-200 w-full mr-1 text-center p-2 rounded-lg hover:text-secondary"
          href="/tasks"
        >
          <p className="flex items-center gap-1">
            <span className="text-2xl text-purple-600 font-semibold">
              <FaTasks />
            </span>
            Tâches
          </p>
        </Link>
        {val?.role === "ADMIN" && (
          <div className="flex flex-col gap-2 bg-secondary p-2 rounded-lg w-full">
            <span>Utilisateurs</span>
            <Link
              className="bg-white w-full mr-1 text-center p-2 rounded-lg hover:text-secondary"
              href="/register"
            >
              Ajout
            </Link>
            <Link
              className="bg-white w-full mr-1 text-center p-2 rounded-lg hover:text-secondary"
              href="/user"
            >
              Mise à jour
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
