"use client";
import React from "react";
import { Person } from "@prisma/client";
import { MdEdit, MdOutlineRemoveRedEye } from "react-icons/md";
import { useRouter } from "next/navigation";

type ClientsTableProps = {
  clients: any;
  userRole: any;
};

const ClientsTable = ({ clients, userRole }: ClientsTableProps) => {
  const router = useRouter();
  return (
    <table className="bg-primary w-full mt-6 rounded-lg p-4">
      <thead>
        <tr className="font-semibold text-third bg-hov">
          <td className="p-4">Prénom</td>
          <td>Nom</td>
          <td>Téléphone</td>
          <td>Produits</td>
          {userRole === "ADMIN" && <td className="text-right p-4">Actions</td>}
        </tr>
      </thead>
      <tbody>
        {clients &&
          clients.map((el: Person) => (
            <tr
              key={el.id}
              className="hover:bg-hov hover:cursor-pointer  hover:text-yellow-400"
              onClick={() => router.push(`/clients/${el.id}`)}
            >
              <td className="px-4 py-2">{el.firstname}</td>
              <td>{el.lastname}</td>
              <td>{el.mobile}</td>
              <td>{}</td>
              {userRole === "ADMIN" && (
                <td className="flex items-center gap-4 justify-end px-4 py-2">
                  {/*                   <span className="bg-teal-800 p-1 rounded">
                    <MdOutlineRemoveRedEye size={24} />
                  </span> */}

                  <span className="bg-orange-400 p-1 rounded">
                    <MdEdit size={24} />
                  </span>
                </td>
              )}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default ClientsTable;
