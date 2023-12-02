"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { FaHouseDamage } from "react-icons/fa";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();

  const getPathName = () => {
    let out = pathname.split("/").pop();
    switch (out) {
      case "immos":
        return "Immobiliers";
      case "assus":
        return "Assurances";
      case "":
        return "Dashboard";
      case "tasks":
        return "Actions";
      case "register":
        return "Nouvel utilisateur";
      case "user":
        return "Editer utilisateur";
      case "newuser":
        return "Nouveau client";
      default:
        return out;
    }
  };

  return (
    <div className="flex justify-between items-center p-5 rounded-lg bg-secondary">
      <div className="text-third text-2xl font-bold capitalize">
        {" "}
        <div className=" flex justify-center text-4xl">
          <span className="text-teal-600">
            <FaHouseDamage />
          </span>
          ImmoSoft
        </div>
      </div>
      <div className="flex items-center gap-5">
        {/*         <div className="bg-[#2e374a] flex items-center gap-2 p-2 rounded-lg">
          <MdSearch />
          <input
            type="text"
            placeholder="Recherche..."
            className="bg-transparent border-none text-white"
          />
        </div> */}
        <div className="flex gap-5">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
