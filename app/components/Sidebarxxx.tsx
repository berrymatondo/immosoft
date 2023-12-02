"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { FaHouseDamage, FaBuilding, FaTasks, FaRegUser } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { GiPayMoney } from "react-icons/gi";
import { usePathname } from "next/navigation";

const Sidebarxx = () => {
  const { data: session, status } = useSession();
  const val: any = session?.user;

  const pathname = usePathname();

  const navLinks = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: (
        <span className="text-2xl text-green-600 font-semibold">
          <MdDashboard />
        </span>
      ),
    },
    {
      name: "Clients",
      link: "/clients",
      icon: (
        <span className="text-2xl text-blue-600 font-semibold">
          <FaPeopleGroup />
        </span>
      ),
    },
    {
      name: "Immobiliers",
      link: "/immos",
      icon: (
        <span className="text-2xl text-red-600 font-semibold">
          <FaBuilding />
        </span>
      ),
    },
    {
      name: "Assusrances",
      link: "/assus",
      icon: (
        <span className="text-2xl text-orange-600 font-semibold">
          <GiPayMoney />
        </span>
      ),
    },
    {
      name: "Tâches",
      link: "/tasks",
      icon: (
        <span className="text-2xl text-purple-600 font-semibold">
          <FaTasks />
        </span>
      ),
    },
  ];

  return (
    <div className="max-md:hidden flex flex-col items-center gap-4   text-xl mt-2">
      <div>
        <div className=" flex justify-center text-6xl">
          <span className="text-teal-600">
            <FaHouseDamage />
          </span>
        </div>
        <div className="text-4xl">
          <span className="uppercase font-bold">Immo</span>
          <span className="text-teal-600 font-semibold text-sm">Soft</span>
        </div>
      </div>

      <nav className="flex flex-col items-center gap-2">
        {navLinks.map((lk) => (
          <Link
            key={lk.name}
            href={lk.link}
            className={
              pathname === lk.link
                ? `bg-primary border w-full mr-1 text-center p-2 rounded-lg text-white`
                : `bg-secondary w-full mr-1 text-center p-2 rounded-lg hover:text-white hover:bg-hov`
            }
          >
            <p className="flex items-center gap-2">
              {lk.icon}
              {lk.name}
            </p>
          </Link>
        ))}

        {/*         <Link
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
          className={
            pathname == "/clients"
              ? `bg-slate-600 w-full mr-1 text-center p-2 rounded-lg text-white hover:text-secondary`
              : `bg-slate-200 w-full mr-1 text-center p-2 rounded-lg hover:text-secondary`
          }
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
        </Link> */}
        {val?.role === "ADMIN" && (
          <div className="flex flex-col gap-2 bg-slate-400 p-2 rounded-lg w-full">
            <p className="flex items-center gap-1 text-white">
              <span className="text-yellow-400">
                <FaRegUser />
              </span>
              Utilisateurs
            </p>
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

export default Sidebarxx;
