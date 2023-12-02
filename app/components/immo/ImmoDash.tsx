import React from "react";
import Card from "../dashboard/Card";
import { MdHouse } from "react-icons/md";
import { totalClients } from "@/app/lib/getAllClients";

export const dynamic = "force-dynamic";

const ImmoDash = async () => {
  const total = await totalClients();

  return (
    <>
      <Card
        title="Dossiers Immobiliers"
        total={total}
        path="/immos"
        icon={
          <span className="text-orange-400">
            <MdHouse size={24} />
          </span>
        }
        text="Nombre total de dossiers immobiliers dans le système"
      />
    </>
  );
};

export default ImmoDash;
